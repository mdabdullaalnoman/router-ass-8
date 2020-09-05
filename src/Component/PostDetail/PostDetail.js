import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PostDetail.css'
import { Button } from '@material-ui/core';


const PostDetail = () => {
    const {id} =useParams();
    const[detail, setDetails] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>res.json())
        .then(data => {
            setDetails(data);
        })
    },);
    return (
        <div className="detail">
            <h1> Id: { detail.id}</h1><br/>
           <h2> Description</h2> <hr/> <br/>

            <h3>  { detail.body}</h3>
            <Button  variant="contained" color="primary" href="#contained-buttons">Comments</Button>
       </div>


      
    );
};




export default PostDetail;