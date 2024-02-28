import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import cardGif from "../../../assets/animations/Animation - 1709110507240.gif";

const ProductCard = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  const extractDominantColor = async (imageUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        ).data;
        const colorMap = {};
        for (let i = 0; i < imageData.length; i += 4) {
          const r = imageData[i];
          const g = imageData[i + 1];
          const b = imageData[i + 2];
          const rgb = `${r},${g},${b}`;
          colorMap[rgb] = colorMap[rgb] ? colorMap[rgb] + 1 : 1;
        }
        let dominantColor = "255,255,255"; // Default color if no dominant color found
        let maxCount = 0;
        for (const color in colorMap) {
          if (colorMap[color] > maxCount) {
            maxCount = colorMap[color];
            dominantColor = color;
          }
        }
        resolve(dominantColor);
      };
      img.onerror = (error) => {
        reject(error);
      };
      img.src = imageUrl;
    });
  };
  const handleBuyNow = () => {
    window.open(props.buyLink, "_blank");
  };
  useEffect(() => {
    const fetchDominantColor = async () => {
      try {
        const dominantColor = await extractDominantColor(props.image);
        setBackgroundColor(`rgb(${dominantColor})`);
      } catch (error) {
        console.error("Error extracting dominant color:", error);
      }
    };
    fetchDominantColor();
  }, [props.image]);

  return (
    <div className="cardContainer" style={{ backgroundColor: backgroundColor }}>
      <div className="cardContainer-left">
        <img src={props.image} alt="Product" />
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
      <div className="cardContainer-right">
        <img src={cardGif} alt="cardGIF" />
      </div>
    </div>
  );
};

export default ProductCard;
