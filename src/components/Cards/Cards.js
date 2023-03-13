import images4 from "../../images/canada.jpg";
import images2 from "../../images/iceland1.jpg";
import images from "../../images/ireland2.jpg";
import images3 from "../../images/sweden1.jpg";
import images5 from "../../images/swiss.jpg";
import CardItem from './CardItem';
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1 className="card-title">Top 5 safest countries for solo female travallers</h1>
      <div className="cards-containers">
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem
              src={images}
              text='Journey along epic trails, hike to mountain peaks and discover the stunning landscapes of Ireland and visit the top 1 safest country in the world.'
              label=' 1- Ireland'
              path='/countries/63f3c1843561e75d78c8e496'
            />
            <CardItem
              src={images2}
              text='Iceland is a peaceful country in the Atlantic Ocean with gorgeous nature and open-minded people. But it has something more important to offer female solo travelers – safety.'
              label='2- Iceland'
              path='/countries/63fbabc602b9488a3c29859c'
            />
          </ul>
          <ul className='cards-items'>
            <CardItem
              src={images3}
              label='3- Sweden'
              text='Sweden is a great place for solo female travelers. It’s easy to get around, and there are lots of friendly people to meet. '
              path='/countries/63fe67bb5590c4a72880aff5'
            />
            <CardItem
              src={images4}
              text=" Of all the countries in the Americas, Canada is considered the safest destination for women travelers."
              label='4- Canada'
              path='/countries/63fe68bed6908bebd244de2e'
            />
            <CardItem
              src={images5}
              text="Switzerland is an incredibly safe country for women, and one of Europe's safest places for females to travel alone."
              label='5- Switzerland'
              path='/countries/63fe68ccd6908bebd244de2f'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
