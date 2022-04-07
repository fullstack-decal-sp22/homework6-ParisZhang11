import {useState} from "react";
import axios from 'axios';

const NewComment = (postId) => {
  const [comment, setComment] = useState();

  const onSubmit = () => {
    const data = {
      "newComment": comment
    }
    axios.post(`http://localhost:3002/post/${postId['postId']}/comment`, data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return <div>
    <div>
      <input type="text" placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} />
    </div>
    <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      Submit
    </button>
  </div>
}

export default NewComment;
