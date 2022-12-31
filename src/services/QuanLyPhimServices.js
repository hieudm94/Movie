import axios from "axios";
import { DOMAIN_MOVIE, groupID, TOKEN_CYBER } from "../config/setting";
export class QuanLyPhimServices {
  
  layDanhSachBanner = () => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyPhim/LayDanhSachBanner`,
      method: "GET",
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };

  layDanhSachPhim = () => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      method: "GET",
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };

  layThongTinPhim = (maPhim) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };

  layHeThongRap = () => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };

  layCumRapTheoHeThong = () => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`,
      method: "GET",
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };

  layThongTinCumRapTheoHeThong = (maHeThongRap) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };

  layThongTinPhongVe = (maLichChieu) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };

  layTinTuc = () => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/news",
      method: "GET",
    });
  };

  layChiTietTinTuc = (maTinTuc) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${maTinTuc}`,
      method: "GET",
    });
  };
}

export const qLyPhimService = new QuanLyPhimServices();
