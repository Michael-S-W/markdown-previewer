import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import "./Editor.css";

function Editor({ text, setText, minmax, setMinMax }) {
  const handleClick = () => {
    setMinMax({
      ...minmax,
      editorWindow: !minmax.editorWindow,
    });
  };

  return (
    <>
    {!minmax.markdownWindow&&<div id="editor-container">
      <div id="editor-header" className="header">
        <span id="logo">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <> </>Editor
        </span>
        <span id="minmax" onClick={handleClick}>
          {minmax.editorWindow ? (
            <FontAwesomeIcon icon={faMinimize} />
          ) : (
            <FontAwesomeIcon icon={faMaximize} />
          )}
        </span>
      </div>
      <div id="editor-body" >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={minmax.editorWindow&&"full"}
          ></textarea>
      </div>
    </div>}
    </>
  );
}

export default Editor;
