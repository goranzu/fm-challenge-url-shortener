import React from "react";
import UrlForm from "./UrlForm";

function Results() {
  return (
    <section className="results container">
      <UrlForm />
      <div hidden>
        <div className="result">
          <p className="original-url">https://frontendmentor.io</p>
          <p className="short-url">https://rel.ink/4ksa</p>
          <button className="btn t-green">Copy</button>
        </div>
        <div className="result">
          <p className="original-url">https://frontendmentor.io</p>
          <p className="short-url">https://rel.ink/4ksa</p>
          <button className="btn t-green">Copy</button>
        </div>
        <div className="result">
          <p className="original-url">https://frontendmentor.io</p>
          <p className="short-url">https://rel.ink/4ksa</p>
          <button className="btn t-green">Copy</button>
        </div>
      </div>
    </section>
  );
}

export default Results;
