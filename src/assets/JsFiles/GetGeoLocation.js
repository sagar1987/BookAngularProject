
function getCountry(lati,long,callback) { 
    var xhr = new XMLHttpRequest(); 
    var lat = lati; 
    var lng = long; 
  
    // Paste your LocationIQ token below. 
    xhr.open('GET', " https://us1.locationiq.com/v1/reverse.php?key=pk.b67989bd4a9186606c935b46794f2028&lat=" + 
    lat + "&lon=" + lng + "&format=json", true); 
    xhr.send(); 
    xhr.onreadystatechange = processRequest; 
    xhr.addEventListener("readystatechange", processRequest, false); 
    var country;
    function processRequest(e) { 
        if (xhr.readyState == 4 && xhr.status == 200) { 
            var response = JSON.parse(xhr.responseText); 
            country = response.address.country; 
            console.log("USER_COUNTRY",country); 
            callback(country);
            return; 
        } 
    }
} 
