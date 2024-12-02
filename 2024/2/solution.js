import fs from 'fs';

function solution1() {
  const reports = fs.readFileSync('./data.txt', 'utf-8').trim().split('\n');
  let safeReports = 0;

  reports.forEach(report => {
    let currentStep = undefined;
    let previousStep = undefined;
    let trendDirection = undefined;
    let stepCount = 1;
    let isSafe = true;
    //console.log(report.split(' '));

    report.split(' ').forEach(step => {
      currentStep = parseInt(step);
      //console.log(previousStep + ' ' + currentStep);
      if (stepCount === 1) {
        //console.log(currentStep + " first step");
      } else if (Math.abs(currentStep - previousStep) > 3) {
        //console.log(currentStep + " distance: " + Math.abs(currentStep - previousStep) + " not safe!");
        isSafe = false;
      } else {
        //console.log(currentStep + " safe");
      }

      if (stepCount === 1) {
      } else if (stepCount === 2) {
        if (currentStep === previousStep) isSafe = false;
        trendDirection = ((previousStep - currentStep) < 0);
        //console.log("set trend as " + ((previousStep - currentStep) < 0));
      } else if (trendDirection && ((previousStep - currentStep) < 0) || (!trendDirection && (previousStep - currentStep > 0))) {
        //console.log("trending");
      } else if (stepCount > 2) {
        //console.log(previousStep + " > " + currentStep + " trend broken");
        isSafe = false
      } else {
        console.log("EDGE CASE");   
      }
      previousStep = currentStep;
      stepCount++;
    });

    //console.log("safe: " + isSafe);
    if (isSafe) {
      safeReports++
    }

  });
  console.log("There are " + safeReports + " safe reports");
}


solution1()
