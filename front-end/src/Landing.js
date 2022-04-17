import React, {useEffect,useState} from 'react'
import SortAndFilterButtons from './SortAndFilterButtons'
import axios from 'axios'
import TeacherCard from './TeacherCard'
import './Landing.css'
const Landing=()=> {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get('http://localhost:8090/teachers').then((response)=> {
      setData(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }
  const [change, setChange] = useState(false);
  useEffect(()=>{
    getData();
  }, [])
  const handleSort = (sort, value) =>{
    if(sort === 'asc' && value==='name'){
      data.sort((a,b)=> {
        if(a.name>b.name){
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)
    }
    if(sort === 'desc' && value==='name'){
      data.sort((a,b)=> {
        if(a.name<b.name){
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)

    }
   
    // if(sort === 'asc' && value==='age'){
    //   data.sort((a,b)< b.age-a.age)
    //   setChange(!change)

    // }
    if(sort === 'desc' && value==='age'){
      data.sort((a,b)=> b.age-a.age)
      setChange(!change)

    }
    if(sort === 'asc' && value === 'age'){
      data.sort((a,b) => a.age-b.age)
      setChange(!change)
    }
  }
  
  // {getData.filter((val)=>{
  //   if(searchTerm == ""){
  //     return val
  //   }
  // }).map((val,key) => {})}
  // useEffect(()=>{}, [change])
  return (
    <>
   
    <h1 style={{ textAlign: "center" }}>TODAY'S SCHEDULE</h1>
    <input type="text" placeholder='Search....' onChange={event => {searchTerm(event.target.value)}}  />
    <SortAndFilterButtons handleSort={handleSort}/>
    <div className="mainContainer" >
        {data.map(({name,imageUrl,subject,age,id, classes})=>{
         return <TeacherCard key={id} name={name} imageUrl={imageUrl} age={age} id={id} subject={subject} classes={classes} />
        })}
      </div>
    </>
  
  )
}

export default Landing