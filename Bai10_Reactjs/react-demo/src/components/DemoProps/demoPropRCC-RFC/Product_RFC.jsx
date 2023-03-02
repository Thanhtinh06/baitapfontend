import React from "react";

// export default function Product_RFC(props) {
//   let film = props.film_input;
//   return (
//     <div>
//       <div className="card text-left">
//         <img
//           className="card-img-top"
//           src="../../../public/logo512.png"
//           alt=""
//         />
//         <div className="card-body">
//           <h4 className="card-title">{film.name}</h4>
//           <p className="card-text">{film.rating}</p>
//           <p className="card-text">{film.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

//cach viet 2

//Bóc tách phần tử, giá trị nhận về props là một obj có property là film_input và các thuộc tính khác khai báo ...restParam
export default function Product_RFC({film_input,...restParam}) {
  return (
    <div>
      <div className="card text-left">
        <img
          className="card-img-top"
          src="../../../public/logo512.png"
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">{film_input.name}</h4>
          <p className="card-text">{film_input.rating}</p>
          <p className="card-text">{film_input.price}</p>
        </div>
      </div>
    </div>
  );
}
