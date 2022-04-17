import React, {useState,useEffect} from 'react'

import "./teacherDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
const TeacherDetailsPage = () => {
    const {id} = useParams();
    const [data, setData] = useState({});
    const [review, setReview] = useState([]);
    const getData = () => {
        axios.get(`http://localhost:8090/teachers/${id}`).then((response) => {
            setData(response.data);
            setReview(response.data.reviews);
            }).catch((err) => {
            console.log(err);
        })
        }
        useEffect(()=>{
        getData();
        }, [])
    return (
    <>
      <div className="teacherContainer" key={data.id}>
        <h2 className="name">{data.name}</h2>
        <img className="image" src={data.imageUrl} alt="#" />
        {/* <div className="author">{data.author}</div> */}
        {/* <div className="description">{data.description}</div> */}
        <div className="subject">{data.subject}</div>
        <div className='classes'>{data.classes}</div>
        {/* <div className="section">{data.section}</div> */}
        {/* <div className="isbnNumber">{data.isbnNumber}</div> */}
        {/* <ul className="reviews">
            {review.map((el,index)=>{
                return <li key={index}>{el}</li>
            })}
        </ul> */}
      </div>
    </>
  )
}

export default TeacherDetailsPage