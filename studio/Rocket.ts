import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';


export class Rocket {
    name:string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name:string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number {
        let sum = 0;
        for(const item of items) {
        sum = sum + item.massKg;
       
    }
        return sum;
    }

    currentMassKg(): number {
        const combinedMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return combinedMass;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }
        addCargo(cargo: Cargo): boolean {
            if(this.canAdd(cargo)) {
                this.cargoItems.push(cargo)
                return true;
            } else {
                return false;
            }
        }

        addAstronaut(astronauts: Astronaut): boolean {
            if (this.canAdd(astronauts)) {
            this.astronauts.push(astronauts)
            return true;
            } else {
                return false;
            }
        }

 }