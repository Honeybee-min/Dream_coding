'use stric';
async function loadItems(){
    return fetch('list.json')
    .then(response=>console.log(response));
}


// main 
loadItems()
.then((item)=>{
    //displayItems(item);
    //setEventListenerse(item);

})
.catch(console.log);