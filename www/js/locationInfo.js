var locationInfo = {
  apiUrl: `https://api.opencagedata.com/geocode/v1/json?`,
  apiKey: "69ae4737763149a18be447eb47817ad8",
  city: undefined,
  country: undefined,
  currency: undefined,

  getLocationData: function(coords) {
    var { latitude, longitude } = coords;
    let url = this.apiUrl + `q=${latitude}+${longitude}&key=${this.apiKey}`;
    // console.log(url)
    // alert(url)
    api.fetchData(url, this.onSuccess);
  },
  onSuccess: d => {
    var { country_code, country, city } = d.results[0].components;
    var callingCode = d.results[0].annotations.callingcode;
    var { iso_code, name, symbol } = d.results[0].annotations.currency;
    var { lat, lng } = d.results[0].geometry;

    // assigning data to local variable (this data will be saved in local storage)
    locationInfo.city = city;
    locationInfo.country = country;
    locationInfo.currency = name;

    // update elements content
    helpers.updateElements("city", city);
    helpers.updateElements("country", country);
    helpers.updateElements("country_code", country_code);
    helpers.updateElements("cur_symbol", symbol);
    helpers.updateElements("cur_code", iso_code);
    helpers.updateElements("cur_name", name);
    document.getElementById("callingCode").innerHTML = callingCode;
    document.getElementById("lat").innerHTML = lat;
    document.getElementById("long").innerHTML = lng;

    // update flags content
    helpers.updateImages(
      "local_flag",
      `https://www.countryflags.io/${country_code}/shiny/64.png`
    );
    // initialize converter
    converter.getCurrencyData(iso_code);

    locationInfo.loading(false);
  },
  loading: function(boolean) {
    if (boolean) {
      document.getElementById("loading_location_info").style = "";
      document.getElementById("location_info").style = "display:none;";
    } else {
      document.getElementById("loading_location_info").style = "display:none;";
      document.getElementById("location_info").style = "";
    }
  }
};
