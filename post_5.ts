// post 5
class Rectangle {
    private length: number;
    private width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    calculateArea(): number {
        return this.length * this.width;
    }
}
const rectangle = new Rectangle(5, 10);
const area = rectangle.calculateArea();
console.log("Diện tích của hình chữ nhật là:", area);