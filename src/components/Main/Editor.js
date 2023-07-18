import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-github";
import OrdersTable from "../Main/Tables/OrdersTable.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../../styles/Editor.css";

const Editor = () => {
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState(null);
  const [showOrdersTable, setShowOrdersTable] = useState(false);

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
      toast.success('Query Executed Succesfully!', { autoClose: 3000 });
      setKeyword(lastWord);
      setShowOrdersTable(true);
    } else {
      setKeyword(null);
      toast.error('Incorrect Syntax!', { autoClose: 3000 });
      setShowOrdersTable(false);
    }
  };

  useEffect(() => {
    setShowOrdersTable(false);
  }, [query]);

  return (
    <>
      <AceEditor
        className="ace-editor"
        mode="sql"
        theme="github"
        name="sql-editor"
        fontSize={14}
        width="60%"
        height="400px"
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
      <button className="primary-btn" id="run-query" onClick={handleRunQuery}>
        Run Query
      </button>
      <OrdersTable csvData={keyword}/>
      {/* {showOrdersTable  && (
        <OrdersTable csvData={keyword} />
      )} */}
    </>
  );
};

export default Editor;
