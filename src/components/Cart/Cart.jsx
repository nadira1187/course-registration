// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Cart.css";

// eslint-disable-next-line react/prop-types
const Cart = ({ selectedCourse, remaining, totalCost }) => {

  return (
    <div>
      <h5>remaining:{remaining}</h5>
      <h5>TotalCost:{totalCost}</h5>
      {/* {selectedCourse.map((course) => (
        <li key={course.id}>{course.title}</li>
      ))} */}
    </div>
  );
};

export default Cart;