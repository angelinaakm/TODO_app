document.getElementById("toggleButton").addEventListener("click", function (){
    if (document.getElementById('viewDate').style.display == "none"){ //change page layout to toggle between two dashboards
        document.getElementById('viewDate').style.display = 'block'
    } else {
        document.getElementById('viewDate').style.display = 'none'
    }
})
