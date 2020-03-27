//variable for filter button
let filterButton = d3.select("#filter-btn");
var tableData = data;
//filter variable for date,city
let filterSearchDate = d3.select("#datetime");
let filterSearchCity = d3.select("#city");
let filterSearchState = d3.select("#state");
let filterSearchCountry = d3.select("#country");
let filterSearchshape = d3.select("#shape");
// populate text each time the page is refreshed
let tbody = d3.select("tbody");
//set variable for data columns
let datacolumns = [
    "datetime",
    "city",
    "state",
    "country",
    "shape",
    "durationMinutes",
    "comments"
];
//variable for clear button 
let clearButton = d3.select("#clear-btn");



// filter by date : 
filterButton.on("click", () => {
    //get input value in a variable
    var dateinput = filterSearchDate.property("value");
    var cityinput = filterSearchCity.property("value").toLowerCase();
    var stateinput = filterSearchState.property("value").toLowerCase();
    var countryinput = filterSearchCountry.property("value").toLowerCase();
    var shapeInput = filterSearchshape.property("value").toLowerCase();
    //filter by field matching the input date
    //filter by field matching the input city
    //filter by field matching the input state
    //filter by field matching the input country
    //filter by field matching the input shape
    var userInputDate = data.filter(data =>data.datetime == dateinput);
    var userInputCity = data.filter(data => data.city == cityinput);
    var userInputState = data.filter(data => data.state == stateinput);
    var userInputCountry = data.filter(data=>data.country == countryinput);
    var userInputShape = data.filter(data => data.shape == shapeInput);
    // write the output to a variable for a combination
 


    //console.log 
    console.log(userInputDate);
    console.log(userInputCity);
    console.log(userInputState);
    console.log(userInputCountry);
    console.log(userInputShape);
    
    tbody.text("");
    //condition for date
    if(dateinput ==""){var userInputDate = tableData}
    else {var userInputDate = tableData.filter(data =>data.datetime === dateinput);};
    //condition for city
    if(cityinput ==""){var userInputCity = userInputDate}
    else{var userInputCity = userInputDate.filter(data => data.city === cityinput);};
    //condition for state
    if(stateinput ==""){var userInputState = userInputCity}
    else{var userInputState = userInputCity.filter(data => data.state === stateinput);};
    //condition for country 
    if(countryinput ==""){var userInputCountry = userInputState}
    else{var userInputCountry = userInputState.filter(data=>data.country === countryinput);};
    //condition for shape
    if(shapeInput ==""){var filtereddata = userInputCountry}
    else{var filtereddata = userInputCountry.filter(data => data.shape == shapeInput);};
    


    filtereddata.forEach(dataInput =>{
        var tablerow = tbody.append("tr");
        datacolumns.forEach(column => tablerow.append("td").text(dataInput[column])
        )
    }
        );
    }
);


clearButton.on("click", () => {
    tbody.html("");
    //tablePopulate("")
    console.log("Table reset")
  });