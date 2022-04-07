const Comments = ({ comments }) => {
    // comments.forEach(function (c) {
    //   return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    //     <p>c</p>

    // </div>
    // })
    // const displayComments = (comments) => {
    //   for (var c in comments) {
    //     console.log(c);
    //     <p>{c}</p>
    //   }
    // };
    // console.log(comment);
    
    return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
      {
        comments?.map(c =>
          <p>{c}</p>
          // <Comment comments={d.comments} />
        )
      }
      
    </div>
  }
  
  export default Comments;
  