import AboutUs from './About';
import "../../components/Cards/Cards.css";
import image6 from "../../images/southkorea.jpg"
import image7 from "../../images/chile.jpg"
import image8 from "../../images/newzeland.jpg"



function Us() {
  return (
    <div className="cards">
      <h1>Top 5 safest countries for solo female travallers</h1>
      <div className="cards-containers">
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <AboutUs
              src= {image6}
              text='Journey along epic trails, hike to mountain peaks and discover the stunning landscapes of Ireland and visit the top 1 safest country in the world.'
              path='country-list'
            />
            <AboutUs
              src= {image7}
              text='Iceland is a peaceful country in the Atlantic Ocean with gorgeous nature and open-minded people. But it has something more important to offer female solo travelers – safety.'
              label='2- Iceland'
              path='country-list'
            />
          </ul>
          <ul className='cards-items'>
          <AboutUs
              src= {image8}
              label='3- Sweden'
              text='Sweden is a great place for solo female travelers. It’s easy to get around, and there are lots of friendly people to meet. '
              path='country-list'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Us;