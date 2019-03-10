import React from 'react'
import ButtonMenu from '../button/button-menu';

export default function ListHeader({
    title='no-title',
    count=0,
}) {  
    const style = {
        width:'100%',
        height:50,
        background:'rgb(248,248,248)',
        borderRadius:'10px 10px',
        boxShadow:'0px 4px 12px -4px rgba(0,0,0,0.32)'
    }
    return (
    <div style={style}>
        <div style={{paddingLeft:10}} >
            <h1  style={{
                float:'left',
                maxWidth:'calc(100% - 100px)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'}} 
            >{title}</h1>
            <h1  style={{float:'left',paddingLeft:10, color:'grey'}} >({count})</h1>
        </div>
        <div style={{float:'right'}}>
            <ButtonMenu/>
        </div>
        
    </div>
    )
}
