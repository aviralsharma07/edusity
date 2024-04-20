import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Divya Thakur</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Nakesh Sharma</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Enrolling at Edusity was an absolute game-changer for me. The vibrant community, top-notch facilities, and dedication to academic success have far surpassed my expectations. Choosing Edusity was undeniably one of the best decisions I've ever made.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Ishika Agrawal</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Opting for Edusity for my degree was one of the smartest moves I've ever made. The incredible support system, cutting-edge facilities, and relentless pursuit of academic excellence have gone above and beyond my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Vikram Singh</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Joining Edusity for my degree was truly a remarkable decision. The encouraging community, exceptional facilities, and unwavering commitment to academic excellence have completely exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
