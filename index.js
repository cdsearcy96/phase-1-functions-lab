// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    const blocks = Math.abs(someValue - 42);
    return blocks;

    //returns the, number of blocks given a value
}

function distanceFromHqInFeet(someValue) {
    const feet = distanceFromHqInBlocks(someValue) * 264 ;
    return feet 
    
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}


function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    const travelled = Math.abs(start - destination) * 264;
    return travelled;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    
    const ride = distanceTravelledInFeet(start,destination);
    if (ride <= 400) {
        return 0;
    }   else if (ride > 400 && ride <= 2000){
        const price = (ride - 400) * 0.02;
        return price;
    }   else if (ride > 2000 && ride <= 2500) {
        const price = 25;
        return price;
    }
        else {
            return 'cannot travel that far';
    }
}
