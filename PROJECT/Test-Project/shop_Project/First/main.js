'use stric';
async function loadItems(){
    return fetch('list.json')           // fetch : url 을 받고 promise type의 객체를 던진다
    .then(response=>response.json())    // 사용가능하게 스트림을 변환한다 
    .then(json=>json.items);            // 해당 스트림(json) 안에서 items만 최종적으로 뱉어낸다
}

function displayItems(items){
    const contianer = document.querySelector(".items"); // class = "items" 의 contianer 를 찾는다 
    contianer.innerHTML=items.map(item=>createHtmlString(item)).join(''); 
    // 내가 이해한 것 : container 에 innterHTML function 으로 string 을 끼워넣어준다 끼워넣는 string 값은 ? 
    // items 를 받아서 map(배열을 한 인덱스씩 다시 가공후 다시 배열을 뱉어낸다)
    // createHtmlString함수에 배열에 한 인덱스씩 던져준다 그러면 그 함수에서 item안에 파라미터들을 뽑아서 새로 만든 string을 던져준다
    // 그걸 다 받은 배열을 최종적으로 join(''을 붙이면 구분자(,)를 없이 string화 해준다) 해서 return 한다
}   

function createHtmlString(item){
    return `
    <li>
    <img class="dress_img "src="${item.img}" alt="핑크티">
    <div class="sex">${item.sex}</div>
    <div class="dress_size">${item.size}</div>
    </li>
    `
}

function setEventListenerse(items){
    const logo = document.querySelector(".logo");
    const buttons = document.querySelector();
    logo.addEventListener('click',()=>displayItems(itmes));
}


// main 
loadItems()
.then((items)=>{            // 최종적으로 json안에 items만 받아내서 displayitems , setEventListners에 던져준다
    displayItems(items);
    setEventListenerse(items);

})
.catch(console.log);