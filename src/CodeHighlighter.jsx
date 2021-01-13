import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import html from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import powershell from "react-syntax-highlighter/dist/esm/languages/prism/powershell";
import yaml from "react-syntax-highlighter/dist/esm/languages/prism/yaml";
import ini from "react-syntax-highlighter/dist/esm/languages/prism/ini";
import shellSession from "react-syntax-highlighter/dist/esm/languages/prism/shell-session";
import git from "react-syntax-highlighter/dist/esm/languages/prism/git";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import django from "react-syntax-highlighter/dist/esm/languages/prism/django";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import {
  materialLight,
  materialDark
} from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("powershell", powershell);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("ini", ini);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("shellSession", shellSession);
SyntaxHighlighter.registerLanguage("git", git);
SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("django", django);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("jsx", jsx);

const CodeHighlighter = ({
  variant,
  filename,
  link = false,
  lang,
  lineNumbers = false,
  children,
  clipboard = false,
  added = [],
  removed = [],
  marked = [],
  comments = [],
  ...props
}) => {
  const [copied, setCopied] = useState(false);
  const [currentLine, setCurrentLine] = useState(null);
  const [currentComment, setCurrentComment] = useState(null);

  let wrapper = (lineNumber) => {
    let style = { display: "block", borderRadius: "1px", lineHeight: "1.7em" };
    if (lineNumber && added.includes(lineNumber)) {
      style.backgroundColor = "#2EF29930";
    } else if (lineNumber && removed.includes(lineNumber)) {
      style.backgroundColor = "#F22E5B30";
    } else if (lineNumber && marked.includes(lineNumber)) {
      // style.borderBottom = "1px solid #cccccc60";
      style.borderRadius = "2px";
      style.backgroundColor = "#cccccc40";
      style.cursor = "pointer";
    }
    return {
      style,
      onClick() {
        const comment = comments.find(({ line }) => line === lineNumber);
        if (comment) {
          setCurrentLine(comment.line);
          setCurrentComment(comment.comment);
        }
      }
    };
  };

  return (
    <div className={`code-${variant}`}>
      {(clipboard || filename) && (
        <div className="code-header">
          <div className="code-filename">
            {link ? (
              <a href={link} target="_blank" rel="noreferrer">
                {filename}
                <svg
                  width="13"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            ) : (
              <span>{filename}</span>
            )}
          </div>
          {clipboard && (
            <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
              <span className="copy-to-clipboard" title="Copy">
                {copied && "Copied! "}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  ></path>
                </svg>
              </span>
            </CopyToClipboard>
          )}
        </div>
      )}
      <SyntaxHighlighter
        className="coding"
        language={lang}
        showLineNumbers={lineNumbers}
        style={variant === "light" ? materialLight : materialDark}
        wrapLines
        lineProps={wrapper}
        {...props}
      >
        {children}
      </SyntaxHighlighter>
      {currentLine && (
        <div className="code-description">
          Line: {currentLine} <br />
          {currentComment}
        </div>
      )}
    </div>
  );
};

export default CodeHighlighter;
