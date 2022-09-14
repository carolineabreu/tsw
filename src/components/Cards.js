import React from 'react';
import CardItem from './CardItem';
import "./Cards.css";




function Cards() {
  return (
    <div className="cards">
      <h1>Top 10 safest countries for solo female travallers</h1>
      <div className="cards_containers">
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src= 'src/public/images/irelandlandscape.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/CountryInfo'
            />
            <CardItem
              src= '/src/components/images/irelandlandscape.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/CountryInfo'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../../src/components/public/images/sweden.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/CountryInfo'
            />
            <CardItem
              src= '../../src/components/public/images/canada.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/CountryInfo'
            />
            <CardItem
              src= '../../src/components/public/images/switzerland.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/CountryInfo'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= '../../src/components/public/images/southk.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/CountryInfo'
            />

            <CardItem
              src= '../../src/components/public/images/newzeland.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/CountryInfo'
            />
            <CardItem
              src= '../../src/components/public/images/chile.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/CountryInfo'
            />
            <CardItem
              src= '../../src/components/public/images/japan.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/CountryInfo'
            />
            <CardItem
              src= '../../src/components/public/images/amsterdan.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/CountryInfo'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;