import React from "react";
import home1 from "../img/home1.png";
//importing styled components
import styled from "styled-components";
import {
  StyledAbout,
  StyledDiscription,
  StyledHide,
  StyledImage,
} from "../style";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDiscription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> comes
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          aspernatur veniam labore eum sit molestiae omnis exercitationem ipsa.
        </p>
        <button>Contact Us</button>
      </StyledDiscription>
      <StyledImage>
        <img src={home1} alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

//styled components

export default AboutSection;
