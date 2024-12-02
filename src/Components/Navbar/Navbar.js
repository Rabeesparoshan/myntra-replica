import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import MyntraLogo from "../../assets/MyntraLogo.png"; // Adjust path as needed
import Studioimg from "../../assets/Studioimg.png";
// import Wishlist from "../Rightnav/Whishlist";
// import Cart from "../Rightnav/Cart";

const Navbar = (props) => {
  let changeState = props.changeState;
  ///const navigate = useNavigate(); // Initialize navigate function

  // State to track dropdown visibility for each category
  const [isMenDropdownVisible, setIsMenDropdownVisible] = useState(false);
  const [isWomenDropdownVisible, setIsWomenDropdownVisible] = useState(false);
  const [isKidsDropdownVisible, setIsKidsDropdownVisible] = useState(false);
  const [isHomeLivingDropdownVisible, setIsHomeLivingDropdownVisible] =
    useState(false);
  const [isBeautyDropdownVisible, setIsBeautyDropdownVisible] =
    useState(false);
  const [isStudioDropdownVisible, setIsStudioDropdownVisible] = useState(false);

  // Functions to toggle dropdown visibility
  const toggleMenDropdown = () => setIsMenDropdownVisible(!isMenDropdownVisible);
  const toggleWomenDropdown = () =>
    setIsWomenDropdownVisible(!isWomenDropdownVisible);
  const toggleKidsDropdown = () =>
    setIsKidsDropdownVisible(!isKidsDropdownVisible);
  const toggleHomeLivingDropdown = () =>
    setIsHomeLivingDropdownVisible(!isHomeLivingDropdownVisible);
  const toggleBeautyDropdown = () =>
    setIsBeautyDropdownVisible(!isBeautyDropdownVisible);
  const toggleStudioDropdown = () =>
    setIsStudioDropdownVisible(!isStudioDropdownVisible);

  return (
    <nav className="navbar">
      {/* Navbar Left */}
      <div className="navbar-left">
        <img src={MyntraLogo} alt="Myntra Logo" className="navbar-logo"  onClick={() => { changeState("content") }}/>
        <ul className="navbar-links">
          {/* MEN */}
          <li onMouseEnter={toggleMenDropdown} onMouseLeave={toggleMenDropdown} onClick={() => { changeState("men") }}>
            MEN
            {isMenDropdownVisible && (
              <div className="dropdown-menu">
                <ul>
                  <li>Office Wear</li>
                  <li>Traditional Wear</li>
                  <li>Casual Wear</li>
                  <li>Sports Wear</li>
                  <li>Footwear</li>
                </ul>
              </div>
            )}
          </li>

          {/* WOMEN */}
          <li
            onMouseEnter={toggleWomenDropdown}
            onMouseLeave={toggleWomenDropdown}
            onClick={() => { changeState("women") }}
          >
            WOMEN
            {isWomenDropdownVisible && (
              <div className="dropdown-menu">
                <ul>
                  <li>Western Wear</li>
                  <li>Ethnic Wear</li>
                  <li>Footwear</li>
                  <li>Beauty</li>
                  <li>Accessories</li>
                </ul>
              </div>
            )}
          </li>

          {/* KIDS */}
          <li
            onMouseEnter={toggleKidsDropdown}
            onMouseLeave={toggleKidsDropdown}
            onClick={() => { changeState("kid") }}
          >
            KIDS
            {isKidsDropdownVisible && (
              <div className="dropdown-menu">
                <ul>
                  <li>Girls</li>
                  <li>Boys</li>
                  <li>Toys</li>
                  <li>School Supplies</li>
                  <li>Footwear</li>
                </ul>
              </div>
            )}
          </li>

          {/* HOME & LIVING */}
          <li
            onMouseEnter={toggleHomeLivingDropdown}
            onMouseLeave={toggleHomeLivingDropdown}
            onClick={() => { changeState("hl") }}
          >
            HOME & LIVING
            {isHomeLivingDropdownVisible && (
              <div className="dropdown-menu">
                <ul>
                  <li>Furniture</li>
                  <li>Decor</li>
                  <li>Bedding</li>
                  <li>Kitchen</li>
                  <li>Lighting</li>
                </ul>
              </div>
            )}
          </li>

          {/* BEAUTY */}
          <li
            onMouseEnter={toggleBeautyDropdown}
            onMouseLeave={toggleBeautyDropdown}
            onClick={() => { changeState("beauty") }}
          >
            BEAUTY
            {isBeautyDropdownVisible && (
              <div className="dropdown-menu">
                <ul>
                  <li>Serums</li>
                  <li>Lipsticks</li>
                  <li>Makeup</li>
                  <li>Skincare</li>
                  <li>Perfumes</li>
                </ul>
              </div>
            )}
          </li>

          {/* STUDIO */}
          <li
            onMouseEnter={toggleStudioDropdown}
            onMouseLeave={toggleStudioDropdown}
            onClick={() => { changeState("studio") }}
          >
            STUDIO
            {isStudioDropdownVisible && (
              <div className="dropdown-menu">
                <img
                  src={Studioimg}
                  alt="Studio Category"
                  className="dropdown-image"
                />
                <button>EXPLORE STUDIO</button>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="search-input"
          />
        </div>
      </div>

      {/* Navbar Right */}
      <div className="navbar-right">
        <div className="navbar-icons">
          <div className="icon">
            <FaUser />
            <span>Profile</span>
          </div>
          <div className="icon">
            <FaHeart />
            <span onClick={() => { changeState("wishlist") }}>Wishlist</span>
          </div>
          <div className="icon">
            <FaShoppingBag />
            <span  onClick={() => { changeState("cart") }}>Bag</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
