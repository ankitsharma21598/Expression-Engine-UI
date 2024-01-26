import React from "react";
import Expression from "./Expression";
import { useExpression } from "./ExpressionContext";

const ExpressionForm = () => {
  // Get all expressions from context
  const {
    connectorType,
    rules,
    setConnectorType,
    addExpression,
    deleteExpression,
    updateExpression,
  } = useExpression();
  
  // function for updating the connector 
  const handleConnectorTypeChange = (e) => {
    setConnectorType(e.target.value);
  };

  // function for adding a new expression
  const handleAddExpression = () => {
    addExpression({
      key: "age",
      output: { operator: ">=", value: 0, score: 0 },
    });
  };

  return (
    <div>
      {/* Connector Type Dropdown */}
      <div className="col-md-3 mb-3">
        <label className="form-label">Connector Type:</label>
        <select
          className="form-select"
          value={connectorType}
          onChange={handleConnectorTypeChange}
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
      </div>

      {/* Expressions */}
      {rules.map((rule, index) => (
        <Expression
          key={index}
          index={index}
          rule={rule}
          updateExpression={updateExpression}
          deleteExpression={deleteExpression}
        />
      ))}

      <button className="btn btn-primary" onClick={handleAddExpression}>
        Add Expression
      </button>
      <div className="mt-4">
        <h3>Output:</h3>
      </div>
      {/* Display JSON output */}
      <div className="shadow p-3 mb-5 bg-secondary text-white rounded p-4 ">
        <pre>
          {JSON.stringify({ rules, combinator: connectorType }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ExpressionForm;
