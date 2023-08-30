import React, { useEffect, useState } from "react";
import "./Nav.css";
import { BsSearch } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaAngleDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    link: "/",
    dropdown: true,
    subItems: [
      { title: "Home One", link: "/" },
      { title: "Home Two", link: "/" },
      { title: "Home Three", link: "/" },
      { title: "Home Four", link: "/" },
    ],
  },
  {
    title: "Categories",
    link: "/",
    dropdown: true,
    subItems: [
      { title: "Tours", link: "/" },
      { title: "Flights", link: "/" },
      { title: "Hotel", link: "/" },
      { title: "Visa", link: "/Visa" },
      { title: "Apartments", link: "/" },
      { title: "Bus", link: "/" },
      { title: "Cruise", link: "/" },
    ],
  },
  {
    title: "Pages",
    link: "/",
    dropdown: true,
    subItems: [
      { title: "About", link: "/About" },
      { title: "Team", link: "/" },
      { title: "Testimonials", link: "/" },
      { title: "FAQ", link: "/" },
      { title: "Booking Confirmation", link: "/" },
      { title: "Become Expert", link: "/" },
      { title: "Privacy Policy", link: "/" },
      { title: "404 Error", link: "/" },
    ],
  },
  {
    title: "Dashboard",
    dropdown: true,
    subItems: [
      { title: "Dashboard", link: "/Dashboard" },
      { title: "Hotel booking", link: "/" },
      { title: "Flight booking", link: "/" },
      { title: "Tour booking", link: "/" },
      { title: "Booking history", link: "/" },
      { title: "My profile", link: "/" },
      { title: "Wallet", link: "/" },
      { title: "Notifications", link: "/" },
    ],
  },
  {
    title: "News",
    dropdown: true,
    subItems: [
      { title: "News", link: "/News" },
      { title: "News v2", link: "/" },
      { title: "News v3", link: "/" },
      { title: "News v4", link: "/" },
      { title: "News Details", link: "/" },
      { title: "News Details v2", link: "/" },
    ],
  },
  {
    title: "Contact",
    dropdown: true,
    subItems: [
      { title: "Contact v1", link: "/" },
      { title: "Contact v2", link: "/" },
    ],
  },
];
const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const languages = [
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic" },
    { value: "French", label: "French" },
  ];

  const currencies = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
  ];

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <>
      <div>
        <div className="topbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-list">
                  <li className="nav-icon">
                    <a href="#!">
                      <FaFacebookSquare />
                    </a>

                    <a href="#!">
                      <FaTwitterSquare />
                    </a>

                    <a href="#!">
                      <FaInstagram />
                    </a>

                    <a href="#!">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span>+011 234 567 89</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span>contact@domain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-others-options">
                  <li>
                    <a href="/">Login</a>
                  </li>
                  <li>
                    <a href="/">Sign up</a>
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="light"
                        id="language-dropdown-toggle"
                      >
                        <span className="lang-name">
                          {selectedLanguage}{" "}
                          <FaAngleDown size={18} className="pb-1" />
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {languages.map((language) => (
                          <Dropdown.Item
                            key={language.value}
                            onClick={() => handleLanguageSelect(language.value)}
                          >
                            {language.label}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="light"
                        id="currency-dropdown-toggle"
                      >
                        {selectedCurrency}{" "}
                        <FaAngleDown size={18} className="pb-1" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="left-drop">
                        {currencies.map((currency) => (
                          <Dropdown.Item
                            key={currency.value}
                            onClick={() => handleCurrencySelect(currency.value)}
                          >
                            {currency.label}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {}
      <nav className={isSticky ? "navbar sticky" : "navbar"}>
        <div className="container p-0">
          <div className="navbar navbar-expand-lg">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <img src="img/logo_black.png" alt="" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-label="Toggle navigation"
                onClick={() => {
                  document
                    .getElementById("navbarSupportedContent")
                    .classList.toggle("show");
                }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  {menuItems.map((menuItem, index) => (
                    <li className="nav-item" key={index}>
                      <NavLink
                        to={menuItem.link}
                        className="nav-link text-white"
                        activeClassName="active"
                      >
                        {menuItem.title}
                        <FaAngleDown className="ps-1" />
                      </NavLink>
                      {menuItem.dropdown && (
                        <ul className="dropdown-menu">
                          {menuItem.subItems.map((subItem, subIndex) => (
                            <li className="nav-item" key={subIndex}>
                              <NavLink to={subItem.link} className="nav-link ">
                                {subItem.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

              </div>
              <div className="d-lg-block d-xl-block d-none">
                <form>
                  <BsSearch className="icon" />
                  <NavLink to="/" className="btn btn_navber">
                    Become a partner
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
