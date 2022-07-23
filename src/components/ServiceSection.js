import React from "react";
//importing icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import {
  StyledAbout,
  StyledDiscription,
  StyledHide,
  StyledImage,
} from "../style";

const ServiceSection = () => {
  return (
    <StyledServices>
      <StyledDiscription>
        <h2>
          High <span>Quality</span> Cards
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficeint</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="didaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </StyledDiscription>
      <StyledImage>
        <img src={home2} alt="camera" />
      </StyledImage>
    </StyledServices>
  );
};

//styles
const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 4rem;
  }
  p {
    width: 70%;
    font-weight: lighter;
    padding: 2rem 0rem 2rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  .card {
    padding: 2rem 1rem;
  }
`;
const Card = styled.div`
  flex-basis: 11rem;
  display: flex;
  flex-direction: column;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      padding-left: 1rem;
      font-size: 1.2rem;
      background: white;
      color: black;
      margin-left: 1rem;
      padding: 0.5rem 1rem;
    }
  }
`;

export default ServiceSection;
