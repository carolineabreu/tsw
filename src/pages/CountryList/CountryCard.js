import { Link } from 'react-router-dom';
import style from "./style.module.css";

function CardItem(props) {

  return (
    <>
      <li className={style.CardItem}>
        <Link className='cards-item-link' to={props.path}>
          <figure className='cards-item-pic-wrap' style={{ borderRadius: "8px" }} data-category={props.label}>
            <img
              className='cards-item-img'
              alt='Travel'
              src={props.src}
            />
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
