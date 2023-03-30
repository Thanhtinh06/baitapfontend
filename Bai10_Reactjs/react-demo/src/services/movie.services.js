import http from "../constant/api";

export const movieServices = {
  //getListFilm
  getMovieList: (query = "") => {
    return http.get(`QuanLyPhim/LayDanhSachPhim${query}`);
  },
  //getListUser
  getUserList : (query = "") => {
    return http.get(`QuanLyNguoiDung/LayDanhSachNguoiDung${query}`)
  }
};
