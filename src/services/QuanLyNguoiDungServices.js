import axios from "axios";
import { DOMAIN_MOVIE, token, TOKEN_CYBER } from "../config/setting";
export class QuanLyNguoiDung {

  dangNhap = (userLogin) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: userLogin,
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };
  
  dangKy = (thongTin) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: thongTin,
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };

  layThongTinTaiKhoan = (taiKhoan) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: taiKhoan,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };

  datVe = (thongTinDatVe) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyDatVe/DatVe`,
      method: "POST",
      data: thongTinDatVe,
      headers: {
        "Authorization": "Bearer " + localStorage.getItem(token),
        "TokenCybersoft": TOKEN_CYBER
      },
    });
  };

  layBinhLuan = () => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/comment",
      method: "GET",
    });
  };

  themBinhLuan = (binhLuan) => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/comment",
      method: "POST",
      data: binhLuan,
    });
  };
  
  thongTinTaiKhoan = (taiKhoan) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: taiKhoan,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };
}
export const qlyNguoiDung = new QuanLyNguoiDung();
