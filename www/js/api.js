var api = {
  method: "GET",
  fetchData: function(url, callback) {
    var http = new XMLHttpRequest();
    console.log(this.method, url);
    http.open(this.method, url, true);
    http.onreadystatechange = () => {
      if (http.readyState == 4) {
        if (http.status == 200 || http.status == 0) {
          var response = http.responseText;
          var responseJSON = JSON.parse(response);
          callback(responseJSON);
        } 
        else{
          var response = http.responseText;
          var responseJSON = JSON.parse(response);
          alert(responseJSON)
        }
      }
    };
    http.send();
  }
};
