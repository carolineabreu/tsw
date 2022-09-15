// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// export function Delete() {
//   const { id } = useParams();
//   const [comment, setComment] = useState({});
//   const navigate = useNavigate();

//   console.log(comment);

//   useEffect(() => {
//     async function fetchComment() {
//       try {
//         const response = await axios.get(
//           `https://ironrest.herokuapp.com/..../${id}`
//         );

//         setComment({ ...response.data });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchComment();
//   }, []);

//   return (
//     <div className="comment-page">
//       <Link to={`/${comment._id}`}></Link>
//       <h1>{comment.title}</h1>
//       <img src={comment.image} alt={comment.title} />
//       <p>{comment.ranking}</p>
//       <p>{comment.description}</p>
//       <p>{comment.date}</p>
//       <p>{comment.name}</p>
//       <div className="comment-btn">
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   );
// }