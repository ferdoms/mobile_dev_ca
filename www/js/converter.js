var converter = {
  apiUrl: `http://apilayer.net/api/live`,
  apiKey: "fe40a7704d42efaa29a8205882258f71",
  iso_code: undefined,
  quotation: undefined,

  getCurrencyData: function(iso_code) {
    this.iso_code = iso_code;
    var url =
      this.apiUrl +
      "?access_key=" +
      this.apiKey +
      "&currencies=" +
      this.iso_code +
      "&source=USD&format=1";
    // console.log(url)
    // alert(url)
    api.fetchData(url, this.onSuccess);
  },
  localToDollar: function(amount) {
    if (this.quotation) return amount / this.quotation;
    // else return amount * 1.25
  },
  dollarToLocal: function(amount) {
    if (this.quotation) return amount * this.quotation;
    // else return amount * 1.25
  },
  onSuccess: d => {
    // assigning data to local variable (this data will be saved in local storage)
    converter.quotation = d.quotes[`USD${converter.iso_code}`];
    
    converter.listeningCurrencyChanges();
    converter.loading(false);
    
  },
  listeningCurrencyChanges: function() {
    document.getElementById("to_usd_currency").onchange = e => {
      let amount = e.target.value;
      let convert = converter.localToDollar(amount);
      document.getElementById("converted").innerHTML = convert.toFixed(2);
    };
    document.getElementById("to_local_currency").onchange = e => {
      let amount = e.target.value;
      let convert = converter.dollarToLocal(amount);
      document.getElementById("converted2").innerHTML = convert.toFixed(2);
    };
  },
  loading: function(boolean) {
    if (boolean) {
      document.getElementById("loading_converter").style = "";
      document.getElementById("converter").style = "display:none;";
    } else {
      document.getElementById("loading_converter").style = "display:none;";
      document.getElementById("converter").style = "";
    }
  }
};
