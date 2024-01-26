import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpressionForm from "./ExpressionForm";
import { ExpressionProvider } from "./ExpressionContext";

function App() {
  return (
    <div className="container mt-2 ">
      {/* Title of project */}
      <h1 className="text-center text-primary">
        Expression Engine UI
      </h1>
      {/* Wraping complete application inside provider */}
      <ExpressionProvider>
        <ExpressionForm />
      </ExpressionProvider>
    </div>
  );
}

export default App;
