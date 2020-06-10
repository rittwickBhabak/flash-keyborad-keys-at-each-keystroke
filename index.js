function isAlpha(x){
    let regx = /[A-Za-z]/
    return regx.test(x);
}
function isNum(x){
    let regx = /[0-9]/
    return regx.test(x);
}
let capsOn = false;
let keys = document.getElementsByClassName('key');
for(let key of keys){
    let keyId = key.id;
    key.addEventListener('click',function(event){
        console.log(capsOn);
        console.log(keyId);
    })
}
let previousLength = 0;
document.getElementById('text').addEventListener('keyup',function(event){
    // console.log(event.target.value.length);
    if(previousLength!=event.target.value.length){
        let lastChar = event.target.value[event.target.value.length-1];
        console.log(lastChar);
        capsOn = event.getModifierState('CapsLock');
        if(isAlpha(lastChar)){
            let keyId = 'key' + lastChar.toUpperCase();
            document.getElementById(keyId).className = 'col border m-1 key bg-success text-white';
            setTimeout(()=>{
                document.getElementById(keyId).className = 'col border m-1 key';
            },300);
        }
        previousLength = event.target.value.length;
    }
    
    else if(event.code=='keyControlLeft')
    {
        document.getElementById('key'+event.code).className= '';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='';
            
        },200)            
    }
    else if(event.code=='keyMetaLeft')
    {
        document.getElementById('key'+event.code).className= '';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='';
            
        },200)            
    }
    else if(event.code=='keyAltLeft')
    {
        document.getElementById('key'+event.code).className= '';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='';
            
        },200)            
    }
    else if(event.code=='keyspace')
    {
        document.getElementById('key'+event.code).className= '';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='';
            
        },200)            
    }
    else if(event.code=='keyAltRight')
    {
        document.getElementById('key'+event.code).className= '';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='';
            
        },200)            
    }
    else if(event.code=='keyMetaRight')
    {
        document.getElementById('key'+event.code).className= '';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='';
            
        },200)            
    }
    else if(event.code=='keyControlRight')
    {
        document.getElementById('key'+event.code).className= '';
        setTimeout(()=>{
            document.getElementById('key' + event.code).className='';
            
        },200)            
    }

    else{
        console.log(event.code);
    }
    
})