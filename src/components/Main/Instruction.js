import React from "react";
import "../../styles/Instruction.css";

class Instructions extends React.Component {
  render() {
    return (
      <section id="Instructions">
           <h3>Welcome to the SQL Editor 👋</h3>
           <h4>We're thrilled to have you here! Let's dive into some awesome SQL querying fun! 😄💻</h4>
           <ul>Instructions
            <li>Enter your SQL queries in the provided editor below. 🖊️</li>
            <li>Click the "Run" button to execute your SQL code against the database. 🏃💨</li>
           </ul>
           <h4 id = "fun-fact"> <span>💡 Fun Fact:</span> To get you started, we've already added some cool dummy tables from this <a href="https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv"> source </a>🗃️🤖. Get ready to unleash your data ninja skills! Happy querying! 🥳🎉</h4>
      </section>
    );
  }
}
export default Instructions;
