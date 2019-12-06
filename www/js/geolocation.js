var geo = {
  onError: function(error, gpsOptions) {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
    // gpsRetry(gpsOptions);
  },
  getLocation: function(callback) {
    let gpsOptions = {
      maximumAge: 300000,
      timeout: 5000,
      enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(
      callback,
      this.onError,
      this.gpsOptions
    );
  }
};
