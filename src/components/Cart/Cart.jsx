/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Cart.css";


// eslint-disable-next-line react/prop-types
const Cart = ({ selectedCourse, remaining, totalCost }) => {

  return (
    <div className="cart-container">
      <h4 style={{color:"blue"}}>Credit Hour Remaining :{remaining}</h4>
      <h3>Course Name</h3>
      {selectedCourse.map((course,index) => (
        <ol key={course.id}>{`${index + 1}. ${course.title}`}</ol>
      ))}
      <h4>Total Credit Hour:{totalCost}</h4>
    </div>
  );
};

export default Cart;


