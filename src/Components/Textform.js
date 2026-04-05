import React, { useState } from "react";
import "./Style.css";

function Textform() {
  const Upperclick = () => {
    let x = text.toUpperCase();
    setText(x);
  };

  const Lowerclick = () => {
    let x = text.toLowerCase();
    setText(x);
  };

  const space = () => {
    let x = text.split(/\s+/).join(" ").trim();
    setText(x);
  };
  const clear = () => {
    let x = "";
    setText(x);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
  };

  const onChangefun = (event) => {
    setText(event.target.value);
  };



  const [text, setText] = useState("");

    const emailMatches =
    text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];

  const urlMatches = text.match(/https?:\/\/[^\s]+/g) || [];

  return (
    <>
      <div className="container">
        <div className="head" href="/">
          Enter Text below
        </div>
        <textarea
          name="text"
          id="textarea"
          placeholder="Enter text here"
          value={text}
          onChange={onChangefun}
          rows="8"
        ></textarea>
      </div>
      <div className="container buttons">
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-light mx-1 my 1"
          onClick={Upperclick}
        >
          To Upper
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-light mx-1 my-1"
          onClick={Lowerclick}
        >
          To Lower
        </button>
        <button
          disabled={text.length === 0}
          style={{ width: "180px" }}
          type="button"
          className="btn btn-light mx-1 my-1"
          onClick={space}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          style={{ width: "70px" }}
          type="button"
          className="btn btn-light mx-1 my-1"
          onClick={copy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          style={{ width: "70px" }}
          type="button"
          className="btn btn-light mx-1 my-1"
          onClick={clear}
        >
          Clear
        </button>

        
      </div>
      <hr className="container" />
      <div className="container my-2 secondpart" style={{ alignItems:"center" , textAlign: "center" }}>
       
        <h2>Text Summary</h2>
        <table className="container my-2 table" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Parameteres</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
     
            <tr>
              <td>Number of Characters in your text (without space)</td>
              <td>{text.replace(/\s/g, "").length}</td>
              
            </tr>
            <tr>
              <td>Number of Words in your text</td>
              <td>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</td>
              
            </tr>
            <tr>
              <td>Number of Sentences </td>
              <td>{text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length}</td>
              
            </tr>
            <tr>
              <td>Paragraphs</td>
              <td>{text.trim() === "" ? 0 : text.split(/\n+/).filter(Boolean).length}</td>
              
            </tr>
          </tbody> 
        </table>
        <hr className="container" />
        <h3>Useful Things</h3>
      <div className="useful">
        <div className="things">
          <div className="thing-header">
      <h5>📧 Emails</h5>
      <span>{emailMatches.length}</span>
    </div>

    <div className="thing-content">
      {emailMatches.length > 0 ? (
        emailMatches.map((email, index) => (
          <p key={index} className="item-text">{email}</p>
        ))
      ) : (
        <p className="empty-text">No emails found</p>
      )}
      
    </div>
        </div>
        
        <div className="things">
          <div className="thing-header">
   <h5>🔗 URLs</h5>
      <span>{urlMatches.length}</span>
    </div>

    <div className="thing-content">
      {urlMatches.length > 0 ? (
        urlMatches.map((url, index) => (
          <a
            key={index}
            href={url.startsWith("http") ? url : `https://${url}`}
            target="_blank"
            rel="noreferrer"
            className="item-link"
          >
            {url}
          </a>
        ))
      ) : (
        <p className="empty-text">No URLs found</p>
      )}
    </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Textform;
