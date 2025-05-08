# 1. What are some differences between interfaces and types in TypeScript?
## There are two ways to define the shape of objects in typescript, i.e 1. `type` 2. `interface`

**Although we can mix type and interface, there are some differences that are to be described:** 

## What is `Interface`?
An `interface` is a contract for an object, that the object must adhere to. It is particularly useful for defining shapes of objects, classes, and functions.

**Example:** 
<pre>```ts interface User {
    name: string;
    age: number;
    isAdmin?: boolean;
}
const user: User = {
    name: 'Jamshidul Rahman Jisan',
    age: 23, 
}```</pre>


In this example, the user object must follow the structure of User interface except the optional properties.




## What is a Type?
A `type` is a broader concept that can define not only objects but also primitives, unions, intersections, and even complex mapped types.

**Example:**
<pre>```ts type ID = string | number;
type Product = {
    id: ID;
    name: string;
    price: number;
}
const product: Product = {
    id: 1,
    name: 'Laptop',
    price: 1500
}```</pre> 


here, ID is a type alias for a union type of string or number and Product is an alias for object structure.

**Differences:** 
1. 
Interfaces are merged automatically if declared multiple times: 

<pre>```ts interface Person {
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
}```</pre>


Types does not support merging: 
<pre>```ts type Person = {
    name: string;
    age: number;
}
type Person = {
    hasCar: boolean; //Error: Duplicate identifier Person
}```</pre>



2. 
Interface Uses extends keyword to extend:
<pre>```ts interface User {
    name: string;
}
interface Admin extends User {
    isAdmin: boolean;
}
const person: Admin = {
    name: 'Nahid Hasan',
    isAdmin: true
}```</pre>

Type uses intersection operator to extend:

<pre>```ts type User1 = {
    name: string;
}
type User2 = {
    isAdmin: boolean;
}
type User = User1 & User2;
const user: User = {
    name: 'Nahid Hasan',
    isAdmin: true,
}```</pre>


3. 
Type can be used with primitives and union:
<pre>```ts type ID = string | number;
type University = 'City University';```</pre>

but interfaces cannot be used with primitives: 

<pre>```ts interface ID = string | number; // error```</pre>
