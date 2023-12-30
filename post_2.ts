// post 2
interface Person {
    name: string;
    age: number;
    email: string;
}
function info(person: Person): void {
    console.log(`The person's information is name: ${person.name}, age: ${person.age}, localtion: ${person.email}`);
}
const data: Person = {
    name: "Ngô Gia Nhất Sơn",
    age: 21,
    email: "sondzk58@gmail.com"
};