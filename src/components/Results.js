import React, { useEffect, useMemo, useState } from "react";
import UrlForm from "./UrlForm";
import LoadingSpinner from "./LoadingSpinner";

const STORAGE_KEY = "shortLinks";

function Results() {
  const [shortLinks, setShortlinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const memoizedShortlinks = useMemo(() => {
    return shortLinks;
  }, [shortLinks]);

  useEffect(() => {
    const links = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setShortlinks(links);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memoizedShortlinks));
  }, [memoizedShortlinks]);

  function handleCopy(link) {
    navigator.clipboard.writeText(link);
  }

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
              <button
                onClick={() => handleCopy(link.shortLink)}
                className="btn t-green"
              >
                Copy
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Results;
