import React from 'react';
import './Post.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {id ,title , body}=props.post;
    return (
        <div className="postInfo">
            <h1>{id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            
            <Link to={`/about/${id}`}><Button variant="contained" color="secondary">Details</Button></Link>
 

        </div>
    );
};

export default Post;