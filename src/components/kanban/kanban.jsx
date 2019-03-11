import React, { useState } from 'react';
import flatMap from 'lodash.flatmap';
import styled from 'styled-components';
import Sortable from 'react-sortablejs';
import Panel,{PanelHeader} from '../common/panel';
import List from '../common/list';
import UserItem from '../common/user-item';
import {sort} from '../../utils';


import './kanban.css'; 
// const Grid = styled.div`
const Grid = styled(Sortable)`
    padding: 0;
    width: calc(100% - 40px);
    @media (max-width: 1350px) {
        column-fill: initial;
        column-width: 320px; 
        column-count: 5;
        column-gap: 1em;
    }
`;

/**
 * Kanban: 
 * almost pure fuctional component (can be better optimized)
 * you can drag drop items & pannels
 * 
 * @param {*} {data:initialData}
 * @returns
 */
export default function Kanban({data:initialData}){
    const [selectedData, setSelectedData] = useState(null);
    const [data, setData] = useState(initialData);
    
    function updateList(order,id){
        const items = flatMap(data,list=>list.items); // could be cached with memoization funcition
        const newitems = sort(order,[...items, selectedData],'id');
        data[id].items = newitems;
        setData(data);
    }
    function updatePanels(order){
        const  newData = sort(order,[...data, selectedData],'id');
        setData(newData)
    }
    console.log('selectedData',selectedData)
    return (    
      <Grid 
        className={'grid'}
        onMouseUp={()=>setSelectedData(null)}
        options={{
            group: {
                name: 'grid-group',
            },
            filter: "ul",
            preventOnFilter: false, 
            forceFallback: true,
        }}
        onChange={updatePanels}
        >
       {data.map(({items,title,id}, key)=>
        <Panel
            id={id} 
            key={key} 
            >
            <PanelHeader title={title}  count={items.length} />
            <List 
                itemRender={UserItem}
                items={items}  
                onSelectListItem={setSelectedData} 
                onChange={(order) => updateList(order,key)} 
                />
        </Panel>)}
       </Grid>
    );
}  
