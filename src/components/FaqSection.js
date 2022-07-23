import React from "react";
import {
  StyledAbout,
  StyledDiscription,
  StyledHide,
  StyledImage,
} from "../style";

const FaqSection = () => {
  return (
    <StyledAbout>
      <h2>Any Questoins</h2>
      <div className="questions">
        <h4>How do I start?</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          consectetur?
        </p>
      </div>
      <div className="questions">
        <h4>Daily Schedule</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          consectetur?
        </p>
      </div>
      <div className="questions">
        <h4>Different Payment Methods</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          consectetur?
        </p>
      </div>
      <div className="questions">
        <h4>What do i offer</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          consectetur?
        </p>
      </div>
    </StyledAbout>
  );
};

export default FaqSection;
