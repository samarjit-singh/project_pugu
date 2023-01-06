import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Home = () => {
  // const user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user?.accessToken) {
  //     navigate("/login");
  //     console.log(user);
  //   }
  // }, [user, navigate]);

  // if (!user.accessToken) {
  //   console.log("hello");
  //   return navgigate("/login");
  // }
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
