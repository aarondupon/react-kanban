import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sortable from 'react-sortablejs';
import ListItemRender from './list-item-render';

const SortableList = styled(Sortable)`
    margin:0;
    padding:0;
    width: 100%;
    height: 100%;
`;

function List({
    onChange=()=>{},
    items=[],
    onSelectListItem=()=>{},
    itemRender,
}) {
    const listItems = items.map((val, key) => 
        <ListItemRender
            itemRender={itemRender}
            onMouseDown={(e)=>onSelectListItem(val)}
            last={key === items.length-1}
            key={key} 
            value={val}
        />);
    return (
        <SortableList 
            options={{
                animation: 150,
                group: {
                    name: 'sortable-list-group',
                },
                forceFallback: true,

            }}
            tag="ul" 
            onChange={onChange}
            >
            {listItems}
        </SortableList>
  )
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    itemRender: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onSelectListItem: PropTypes.func.isRequired,
};

export default React.memo(List);
