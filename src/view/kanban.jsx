import React, { useState } from 'react';
import flatMap from 'lodash.flatmap';
import Panel,{PanelHeader} from '../components/panel';
import List from '../components/list/list';
import styled from 'styled-components';
import Sortable from 'react-sortablejs';
import {sort} from '../utils';
import User from '../components/list/view/user';

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
    function updateSelectedData(selectedData) {
        setSelectedData(selectedData);
    }
    return (    
      <Grid 
        className={'grid'}
        onMouseUp={()=>updateSelectedData(null)}
        onDragEnd={()=>updateSelectedData(null)}
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
                itemRender={User}
                items={list.items}  
                onSelectListItem={updateSelectedData} 
                onChange={(order) => updateList(order,key)} 
                />
        </Panel>)}
       </Grid>
    );
}  
