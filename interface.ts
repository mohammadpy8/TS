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
