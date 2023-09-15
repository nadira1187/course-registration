import  { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
import { useState } from "react";
// import Swal from "sweetalert2/src/sweetalert2.js";

const Home = () => {
    const [card, setCard] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
  
    useEffect(() => {
      fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setCard(data));
    }, []);
  
    const handleSelectCourse = (course) => {
      const isExist = selectedCourse.find((item) => item.id == course.id);
  
      let cost = course.price;
  
      if (isExist) {
        return alert("already booked");
      } else {
        selectedCourse.forEach((item) => {
          cost = cost + item.salary;
        });
        const remaining = 20000 - cost;
        if (cost > 20000) {
        //   Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Something went wrong!",
        //     footer: '<a href="">Why do I have this issue?</a>',
        //   });
        } else {
          setRemaining(remaining);
  
          setTotalCost(cost);
  
          setSelectedCourse([...selectedCourse, course]);
        }
      }
    };
  
    return (
      <div className="container">
        <div className="home-container">
          <div className="card-container">
            {card.map((course) => (
              <div key={course.id} className="card">
                <div className="card-img">
                  <img className="photo" src={course.image} alt="" />
                </div>
                <h3>{course.title}</h3>
                <p>
                  <small>
                    {course.about}
                  </small>
                </p>
                <div className="info">
                  <p>Price : {course.price} $</p>
                  <p>Credit : {course.credit}hr</p>
                </div>
                <button
                  onClick={() => handleSelectCourse(course)}
                  className="card-btn"
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="cart">
            <Cart
              selectedActors={selectedCourse}
              remaining={remaining}
              totalCost={totalCost}
            ></Cart>
          </div>
      </div>
    );
  };
  
  export default Home;