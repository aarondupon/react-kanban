import React from 'react'
import Thumbnail from './Thumbnail';



export default function ListItem(props) {
  const {thumbnail, name, gender, uid, age, location, rating} = props;
  const itemStyle = {
    width:'100%',
    height:50,
    border:'1px solid black',
  }
  
  return (
    <li 
        style={itemStyle}
    >
        <Thumbnail src={'/assest/images/dummy.jpg'} />
        <div>
            <div ><h1>{name}</h1></div>
            <div>&#9733; {rating}</div>
            <div>
                <span>{age}</span>
                <span>{gender}</span>
                <span>{location}</span>
            </div>
        </div>
    </li>
  )
}