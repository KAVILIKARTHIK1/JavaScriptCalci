let result='';
function Display(value){
    if(result==='Error'){
        result="";
    }
    result+=value;
    document.getElementById('data').value=result;
    
}
function Result(){
    try{
        result=eval(result);
        document.getElementById('data').value=result;
    }
    catch(error){
        document.getElementById('data').value='Error';
    }
}
function Clear(){
    result='';
    document.getElementById("data").value = result;
}