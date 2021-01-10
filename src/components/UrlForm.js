import React from "react";

function UrlForm() {
  return (
    <form className="url-form">
      <label className="sr-only" htmlFor="url">
        URL
      </label>
      <input
        type="text"
        name="url"
        id="url"
        placeholder="Shorten a link here..."
      />
      <p className="error-message" hidden>
        Please add a link
      </p>
      <button type="submit" className="btn bg-green">
        Shorten It!
      </button>
    </form>
  );
}

export default UrlForm;
