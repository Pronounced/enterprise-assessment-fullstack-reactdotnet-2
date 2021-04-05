import React from 'react';
import moment from 'moment';

const Admin = (props) => {

  return(
    <div>
      <ul>
        {props.blogs.map((blog, index) => (
          <li key={index} className="post-list-entry">
            <div className="post-list-entry-title">{blog.title}</div>
            <div className="post-list-entry-byline">{blog.Author} {moment().format(blog.createdAt)}</div>
            <div className="stats-list-item-views">{blog.views}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Admin;