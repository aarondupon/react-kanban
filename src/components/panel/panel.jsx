import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin: 10px 20px;
    border-radius: 8px;
    display: inline-block;
    vertical-align: top;
    width: calc(20% - 40px);
    float:left;
    @media (max-width: 1550px) {
        width: calc(25% - 40px);
    }

    /* @media (max-width: 1450px) {
        width: calc(30% - 40px);
    } */
    @media (max-width: 1350px) {
        width: auto;
        float:none;
    }

    background-color: rgb(247,247,247);
    box-shadow: 0px 8px 10px -4px rgba(0,0,0,0.16);
    :hover{
        background:rgb(250,250,250);
        transition:background 200ms;
    }
`;
function Panel({
    items=[], 
    id,
    onMouseDown=()=>{},
    children,
}) {

    return (
        <Container
            data-id={id}
            onMouseDown={onMouseDown}
            >
            {children}
        </Container>
    )
}

Panel.propTypes = {
    item: PropTypes.array,
    id: PropTypes.string.isRequired,
    onMouseDown:PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(
            PropTypes.node
        )])
  };

export default React.memo(Panel)