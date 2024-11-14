import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import "./Markdown.css";
import { marked } from "marked";

function Markdown({ text, minmax, setMinMax }) {
  const handleClick = () => {
    setMinMax({
      ...minmax,
      markdownWindow: !minmax.markdownWindow,
    });
  };

  return (
    <>
    {!minmax.editorWindow&&
      <div id="markdown-container">
      <div id="markdown-header" className="header">
        <span id="logo">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <> </>Markdown
        </span>
        <span id="minmax" onClick={handleClick}>
          {minmax.markdownWindow ? (
            <FontAwesomeIcon icon={faMinimize} />
          ) : (
            <FontAwesomeIcon icon={faMaximize} />
          )}
        </span>
      </div>
      <div
        id="markdown-body"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
    </div>
      }
        </>
  );
}

export default Markdown;
