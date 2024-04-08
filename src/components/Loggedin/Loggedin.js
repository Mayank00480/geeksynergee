import React,{useEffect , useState} from 'react'
import axios from 'axios';
const Loggedin = () => {
  const [responseData , setResponseData] = useState([]);
  const data = {
    "category" : "movies",
    "language" : "kannada",
    "genre" : "all",
    "sort" : "voting"
}
  useEffect(() => {
     axios.post('https://hoblist.com/api/movieList',data)
     .then(res => {
        setResponseData(res?.data?.result);
     })
     .catch(err => {
        console.log(err);
     })
  },[]);
  return (
    <ul style={{display : 'flex',flexWrap : 'wrap' , justifyContent : 'space-between',flexDirection : 'row'}}>
       {responseData.map((item , i) => {
        return <li className='container' key = {i} style = {{listStyleType : 'none',width : '40%' , height : '350px'}}>
            <div className='row' >
            <div className='col'>
                {item.voting}
            </div>
            <div className='col'>
                <img src = {item.poster} height = {150} width = {150} />
            </div>
            <div className='col' style = {{height : '250px'}}>
                {item.director[0]}<br/>
                Genre:{item.genre}<br/>
                Director: {item.director[0]}<br/>
                Starring: {item.stars[0]}
            </div>
            </div>
            <button style = {{padding : '5px 35px' , color : 'white',backgroundColor : 'blue',width : '100%'}}>Watch Trailer</button>
        </li>
       }) }      
    </ul>
  )
}

export default Loggedin
