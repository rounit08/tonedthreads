import React, { useEffect, useState } from "react";
import { useOptions } from "../../context/OptionContext";
import { fetchCombinations } from "../../firebase/firebase.js";
import "./Product.css";
import ProductCard from "./ProductCard/ProductCard.jsx";
import Homepagelogo from "../../components/Landingpage/landingimage.png";
import { Link } from "react-router-dom";

function ProductPage() {
  const { selectedOptions } = useOptions();
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedCombination, setSelectedCombination] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const combinations = await fetchCombinations();
        console.log(combinations);
        const selectedCombination = combinations.find((combination) =>
          compareOptions(combination.data, selectedOptions)
        );
        console.log(selectedCombination);
        if (selectedCombination) {
          const imageUrls = [];
          for (let i = 1; i <= 7; i++) {
            const key = `useImage${i}`;
            if (selectedCombination.data.hasOwnProperty(key)) {
              imageUrls.push(selectedCombination.data[key]);
            }
          }
          setImageUrls(imageUrls);
          setSelectedCombination(selectedCombination);
        } else {
          setImageUrls([]);
          setSelectedCombination(null);
        }
      } catch (error) {
        // Handle errors here
        console.error("Error fetching combinations:", error);
      }
    };
    fetchImage();
  }, [selectedOptions]);
  const compareOptions = (combinationOptions, selectedOptions) => {
    console.log("Combination options:", combinationOptions.gender);
    console.log("Selected options:", selectedOptions.gender);
    return (
      combinationOptions.gender === selectedOptions.gender &&
      combinationOptions.skinTone === selectedOptions.skinTone &&
      combinationOptions.bodyShape === selectedOptions.bodyShape
    );
  };

  const generateBuyLink = (index) => {
    switch (index) {
      case 1:
        return selectedCombination.data.image;
      case 2:
        return selectedCombination.data.imageTwo;
      case 3:
        return selectedCombination.data.imageThree;
      case 4:
        return selectedCombination.data.imageFour;
      case 5:
        return selectedCombination.data.imageFive;
      case 6:
        return selectedCombination.data.imageSix;
      case 7:
        return selectedCombination.data.imageSeven;
      default:
        return "/";
    }
  };

  return (
    <div className="productPage">
      {/* Display selected options */}
      <div className="productPageTop">
        <Link to="/">
          <img
            src={Homepagelogo}
            alt="homepagelogo"
            style={{ height: 120, width: 120 }}
          />
        </Link>

        <h2 style={{ color: "pink" }}>Curated for you</h2>

        <Link to="/formpage">
          <p>Form Page</p>
        </Link>
      </div>
      {/* <pre>{JSON.stringify(selectedOptions)}</pre> */}
      <div className="productsContainer">
        {imageUrls.map((imageUrl, index) => (
          <ProductCard image={imageUrl} buyLink={generateBuyLink(index + 1)} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
