import React from "react";

const CartPage = ({ cart }) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.fname}</li>
                ))}
            </ul>
        </div>
    );
};

export default CartPage;