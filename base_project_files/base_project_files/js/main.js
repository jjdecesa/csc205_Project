
/**
 * courses - an array - indicated by the opening and closing [ ]
 * 
 * Each element of the array is a JSON object. { } indicate the start and the end of an object.  In the object are name/value pairs in 
 * the format of "name": "value"  If the value is numeric, the pair can be "name": 4  (no quotes around the number)
 * 
 * This format is JSON or JAvaScript Object Notation - more info here https://www.w3schools.com/js/js_json_intro.asp
 */

let courses = [
    {"Line":81,"Department":"BUS","Number":344,"Section":1,"Title":"MANAGEMENT OF INFORMATION SYSTEMS","Faculty":"Richards, Gordon P.","Openings":2,"Capacity":30,"Status":"Open","Day":"MWF","StartTime":"1:25:00 PM","EndTime":"2:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":3,"Start Date":"8\/30\/2021","End Date":"12\/17\/2021\r\n"}
    ,{"Line":167,"Department":"CSC","Number":133,"Section":2,"Title":"SURVEY OF COMPUTER SCIENCE","Faculty":"Madeira, Scott","Openings":6,"Capacity":15,"Status":"Open","Day":"H","StartTime":"2:00:00 PM","EndTime":"4:50 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":0,"Start Date":"8\/30\/2021","End Date":"12\/17\/2021\r\n"}
    ,{"Line":168,"Department":"CSC","Number":133,"Section":3,"Title":"SURVEY OF COMPUTER SCIENCE","Faculty":"Madeira, Scott","Openings":7,"Capacity":15,"Status":"Open","Day":"T","StartTime":"6:30:00 PM","EndTime":"9:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":0,"Start Date":"8\/30\/2021","End Date":"12\/17\/2021\r\n"}
    ,{"Line":169,"Department":"CSC","Number":133,"Section":"0A","Title":"SURVEY OF COMPUTER SCIENCE","Faculty":"Richards, Gordon P.","Openings":15,"Capacity":45,"Status":"Open","Day":"TH","StartTime":"8:00:00 AM","EndTime":"9:20 AM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 110 Chemistry room","Credits":4,"Start Date":"8\/30\/2021","End Date":"12\/17\/2021\r\n"}
    ,{"Line":170,"Department":"CSC","Number":190,"Section":1,"Title":"HTML","Faculty":"Madeira, Scott","Openings":4,"Capacity":25,"Status":"Open","Day":"M","StartTime":"2:30:00 PM","EndTime":"3:25 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 312A","Credits":1,"Start Date":"8\/30\/2021","End Date":"12\/17\/2021\r\n"}
    ,{"Line":171,"Department":"CSC","Number":205,"Section":1,"Title":"HCI DESIGN & PROGRAMMING","Faculty":"Madeira, Scott","Openings":10,"Capacity":25,"Status":"Open","Day":"MWF","StartTime":"11:15:00 AM","EndTime":"12:10 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":3,"Start Date":"8\/30\/2021","End Date":"12\/17\/2021\r\n"}
    ,{"Line":172,"Department":"CSC","Number":344,"Section":1,"Title":"MANAGEMENT INFORMATION SYSTEM","Faculty":"Poteete, Paul W. Steffine, Aaron","Openings":2,"Capacity":90,"Status":"Open","Day":"MWF","StartTime":"1:25:00 PM","EndTime":"2:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":3,"Start Date":"8\/30\/2021","End Date":"12\/17\/2021\r\n"}
    ,{"Line":173,"Department":"CSC","Number":363,"Section":"E1","Title":"DATABASE SYSTEMS","Faculty":"Hinderliter, Jeffery A","Openings":4,"Capacity":30,"Status":"Open","Day":"T","StartTime":"6:30:00 PM","EndTime":"9:20 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 233 Engineering Lab\/Classroom","Credits":3,"Start Date":"8\/30\/2021","End Date":"12\/17\/2021\r\n"}
    ,{"Line":296,"Department":"HUM","Number":103,"Section":"0A","Title":"INVITATION TO THE HUMANTIES","Faculty":"Miller, Eric John","Openings":12,"Capacity":180,"Status":"Open","Day":"W","StartTime":"11:15:00 AM","EndTime":"12:10 PM","Campus":" Main Campus","Building":" Old Main","Room":" John White Chapel","Credits":0,"Start Date":"8\/30\/2021","End Date":"12\/17\/2021"}
]

//let keysIWant = ["Department","Number","Section","Title","Faculty","Openings","Capaity","Status","Day","StartTime","EndTime","Campus","Room","Credits","Rating"]

let finalSet = [];
let SearchedSet = [];

let table;


/* //this is done in front.js instead
window.onload = (event) => {
courses = request("https://csc205.cscprof.com/courses");
table = document.querySelector("table");

genereateFinalDataSet(courses);
let data = Object.keys(finalSet[0]);

generateTableHead(table, data);
generateTable(table, finalSet);
    
};*/

  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      if(key != 'id'){
        
      

      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
      }
    }

    let th = document.createElement("th");
    let text = document.createTextNode("Details");
    th.appendChild(text);
      row.appendChild(th);
  }

  function generateTable(table, data) {
    let tbody = table.createTBody();
    tbody.setAttribute("id", "class-data");

    for (let element of data) {
      let row = tbody.insertRow();
      for (key in element) {
        if(key != 'id'){
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }
      } 
      //let link = 'window.open("details.html?id=' + element + '")';
      let link = "loadDetails('" + Object.values(element)[0] + "')";
      row.insertCell().innerHTML = "<input type='submit' value='Details' class='Add' onclick=" + link  +">";
      //console.log(t);
    }
  }
  

 function loadDetails(x){
   //console.log(x.toString());
  //window.open("details.html?id="+x);
  
  //let tempDet = request("https://csc205.cscprof.com/courses/" + x);  

  document.getElementById("overlay").style.display = "block";
  document.getElementById("frame").src = "details.html?id=" + x; 


  /*
  document.getElementById("title").innerHTML = "nate is nice";
  document.getElementById("code").innerHTML = coursesSubset[x].Department + " " + coursesSubset[x].Number + " " + coursesSubset[x].Section;
  document.getElementById("credit").innerHTML = "credits: " + coursesSubset[x].Credits;
  document.getElementById("teacher").innerHTML = "Taught by " + coursesSubset[x].Faculty;
  document.getElementById("time").innerHTML = coursesSubset[x].StartTime + " - " + coursesSubset[x].EndTime;
  document.getElementById("location").innerHTML = "location: " + coursesSubset[x].Room;  
  */
 }

function genereateFinalDataSet(dataSet){
  let tempFinal = [];
for(let objectOf of dataSet){
  let temp = {};
  temp.id = objectOf.id;
  temp.code = objectOf.Department + " " + objectOf.Number + " " + objectOf.Section;
  temp.Title = objectOf.Title;
  temp.Faculty = objectOf.Faculty;
  temp.size = objectOf.Openings + "/" + objectOf.Capacity;
  temp.Status = objectOf.Status;
  temp.Day = objectOf.Day;
  if(objectOf.StartTime != null){
    let tempS = objectOf.StartTime;
    let tempE = objectOf.EndTime;
  temp.Time = tempS.substring(0,5) + "-" + tempE.substring(0,5); 
  }else{
    temp.Time = "n/a";
  }
  if(objectOf.Room != null){
  temp.Room = objectOf.Room;
  }else{
    temp.Room = "n/a";
  }
  temp.Credits = objectOf.Credits;
  temp.Rating = objectOf.Rating;
  tempFinal.push(temp);
}
return tempFinal;
//console.log(finalSet);
}

function request(url){
 //console.log(url);
 com = new XMLHttpRequest();
 com.open("GET",url,false);
 com.send();
  return JSON.parse(com.responseText);
}

searchbox = document.getElementById("searchbox");

if (searchbox !=null){
searchbox.oninput = function () {
  search(finalSet);
  
}

searchbox.onfocus = () => {
  document.getElementById("searchbox").classList.add('focused');
}

searchbox.onblur = () => {
  document.getElementById("searchbox").classList.remove('focused');
}
}

function search(data){
let searched = document.getElementById("searchbox").value;
SearchedSet = data.filter(oneClass => Object.keys(oneClass).some(key => String(oneClass[key]).toLowerCase().includes(searched.toLowerCase())));;
console.log(SearchedSet);

let tbody = document.getElementById("class-data");
tbody.remove();

//generateTableHead(table, data);
generateTable(table, SearchedSet);
}

function closeDetails(){
  document.getElementById("overlay").style.display = "none";
}