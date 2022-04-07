import Comments from "./Comments";
import NewComment from "./NewComment";

const Post = ({ title, body, postId, comments }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comments comments={comments} />
    <NewComment postId={postId} />
  </div>
}

export default Post;
