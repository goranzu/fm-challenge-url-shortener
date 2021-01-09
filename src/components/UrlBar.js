import React from "react";

function UrlBar() {
  return (
    <div className="url-bar">
      <label htmlFor="url">URL</label>
      <input type="text" name="url" id="url" />
      <p className="error-message">Please add a link</p>
      <button className="btn bg-green">Shorten It!</button>
    </div>
  );
}

export default UrlBar;
