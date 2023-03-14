import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg"

import Product from "./product.js";
import "./Home.css"

const product = {
    name: "Travelling bag",
    images: [{ url: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' }],
    price: '3000',
    _id: "adil"
}
const Home = () => {
    return (
        <Fragment>
            <div className="banner">
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
                <a href="#container">
                    <button>
                        Scroll<CgMouse />
                    </button>
                </a>
            </div>

            <h2 className="homeHeading">Featured Products</h2>

            <div className="container" id="container">
                <Product product={product} />
            </div>
        </Fragment>
    )
}

export default Home;