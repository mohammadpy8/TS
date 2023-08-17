interface Car {
  company: string;
  color: string;
  year: number;
    model: string;
    
    driven(speed: number): void,
    stop(): void,
};

interface Pegeot extends Car {
    passengers: number,
};

let pegeot206: Pegeot

pegeot206 = {
    company: "irankhodro",
    color: "white",
    year: 95,
    model: "206",
    passengers: 4,

    driven(speed: number) {
        console.log(`${this.model} drive ${speed}Km`);
    },

    stop() {
        console.log(`${this.color}`);
    }
};

pegeot206.driven(140);
pegeot206.stop();

class PegeotPars implements Car{
    constructor(
        public company: string,
        public color: string,
        public year: number,
        public model: string,
    ) {
        this.company = company;
        this.color = color;
        this.year = year;
        this.model = model;
    };

    driven(speed: number): void {
        console.log(`${this.model} drive ${speed}Km`);
    }

    stop(): void {
        console.log(`${this.color}`);
    }
}

const Pars = new PegeotPars("", "", 12, "");
