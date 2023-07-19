import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight"; // Import the second theme
import OrdersTable from "./OrdersTable.js";
import Schema from "./Schema.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../styles/Editor.css";

const Editor = () => {
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState(null);
  const [showOrdersTable, setShowOrdersTable] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleOnChange = (newValue) => {
    setQuery(newValue);
  };

  const handleRunQuery = () => {
    console.log("New SQL query:", query);

    // Remove the last semicolon from the query
    const trimmedQuery = query.trim();
    const queryWithoutSemicolon = trimmedQuery.endsWith(";")
      ? trimmedQuery.slice(0, -1)
      : trimmedQuery;

    // Check if the last word matches with the specified keywords
    const lastWord = queryWithoutSemicolon.split(" ").pop();
    const allowedKeywords = [
      "customers",
      "orders",
      "products",
      "shippers",
      "categories",
    ];

    if (allowedKeywords.includes(lastWord.toLowerCase())) {
      console.log("Last word:", lastWord);
      toast.success("Query Executed Successfully!", { autoClose: 3000 });
      setKeyword(lastWord);
      setShowOrdersTable(true);
    } else {
      setKeyword(null);
      toast.error("Incorrect Syntax!", { autoClose: 3000 });
      setShowOrdersTable(false);
    }
  };

  useEffect(() => {
    setShowOrdersTable(false);
  }, [query]);

  const editorTheme = darkMode ? "twilight" : "github"; // Use different themes based on darkMode

  return (
    <div className="editor">
      <div className="editor-top">
        <div className="sql-editor">
          <div className="dark-mode">
            <label htmlFor="dark-mode-checkbox">Switch Themes </label>
            <input
              type="checkbox"
              id="dark-mode-checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
          <AceEditor
          className="ace-editor"
          mode="sql"
          theme={editorTheme}
          name="sql-editor"
          fontSize={14}
          width="60vw"
          height="25vw"
          showPrintMargin={false}
          showGutter
          placeholder="Let's write SQL and unleash the power of data! 🚀💻✨"
          enableBasicAutocompletion
          enableLiveAutocompletion
          onChange={handleOnChange}
          editorProps={{ $blockScrolling: Infinity }}
          setOptions={{
            enableSnippets: false,
            autoCapitalize: "on",
          }}
        />
        <div className="btn-container">
        <button className="primary-btn" id="run-query" onClick={handleRunQuery}>
          Run Query
        </button>
      </div>
        </div>
        
        <div className="schema">
          <Schema />
        </div>
      </div>
      
      <OrdersTable csvData={keyword} />
    </div>
  );
};

export default Editor;
