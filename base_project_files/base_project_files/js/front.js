

window.onload = (event) => {
    courses = request("https://csc205.cscprof.com/courses");
    table = document.querySelector("table");
    //let table = document.getElementById("courseTable");
    
    finalSet = genereateFinalDataSet(courses);
    let data = Object.keys(finalSet[0]);
    
    generateTableHead(table, data);
    generateTable(table, finalSet);
        
    };