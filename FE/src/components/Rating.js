import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "../styles/Rating.scss";

const Rating = ({ value }) => {
  return (
    <div className="rating">
      <span>
        {" "}
        {(value >= 1 && <BsStarFill />) || (value >= 0.5 && <BsStarHalf />) || (
          <BsStar />
        )}
      </span>
      <span>
        {" "}
        {(value >= 2 && <BsStarFill />) || (value >= 1.5 && <BsStarHalf />) || (
          <BsStar />
        )}
      </span>
      <span>
        {" "}
        {(value >= 3 && <BsStarFill />) || (value >= 2.5 && <BsStarHalf />) || (
          <BsStar />
        )}
      </span>
      <span>
        {" "}
        {(value >= 4 && <BsStarFill />) || (value >= 3.5 && <BsStarHalf />) || (
          <BsStar />
        )}
      </span>
      <span>
        {" "}
        {(value == 5 && <BsStarFill />) || (value >= 4.5 && <BsStarHalf />) || (
          <BsStar />
        )}
      </span>
    </div>
  );
};

export default Rating;
