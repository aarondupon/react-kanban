import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.li`
  width:100%;
  list-style: none;
  margin:0;
  padding:0;
  user-select:none;	
  cursor:grab;
  :active {
    cursor:grabbing;
  }
`;

const Dummy = styled.div`
  width:100%;
  height:50px;
  user-select:none;	
  cursor:grab;
  :active {
    cursor:grabbing;
  }
`;

const Line = styled.div`
  width:calc(100% - 40px);
  height:1px;
  margin-left:20px;
  background:rgb(226,226,226);
  border-top:1px solid rgb(245,245,245);
`;

export default function ListItem(props) {
  const {onDragStart = ()=>{},onEnd = ()=>{},last,value, itemRender:Child} = props;
  const {id} = value;
  const [hover, setHover] = useState(false);
  return (
    <Container 
        onDragStart={onDragStart}
        onMouseUp={onEnd}
        onDragEnd={onEnd}
        onMouseEnter={()=>setHover(true)} 
        onMouseLeave={()=>setHover(false)} 
        data-id={id}
    >
       {Child ? 
        <Child hover={hover} value={value} /> 
        : <Dummy/>}

       {!last  && <Line />}
    </Container>
  )
}

ListItem.propTypes = {
  value: PropTypes.shape({
    thumbnail:PropTypes.string.isRequired, 
    name:PropTypes.string.isRequired, 
    gender:PropTypes.string.isRequired, 
    id:PropTypes.string.isRequired, 
    age:PropTypes.number.isRequired,
    location:PropTypes.string.isRequired, 
    rating:PropTypes.number.isRequired,
  }).isRequired,
  itemRender:PropTypes.object, 
  last: PropTypes.bool,
  onDragStart:PropTypes.func,
  onEnd: PropTypes.func,
};