function flashKey(event){
    let item = document.getElementById(event.code);
    if(item!=null){
    let id = document.getElementById(event.code).id;
    if(id=='Backspace'){
            item.className = `col-2 border m-1 key d-flex flex-column bg-success text-white`;
            setTimeout(()=>{
                item.className = `col-2 border m-1 key d-flex flex-column`;
            },200);
        }else if(id=='Space'){
            item.className = `col-6 border m-1 key d-flex flex-column bg-success text-white`;
            setTimeout(()=>{
                item.className = `col-6 border m-1 key d-flex flex-column`;
            },200);
        }
        else{
            item.className = `col border m-1 key d-flex flex-column bg-success text-white`;
            setTimeout(()=>{
                item.className = `col border m-1 key d-flex flex-column`;
            },200);
        }
    }
    
}


document.getElementById('text').addEventListener('keydown',function(event){
    flashKey(event);
})