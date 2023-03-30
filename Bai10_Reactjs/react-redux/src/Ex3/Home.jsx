import { Component, createContext } from "react";
import Cart from "./Cart";
import { Data2Context, DataContext } from "./context";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

class Home extends Component {
  data = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  state = {
    showCart: false,
    selectedProduct: null,
    cart: [],
  };

  handleAddToCart = (prod) => {
    const cloneCart = [...this.state.cart];

    const foundProduct = cloneCart.find((item) => {
      return item.product.id === prod.id;
    });

    // 1. nếu như sản phẩm chưa có, thêm mới
    if (!foundProduct) {
      // tạo 1 cartItem mới với số lượng từ 1
      const cartItem = {
        product: prod,
        quantity: 1,
      };

      cloneCart.push(cartItem);
    }
    // 2. nếu như sản phẩm đã có, tăng số lượng
    else {
      foundProduct.quantity += 1;
      // cart change hay ko change
    }

    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };

  setSelectedProduct = (prod) => {
    this.setState({
      selectedProduct: prod,
    });
  };

  handleShowCart = () => {
    this.setState({
      showCart: true,
    });
  };

  handleHideCart = () => {
    this.setState({
      showCart: false,
    });
  };

  handleDeleteCartItem = () => {};

  handleIncreaseQuantity = () => {};

  handleDecreaseQuantity = () => {};

  handleCheckout = () => {
    this.setState({
      cart: [],
    });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          onHideCart: this.handleHideCart,
          onAddToCart: this.handleAddToCart,
        }}
      >
        <div>
          <h1 className="display-3 text-center">Shopping Online</h1>
          <div className="text-center">
            <button className="btn btn-success" onClick={this.handleShowCart}>
              Cart (0)
            </button>
          </div>
          <ProductList
            data={this.data}
            setSelectedProduct={this.setSelectedProduct}
          />
          {this.state.selectedProduct && (
            <ProductDetail selectedProduct={this.state.selectedProduct} />
          )}

          {this.state.showCart && <Cart />}
        </div>
      </DataContext.Provider>
    );
  }
}

export default Home;

/**
 * 1. Xoá sản phẩm trong giỏ hàng
 * 2. Tăng giảm số lương sản phẩm
 * 3. Tỉnh tổng tiền sản phẩm
 * 4. Thanh toán (set cart = [])
 */

// var a = 1;
// if (a > 5) {
//   console.log("test");
// } else {
//   console.log("demo");
// }

// a > 5 ? console.log("test") : console.log("demo");

// var isLogin = false;
// var message = isLogin ? "hello" : "Please login";

// if (isLogin) {
//   message = "Hello";
// } else {
//   message = "Please login";
// }
