import React from 'react'
import ButtonMenu from './ButtonMenu';

export default function Header(props) {
    const {
        title='no-title',
        count=0,
    } = props
    const style = {
        width:'100%',
        height:70,
        background:'rgb(248,248,248)',
    }
  return (
    <div style={style}>
        <div>
            <h1>{title}</h1>
            <span>{count}</span>
        </div>
        <div>
            <ButtonMenu/>
        </div>
       
    </div>
  )
}
