import React from 'react';
import moment from 'moment';

const Feed = (props) => (
  <div className="feed">
    <ul>
      {props.blogs.map((post, index) => (
        <li key={index} className="feed-list-item">
          <div className="feed-list-item-title" onClick={() => props.handleClick(post)}>{post.title}</div>
          <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{post.author}</span> {moment(post.createdAt).fromNow()}</div>
          <img src="http://www.placecorgi.com/350/197" onClick={() => props.handleClick(post)} className="feed-list-item-image" alt=""/>
          <span className="feed-list-item-lede">{post.body}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Feed;
