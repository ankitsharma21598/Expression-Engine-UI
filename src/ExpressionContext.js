import React, { createContext, useContext, useState } from "react";
// Create context
const ExpressionContext = createContext();

// Create context provider component
export const ExpressionProvider = ({ children }) => {
  // State manage for connectorType
  const [connectorType, setConnectorType] = useState("AND");
  // State manage for rules
  const [rules, setRules] = useState([
    { key: "age", output: { operator: ">=", value: 0, score: 0 } },
  ]);

  // function for set connector type
  const setConnectorTypeAction = (connectorType) => {
    setConnectorType(connectorType);
  };

  // function for set rules.
  const addExpressionAction = (expression) => {
    setRules((prevRules) => [...prevRules, expression]);
  };

  // function for delete rules.
  const deleteExpressionAction = (index) => {
    setRules((prevRules) => prevRules.filter((_, i) => i !== index));
  };

  // function for update rules.
  const updateExpressionAction = (index, field, value) => {
    setRules((prevRules) =>
      prevRules.map((rule, i) =>
        i === index
          ? field === "key"
            ? { ...rule, key: value }
            : { ...rule, output: { ...rule.output, [field]: value } }
          : rule
      )
    );
  };

  return (
    <ExpressionContext.Provider
      value={{
        connectorType,
        rules,
        setConnectorType: setConnectorTypeAction,
        addExpression: addExpressionAction,
        deleteExpression: deleteExpressionAction,
        updateExpression: updateExpressionAction,
      }}
    >
      {children}
    </ExpressionContext.Provider>
  );
};

// Custom hook to use the context
export const useExpression = () => {
  const context = useContext(ExpressionContext);

  if (!context) {
    throw new Error("useExpression must be used within an ExpressionProvider");
  }

  return context;
};
