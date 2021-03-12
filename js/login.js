let emailSignUp = document.getElementById("emailSignUp");
let welcome= document.getElementById("welcome");
let dataArray;


function load()
{ 
    if((localStorage.getItem("usersData"))==null)
    {
        dataArray=[];
    }

    else
    {
         dataArray=JSON.parse(localStorage.getItem("usersData"));
    }
   
}
window.onload=load;



function addNewUser()
{
    let nameSignUp = document.getElementById("nameSignUp");
    let passwordSignUp = document.getElementById("passwordSignUp");
    let registAlert = document.getElementById("registAlert");
   
    if(signUpCheck()==true)
    {
        registAlert.innerHTML="email already exists";
        registAlert.style.display="block";

    }
    
    else
    {
        let user={
            name:nameSignUp.value,
            email:emailSignUp.value,
            password:passwordSignUp.value
        };
        dataArray.push(user);
        localStorage.setItem("usersData",JSON.stringify(dataArray));

        registAlert.innerHTML="Success";
        registAlert.style.display="block";
    }
    console.log(dataArray);

}

function signInCheck()
{
    let emailSignIn = document.getElementById("emailSignIn");
    let passwordSignIn = document.getElementById("passwordSignIn");

    for(let i=0;i<dataArray.length;i++)
    {
        if(emailSignIn.value == dataArray[i].email)
        {
            if(passwordSignIn.value == dataArray[i].password)
            {
                let welcomeName = document.getElementById("welcomeName");
                welcomeName.innerHTML="Welcome "+dataArray[i].name ;
                return true;
            }
              
        }  
    }
    
}


function logIn()
{
    let signIn = document.getElementById("signIn");
    if(signInCheck()==true)
    {
        signIn.style.display="none";
        welcome.style.display="block";
       
    }

   else
   {
        let loginAlert = document.getElementById("loginAlert");
        loginAlert.innerHTML="incorrect email or password";
        loginAlert.style.display="block";
   }
   
   
}


function logOut()
{
    window.location.replace("login.html");
    welcome.style.display="none";
}


function signUpCheck()
{
    for(let i=0;i<dataArray.length;i++)
    {
        if(emailSignUp.value == dataArray[i].email)
        {
            return true; 
        }
    }
}




