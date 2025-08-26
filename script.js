// Login button
document.getElementById("login").addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber= 01733055918
    const pinNumber= 223344
    const mobileValue= parseInt(document.getElementById("mblno").value)

    const pinValue= parseInt(document.getElementById("pin").value)


    if(mobileNumber===mobileValue && pinNumber===pinValue){
       window.location.href="history.html"
    }
    else{
        alert("Invalid Recognization")
    }   

})