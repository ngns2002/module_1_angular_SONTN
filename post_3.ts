// post 3
info(data);
function getFirstElement<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[0];
}
const integerArray: number[] = [1, 2, 3, 4, 5];
const firstIntegerElement: number | undefined = getFirstElement(integerArray);

const stringArray: string[] = ["name", "age", "email"];
const firstStringElement: string | undefined = getFirstElement(stringArray);