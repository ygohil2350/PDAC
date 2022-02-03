import React from "react";
import { Carousel } from "react-bootstrap";
import { CarouselData } from "../Data/CarosalData";

const Carosal = () => {
  return (
    <div>
      <Carosal>
        {CarouselData.map((elements) => {
          return (
            <Carousel.Item interval={100} key={elements.id}>
              <img
                className="d-block w-100"
                src={elements.carouselImg}
                alt="First slide"
                style={{ height: "500px" }}
              />
              <Carousel.Caption>
                <h3>{elements.carouselTitle}</h3>
                <p>{elements.carouselDescription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carosal>
    </div>
  );
};

export default Carosal;
