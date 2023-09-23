let result='';
function Display(value){
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