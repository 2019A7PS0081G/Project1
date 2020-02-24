anychart.onDocumentReady(function() {
    var data = {
        rows: [
            ["C++","90"],
            ["HTML","75"],
            ["CSS","65"],
            ["JAVASCRIPT","60"],
            ["JQUERY","50"],
        ]
    }
    var chart = anychart.bar();
    chart.data(data);
    chart.title("My Skills");
    chart.container("containe");
    chart.draw();

});
