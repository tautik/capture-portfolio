import React from "react";
import home1 from "../img/home1.png";
//importing styled components
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDiscription>
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> comes
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
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
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const StyledDiscription = styled.div`
  flex: 1;
  padding-right: 4rem;
`;
const StyledImage = styled.div`
  flex: 1; //later
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default AboutSection;
