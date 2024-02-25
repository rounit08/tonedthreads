import React, { useEffect, useState } from "react";
import { useOptions } from "../../context/OptionContext";
import { fetchCombinations } from "../../firebase/firebase.js";
import "./Product.css";

function ProductPage() {
  const { selectedOptions } = useOptions();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const combinations = await fetchCombinations();
        console.log(combinations);
        const selectedCombination = combinations.find((combination) =>
          compareOptions(combination.data, selectedOptions)
        );
        console.log(selectedCombination);
        if (selectedCombination && selectedCombination.data.image) {
          setImageUrl(selectedCombination.data.image);
        } else {
          setImageUrl("");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
  }, [selectedOptions]);
  console.log(imageUrl);
  const compareOptions = (combinationOptions, selectedOptions) => {
    console.log("Combination options:", combinationOptions.gender);
    console.log("Selected options:", selectedOptions.gender);
    return (
      combinationOptions.gender === selectedOptions.gender &&
      combinationOptions.skinTone === selectedOptions.skinTone &&
      combinationOptions.bodyShape === selectedOptions.bodyShape
    );
  };

  return (
    <div>
      {/* Display selected options */}
      <h2>Selected Options</h2>
      <pre>{JSON.stringify(selectedOptions)}</pre>

      {imageUrl && (
        <img src={imageUrl} alt="Product" style={{ height: 100, width: 100 }} />
      )}
    </div>
  );
}

export default ProductPage;
