import React, { useState } from "react";
import styled from "styled-components";
import Sortable from "react-sortablejs";
import Panel, { PanelHeader } from "../common/panel";
import List from "../common/list";
import UserItem from "../common/user-item";
import { updatePanels, updateList } from "./actions";

import "./kanban.css";

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
export default function Kanban({ data: initialData }) {
  const [selectedData, setSelectedData] = useState(null);
  const [data, setData] = useState(initialData);
  return (
    <Grid
      className={"grid"}
      onMouseUp={() =>
        setTimeout(() => setSelectedData(null), 0)
      } /* fix - event bubbling order safari */
      options={{
        group: {
          name: "grid-group"
        },
        filter: "ul",
        preventOnFilter: false
      }}
      onChange={updatePanels}
    >
      {data.map(({ items, title, id }, key) => (
        <Panel id={id} key={key}>
          <PanelHeader title={title} count={items.length} />
          <List
            itemRender={UserItem}
            items={items}
            onSelectListItem={setSelectedData}
            onChange={order =>
              updateList(order, key, data, selectedData, setData)
            }
          />
        </Panel>
      ))}
    </Grid>
  );
}
