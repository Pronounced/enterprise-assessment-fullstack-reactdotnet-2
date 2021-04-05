import React from 'react';
import moment from 'moment';

const Post = (props) => (
  <div className="post">
    <h1 className="post-title">{props.blog.title}</h1>
    <div className="post-byline"><span className="post-byline-author">{props.blog.author}</span> {moment(props.blog.createdAt).fromNow()}</div>
    <img src="http://placecorgi.com/800/450" className="post-image" alt=""/>
    <p>{props.blog.body}</p>
  </div>
)

export default Post;
