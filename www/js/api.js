var api = {
  method: "GET",
  fetchData: function(url, callback) {
    var http = new XMLHttpRequest();
    console.log(this.method, url);
    http.open(this.method, url);
    http.send();
    http.onreadystatechange = e => {
      var response = http.responseText;
      var responseJSON = JSON.parse(response);
      callback(responseJSON);
    };
  }
};
