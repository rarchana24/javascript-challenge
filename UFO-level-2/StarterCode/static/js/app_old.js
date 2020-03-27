// from data.js
//var tableData = data;

// YOUR CODE HERE!
//Variables i m creating based on index.html file
//variable for filter button
let filterButton = d3.select("#filter-btn");
//filter variable for date
let filterSearchDate = d3.select("#datetime");
//filter variable for city
let filterSearchCity = d3.select("#city");
//filter varilable for state
let filterSearchState = d3.select("#state");
//filter varilable for country
let filterSearchCountry = d3.select("#country");
//filter varilable for shape
let filterSearchShape = d3.select("#shape");
//set variable for tbody
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

var tablePopulate = (data) =>{
    data.forEach(dataInput =>{
        var tablerow = tbody.append("tr");
        datacolumns.forEach(column => tablerow.append("td").text(dataInput[column])
        )
    }
        );


}



//table populatiion 
tablePopulate(data);

// Click the button on the search criteria to filter by date

filterButton.on("click",function() {
    var userInputDate = filterSearchDate.property("value");
    //filter the date based on the userInputDate
    var dateFilter = data.filter(data => data.datetime === userInputDate);
    //userInputCity
    var userInputCity = filterSearchCity.property("value");
    // filter the city based on the userInputCity 
    var cityFilter = data.filter(data => data.city === userInputCity);
    //userInputState
    var userInputState = filterSearchState.property("value");
    //filter the state based on the userInputState
    var stateFilter = data.filter(data => data.state === userInputState);
    //userInputCountry 
    var userInputCountry = filterSearchCountry.property("value");
    // filter the country based on the userInputCountry
    var countryFilter = data.filter(data => data.country === userInputCountry);
    //userInputShape
    var userInputShape = filterSearchShape.property("value");
    // filter the shape based on the userInputShape
    var shapeFilter = data.filter(data => data.shape === userInputShape);
    //write the log for dateFilter
    console.log(dateFilter);
    //write the log for cityFilter
    // console.log(cityFilter);
    // //write the log for stateFilter
    // console.log(stateFilter);
    // //write the log for countryFilter
    // console.log(countryFilter);
    // //write the log for shapeFilter
    // console.log(shapeFilter);
    // //filter data consolidation 
    // var filterData = data.filter(data => data.datetime === userInputDate && data.city === userInputCity);
    // console.log(filterData);
    //this will add the filtered data to the table
    tbody.text("");
    // let dataresponse = {filterData,dateFilter,cityFilter,stateFilter,countryFilter,shapeFilter}
    // if(dataresponse.filterData.length !=0){
    //     tablePopulate(filterData);
    // } 
    // else if (dataresponse.dateFilter.length !==0 || dataresponse.cityFilter.length !==0) {
    //         tablePopulate(filterSearchCity) || tablePopulate(filterSearchDate);
    //         //tablePopulate(dateFilter)
    //     }
    //     else {
    //         tbody.append("tr").append("td").text("No results found");

    //     }
    
    

        


    })




