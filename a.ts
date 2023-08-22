class ListItems<T extends boolean | number | string> {
    private items: T[] = [];

    addItem(item: T) {
        
        this.items.push(item);

        return true;
    };

    getItems(): T[] {
        return [...this.items];
    }
};

class ListItems2 {
    private items: (boolean | number | string)[] = [];

    addItem(item:boolean | number | string) {
        
        this.items.push(item);

        return true;
    };

    getItems() {
        return [...this.items];
    }
};

