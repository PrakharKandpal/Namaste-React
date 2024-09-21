import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// *Header
//   - Logo
//   - Nav Items
// *Body
//   -Search
//   -RestaurantContainer
//     -RestaurantCard
//     -RestaurantCard
//     -Name of Res, Star Rating, cuisine, delivery time
// *Footer
//   -Copyright
//   -Links
//   -Address
//   -Contact



const RestaurantCard = ({ resName, cuisine, rating, cost, deliveryTime}) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_387406.JPG"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{cost}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="Biryani, North Indian, Asian"
          rating="4.6"
          cost="800"
          deliveryTime="45"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2022/10/21/13b80c63-3d62-4db6-a00c-477582e1299f_381234.jpg"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Burger, Fast Food"
          rating="4.6"
          cost="800"
          deliveryTime="45"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2022/10/21/13b80c63-3d62-4db6-a00c-477582e1299f_381234.jpg"
        />
         <RestaurantCard
          resName="Dum Pukht"
          cuisine="Awadhi, Mughlai"
          rating="4.6"
          cost="800"
          deliveryTime="45"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2022/10/21/13b80c63-3d62-4db6-a00c-477582e1299f_381234.jpg"
        />
        <RestaurantCard
          resName="Sushi & More"
          cuisine="Japanese, Sushi"
          rating="4.8"
          cost="600"
          deliveryTime="30"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2022/8/5/ae7d63b1-e0f2-49c5-b720-478c34fa1e3f_403926.jpg"
        />
        <RestaurantCard
          resName="Chaat Corner"
          cuisine="Indian, Street Food"
          rating="4.5"
          cost="150"
          deliveryTime="20"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2022/7/10/3151a260-bbbc-49c1-b30e-39f2e17f30d5_53818.jpg"
        />
        <RestaurantCard
          resName="Pizzeria"
          cuisine="Italian, Pizza"
          rating="4.7"
          cost="500"
          deliveryTime="35"
          imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2022/6/22/cafaf6ae-4c9b-4898-9e29-9d3e3b7a9d80_233141.jpg"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
