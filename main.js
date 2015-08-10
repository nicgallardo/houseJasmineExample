exports.outputHelloWorld = function () {
  return "Hello, world!";
};


// revist

// // exports.calculate = function (amt) {
// 	if( amt < 11 ){
// 		amt = amt * (.10);
// 		return amt;
// 	} else if ( amt < 21){
// 		amt = (amt - 10) * ((1.07) + 11);
// 		return amt; 
// 	} else if ( amt < 31){
// 		//  the line below is incorrect
// 		amt = (amt - 20) * ((1.05) + 21.70);
// 		return amt;
// 	}
// };



exports.leapYear = function (year) {
    if( year % 100 === 0 && year % 400 !== 0 ){
    return false;
  } else if ( year % 4 === 0 ){
    return true;
  } else {
    return false;
  }
};

exports.changeToUpper  = function (array) {
  var string = array.join(',');
  console.log(string);
  var newString = string.toUpperCase();
  var newArray = newString.split( ',' );
  return newArray; 
}



exports.findGreatestStrength = function (array) {
  var stronger = 0;
  for( var i = 0; i < array.length; i++){
    if (array[i].strength >= stronger){
      stronger = i;
	}
	return array[stronger];
  }
};  
