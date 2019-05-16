import React, {useState} from 'react';
import styled from 'styled-components';
import Kanban from './components/kanban';
import {generateDummyData} from './api';

const Info = styled.div`
    padding: 20px;
    width:100%;
    background:#fff;
    color:#000;
    z-Index:99999;
    max-width:500px;

`;

const CloseBtn = styled.button`
    padding: 10px 20px;
    margin: 10px 0px;
    width:auto;
    display:inline-block;
    background:#71ed73;
    color:#ffff;
    border:none;
    font-size:1.2em;
    z-Index:99999;


`;

const InfoPanel =()=>{
 const [visible,setVisisble] = useState(true);
 return visible ? (
 <Info>
    <h1>Drag drop Kanban:</h1><br></br>
    Panels and items can be dragged & dropped.
    Preformance can be improved with caching (Memorization of pure functional compontents).
    The application therefore uses react hooks (useState). No Redux, but can
    be easly implemented with hooks & hoc functions (redux-connect).
    <br></br>
    <CloseBtn onClick={()=>setVisisble(false)} >close</CloseBtn>
  </Info>) : null
}
const App = () =>
<React.Fragment>
  <InfoPanel />
  <Kanban data={generateDummyData()} />
</React.Fragment>


export default App;
