import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import { useShoe, PostProvider } from "./context";
import "./style.css";
import PaymentPage from "./PaymentPage";

const nikeShoes = [
  {
    name: "Nike Air Max 270",
    price: 1500,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c576f8e7-5926-4d68-88b1-0ce6d18e7a2d/air-max-270-older-shoes-tnlrnr.png",
  },
  {
    name: "Nike Air Zoom Pegasus 38",
    price: 1299,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0994bf2c-e174-4aaf-8ea6-b553e8a54c19/pegasus-41-road-running-shoes-RZm89S.png",
  },
  {
    name: "Nike React Infinity Run Flyknit",
    price: 1600,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f062fa29-72c7-4c13-8132-1544eefbffc2/infinityrn-4-road-running-shoes-sBdw7D.png",
  },
  {
    name: "Nike Air Force 1 '07",
    price: 9000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    name: "Nike Dunk Low Retro",
    price: 1050,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b8083f2f-0933-4c11-9438-5497d751ce62/dunk-low-retro-shoe-66RGqF.png",
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    price: 1000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/232c0ae8-99c8-497f-9a1e-af9f0fc8ef3c/blazer-mid-77-vintage-shoes-dNWPTj.png",
  },
  {
    name: "Nike Air VaporMax Plus",
    price: 2100,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0fd2a5b0-20d2-4cb4-a619-acbff16ae34f/air-vapormax-2023-flyknit-shoes-xjVzw5.png",
  },
  {
    name: "Nike SB Dunk Low",
    price: 1100,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/06df8580-6876-4697-b47c-96b50f2b8fd9/dunk-low-retro-shoes-bCzchX.png",
  },
  {
    name: "Nike Air Max 90",
    price: 1200,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7002f46-4811-404e-aee3-69eb247bcd84/air-max-90-shoes-98F148.png",
  },
  {
    name: "Nike Air Huarache",
    price: 1350,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6acba276-7ce6-4942-bfcd-9bb17458e424/air-huarache-runner-shoes-6gNJ0g.png",
  },
  {
    name: "Nike Air Max 97",
    price: 1700,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/104765fc-9feb-463f-ad7b-5c301a64e27d/air-max-97-shoes-B1mzl9.png",
  },
  {
    name: "Nike LeBron XXI",
    price: 2000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a243361-5804-41fe-913e-7b6c9523f806/lebron-xxi-dragon-pearl-ep-basketball-shoes-4tVgfH.png",
  },
  {
    name: "Nike Metcon 6",
    price: 1300,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13565310-7f6d-4a56-87f6-b046786f2e16/free-metcon-5-workout-shoes-HfHgmZ.png",
  },
  {
    name: "Nike Invincible 3",
    price: 2750,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10dfb6ca-9206-4ea8-93b5-7a4fc9094cb0/invincible-3-road-running-shoes-KZFTMC.png",
  },
];

export default function App() {
  return (
    <PostProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <ConditionalNavLink />
      </Router>
    </PostProvider>
  );
}

function Home() {
  return (
    <div className="app">
      {nikeShoes.map((shoe) => (
        <Shoes shoe={shoe} key={shoe.name} />
      ))}
      <CartItems />
      <TotalAmt />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <ul className="nav">
        <li>
          <Link to="/">
            <a href="#root" className="logo">
              <svg
                viewBox="0 0 24 24"
                role="img"
                width="44px"
                height="44px"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Categories</li>
        <li>About Us</li>
      </ul>
    </header>
  );
}

function Shoes({ shoe }) {
  const { addToCart } = useShoe();
  return (
    <div className="shoes">
      <h2>{shoe.name}</h2>
      <img src={shoe.image} alt={shoe.name} />
      <p className="price">
        <span>₹</span> {shoe.price}.00/-
      </p>
      <button className="add-btn" onClick={() => addToCart(shoe)}>
        Add To Cart
      </button>
    </div>
  );
}

function CartItems() {
  const { cartItems } = useShoe();
  return (
    <div className="Cart-wrapper">
      {cartItems.map((item) => (
        <Items item={item} key={item.name} />
      ))}
    </div>
  );
}

function Items({ item }) {
  const { updateCart } = useShoe();
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <p className="shoe-name">{item.name}</p>
      <div className="add-sub-btn">
        <button onClick={() => updateCart(item.name, -1)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={() => updateCart(item.name, 1)}>+</button>
      </div>
      <p className="price">
        <span>₹</span>
        {item.price * item.quantity}.00
      </p>
    </div>
  );
}

function TotalAmt() {
  const { total } = useShoe();
  return (
    <div className="total-amt">
      <h1>Total : </h1>
      <h2>₹{total}.00</h2>
    </div>
  );
}

// function Payment() {
//   return (
//     <div className="payment">
//       <PaymentPage />
//       <CartItems />
//       <TotalAmt />
//     </div>
//   );
// }

function ConditionalNavLink() {
  const location = useLocation();
  const isPaymentPage = location.pathname === "/payment";

  return (
    <NavLink to={isPaymentPage ? "/" : "/payment"} className="payment-button">
      {isPaymentPage ? "Back to shopping" : "Proceed to Payment"}
    </NavLink>
  );
}
export { CartItems, TotalAmt,ConditionalNavLink };
