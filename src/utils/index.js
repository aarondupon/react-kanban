/**
 * Sorts an array, uses a sorted reference array
 * to order the selected array by property value
 * @param  {array} reference
 * @param  {array} data
 * @param  {String} key
 */
export function sort(reference,array,key){
    return  reference.map(val=>array.find((item => String(item[key]) === val)));
  }
  