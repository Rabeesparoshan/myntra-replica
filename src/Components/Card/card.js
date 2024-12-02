import React from 'react';
import './card.css';
import { wishlist } from '../Rightnav/Whishlist.js';
import { cart} from '../Rightnav/Cart.js';

function Card(props) {
  return (
    <div className="card">
      <div className="img-cont">
        <img src={props.img} alt={props.title} className="img" />
        <button
          className="W-btn"
          onClick={() => {
            // Call the function to add product to wishlist
            wishlist.push({
              img: props.img,
              price: props.price
            });
          }}
        >
        </button>
      </div>
      <div className="dets-cont">
        <div className="p">{props.price}</div>
        <div className="third-sec">
          <button className="btnC c-btn"
            onClick={() => {
                // Call the function to add product to wishlist
                  cart.push({
                  img: props.img,
                  price: props.price
                });
              }}
          >🛒 Cart</button>
          <button className="btnC buynow">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
