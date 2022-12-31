import React from "react";
import "../Carousel/Carousel.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BookTicket from "../BookTicket/BookTicket";

export default function Carousel(props) {

  const renderBanner = () => {
    return props.danhSachBanner.map(banner => {
      return <div className="item" key={banner.maBanner}>
      <div className="item__img">
        <img
          className="img-fluid"
          src={banner.hinhAnh}
          alt="phim soi"
        />
        <div className="background__overlay">
          <i className="fa fa-play carousel__button" />
        </div>
      </div>
    </div>
    })
  }

  return (
    <div className="hotMovie">
      <div className="hotMovie__content">
        <OwlCarousel
          loop
          nav
          autoplay
          items={1}
          className="myHotMovieCarousel owl-carousel owl-theme"
        >
          {renderBanner()}
        </OwlCarousel>
      </div>
      <BookTicket />
    </div>
  );
}
