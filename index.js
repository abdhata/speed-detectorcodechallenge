function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmsPerDemeritPoint = 5;
    
    if (speed <= speedLimit) {
      console.log("Your speed is within the limit.");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmsPerDemeritPoint);
      if (demeritPoints > 12) {
        console.log("License suspended.");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
calculateDemeritPoints(speed);
