import flatMap from "lodash.flatmap";
import { sort } from "../../utils";

export function updateList(order, id, data, selectedData, setData) {
  if (data && data.length > 0) {
    const items = flatMap(data, list => list.items); // could be cached with memoization funcition
    const newitems = sort(order, [...items, selectedData], "id");
    data[id].items = newitems;
    setData(data);
  }
}
export function updatePanels(order, data, selectedData, setData) {
  if (data && data.length > 0) {
    const newData = sort(order, [...data, selectedData], "id");
    setData(newData);
  }
}
