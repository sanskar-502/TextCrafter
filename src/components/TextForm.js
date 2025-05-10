import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const handleClearText = () => {
    setText('');
    props.showAlert("Text cleared", "success");
  };

  const [text, setText] = useState('');

  const getWordCount = () => {
    return text.trim().split(/\s+/).filter((word) => word.length > 0).length;
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
              border: '1px solid #ced4da',
              borderRadius: '0.375rem',
            }}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Type or paste your text here..."
          ></textarea>
        </div>
        <div>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearText}>
            Clear Text
          </button>
        </div>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>
          <strong>{getWordCount()}</strong> words and <strong>{text.length}</strong> characters
        </p>
        <p>
          <strong>{(0.008 * getWordCount()).toFixed(2)}</strong> minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
