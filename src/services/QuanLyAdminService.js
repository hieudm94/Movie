import axios from "axios";
import { token, groupID, DOMAIN_MOVIE, TOKEN_CYBER } from "../config/setting";
export class QuanLyAdmin {

  layDanhSachNguoiDung = () => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`,
      method: "GET",
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };

  themNguoiDung = (thongTinNguoiDung) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: thongTinNguoiDung,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        "TokenCybersoft": TOKEN_CYBER
      },
    });
  };

  capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: thongTinNguoiDung,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        "TokenCybersoft": TOKEN_CYBER
      },
    });
  };

  xoaNguoiDung = (taiKhoan) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        "TokenCybersoft": TOKEN_CYBER
      },
    });
  };

  themPhim = (form_data) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data: form_data,
      headers: {
        "TokenCybersoft": TOKEN_CYBER
      }
    });
  };


  suaPhim = (phim) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyPhim/CapNhatPhimUpload`,
      method: "POST",
      data: phim,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        "TokenCybersoft": TOKEN_CYBER
      },
    });
  };

  xoaPhim = (maPhim) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        "TokenCybersoft": TOKEN_CYBER
      },
    });
  };

  taoLichChieu = (thongTinLichChieu) => {
    return axios({
      url: `${DOMAIN_MOVIE}/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data: thongTinLichChieu,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        "TokenCybersoft": TOKEN_CYBER
      },
    });
  };

  themTinTuc = (tinTuc) => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/news",
      method: "POST",
      data: tinTuc,
    });
  };

  suaTinTuc = (id, tinTuc) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${id}`,
      method: "PUT",
      data: tinTuc,
    });
  };
  xoaTinTuc = (id) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${id}`,
      method: "DELETE",
    });
  };
}
export const qLyAdminService = new QuanLyAdmin();
