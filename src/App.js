import React from "react";
import "./styles.css";

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import django from "react-syntax-highlighter/dist/esm/languages/prism/django";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import {
  vscDarkPlus,
  solarizedlight,
  dracula
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { codeString1, codeString2, codeString3 } from "./code";
import { CopyToClipboard } from "react-copy-to-clipboard";

SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("django", django);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("jsx", jsx);

const ADDED = [4, 5];
const REMOVED = [6, 7];
const MARKED = [1];

let wrapper = (lineNumber) => {
  let style = { display: "block", borderRadius: "1px" };
  if (ADDED && ADDED.includes(lineNumber)) {
    style.backgroundColor = "#2EF29930";
  } else if (REMOVED && REMOVED.includes(lineNumber)) {
    style.backgroundColor = "#F22E5B30";
  } else if (MARKED && MARKED.includes(lineNumber)) {
    // style.borderBottom = "1px solid #cccccc60";
    style.borderRadius = "2px";
    style.backgroundColor = "#cccccc40";
  }
  return { style };
};

const Code = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default function App() {
  return (
    <div className="App">
      <Code className="code-dark">
        <div className="code-header">
          <div className="code-filename">app.jsx</div>
          <CopyToClipboard text={codeString1}>
            <span className="copy-to-clipboard" title="Copy">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                ></path>
              </svg>
            </span>
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter
          className="coding"
          language="jsx"
          showLineNumbers
          style={vscDarkPlus}
          wrapLines
          lineProps={wrapper}
        >
          {codeString1}
        </SyntaxHighlighter>
      </Code>
      <br />
      <Code className="code-light">
        <div className="code-header">
          <div className="code-filename">myapp/views.py</div>
          <CopyToClipboard text={codeString2} onCopy={() => {}}>
            <span className="copy-to-clipboard" title="Copy">
              Copied!
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                ></path>
              </svg>
            </span>
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter
          className="coding"
          language="python"
          style={solarizedlight}
          // showLineNumbers
          wrapLines
          lineProps={wrapper}
        >
          {codeString2}
        </SyntaxHighlighter>
      </Code>

      <br />
      <Code className="code-dark">
        <div className="code-header">
          <div className="code-filename">myapp/views.py</div>
          <CopyToClipboard text={codeString2} onCopy={() => {}}>
            <span className="copy-to-clipboard" title="Copy">
              Copied!
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                ></path>
              </svg>
            </span>
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter className="coding" language="django" style={dracula}>
          {codeString3}
        </SyntaxHighlighter>
      </Code>
    </div>
  );
}
