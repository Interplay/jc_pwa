// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


(function() {
  'use strict';

  var app = {
    isLoading: true,
    visibleCards: {},
    selectedCities: [],
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),
    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  };


  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/

  // document.getElementById('butRefresh').addEventListener('click', function() {
  //   // Refresh all of the forecasts
  //   app.updateForecasts();
  // });

  // document.getElementById('butAdd').addEventListener('click', function() {
  //   // Open/show the add new city dialog
  //   app.toggleAddDialog(true);
  // });

  // document.getElementById('butAddCity').addEventListener('click', function() {
  //   // Add the newly selected city
  //   var select = document.getElementById('selectCityToAdd');
  //   var selected = select.options[select.selectedIndex];
  //   var key = selected.value;
  //   var label = selected.textContent;
  //   // TODO init the app.selectedCities array here
  //   if (!app.selectedCities) {
  //     app.selectedCities = [];  
  //   }
  //   app.getForecast(key, label);
  //   // TODO push the selected city to the array and save here
  //   app.selectedCities.push({key: key, label: label});
  //   app.saveSelectedCities();
  //   app.toggleAddDialog(false);
  // });

  // document.getElementById('butAddCancel').addEventListener('click', function() {
  //   // Close the add new city dialog
  //   app.toggleAddDialog(false);
  // });

  if (typeof(jQuery) === 'undefined') {
  var jQuery;
  // Check if require is a defined function.
  if (typeof(require) === 'function') {
    jQuery = $ = require('jquery');
  // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
};
  app.showWomensSpring = function() {
   var div = document.getElementById('wSpringCard');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
  };

  app.showWomensSummer = function() {
   var div = document.getElementById('wSummerCard');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
  };

  app.showWomensFall = function() {
   var div = document.getElementById('wFallCard');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
  };

  app.showWomensWinter = function() {
   var div = document.getElementById('wWinterCard');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
  };

  document.getElementById('btnWomensStyleGuide').addEventListener('click', function() {
    setTimeout(function(){app.removeTitleCard();},300);
    //app.createWomensCard();
    app.showWomensSpring();
    app.showWomensSummer();
    app.showWomensFall();
    app.showWomensWinter();
    //console.log(app.showWomens(wCard));
  });

  

  app.removeTitleCard = function() {
    var elem = document.getElementById('titleCard');
    elem.remove();
  };

  app.createWomensCard= function() {
    

    var womensCardShell = document.createElement("div");
    womensCardShell.setAttribute('id',"womensCard");
    womensCardShell.setAttribute('class', "col m6");
    

    var womensCard = document.createElement("div");
    womensCard.setAttribute('class', "card");

    var imageDiv = document.createElement("div");
    imageDiv.setAttribute('class', "card-image");

    var womensCardImage = document.createElement("img");
    womensCardImage.setAttribute('src',"http://www.partideas.com/wp-content/uploads/2015/03/Filipino-Party-Food-Ideas-Shrimp-and-Sea-Food.jpg");
    womensCardImage.setAttribute('height', "256");
    womensCardImage.setAttribute('width',"256");

    var cardContent = document.createElement("div");
    cardContent.setAttribute('class', "card-content");

    var carinit = document.createElement("div");
    carinit.setAttribute('class', "carousel initialized");


    var womensCarousel = document.createElement("div");
    womensCarousel.setAttribute('class', "carousel");

    

    var womensImage1 = document.createElement("a");
    womensImage1.setAttribute('class',"carousel-item");
    womensImage1.setAttribute('href',"#one!");
    womensImage1.setAttribute('id', "c-item");

    var wi1 = document.createElement("img");
    wi1.setAttribute('src',"https://i.s-jcrew.com/is/image/jcrew/G6990_WQ1993_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=636&hei=636");
    

    var womensImage2 = document.createElement("a");
    womensImage2.setAttribute('class',"carousel-item");
    womensImage2.setAttribute('href',"#one!");
    womensImage2.setAttribute('id', "c-item");

    var wi2 = document.createElement("img");
    wi2.setAttribute('src',"https://i.s-jcrew.com/is/image/jcrew/G6433_GY6390_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=636&hei=636");


    var womensImage3 = document.createElement("a");
    womensImage3.setAttribute('class',"carousel-item");
    womensImage3.setAttribute('href',"#one!");
    womensImage3.setAttribute('id', "c-item");

    var wi3 = document.createElement("img");
    wi3.setAttribute('src',"https://i.s-jcrew.com/is/image/jcrew/G6990_WQ1993_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=636&hei=636");
    

    var womensImage4 = document.createElement("a");
    womensImage4.setAttribute('class',"carousel-item");
    womensImage4.setAttribute('href',"#one!");
    womensImage4.setAttribute('id', "c-item");

    var wi4 = document.createElement("img");
    wi4.setAttribute('src',"https://lorempixel.com/250/250/nature/2");
    
    var womensImage5 = document.createElement("a");
    womensImage5.setAttribute('class',"carousel-item");
    womensImage5.setAttribute('href',"#one!");
    womensImage5.setAttribute('id', "c-item");

    var wi5 = document.createElement("img");
    wi5.setAttribute('src',"https://i.s-jcrew.com/is/image/jcrew/G6990_WQ1993_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=636&hei=636");
      

    var parentElement = document.getElementById('appShell');
    
    parentElement.appendChild(womensCardShell);
    womensCardShell.appendChild(womensCard);
    womensCard.appendChild(imageDiv);
    imageDiv.appendChild(womensCardImage);

    womensCard.appendChild(womensImage1);
    womensCard.appendChild(womensImage2);
    womensCard.appendChild(womensImage3);
    womensCard.appendChild(womensImage4);
    

    womensCarousel.appendChild(womensImage5);
    womensCarousel.appendChild(womensImage4);
    womensCarousel.appendChild(womensImage3);
    womensCarousel.appendChild(womensImage2);
    womensCarousel.appendChild(womensImage1);
    
    womensImage1.appendChild(wi1);
    womensImage2.appendChild(wi2);
    womensImage3.appendChild(wi3);
    womensImage4.appendChild(wi4);
    womensImage5.appendChild(wi5);

    cardContent.appendChild(carinit);
    carinit.appendChild(womensCarousel);
    
  };

  app.reInit = function() {

  }

  /*****************************************************************************
   *
   * Methods to update/refresh the UI
   *
   ****************************************************************************/

  // // Toggles the visibility of the add new city dialog.
  // app.toggleAddDialog = function(visible) {
  //   if (visible) {
  //     app.addDialog.classList.add('dialog-container--visible');
  //   } else {
  //     app.addDialog.classList.remove('dialog-container--visible');
  //   }
  // };

  // Updates a weather card with the latest weather forecast. If the card
  // doesn't already exist, it's cloned from the template.
 


  /*****************************************************************************
   *
   * Methods for dealing with the model
   *
   ****************************************************************************/

  /*
   * Gets a forecast for a specific city and updates the card with the data.
   * getForecast() first checks if the weather data is in the cache. If so,
   * then it gets that data and populates the card with the cached data.
   * Then, getForecast() goes to the network for fresh data. If the network
   * request goes through, then the card gets updated a second time with the
   * freshest data.
   */
  // app.getForecast = function(key, label) {
  //   var statement = 'select * from weather.forecast where woeid=' + key;
  //   var url = 'https://query.yahooapis.com/v1/public/yql?format=json&q=' +
  //       statement;
  //   // TODO add cache logic here
  //       if ('caches' in window) {
  //     /*
  //      * Check if the service worker has already cached this city's weather
  //      * data. If the service worker has the data, then display the cached
  //      * data while the app fetches the latest data.
  //      */
  //     caches.match(url).then(function(response) {
  //       if (response) {
  //         response.json().then(function updateFromCache(json) {
  //           var results = json.query.results;
  //           results.key = key;
  //           results.label = label;
  //           results.created = json.query.created;
  //           app.updateForecastCard(results);
  //         });
  //       }
  //     });
  //   }
  //   // Fetch the latest data.
  //   var request = new XMLHttpRequest();
  //   request.onreadystatechange = function() {
  //     if (request.readyState === XMLHttpRequest.DONE) {
  //       if (request.status === 200) {
  //         var response = JSON.parse(request.response);
  //         var results = response.query.results;
  //         results.key = key;
  //         results.label = label;
  //         results.created = response.query.created;
  //         app.updateForecastCard(results);
  //       }
  //     } else {
  //       // Return the initial weather forecast since no data is available.
  //       app.updateForecastCard(initialWeatherForecast);
  //     }
  //   };
  //   request.open('GET', url);
  //   request.send();
  // };

  // // Iterate all of the cards and attempt to get the latest forecast data
  // app.updateForecasts = function() {
  //   var keys = Object.keys(app.visibleCards);
  //   keys.forEach(function(key) {
  //     app.getForecast(key);
  //   });
  // };

  // // TODO add saveSelectedCities function here

  //   // Save list of cities to localStorage.
  // app.saveSelectedCities = function() {
  //   var selectedCities = JSON.stringify(app.selectedCities);
  //   localStorage.selectedCities = selectedCities;
  // };

  // app.getIconClass = function(weatherCode) {
  //   // Weather codes: https://developer.yahoo.com/weather/documentation.html#codes
  //   weatherCode = parseInt(weatherCode);
  //   switch (weatherCode) {
  //     case 25: // cold
  //     case 32: // sunny
  //     case 33: // fair (night)
  //     case 34: // fair (day)
  //     case 36: // hot
  //     case 3200: // not available
  //       return 'clear-day';
  //     case 0: // tornado
  //     case 1: // tropical storm
  //     case 2: // hurricane
  //     case 6: // mixed rain and sleet
  //     case 8: // freezing drizzle
  //     case 9: // drizzle
  //     case 10: // freezing rain
  //     case 11: // showers
  //     case 12: // showers
  //     case 17: // hail
  //     case 35: // mixed rain and hail
  //     case 40: // scattered showers
  //       return 'rain';
  //     case 3: // severe thunderstorms
  //     case 4: // thunderstorms
  //     case 37: // isolated thunderstorms
  //     case 38: // scattered thunderstorms
  //     case 39: // scattered thunderstorms (not a typo)
  //     case 45: // thundershowers
  //     case 47: // isolated thundershowers
  //       return 'thunderstorms';
  //     case 5: // mixed rain and snow
  //     case 7: // mixed snow and sleet
  //     case 13: // snow flurries
  //     case 14: // light snow showers
  //     case 16: // snow
  //     case 18: // sleet
  //     case 41: // heavy snow
  //     case 42: // scattered snow showers
  //     case 43: // heavy snow
  //     case 46: // snow showers
  //       return 'snow';
  //     case 15: // blowing snow
  //     case 19: // dust
  //     case 20: // foggy
  //     case 21: // haze
  //     case 22: // smoky
  //       return 'fog';
  //     case 24: // windy
  //     case 23: // blustery
  //       return 'windy';
  //     case 26: // cloudy
  //     case 27: // mostly cloudy (night)
  //     case 28: // mostly cloudy (day)
  //     case 31: // clear (night)
  //       return 'cloudy';
  //     case 29: // partly cloudy (night)
  //     case 30: // partly cloudy (day)
  //     case 44: // partly cloudy
  //       return 'partly-cloudy-day';
  //   }
  // };

  // /*
  //  * Fake weather data that is presented when the user first uses the app,
  //  * or when the user has not saved any cities. See startup code for more
  //  * discussion.
  //  */
  // var initialWeatherForecast = {
  //   key: '2459115',
  //   label: 'New York, NY',
  //   created: '2016-07-22T01:00:00Z',
  //   channel: {
  //     astronomy: {
  //       sunrise: "5:43 am",
  //       sunset: "8:21 pm"
  //     },
  //     item: {
  //       condition: {
  //         text: "Windy",
  //         date: "Thu, 21 Jul 2016 09:00 PM EDT",
  //         temp: 56,
  //         code: 24
  //       },
  //       forecast: [
  //         {code: 44, high: 86, low: 70},
  //         {code: 44, high: 94, low: 73},
  //         {code: 4, high: 95, low: 78},
  //         {code: 24, high: 75, low: 89},
  //         {code: 24, high: 89, low: 77},
  //         {code: 44, high: 92, low: 79},
  //         {code: 44, high: 89, low: 77}
  //       ],
            

  //       humidity: 56
  //     },
  //     wind: {
  //       speed: 25,
  //       direction: 195
  //     }
  //   }
  // };
  // // TODO uncomment line below to test app with fake data
  

  // // TODO add startup code here
  // /************************************************************************
  //  *
  //  * Code required to start the app
  //  *
  //  * NOTE: To simplify this codelab, we've used localStorage.
  //  *   localStorage is a synchronous API and has serious performance
  //  *   implications. It should not be used in production applications!
  //  *   Instead, check out IDB (https://www.npmjs.com/package/idb) or
  //  *   SimpleDB (https://gist.github.com/inexorabletash/c8069c042b734519680c)
  //  ************************************************************************/

  

  // TODO add service worker code here
   if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
