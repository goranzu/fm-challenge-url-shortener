import React, { useState } from "react";
import UrlForm from "./UrlForm";
import LoadingSpinner from "./LoadingSpinner";

function Results() {
  const [shortLinks, setShortlinks] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <section className="results container">
      <UrlForm
        setLoading={setLoading}
        shortLinks={shortLinks}
        setShortlinks={setShortlinks}
      />
      <div>
        {loading && <LoadingSpinner />}
        {shortLinks.length > 0 &&
          shortLinks.map((link) => (
            <div key={link.shortLink} className="result">
              <p className="original-url">{link.originalLink}</p>
              <p className="short-url">{link.shortLink}</p>
              <button className="btn t-green">Copy</button>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Results;
