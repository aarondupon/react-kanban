import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Thumbnail from '../../images/thumbnail';

const RowLeft = styled.div`
  display: inline-block;
  max-width: calc(100% - 90px);
  padding:10px 10px;
  transition:color 150ms;
`;

const Container = styled.div`
  width:100%;
  height: 100px;
  padding:18px 20px 18px;
  box-sizing: border-box;
  cursor:grab;
  :active {
    cursor:grabbing;

  }
`;

function User({hover,value}) {
    const {
        thumbnail = '',
        name = 'no-name',
        gender = 'no-gender',
        age = 0,
        location = "no-location",
        rating = 0
    } = value;
    
    return(
        <Container  className="line" >
            <Thumbnail hover={hover}  src={thumbnail} />
            <RowLeft  hover={hover}>
                <div style={{width:'100%',display:'inline-block',paddingBottom:2}}>
                <div style={{float:'left',marginRight:10}} >
                    <h1 style={{margin:0}}>{name}</h1>
                </div>
                <div style={{float:'left',color:'rgb(173, 143	,67)'	}} >&#9733; {rating}</div>
                </div>
                <div style={{float:'left', width:'100%',opacity:0.5}}>
                    <span>{age} y/o</span> - <span>{gender}</span> - <span>{location}</span>
                </div>
            </RowLeft>
        </Container>
    )  
}
export default  React.memo(User);

User.propTypes = {
    value: PropTypes.shape({
      thumbnail:PropTypes.string.isRequired, 
      name:PropTypes.string.isRequired, 
      gender:PropTypes.string.isRequired, 
      age:PropTypes.number.isRequired,
      location:PropTypes.string.isRequired, 
      rating:PropTypes.number.isRequired,
    }).isRequired,
    hover:PropTypes.bool,
  };