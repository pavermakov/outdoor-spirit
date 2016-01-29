

function ResetForm(){
    document.getElementsByName('firstname')[0].value='';
    document.getElementsByName('lastname')[0].value='';
    document.getElementsByName('age')[0].value='';
    document.getElementsByName('gender')[0].checked=false;
    document.getElementsByName('gender')[1].checked=false;
    document.getElementsByName('email')[0].value='';
    document.getElementsByName('comments')[0].value='';
    
    var confirm = document.getElementById('confirmation');
    confirm.style.opacity='0';
    confirm.style.transition='all linear 0.5s';  

}

function SubmitForm(){
    /*document.getElementsByName('firstname')[0].value='';
    document.getElementsByName('lastname')[0].value='';
    document.getElementsByName('age')[0].value='';
    document.getElementsByName('gender')[0].checked=false;
    document.getElementsByName('gender')[1].checked=false;
    document.getElementsByName('email')[0].value='';
    document.getElementsByName('comments')[0].value='';*/
    
    var confirm = document.getElementById('confirmation');
    confirm.style.opacity='1';
    confirm.style.transition='all linear 0.5s';       
}