var camera = {
  destinationType: undefined,
  capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string

    navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
      quality: 50,
      destinationType: camera.destinationType.FILE_URI,
      saveToPhotoAlbum: true
    });
  },

  // Called when a photo is successfully retrieved
  //
  onPhotoDataSuccess(imageData) {
    alert("Picture saved to your gallery successfully!");
  },

  // Called if something bad happens.
  //
  onFail(message) {
    alert("Failed because: " + message);
  }
};
