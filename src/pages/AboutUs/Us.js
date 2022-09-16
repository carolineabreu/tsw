import AboutUs from './About';
import style from "./style.module.css";
import image6 from "../../images/Lari.jpg"
import image7 from "../../images/Carol.jpg"
import image8 from "../../images/Zih.jpg"



function Us() {
  return (
    <div className="cards">
      <h1 className = {style.h1}>The Team</h1>
      <div className="cards-containers">
      <div className={style.container}>
      <ul className={style.cardItem}>
            <AboutUs
              src= {image6}
              text="My name is Larissa, I'm 26 years old, brazilian, and I love travelling. I have lived in Ireland and Italy besides Brazil, and I plan to travel a lot more around the world. I'm currentlly studying web-development  at Ironhack bootcamp, and here's my Linkedin profile to connect:"
              path='about-us'
            />
            <AboutUs
              src= {image7}
              text="Hi, my name is Caroline, I'm from Brazil and love to know different places and cultures. I made a trip in 2019 to Europe and I had a chance to visit many places I had had always wanted to see. While studying web development at Ironhack, I'm already dreaming about places I want to go next."
              path='about-us'
            />
          <AboutUs
              src= {image8}
              text="Hi, I’m Zih, a Brazilian native, who loves to travel and discover the world. Although I enjoy traveling on my own, safety has always been a huge concern for me. The truth is that women face greater obstacles, especially when travelling alone. This website was create to help women find safe destinations, and to show them that travelling can not only be safe  but they can  also have positive and rewarding experiences if they plan well and ahead."
              path='about-us'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Us;