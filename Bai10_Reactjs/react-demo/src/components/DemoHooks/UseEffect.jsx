// import axios from "axios";
import React, { useEffect, useState } from "react";
import { movieServices } from "../../services/movie.services";
// import http from "../../constant/api";

const UseEffect = () => {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  const [movieList, setMovieList] = useState([]);

  //thay thế life cycle componentDidmount và componentDidUpdate
  //useEffect : Nhận vào 2 tham số
  // TH1: useEffect luôn luôn chạy khi component bị re render
  useEffect(() => {
    console.log("UseEffect");
  });

  //TH2: arg2: [](rỗng) => thay cho componentDidMount
  useEffect(() => {
    console.log("UseEffect TH2");
  }, []);

  //TH3: arg2: [](có giá trị)
  useEffect(() => {
    console.log("UseEffect TH3");
  }, [number]);

  //TH4: arg1 return về func
  useEffect(() => {
    console.log("UseEffect TH4");
    return () => {
      clearInterval();
      clearTimeout();
    };
  }, []);

  //cách 1
  // const getMovieList = async () => {
  //   try {
  //     const res = await axios.get(
  //       "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13",
  //       {
  //         headers: {
  //           TokenCyberSoft: TOKEN_CYBER,
  //         },
  //       }
  //     );
  //     setMovieList(res.data.content);
  //     console.log("movieList after callAPI", movieList);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    // getMovieList();
    //IIFE : cách 2
    // ngoặc 1()-> tạo hàm ngoặc 2()->gọi hàm
    (async () => {
      try {
        // const res = await axios.get(
        //   "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13",
        //   {
        //     headers: {
        //       TokenCyberSoft: TOKEN_CYBER,
        //     },
        //   }
        //đã confic sẵn baseURL bên http
        const res = await movieServices.getMovieList("?maNhom=GP13");
        setMovieList(res.data.content);
        // console.log("movieList after callAPI", movieList);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="container mt-5">
      <h2>UseEffect</h2>
      <h2>Number: {number}</h2>
      <div>
        <button
          className="btn btn-warning mr-5"
          onClick={() => {
            setNumber(number - 1);
          }}
        >
          -
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="btn btn-warning mr-5"
          onClick={() => {
            setLike(like - 1);
          }}
        >
          Decrea Like
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          Increa Like
        </button>
      </div>
      <div className="mt-5">
        <div className="row">
          {movieList.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card">
                  <img
                    src={item.hinhAnh}
                    alt={item.tenPhim}
                    style={{ width: "18rem", height: "18rem" }}
                  />
                  <div className="card-body">
                    <h3>{item.tenPhim}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
