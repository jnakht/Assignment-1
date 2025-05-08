


function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}



function filterByRating(items: {title: string; rating: number}[]): {title: string; rating: number}[] {
    const newItems = items.filter(item => item.rating >= 4);
    return newItems;
}




function concatenateArrays<T>(...arrays: T[][]): T[] {
    let singleArr: T[] = [];
    arrays.map(arr => {
        singleArr.push(...arr);
    })
    return singleArr;
} 







class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");








function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    }  else if (typeof value === 'number') {
        return value * 2;
    } else {
        throw new Error("Invalid Type");
    }  
}






interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    let mostExpensiveProduct: Product = products[0];
    products.map((product: Product, index: number) => {
        // if multiple products appear with same price, the last one of them will be selected
        if (product.price >= mostExpensiveProduct.price) {
            mostExpensiveProduct = product;
        }
    })
    return mostExpensiveProduct;
}


 




enum Day {
    Monday, 
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day):string {
    if(day === Day.Sunday) {
        return 'Weekend';
    } else {
        return 'Weekday';
    }
}








async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n >= 0) {
            setInterval(() => {
                resolve(n * n);
            }, 1000)
        } else if (n < 0) {
            reject("Error: Negative number not allowed");
        }
    })
}





