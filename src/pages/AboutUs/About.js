import { Link } from 'react-router-dom';
import "../../components/Cards/Cards.css"


function AboutUs(props) { 
  return (
    <>
      <li className='cards-item'>
        <Link className='cards-item-link' to={props.path}>
          <figure className='cards-item-pic-wrap' data-category={props.label}>
            <img
              className='cards-item-img'
              alt='Travel'
              src= {props.src}
            />
          </figure>
          <div className='cards-item-info'>
            <h5 className='cards-tem-text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default AboutUs;