export function Comment() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/tswcomments"
        );

        setComments([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchComments();
  }, []);

  return (
    <>
      <h1>Comments</h1>
      {comments.map((currentComment) => {
        return (
          <Link to={`/${currentComment._id}`}>
            <h2>{currentComment.CommentTitle}</h2>{" "}
          </Link>
        );
      })}
    </>
  );
}
