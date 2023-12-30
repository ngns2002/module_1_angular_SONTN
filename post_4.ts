//post 4
// Định nghĩa enum Color
enum Color {
    RED = "Red",
    GREEN = "Green",
    BLUE = "Blue"
}
function printColorName(color: Color): void {
    switch (color) {
        case Color.RED:
            console.log("Color is: " + Color.RED);
            break;
        case Color.GREEN:
            console.log("Color is: " + Color.GREEN);
            break;
        case Color.BLUE:
            console.log("Color is: " + Color.BLUE);
            break;
        default:
            console.log("Invalid color");
            break;
    }
}
printColorName(Color.RED); 
printColorName(Color.GREEN);
printColorName(Color.BLUE);
