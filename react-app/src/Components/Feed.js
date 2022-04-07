import React, { useEffect, useState } from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import Comments from "./Comments";
import NewComment from "./NewComment";
import axios from 'axios';

const Feed = () => {
  const d = [
    {
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
  ]

  const [data, setData] = useState();

  const getPostsData = () => {
    axios.get("http://localhost:3002/posts")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error))
  };

  useEffect(() => {
    getPostsData();
  }, []);

  console.log(data);
  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data?.map(d =>
          <Post title={d.title} body={d.body} key={d.id} comments={d.comments} postId={d.id}/>
          // <Comment comments={d.comments} />
        )
      }
      {/* {
        data?.map(d =>
          <Comments comments={d.comments} />
          // <Comment comments={d.comments} />
        )
      }
      {
        data?.map(d =>
          <NewComment postId={d.id} />
          // <Comment comments={d.comments} />
        )
      } */}
      

      <NewPost/>
    </div>
  )

}


export default Feed;
