import React from "react";
import "../../styles/Schema.css";

class Schema extends React.Component {
  state = {
    selectedTable: "Customers",
  };

  handleTableSelect = (tableName) => {
    this.setState({ selectedTable: tableName });
  };

  render() {
    const { selectedTable } = this.state;

    const tableData = {
        Shippers: {
          employee_id: "int",
          first_name: "varchar",
          last_name: "varchar",
          hire_date: "date",
          department: "varchar",
        },
        Orders: {
          order_id: "int",
          customer_id: "int",
          order_date: "date",
          total_amount: "decimal",
          status: "varchar",
        },
        Products: {
          product_id: "int",
          product_name: "varchar",
          price: "decimal",
          stock: "int",
          category_id: "int",
        },
        Customers: {
          customer_id: "int",
          first_name: "varchar",
          last_name: "varchar",
          email: "varchar",
          phone: "varchar",
        },
        Categories: {
          category_id: "int",
          category_name: "varchar",
          description: "text",
        },
      };
      

    const tableHeaders = Object.keys(tableData);

    return (
        <div id = "schema-container">
      <section id="Schema">
        <h4 id="table-header">Tables</h4>
        <ul>
          {tableHeaders.map((tableName) => (
            <li key={tableName} onClick={() => this.handleTableSelect(tableName)} className={selectedTable === tableName ? "active" : ""}>
              {tableName}
            </li>
          ))}
        </ul>

        {selectedTable && (
          <table>
            <thead>
              <tr>
                <th>Column Name</th>
                <th>Data Type</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(tableData[selectedTable]).map(([columnName, dataType]) => (
                <tr key={columnName}>
                  <td>{columnName}</td>
                  <td>{dataType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        
      </section>
      </div>
    );
  }
}

export default Schema;
