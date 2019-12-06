/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    // weather.getWeatherData()
    app.receivedEvent("deviceready");

    //
  },
  receivedEvent: function() {
    // init repository
    repository.start();
    //get gps location and feeds weather and localInfo controllers
    geo.getLocation(position => {
      weather.getWeatherData(position.coords);
      locationInfo.getLocationData(position.coords);
    });
    //create camera folder

    // config camera
    camera.destinationType = navigator.camera.DestinationType;

    // init menu
    app.initMenu();
  },

  initMenu() {
    var listDataBtn = document.getElementById("listDataBtn");
    var saveBtn = document.getElementById("saveBtn");
    var cameraBtn = document.getElementById("cameraBtn");
    listDataBtn.onclick = e => {
      repository.getAll(function(data) {
        let buildHtml = "";
        for (let index = 0; index < data.length; index++) {
          buildHtml = buildHtml + helpers.buildListItem(data.item(index));
        }
        document.getElementById("listDataDisplay").innerHTML = buildHtml;
      });
      var instance = M.Modal.getInstance(document.getElementById("listData"));
      instance.open();
    };
    saveBtn.onclick = e => {
      console.log(converter.quotation);
      let obj = {
        city: locationInfo.city,
        country: locationInfo.country,
        currency: locationInfo.currency,
        quotation: converter.quotation,
        temp: weather.temp
      };
      repository.saveData(obj);
    };
    cameraBtn.onclick = () => {
      // console.log(camera)
      camera.capturePhoto();
    };
  }
};
