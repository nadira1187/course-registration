import  { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
// eslint-disable-next-line no-unused-vars
import   React, { useState } from "react";
import swal from 'sweetalert';



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
  
      let cost = course.credit;
  
      if (isExist) {
        return swal("Already booked");
      } else {
        selectedCourse.forEach((item) => {
          cost = cost + item.credit;
        });
        const remaining = 20 - cost;
        if (cost > 20) {
            swal("Sorry, you are not able to add additional courses.");

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
            <h2 className="course-title">Course Registration</h2>
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
              selectedCourse={selectedCourse}
              remaining={remaining}
              totalCost={totalCost}
            ></Cart>
          </div>
      </div>
    );
  };
  
  export default Home;