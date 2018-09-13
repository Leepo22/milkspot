function getHTML(listing) {
  // console.log(listing);
  var privacy;
  var stroller;
  var changing;
  var restroom;
  var water;
  var outlet;
  var dad;
  var indoor;
  var thumbs_up;
  var thumbs_down;
  var yes_percent;
  
  if (listing.is_private == "TRUE") {
    privacy = `<img width="50px" height="25px" title="Private space" src="https://cdn.glitch.com/cb302176-cd8c-4e02-8c6e-6d0778f1bede%2Fprivacy.png?1524620255821"></img>`
  }
  else privacy = ""
  
  if (listing.is_stroller_friendly == "TRUE") {
    stroller = `<img width="40px" height="40px" title="Stroller friendly" src="https://cdn.glitch.com/cb302176-cd8c-4e02-8c6e-6d0778f1bede%2Fstroller.png?1523373320148"></img>`
  }
  else stroller = ""
  
  if (listing.has_changing_table == "TRUE") {
    changing = `<img width="40px" height="40px" title="Changing facilities" src="https://cdn.glitch.com/cb302176-cd8c-4e02-8c6e-6d0778f1bede%2Fchanging.png?1523326260645"></img>`
  }
  else changing = ""
  
  if (listing.has_restroom == "TRUE") {
    restroom = `<img width="40px" height="40px" title="Restrooms" src="https://cdn.glitch.com/cb302176-cd8c-4e02-8c6e-6d0778f1bede%2Frestroom.png?1524067547327"></img>`
  }
  else restroom = ""
  
  if (listing.has_drinking_water == "TRUE") {
    water = `<img width="40px" height="40px" title="Water fountain" src="https://cdn.glitch.com/cb302176-cd8c-4e02-8c6e-6d0778f1bede%2Fwater.png?1523373354545"></img>`
  }
  else water = ""
  
  if (listing.has_plugs == "TRUE") {
    outlet = `<img width="40px" height="40px" title="Outlet for pumping" src="https://cdn.glitch.com/cb302176-cd8c-4e02-8c6e-6d0778f1bede%2Foutlet.png?1523373416311"></img>`
  }
  else outlet = ""
  
  if (listing.is_dad_friendly == "TRUE") {
    dad = `<img width="40px" height="40" title="Dad friendly" src="https://cdn.glitch.com/1d9f896c-bbc2-4a19-b424-f3b631b83689%2Fmoustache%202c%20copy.png?1532096301628"></img>`
  }
  else dad = ""
  
  if (listing.is_indoor == "TRUE") {
    indoor = "INDOOR"
  }
  else indoor = "OUTDOOR"
  
     
  if (listing.review_count == "No reviews yet") {
    yes_percent = ""
  }
  else yes_percent =  '<div class="thumbs-up"></div>'+listing.yes_percent+" recommend this spot"
  
 
  return `${privacy}
<div class="name">${listing.name}</div>
<div class="address">${listing.address}</div>
<div class="address">${listing.cross_streets}</div>
<div class="directions"><a href="${listing.directions}" target="_blank">get directions</a></div>
${stroller}${changing}${restroom}${water}${outlet}${dad}
<div class="indoor">${indoor}</div><b>
<div class="location_details"><strong>Location Details: </strong>${listing.location_details}</div>
<div class="location_details"><a href="${listing.website}" target="_blank"><strong>website</strong></a></div>
<div class="review">${yes_percent}</div>
<div class="review">${listing.review_count}</div>
<br>
<a href="https://docs.google.com/forms/d/e/1FAIpQLScI6y3iqU04arI52S9KadKC_PTy554bOixa0GRmX8W1lVEtkg/viewform?usp=pp_url&entry.1227901969=${listing.name}">Review this spot</a><br>
<a href="https://docs.google.com/forms/d/e/1FAIpQLSd7YoHgK1LE7lI6R2Nt0lkC0wj7JKt03Nd6nNtHhaIFIyY_5g/viewform?usp=pp_url&entry.1243908271=${listing.name}">Report a problem with this spot</a>
`;
}



/* function trackuserLocation(error) {
    alert( "We couldn't get your location. Make sure you have location services enabled for this app." );
} */


// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it - NOT WORKING
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// get all the amenities checkbox elements
function filterAmenities() {
  var checkboxes = $('input[name="amenities"]');
  var classList = "";
  
  // for each element, if it's checked, add the id name to a string with the . in between (so you have something like ".is_private.has_changing_table") var classList = "". classList += ".is_private"
  checkboxes.each(function(checkbox) {
    if (this.checked == true) {
      classList += "." + this.id;
    }
  });
  console.log(classList);
           
  var markers = $('.marker');
  var filteredMarkers = $('.marker'+classList);
  
  markers.hide()
  filteredMarkers.show()
  
  var check_indoor = document.getElementById("indoor_check").checked;
  var check_outdoor = document.getElementById("outdoor_check").checked;
  var filteredMarkersIndoor = $('.marker'+classList+'.is_indoor');
  var filteredMarkersOutdoor = $('.marker'+classList+'.is_outdoor');
  
    if        ((check_indoor == true) && (check_outdoor == false)) {
      filteredMarkersOutdoor.hide() }
  
    else if   ((check_indoor == false) && (check_outdoor == true)) {
      filteredMarkersIndoor.hide() 
  }
  
  var check_category_airport = document.getElementById("Airport").checked;
  var check_category_coffeeShop = document.getElementById("Coffee_Shop").checked;
  var check_category_foodCourt = document.getElementById("Food_Court").checked;
  var check_category_indoorOpenSpace = document.getElementById("Indoor_Open_Space").checked;
  var check_category_museum = document.getElementById("Museum").checked;
  var check_category_park = document.getElementById("Park").checked;
  var check_category_restaurant = document.getElementById("Restaurant").checked;
  var check_category_store = document.getElementById("Store").checked;
  var check_category_venue = document.getElementById("Venue").checked;
  var check_category_other = document.getElementById("Other").checked;
  
  if ((check_category_airport == true) || (check_category_coffeeShop == true) || (check_category_foodCourt == true) || (check_category_indoorOpenSpace == true) || (check_category_museum == true) || (check_category_park == true) || (check_category_restaurant == true) || (check_category_store == true) || (check_category_venue == true) || (check_category_other == true)) {
    if (check_category_airport == false ) {
      $('.marker'+'.Airport').hide()
    }
    if (check_category_coffeeShop == false ) {
      $('.marker'+'.Coffee_Shop').hide()
    }
    if (check_category_foodCourt == false ) {
      $('.marker'+'.Food_Court').hide()
    }
    if (check_category_indoorOpenSpace == false ) {
      $('.marker'+'.Indoor_Open_Space').hide()
    }
    if (check_category_museum == false ) {
      $('.marker'+'.Museum').hide()
    }
    if (check_category_park == false ) {
      $('.marker'+'.Park').hide()
    }
    if (check_category_restaurant == false ) {
      $('.marker'+'.Restaurant').hide()
    }
    if (check_category_store== false ) {
      $('.marker'+'.Store').hide()
    }
    if (check_category_venue == false ) {
      $('.marker'+'.Venue').hide()
    }
    if (check_category_other == false ) {
      $('.marker'+'.Other').hide()
    }
  }
  
}





// try turning all these functions into one function, filterPlaces, which takes in the element that you clicked, and pulls out its ID. I googled "pass element into onClick function" and got this: https://stackoverflow.com/questions/19998711/how-to-pass-this-element-to-javascript-onclick-function-and-add-a-class-to-that which should help you do this


var ensureElementInViewport = function(el) {
  // start by getting the current lat/lng of the center of the map
  // in lat/lng and pixels
  var center = map.getCenter();
  var centerPixels = map.project(center); // returns an x, y pair

  // see whether the popup extends outside of the map window, and build a
  // transformation matrix (in pixels) to move it if it does
  var rect = el.getBoundingClientRect();

  // check if a change in latitude is needed first
  var pixelPadding = 5;
  var latChangePixels = 0;
  if (rect.top < 0) {
    latChangePixels = rect.top - pixelPadding;
  } else if (rect.bottom > window.innerHeight) {
    latChangePixels = rect.bottom - window.innerHeight + pixelPadding;
  }

  // check longitude next
  var lngChangePixels = 0;
  if (rect.left < 0) {
    lngChangePixels = rect.left - pixelPadding;
  } else if (rect.right > window.innerWidth) {
    lngChangePixels = rect.right - window.innerWidth + pixelPadding;
  };

  if (latChangePixels != 0 || lngChangePixels != 0) {
    // convert pixels to lat/lng
    var newCenterPixels = [
      lngChangePixels + centerPixels.x,
      latChangePixels + centerPixels.y
    ];

    var newCenter = map.unproject(newCenterPixels)

    map.easeTo({center: newCenter});
  }
}






// try turning all these functions into one function, filterPlaces, which takes in the element that you clicked, and pulls out its ID. I googled "pass element into onClick function" and got this: https://stackoverflow.com/questions/19998711/how-to-pass-this-element-to-javascript-onclick-function-and-add-a-class-to-that which should help you do this