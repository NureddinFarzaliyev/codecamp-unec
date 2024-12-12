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

class GravitationalForce extends Force {

    static G = 6.674 * 10**-11  

    constructor(m1, m2, r, direction, magnitude){
        super(magnitude, direction)
        this.m1 = m1;
        this.m2 = m2;
        this.r = r;
    }

    calculateGravitationalForce(){
        return GravitationalForce.G * this.m1 * this.m2 / this.r ** 2 
    }

    getGravitationalForceInformation(){
        console.log(`The gravitational force between two objects with ${this.m1}kg and ${this.m2}kg weight and ${this.r} metres of distance between is ${this.calculateGravitationalForce()} Newtons.`);
    }
}