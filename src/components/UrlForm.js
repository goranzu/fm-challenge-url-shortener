import React, { useState } from "react";
import PropTypes from "prop-types";

const API_URL = "https://api.shrtco.de/v2";

function shortenPath(url) {
  return `/shorten?url=${url}`;
}

function UrlForm({ shortLinks, setShortlinks, setLoading }) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    const URL_REGEX = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    setError("");
    setLoading(false);
    e.preventDefault();
    if (!URL_REGEX.test(url) || url.length === 0) {
      return setError("Please enter a valid url.");
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${shortenPath(url)}`);
      let data = await response.json();

      const link = {
        originalLink: data.result.original_link,
        shortLink: data.result.full_short_link,
      };

      setShortlinks([...shortLinks, link]);
      setUrl("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <label className="sr-only" htmlFor="url">
        URL
      </label>
      <div className="form-group">
        <input
          value={url}
          onChange={(e) => {
            setError("");
            setUrl(e.target.value);
          }}
          type="text"
          name="url"
          id="url"
          placeholder="Shorten a link here..."
        />
        {error.length > 0 && <p className="error-message">{error}</p>}
      </div>
      <button type="submit" className="btn bg-green">
        Shorten It!
      </button>
    </form>
  );
}

UrlForm.propTypes = {
  shortLinks: PropTypes.array.isRequired,
  setShortlinks: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default UrlForm;
