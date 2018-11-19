import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  console.log(props)
  return (
    <div className="comment">
      <a href="#" className="avatar">
        <img src={props.avatar} alt="Avatar" />
      </a>

      <div className="content">
        <a href="#" className="author">
          {props.author}
        </a>

        <div className="metadate">
          <span className="date">
            {props.time}
          </span>
        </div>

        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;


// rfc 하고 tab 누르면
// import React from 'react'

// export default function CommentDetail() {
//   return (
//     <div>
      
//     </div>
//   )
// }
