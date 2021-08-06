meter1 = 3
meter2 = 5
cm1 = 30
cm2 = 100
totalM = meter1 + meter2
totalCm = cm1 + cm2
if(totalCm  >   100)
    {
        totalM = totalM + 1
        totalCm = totalCm - 100
    }
console.log(`The total measurement is
            ${totalM} meters ${totalCm} centimeters`);      