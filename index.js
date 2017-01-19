// JavaScript File
$(document).ready(function(){
    $("#go").click(function(){
        var searchVal =$("#search").val();
        var part1= "https://api.apixu.com/v1/current.json?"
        var part2= "key=911f6aed16a5435aa46131714171201&q="
        var url= part1 + part2 + searchVal;
        console.log(url);
        $.getJSON(url, function(response){
            console.log(response);
            var weatherUrl= response.current.temp_f +" "+ response.current.humidity+" "+response.current.wind_mph;
            var weather = "<p>'"+ weatherUrl + "'</>"
            console.log(weather);
            $("body").append(weather);
            var temp_f= response.current.temp_f
            if(temp_f<50){
                document.getElementById("body").style.backgroundColor = "blue";
            } else{
                document.getElementById("body").style.backgroundColor = "red";
            }
        });
    });
});

