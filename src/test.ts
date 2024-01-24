


/* ===============Generik============== */

/* type Test = {
    [key: string]: string | number | boolean
}

const user: Test = {
    name: "Daria",
    age: 35,
    isLogined: true,
}

const car: Test = {
    year: 2005,
    color: 'red',
    model: 'RX9',

}
 */
/* function reverse<T>(arr: T[]): T[] {
    return arr.reverse()
}
const stringArr = ["A", "B", "C"];
const numberArr = [1, 2, 3];
const objArr = [{a:1}, {b:2}, {c:3}];

const reverseStringArr = reverse<string>(stringArr);
const reverseNumberArr = reverse<number>(numberArr);
const reverseObjArr = reverse<object>(objArr); */


/* =============extends keyof=============== */

/* function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
} */


/* ==============Partial================= */

/* 
type Todo = {
    title: string,
    description: string,
    completed: boolean,
}

function updateTodo(todo:Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return {...todo, ...fieldsToUpdate}
}

const todo1 = {
    title: "JS",
    description: "Learn JS",
    completed: false,
}

console.log(updateTodo(todo1, {completed: true}));
 */

/* ================Readonly============= */
/* 
type User = {
    name: string,
    age: number,
}

const user: Readonly<User> = {
    name: "Daria",
    age:30
}
const numbers: ReadonlyArray<number>=[1,2,3,4] */


/* ================Pikc============== */
/* 
type Person = {
    name: string,
    age: number,
    address: string,
}

type PersonSummary = Pick<Person, "name" | "age">; */
/* Создается новый тип со свойствами name и  age*/


/* ===============Omit=========== */
/* type Person = {
    name: string,
    age: number,
    address: string,
}


type PersonWithoutAdress = Omit<Person, "address">; */
/* Создается новый тип со свойствами name и  age в котором с помощью Omit удаляется свойство address */

/* ============Record=========== */

/* type CityDatabase = Record<string, number>;

const database: CityDatabase = {
    Kyiv: 123456,
    Kharkiv: 6785414,
    Odesa: 365494
} */

/* ============Promise============ */

/* function getPromise(): Promise<(string | number | object)[]>{
    return new Promise<(string | number | object)[]>((resolve) => {
        resolve(["text", 50, {}])
    })
    
}
getPromise().then(data => console.log(data)) */