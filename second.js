document.getElementById("admony").addEventListener("click", function(){
    document.getElementById("add").style.display="block"

    document.getElementById("out").style.display="none"
})

document.getElementById("cout").addEventListener("click", function(){
    document.getElementById("out").style.display="block"

    document.getElementById("add").style.display="none"
})


document.getElementById("trnsfr").addEventListener("click", function(){
    document.getElementById("transfer").style.display="block"

    document.getElementById("add").style.display="none"

    document.getElementById("out").style.display="none"
})


// Additional calculation


document.getElementById("add-btn").addEventListener("click",
    function(e){
        e.preventDefault()

        const inputAmount= parseInt(document.getElementById("moneyadd").value) 
        const mainBalance= parseInt(document.getElementById("available-amount").innerText)

        const totalBalance= inputAmount+mainBalance

        document.getElementById("available-amount").innerText=totalBalance
        
        alert("You added TK")

    }
)


document.getElementById("cashout-btn").addEventListener("click",
    function(e){
        e.preventDefault()

        const inputAmount= parseInt(document.getElementById("cashout-amount").value) 
        const mainBalance= parseInt(document.getElementById("available-amount").innerText)

        const totalBalance=mainBalance-inputAmount

        document.getElementById("available-amount").innerText=totalBalance
        
        alert("Cashout completed successfully")

    }
)


document.getElementById("trnsfr-btn").addEventListener("click",
    function(e){
        e.preventDefault()

        const inputAmount= parseInt(document.getElementById("transfer-amount").value) 
        const mainBalance= parseInt(document.getElementById("available-amount").innerText)

        const totalBalance=mainBalance-inputAmount

        document.getElementById("available-amount").innerText=totalBalance
        
        alert("Transfered successfully")

    }
)



document.getElementById("logout-btn").addEventListener("click", function(){
    window.location.href="index.html"
})