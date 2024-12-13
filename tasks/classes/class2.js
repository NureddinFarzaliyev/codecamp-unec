class Force {
    constructor(magnitude, direction){
        this.magnitude = magnitude;
        this.direction = direction;
    }

    getForceInformation(){
        return `Magnitude: ${this.magnitude}N, Direction: ${this.direction}deg`;
    }

    getForceVector(){
        return this.magnitude * Math.cos(this.direction); 
    }

    calculateResultantForce(...forces){
        return forces.reduce((acc, value) => acc + value) + this.magnitude
    }
}

const f1 = new Force(10, 30);
console.log(f1.getForceInformation());
console.log(f1.getForceVector());
console.log(f1.calculateResultantForce(10, -20, 30, 0, 20, -40, 50));

class GravitationalForce extends Force {

    static G = 6.674 * 10**-11  

    constructor(m1, m2, r, direction, magnitude){
        super(magnitude, direction)
        this.m1 = m1;
        this.m2 = m2;
        this.r = r;
        this.magnitude = this.calculateGravitationalForce();
    }

    calculateGravitationalForce(){
        return GravitationalForce.G * this.m1 * this.m2 / this.r ** 2 
    }

    calculateGravitationalForceWithG(){
        return this.m1 * this.m2 / this.r ** 2
    }

    getGravitationalForceInformation(){
        console.log(`The gravitational force between two objects with ${this.m1}kg and ${this.m2}kg weight and ${this.r} metres of distance between is ${this.calculateGravitationalForce()} Newtons (${this.calculateGravitationalForceWithG()}G).`);
    }
}

const f2 = new GravitationalForce(10, 20, 5);
console.log(f2.calculateGravitationalForce())
console.log(`${f2.calculateGravitationalForceWithG()}G`)
f2.getGravitationalForceInformation();


class PlanetsGravity extends Force {
    constructor(planet, acceleration, magnitude, direction){
        super(magnitude, direction)
        this.planet = planet;
        this.acceleration = acceleration; 
    }

    getPlanetInformation(){
        console.log(`The weight of an object with 1kg of mass on ${this.planet} is ${this.calculateWeight(1)} Newtons.`);
    }

    calculateWeight(mass){
        return Math.round(this.acceleration * mass) 
    }

}

const f3 = new PlanetsGravity('Earth', 9.81, 10, 0);
f3.getPlanetInformation();
console.log(`${f3.calculateWeight(10)}N`);