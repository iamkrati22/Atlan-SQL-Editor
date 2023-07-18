import React from "react";
import { orders_csv } from "../../../data/orders";
import { products_csv } from "../../../data/products";
import { shippers_csv } from "../../../data/shippers";
import { customers_csv } from "../../../data/customers";
import { categories_csv } from "../../../data/categories";

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
          csvData = null;
      }
    
  if (!csvData) {
    return <p>No data available</p>;
  }

  const rows = csvData.split("\n");
  const headers = rows[0].split(",");
  const tableData = rows.slice(1).map((row) => row.split(","));

  return (
    <table>
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
  );
};

export default OrdersTable;
