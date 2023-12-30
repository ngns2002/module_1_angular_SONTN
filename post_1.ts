// post 1
function totals(arr: number[]): number {
    let total: number = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
const a: number[] = [1, 2, 3, 4, 5];
const b: number = totals(a);
