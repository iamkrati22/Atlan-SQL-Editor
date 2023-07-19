import React from "react";
import { orders_csv } from "../../data/orders";
import { products_csv } from "../../data/products";
import { shippers_csv } from "../../data/shippers";
import { customers_csv } from "../../data/customers";
import { categories_csv } from "../../data/categories";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/OrdersTable.css";

const OrdersTable = ({ csvData }) => {
  console.log("Here is the csvData", csvData);

  switch (csvData) {
    case "orders":
      csvData = orders_csv;
      break;
    case "products":
      csvData = products_csv;
      break;
    case "shippers":
      csvData = shippers_csv;
      break;
    case "customers":
      csvData = customers_csv;
      break;
    case "categories":
      csvData = categories_csv;
      break;
    default:
      // Default to "employees" table
      csvData = customers_csv;
  }

  const rows = csvData ? csvData.split("\n") : [];
  const headers = rows.length > 0 ? rows[0].split(",") : [];
  const tableData = rows.length > 1 ? rows.slice(1).map((row) => row.split(",")) : [];

  const handleDownload = () => {
    const csvContent = csvData || "";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "data.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    toast.info("Downloaded Successfully!", { autoClose: 2000 });
  };

  return (
    <div className="table-container">
      <div className="table-container-top">
        <p className="output-header">Output</p>
        <button className="primary-btn" id="download" onClick={handleDownload}>
          Download CSV
        </button>
      </div>

      {csvData && rows.length > 0 ? (
        <table className="rendered-table">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <tr key={index}>
                {rowData.map((cellData, cellIndex) => (
                  <td key={cellIndex}>{cellData}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-output">No data available</p>
      )}
    </div>
  );
};

export default OrdersTable;
