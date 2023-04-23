import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type
let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621

// Part 2: Print Days to Mars
let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;

// Code an output statement here (use a template literal):
// console.log(`${spacecraftName} will take ${daysToMars} days to get to Mars.`)

// Part 3: Create a Function ("getDaysToLocation")

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.



// Part 4: Create a Spacecraft Class
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
 
    constructor(name: string, speedMph: number) {
       this.name = name;
       this.speedMph = speedMph;
    }
 
    getDaysToLocation(kilometersAway: number): number {
       let milesAway: number = kilometersAway * this.milesPerKilometer;
       let hours: number = milesAway / this.speedMph;
       return hours / 24;
    }
 
    printDaysToLocation(location: SpaceLocation) {
       console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
 }
 
 let spaceShuttle = new Spacecraft("Determination", 17500); // Create an instance of the class here

 spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
 spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));