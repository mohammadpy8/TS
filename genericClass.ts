class HtmlElm <T>{
    constructor(
        private element: T
    ) {
        this.element = element;
    };

    getElem() {
        return this.element;
    }
};

const elem = document.createElement("input")
const usenamInput = new HtmlElm<HTMLInputElement>(elem);

const elem2 = document.createElement("button");
const buttonElem = new HtmlElm<HTMLButtonElement>(elem2);

class List {
    protected items: any[] = [];

    addItem(item: any) {
        this.items.push(item);
        return true;
    }

    popItem() {
        return this.items.pop()
    }
};

const numbersList = new List();
numbersList.addItem(10);
numbersList.addItem(20);
numbersList.addItem(30);

console.log(numbersList.popItem().toFixed());
console.log(numbersList.popItem().toFixed());
console.log(numbersList.popItem().toFixed());

class NumberList extends List {

    addItem(item: any) {
        this.items.push(item);
        return true;
    }

    popItem() {
        return this.items.pop()
    }
};

const scores = new NumberList();
scores.addItem(10);
scores.addItem("10");

class MainList <T> {
    private Items: T[] = [];

    addItems(item: T) {
        this.Items.push(item);
    };

    popItems(): T | undefined {
        return this.Items.pop();
    }
};

let newScores = new MainList();
newScores.addItems(10);
newScores.addItems(true); 

interface Result <T> {
    data: null | T;
    error: string | null;

};

interface Course {
    title: string;
    price: number;
}

interface Article {
    title: string;
}

const fetchData = <T>(url: string): Result<T> => {

    console.log(url);

    return { data: null, error: null };

};

const TsCourse = fetchData<Course>("harchizi");




