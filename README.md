# 1. What are some differences between interfaces and types in TypeScript?
## There are two ways to define the shape of objects in typescript, i.e 
    1. type
    2. interface

**Although we can mix type and interface, there are some differences that are to be described:** 

## What is `Interface`?
An `interface` is a contract for an object, that the object must adhere to. It is particularly useful for defining shapes of objects, classes, and functions.

**Example:** 
```ts 
interface User {
    name: string;
    age: number;
    isAdmin?: boolean;
}
const user: User = {
    name: 'Jamshidul Rahman Jisan',
    age: 23, 
}
```


In this example, the user object must follow the structure of User interface except the optional properties.




## What is a Type?
A `type` is a broader concept that can define not only objects but also primitives, unions, intersections, and even complex mapped types.

**Example:**
```ts 
type ID = string | number;
type Product = {
    id: ID;
    name: string;
    price: number;
}
const product: Product = {
    id: 1,
    name: 'Laptop',
    price: 1500
}
``` 


here, ID is a type alias for a union type of string or number and Product is an alias for object structure.

**Differences:** 
1. 
Interfaces are merged automatically if declared multiple times: 

```ts 
interface Person {
    name: string;
    age: number;
}
interface Person {
    hasCar: boolean;
}
const person: Person = {
    name: 'Nahid Hasan',
    age: 25,
    hasCar: false
}
```


Types does not support merging: 
```ts 
type Person = {
    name: string;
    age: number;
}
type Person = {
    hasCar: boolean; //Error: Duplicate identifier Person
}
```



2. 
Interface Uses extends keyword to extend:
```ts 
interface User {
    name: string;
}
interface Admin extends User {
    isAdmin: boolean;
}
const person: Admin = {
    name: 'Nahid Hasan',
    isAdmin: true
}
```

Type uses intersection operator to extend:

```ts 
type User1 = {
    name: string;
}
type User2 = {
    isAdmin: boolean;
}
type User = User1 & User2;
const user: User = {
    name: 'Nahid Hasan',
    isAdmin: true,
}
```


3. 
Type can be used with primitives and union:
```ts 
type ID = string | number;
type University = 'City University';
```

but interfaces cannot be used with primitives: 

```ts 
interface ID = string | number; // error
```




# 2. What is the use of the `keyof` keyword in TypeScript? 
## The `keyof` keyword allows developers to create types based on the keys of an object.

**Example:** 
```ts
type User = {
    id: 1, 
    name: 'Nahid Hasan',
    age: 25
}
type UserKeys = keyof User;
```

In this example, `keyof` `User` generates union types of all keys in User.

```ts
type UserKeys = 'id' | 'name' | 'age';
```

The `keyof` keyword is also used to dynamically access properties of `objects`.

**Example:**
```ts
Type Product = {
    id: number;
    name: string;
    price: number;
}
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}

const product1: Product = {
    id: 1, 
    name: 'Laptop',
    price: 1500,
}
const product1Name = getProperty(product1, 'name');
console.log(productName); // Output: Laptop
```


Also, `keyof` is used to if `map` over the keys of a type to create new types.

**Example:** 
```ts
type Vehicle = {
    brand: string;
    model: string;
    year: number;
}
type VehicleProperties = {
    [K in keyof Vehicle]: string;
}
```

This will result in,
```ts
type VehicleProperties = {
    brand: string;
    model: string;
    year: string;
}
```



# 3. Difference between `any`, `unknown`, and `never` types in TypeScript.
 ## 1. `any`
 While using `any` type, typescript disables all type-checking and allows user to perform any operations on the value.

 **Example:** 
 ```ts
 let anyValue: any = "Nahid Hasan";
 anyValue = 55; //no error
 anyValue = true; //no error

 anyValue.toUpperCase(); //no error
 anyValue(); //no error
 anyValue.someProperty(); //no error
 ```

 ## 2. `unknown`
 The `unknown` type is similar to `any` in that any value can be assigned to it, but it enforces type-checking before user can use it. You can't access properties or call methods on an `unknown` value without first narrowing it's type.

 ```ts
 let unknownValue: unknown;
 unknownValue = 'Nahid Hasan';
 unknownValue = 34;
 if (typeof unknownValue === 'string') {
    console.log(unknownValue.toUpperCase()); // no error
 }

 unknownValue.toUpperCase(); //error: it is unsure about the type
 ```



 ## 3. `never`
  The never type represents value that never occurs
   1. A function that throws an error never returns anything: 
   ```ts
   function throwError (): never {
        throw new Error('Custom Error');
   }
   ```
   
   2. An infinite loops never returns anything:
   ```ts
   function infiniteLoop(): never {
        while(true) {
            console.log('Running Forever...');
        }
   }
   ```
