// Code your solution in this file!
const drivers =['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers =function (drivers){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,5)
}
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(x){
    return function(x){
        return x*x
    }
}


const fareDoubler= function(createFareMultiplier){
    return createFareMultiplier*2
}

const fareTripler= function (createFareMultiplier){
    return createFareMultiplier*3
}

function selectDifferentDrivers(drivers, driverfunction){
    return driverfunction(drivers)
}