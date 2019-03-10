import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.div`
  width:64px;
  height:64px;
  border-radius:50%;
  float: left;
  border: 2px solid rgba(88, 199, 255,${props=>props.hover ? 1:0});
  background: grey url('${props=>props.src}');
  background-size:110%;
  background-position: center center;
  transition: background-size 150ms ease-in;
`;
export default function Thumbnail({style={},src, hover=false}) {
  return (
    <Img className='thumbnail' src={src} hover={hover} style={style} />
  )
}

Thumbnail.propTypes = {
  style: PropTypes.any,
  src:PropTypes.string,
  hover: PropTypes.bool,
};