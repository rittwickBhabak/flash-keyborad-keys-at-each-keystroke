function isAlpha(x){
    let regx = /[A-Za-z]/
    return regx.test(x);
}
function isNum(x){
    let regx = /[0-9]/
    return regx.test(x);
}
let capsOn = false;
// let keys = document.getElementsByClassName('key');
// for(let key of keys){
//     let keyId = key.id;
//     key.addEventListener('click',function(event){
//         console.log(capsOn);
//         console.log(keyId);
//     })
// }
let previousLength = 0;
document.getElementById('text').addEventListener('keydown',function(event){
    if(event.code=='CapsLock'){
        console.log("Caps lock is pressed")
        document.getElementById('keyCaps').className = "col border m-1 key bg-success text-white";
        setTimeout(()=>{
            document.getElementById('keyCaps').className = "col border m-1 key";
        }, 200);
    }
    else if(event.code=='Backspace'){
        console.log("Back space is pressed")
        document.getElementById('keyback').className = "col-2 key border m-1 d-flex flex-column bg-success text-white";
        setTimeout(()=>{
            document.getElementById('keyback').className = "col-2 key border m-1 d-flex flex-column";
        }, 200);
    }
    else if(event.code=='Tab'){
        event.preventDefault();
        console.log('tab pressesed');
        document.getElementById('keytab').className = "col border m-1 key d-flex flex-column bg-success text-white";
        setTimeout(()=>{
            document.getElementById('keytab').className = "col border m-1 key d-flex flex-column";
        }, 200);
    }
    else if(event.code=='ControlLeft')
    {
        document.getElementById('key'+event.code).className= 'col border m-1 key bg-success text-white';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='col border m-1 key';
            
        },200)            
    }
    else if(event.code=='MetaLeft')
    {
        document.getElementById('key'+event.code).className= 'col border m-1 key bg-success text-white';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='col border m-1 key';
            
        },200)            
    }
    else if(event.code=='AltLeft')
    {
        document.getElementById('key'+event.code).className= 'col border m-1 key bg-success text-white';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='col border m-1 key';
            
        },200)            
    }
    else if(event.code=='AltRight')
    {
        document.getElementById('keyAltRight').className= 'col border m-1 key bg-success text-white';
        setTimeout(()=>{
            document.getElementById('keyAltRight').className='col border m-1 key';
            
        },200)            
    }
    else if(event.code=='MetaRight')
    {
        document.getElementById('key'+event.code).className= 'col border m-1 key bg-success text-white';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='col border m-1 key';
            
        },200)            
    }
    else if(event.code=='ControlRight')
    {
        document.getElementById('key'+event.code).className= 'col border m-1 key bg-success text-white';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='col border m-1 key';
            
        },200)            
    }
    else if(event.code=='ShiftLeft')
    {
        document.getElementById('key'+event.code).className= 'col border m-1 key bg-success text-white';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='col border m-1 key';
            
        },200)            
    }
    else if(event.code=='ShiftRight')
    {
        document.getElementById('key'+event.code).className= 'col border m-1 key bg-success text-white';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='col border m-1 key';
            
        },200)            
    }
    else if(event.code=='Enter')
    {
        document.getElementById('keyenter').className= 'col border m-1 key bg-success text-white';
        setTimeout(()=>{
            document.getElementById('keyenter').className='col border m-1 key';
            
        },200)            
    }
    else{
        console.log('from keydown, not assigned till now')
    }
})
document.getElementById('text').addEventListener('keyup',function(event){
    if(previousLength<event.target.value.length){
        
        let lastChar = event.target.value[event.target.value.length-1];
        capsOn = event.getModifierState('CapsLock');
        if(isAlpha(lastChar)){
            let keyId = 'key' + lastChar.toUpperCase();
            document.getElementById(keyId).className = 'col border m-1 key bg-success text-white';
            setTimeout(()=>{
                document.getElementById(keyId).className = 'col border m-1 key';
            },300);
        }
        else if(event.code=='Space')
        {
            document.getElementById('keyspace').className= 'col-6 border m-1 key bg-success text-white';
            setTimeout(()=>{
                document.getElementById('keyspace').className='col-6 border m-1 key';
                
            },200)            
        }
        
        else
        {
            console.log('not assigned till now');
        }
        
    }
    else if(previousLength>event.target.value.length || event.code=='Backspace'){
        console.log("Back space is pressed")
        document.getElementById('keyback').className = "col-2 key border m-1 d-flex flex-column bg-success text-white";
        setTimeout(()=>{
            document.getElementById('keyback').className = "col-2 key border m-1 d-flex flex-column";
        }, 200);
    }
    

    else{
        console.log('White character, not assigned till now');
        console.log(event);
    }
    previousLength = event.target.value.length;
    
})