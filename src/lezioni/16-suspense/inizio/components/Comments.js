import React from "react";

const Comments = () => {
  const [comments, setComments] = React.useState(null);
  React.useEffect(() => {
    (() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((json) => setComments(json));
    })();
  }, []);
  return (
    <div className='container mt-4'>
      <ul className='list-group-flush'>
        {comments &&
          comments.slice(0, 5).map((comment) => {
            return (
              <li key={comments.id} className='list-group-item'>
                {comment.email}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Comments;
