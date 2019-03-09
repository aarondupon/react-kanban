import React from 'react';
// import Sortable from 'react-sortablejs';
import ListItem from './ListItem';

export default function List(props) {

    const onMouseOut = (e) =>{
        
    }

    const onClick = (e) =>{
        
    }
    const items = [
        {
            id:0,
            name: 'Emilia clark',
            age: 30,
            gender: 0,
            location: 'deurne',
        },
        {
            id:0,
            name: 'Emilia clark',
            age: 30,
            gender: 0,
            location: 'deurne',
        },
        {
            id:0,
            name: 'Emilia clark',
            age: 30,
            gender: 0,
            location: 'deurne',
        },
        {
            id:0,
            name: 'Emilia clark',
            age: 30,
            gender: 0,
            location: 'deurne',
        },
        {
            id:0,
            name: 'Emilia clark',
            age: 30,
            gender: 0,
            location: 'deurne',
        }
    ];

    

    const listStyle = {
        width:400,
        height:'auto',
        border: '1px solid red',
        backgroundColor:'rgba(0,0,0,.1)',
    }

     
    const listItems = items.map((val, key) => 
        <ListItem 
            onMouseOut={onMouseOut}  
            onClick={onClick} 
            key={key} 
            data-id={val.id}
        />);


    return (
        <div style={listStyle}>
            
            <lu>
                {listItems}
            </lu>
        </div>
    )
}
