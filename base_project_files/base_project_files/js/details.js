
let id;
let url;
let currentCourse = [];

window.onload = (event) => {
    url = new URL(document.URL);
    id = url.searchParams.get('id');
    let temp = request("https://csc205.cscprof.com/courses/" + id);
    currentCourse.push(temp);

    currentCourse = genereateFinalDataSet(currentCourse);
    console.log(currentCourse);
    populate(currentCourse);
}

function checkNull(x){
    if(x != null){
        return x;
    }else{
        return "n/a";
    }
}

function populate(x){
    document.getElementById("title").innerHTML = x[0].Title;
    document.getElementById("code").innerHTML = x[0].code;
    document.getElementById("credit").innerHTML = x[0].Credits + " credits";
    document.getElementById("teacher").innerHTML = x[0].Faculty;
    document.getElementById("time").innerHTML = checkNull(x[0].Time);
    document.getElementById("location").innerHTML = checkNull(x[0].Room);  
}