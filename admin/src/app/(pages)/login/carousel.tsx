"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
};
const dataCarousel = [{ src: "1.jpg" }, { src: "2.jpeg" }];

export default function LoginCarousel() {
  return (
    <Slider {...settings}>
      {dataCarousel.map((doc, index) => (
        <div
          key={index}
          className={`bg-[url('/carousel/${doc.src}')] h-96 lg:h-screen bg-no-repeat bg-cover bg-center`}
        ></div>
      ))}
    </Slider>
  );
}
