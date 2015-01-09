document.
var downtown, capitolHill, sLU, wedgewood, ballard;

function Location(shopName, openHours, peopleNumLow, peopleNumHigh, percentEnter, avgDonutsOrdered) {
  this.shopName         = shopName;
  //calculates total number of hours shop is open per day
  this.openHours        = openHours;
  //the smallest number of people who might pass by this shop during any given hour
  this.peopleNumLow     = peopleNumLow;
  //the largest number of people who might pass by this shop during any given hour
  this.peopleNumHigh    = peopleNumHigh;
  this.avgDonutsOrdered = avgDonutsOrdered;
  //the percent of people passing by the shop who enter to purchase donuts
  this.percentEnter     = percentEnter;

  //possible number of people who might walk past shop in a given hour
  this.numPeopleThisHour = function() {
    return (Math.floor((this.peopleNumHigh - this.peopleNumLow) * Math.random()) + (this.peopleNumLow + 1));
  };

  this.percentCalc = function() {
    return (this.percentEnter / 100);
  }

  this.hourlyDonutProjection = function() {
    return (Math.ceil(this.numPeopleThisHour() * (this.percentCalc()) * this.avgDonutsOrdered));
  }

  this.hourlyReport = function() {
      console.log("The " + this.shopName + " Top Pot location needs " + (this.hourlyDonutProjection()) + " donuts for hour " + i + " of the day.");
  }

}

//create objects for Top Pot shops in 5 locations
downtown    = new Location("Downtown",         11, 80,  220, 10, 4  );
capitolHill = new Location("Capitol Hill",     11, 5,   45,  45, 2  );
sLU         = new Location("South Lake Union", 11, 180, 250, 5,  6  );
wedgewood   = new Location("Wedgewood",        11, 20,  60,  20, 1.5);
ballard     = new Location("Ballard",          11, 25,  175, 35, 1  );

var shopArray = [downtown, capitolHill, sLU, wedgewood, ballard];
var dailyTotal = 0;


for(j=0; j < shopArray.length; j++) {
  
  for (i=0; i < shopArray[j].openHours; i++) {
    shopArray[j].hourlyReport();
    dailyTotal += shopArray[j].hourlyDonutProjection();
  }

  console.log("Daily projected totals for the " + shopArray[j].shopName + " location: " +dailyTotal + " donuts");

} 

</script>




