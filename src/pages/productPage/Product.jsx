import React from "react";
import { useOptions } from "../../context/OptionContext";

function ProductPage() {
  const { selectedOptions } = useOptions();

  return (
    <div>
      {/* Display selected options */}
      <h2>Selected Options</h2>
      <pre>{JSON.stringify(selectedOptions)}</pre>
    </div>
  );
}

export default ProductPage;
