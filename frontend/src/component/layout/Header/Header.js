import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

import logo from "../../../images/logo.png";

const options = {
    searchIcon: "true",
    SearchIconElement: MdSearch,
    profileIcon: true,
    ProfileIconElement: MdAccountCircle,
    cartIcon: true,
    CartIconElement: MdAddShoppingCart,
    burgerColorHover: "#eb4034",
    logo: logo,
    logoWidth: "20vmax",
    navColor1: "rgba(0,0,0,0.4)",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Product",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/product",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35, 0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    profileIconColor: "rgba(35, 35, 35, 0.8)",
    searchIconColor: "rgba(35, 35, 35, 0.8)",
    cartIconColor: "rgba(35, 35, 35, 0.8)",
    profileIconColorHove: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax"
}
const Header = () => {
    return <ReactNavbar {...options}
    />;
};

export default Header;