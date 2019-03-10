import React, { useState } from 'react';
import flatMap from 'lodash.flatmap';
import styled from 'styled-components';
import Sortable from 'react-sortablejs';
import Panel,{PanelHeader} from '../common/panel';
import List from '../common/list';
import UserItem from '../common/user-item';
import {sort} from '../../utils';


import './kanban.css'; 

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

    return (    
      <Grid 
        className={'grid'}
        onMouseUp={()=>setSelectedData(null)}
        onDragEnd={()=>setSelectedData(null)}
        options={{
            group: {
                name: 'list-group',
            },
        }}
        onChange={updatePanels}
        >
       {data.map((list, key)=>
        <Panel
            id={list.id} 
            key={key} 
            >
            <PanelHeader title={list.title}  count={list.items.length} />
            <List 
                itemRender={UserItem}
                items={list.items}  
                onSelectListItem={setSelectedData} 
                onChange={(order) => updateList(order,key)} 
                />
        </Panel>)}
       </Grid>
    );
}  
