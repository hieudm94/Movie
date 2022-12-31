import React, { Fragment } from "react";
import Carousel from "../components/Carousel/Carousel";
import ListMovie from "../components/ListMovie/ListMovie";
import News from "../components/News/News";
import AppMobile from "../components/AppMobile/AppMobile";
import ShowTimeHome from "../components/ShowTimeHome/ShowTimeHome";
import ScrollAnimation from "react-animate-on-scroll";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import SpinnerLoading from "../components/SpinnerLoading/SpinnerLoading";

export default function Home() {
  let [danhSachPhim, setDanhSachPhim] = React.useState([]);
  const [loading, $loading] = React.useState(true);

  //! banner
  let [danhSachBanner, setDanhSachBanner] = React.useState([]);

  React.useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        if (result) {
          setTimeout(() => {
            setDanhSachPhim(result.data.content);
            $loading(false);
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    // banner
    qLyPhimService
      .layDanhSachBanner()
      .then((result) => {
        setDanhSachBanner(result.data.content);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);



  return (
    <Fragment>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <Fragment>
          <Carousel danhSachBanner={danhSachBanner} />
          <ListMovie danhSachPhim={danhSachPhim} />
          <ScrollAnimation animateIn="fadeIn">
            <ShowTimeHome />
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn">
            <News />
          </ScrollAnimation>
          <AppMobile />
        </Fragment>
      )}
    </Fragment>

  );
}
