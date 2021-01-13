import React from "react";
import "./styles.css";
import { codeString1, codeString2, codeString3 } from "./code";
import CodeHighlighter from "./CodeHighlighter";

export default function App() {
  return (
    <div className="app">
      <CodeHighlighter
        variant="dark"
        lang="jsx"
        filename="App.jsx"
        added={[5]}
        removed={[6, 7]}
        marked={[1, 2]}
        link="foo.com"
        startingLineNumber={1}
        lineNumbers
        clipboard
        comments={[
          {
            line: 1,
            comment: "Here we are importing react-syntax-highlighter library."
          },
          {
            line: 2,
            comment:
              "We also need a highlighting style to make our code look ace."
          }
        ]}
      >
        {codeString1}
      </CodeHighlighter>

      <br />

      <CodeHighlighter
        variant="light"
        lang="python"
        filename="myapp/views.py"
        lineNumbers
        clipboard
      >
        {codeString2}
      </CodeHighlighter>

      <br />

      <CodeHighlighter
        variant="light"
        lang="django"
        filename="templates/home.html"
        link="https://github.com/amiroff/foo/templates.html"
        lineNumbers
        added={[5]}
        removed={[6, 7]}
        marked={[1, 3]}
      >
        {codeString3}
      </CodeHighlighter>
    </div>
  );
}
