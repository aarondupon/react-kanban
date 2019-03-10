/**
 * creates unique id
 */
function uuidv4() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & (0x3 | 0x8))).toString(16);
    });
  }
  
/**
 * generates dummy data
 * [{
 *    title:String,
 *    items[
 *      {
 *          name:String,
 *          location:String,
 *          age:Number,
 *          gender:String,
 *          thumbnail:String,
 *          rating:Number,
 *          uid:String
 *       }
 *     ]
 * }]
 */
export function generateDummyData(){
    const pannels = ["Applied", "Interview", "Interview 2", "Rejected", "Add to group hired"];
    return pannels.map((listTitle,listKey)=>({
      title:listTitle,
      id:`panel-${uuidv4()}`,
      items:Array.apply(null, Array(4)).map((item,key)=>(
        {
          name: ["Emilia clack","April O'Neil", "Betty Boop", "Lois Griffin", "Wilma Flinstone", "Wonder Wooman", "Lana Kane", "Jessica Rabbit", "Miyuki Ishikawa", "Poisen Ive"][(1+listKey+key)%10],
          location:'Deurne',
          age:30+Math.floor(Math.random()*10),
          gender:Math.round(Math.random())%2 === 1 ? 'Male' :  'Female',
          thumbnail:'/assets/images/dummy.jpg',
          rating:Math.floor(Math.random()*10)/ (1+Math.ceil(Math.random()%2)),
          id:`item-${uuidv4()}`
        }))
    }))
}