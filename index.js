function scuberGreetingForFeet(ridefeet){

  let result
  if (ridefeet <= 400) {
    result = "This one is on me!";
  }
  else if(ridefeet > 400 && ridefeet <= 2000) {
    result = "That will be twenty bucks.";
  }
  else if(ridefeet >= 2000 ) {
    result = "I will gladly take your thirty bucks.";
  }
  else if(ridefeet > 2500) {
    result = "No can do.";
  }
  return result
}

function ternaryCheckCity(city) {
  const City = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return City;
}

console.log(ternaryCheckCity('NYC')); 
console.log(ternaryCheckCity('Pittsburgh'));   

function switchOnCharmFromTip(tip){
  switch (tip) {
      case 'generous':
          return "Thank you so much.";
      case 'not as generous':
          return "Thank you.";
      default:
          return "Bye.";
  }
}
