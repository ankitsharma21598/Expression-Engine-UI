import React from "react";
import { useExpression } from "./ExpressionContext";

const Expression = ({ rule, index }) => {
  // Get all expressions from context
  const { updateExpression, deleteExpression } = useExpression();

  // function for updating all fields values
  const handleFieldChange = (field, value) => {
    updateExpression(index, field, value);
  };

  // function for delete fields value
  const handleDeleteExpression = () => {
    deleteExpression(index);
  };

  return (
    <div className="expression-container mb-3">
      <div className="row">
        {/* Rule Type Dropdown */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Rule Type:</label>
          <select
            className="form-select"
            value={rule.key}
            onChange={(e) => handleFieldChange("key", e.target.value)}
          >
            <option value="age">Age</option>
            <option value="credit_score">Credit Score</option>
            <option value="account_balance">Account Balance</option>
          </select>
        </div>

        {/* Operator Dropdown */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Operator:</label>
          <select
            className="form-select"
            value={rule.output.operator}
            onChange={(e) => handleFieldChange("operator", e.target.value)}
          >
            <option value=">">{">"}</option>
            <option value="<">{"<"}</option>
            <option value=">=">{">="}</option>
            <option value="<=">{"<="}</option>
            <option value="=">{"="}</option>
          </select>
        </div>

        {/* Value Input */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Value:</label>
          <input
            type="number"
            className="form-control"
            value={rule.output.value}
            onChange={(e) => handleFieldChange("value", e.target.value)}
          />
        </div>

        {/* Score Input */}
        <div className="col-md-2 mb-3">
          <label className="form-label">Score:</label>
          <input
            type="number"
            className="form-control"
            value={rule.output.score}
            onChange={(e) => handleFieldChange("score", e.target.value)}
          />
        </div>

        <div className="col-md-1 d-flex align-items-center">
          <button className="btn btn-danger" onClick={handleDeleteExpression}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expression;
