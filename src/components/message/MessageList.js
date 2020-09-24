import React from "react";

function MessageList(props) {
  if (props.messageArray.length > 0) {
    return props.messageArray.map((message) => (
      <div key={message.id} className="message">
        <h6>{message.username}</h6>
        <p>
          {message.text} Likes:{message.likes.length}
        </p>
        <button id={message.id} onClick={props.handleLike}>
          &#10084;
        </button>
      </div>
    ));
  }
  return <div>MessageList</div>;
}

export default MessageList;