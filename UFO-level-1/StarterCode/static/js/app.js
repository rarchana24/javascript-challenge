// from data.js
var tableData = data;

// YOUR CODE HERE!
//Variables i m creating based on index.html file
let filterButton = d3.select("#filter-btn");
let filterSearchDate = d3.select("#datetime");
let tbody = d3.select("tbody");
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

//table populateion 
tablePopulate(data);

// Click the button on the search criteria to filter by date

filterButton.on("click",function() {
    var userInputDate = filterSearchDate.property("value");
    //filter the date based on the userInputDate
    var dateFilter = data.filter(data => data.datetime === userInputDate);
    console.log(dateFilter);
    //this will add the filtered data to the table
    tbody.text("");
    tablePopulate(dateFilter);

        


    });




