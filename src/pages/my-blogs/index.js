import React from 'react';
import { Link } from 'react-router-dom';


function MyBlogs() {
  return (
    <div style={{
      color: 'white',
      paddingLeft: '100px'
    }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Blogs</h1>
        <h1>This is about my blogs</h1>
        <Link to="/" style={{
          color: 'white',
          textDecoration: 'none',
        }}>Go Back</Link>
    </div>
  );
}

export default MyBlogs;
