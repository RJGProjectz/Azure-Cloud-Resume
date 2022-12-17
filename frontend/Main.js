window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount()
})

const functionAPi = '';

const getVisitCount = () => {
    let count = 30;
    fetch (functionAPi).then (Response => {
        return Response.json()

    }).then(response => {
        console.log("website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log (error);
    });
    return count;      

}