function calculateDemeritPoints(speed) {
    const SPEED_LIMIT = 70;
    const KMS_PER_DEMERIT_POINT = 5;
    
    if (speed <= SPEED_LIMIT) {
      console.log("Your speed is within the limit.");
    } else {
      const demeritPoints = Math.floor((speed - SPEED_LIMIT) / KMS_PER_DEMERIT_POINT);
      if (demeritPoints > 12) {
        console.log("License suspended.");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
calculateDemeritPoints(speed);
