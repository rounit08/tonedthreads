import React from "react";
import "./MobileViewCard.css";

function MobileViewCard({ title, description }) {
  const sentences = description.split(". ");

  return (
    <div className="mobcard">
      <h2>{title}</h2>
      {sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          <p>{sentence}</p>
          {index === 0 && <br />}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

export default MobileViewCard;
