

(function() {
  'use strict';

  var app = {
  };

  
  app.showStyleSpring = function() {
   var div = document.getElementById('styleSpringCard');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
  };

  app.showStyleSummer = function() {
   var div = document.getElementById('styleSummerCard');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
  };

  app.showStyleFall = function() {
   var div = document.getElementById('styleFallCard');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
  };

  app.showStyleWinter = function() {
   var div = document.getElementById('styleWinterCard');
    if (div.style.display !== 'block') {
        div.style.display = 'block';
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
  };

  document.getElementById('btnStyleGuide').addEventListener('click', function() {
    setTimeout(function(){app.removeTitleCard();},300);
    
    app.showStyleSpring();
    app.showStyleSummer();
    app.showStyleFall();
    app.showStyleWinter();
    
  });


  app.removeTitleCard = function() {
    var elem = document.getElementById('titleCard');
    elem.remove();
  };

  
  // Register Service Worker
   if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
