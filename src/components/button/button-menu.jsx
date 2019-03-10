import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
        width:50px;
        height:50px;
        background:rgba(0,0,0,0);
        padding:0px;
        cursor: pointer;
        border:none;
        :focus{
          border:none;
          outline: none;
        }
`
const Dot = styled.span`
        height: 5px;
        width: 5px;
        margin: 0px 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
`

export default function ButtonMenu() {
  return (
    <Button >
        <Dot />
        <Dot />
        <Dot />
    </Button>
  )
}
