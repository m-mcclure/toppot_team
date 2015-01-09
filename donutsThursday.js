
  var downtown, capitolHill, sLU, wedgewood, ballard;
  var userShopName, userOpenHours, userPeopleNumLow, userPeopleNumHigh, userPercentEnter, userAvgDonutsOrdered;
  var inputArray = []

  var dailyTotal = 0;


  function buttonClick() {

  userShopName         = document.getElementById('shopNameInput').value;
  userOpenHours        = document.getElementById('hoursOperatingInput').value;
  userPeopleNumLow     = document.getElementById('hourlyFootTrafficMinInput').value;
  userPeopleNumHigh    = document.getElementById('hourlyFootTrafficMaxInput').value;
  userPercentEnter     = document.getElementById('percentEnterInput').value;
  userAvgDonutsOrdered = document.getElementById('avgDonutsOrderedInput').value;

  inputArray.push(userShopName, userOpenHours, userPeopleNumLow, userPeopleNumHigh, userPercentEnter, userAvgDonutsOrdered);
  
  console.log(inputArray);

  //the six lines below need to be replaced with something that will allow for new input
  //to be given without needing to refresh window
  userShopName = document.getElementById('shopNameInput').value="";
  userOpenHours = document.getElementById('hoursOperatingInput').value="";
  userPeopleNumLow = document.getElementById('hourlyFootTrafficMinInput').value="";
  userPeopleNumHigh = document.getElementById('hourlyFootTrafficMaxInput').value="";
  userPercentEnter = document.getElementById('percentEnterInput').value="";
  userAvgDonutsOrdered = document.getElementById('avgDonutsOrderedInput').value="";


// Select the element and store it in a variable.
var elOutput = document.getElementById('output');

// Change the value of the class attribute.
elOutput.innerHTML = '<p>' + inputArray + '</p>';



  function Location(userShopName, userOpenHours, userPeopleNumLow, userPeopleNumHigh, userPercentEnter, userAvgDonutsOrdered) {
    this.userShopName         = userShopName;
    //calculates total number of hours shop is open per day
    this.userOpenHours        = userOpenHours;
    //the smallest number of people who might pass by this shop during any given hour
    this.userPeopleNumLow     = userPeopleNumLow;
    //the largest number of people who might pass by this shop during any given hour
    this.userPeopleNumHigh    = userPeopleNumHigh;
    this.userAvgDonutsOrdered = userAvgDonutsOrdered;
    //the percent of people passing by the shop who enter to purchase donuts
    this.userPercentEnter     = percentEnter;

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
      console.log("<p>The " + this.shopName + " Top Pot location needs " + (this.hourlyDonutProjection()) + " donuts for hour " + i + " of the day.</p>");
      //document.getElementById('#output').innerHTML = this.hourlyReport;
      //document.getElementById("output").innerHTML += "<p>more content</p>";
    }
    

  }

  var userDataObject = new Location(inputArray);
  console.log(userDataObject);

  for(i=0; i < inputArray[1]; i++) {
    inputArray.hourlyReport();
    dailyTotal += shopArray[j].hourlyDonutProjection();
    console.log(dailyTotal);
  }

*/

}


 /* for (i=0; i < inputArray[1]; i++) {
      shopArray[j].hourlyReport();
      dailyTotal += inputArray.hourlyDonutProjection();
      
    } */
      


/*
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

      //document.write(shopArray[j].hourlyDonutProjection());
      
    }
    
    //document.write("Daily projected totals for the " + shopArray[j].shopName + " location: " +dailyTotal + " donuts\n");
   
  }
  */













