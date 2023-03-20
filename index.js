function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  let demeritPoints = 0;
  
  if (speed < speedLimit + kmPerDemeritPoint) {
    console.log("Ok");
  } else {
    demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    console.log("Points: " + demeritPoints);
    
    if (demeritPoints > 12) {
      console.log("License suspended");
    }
  }
}
calculateDemeritPoints(speed);
