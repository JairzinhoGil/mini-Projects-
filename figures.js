//Square Code

//Square Perimeter
const squarePerimeter = (side) => side * 4;

//Square Area
const squareArea = (side) => side * side;

//Triangle Code

//Triangle Perimeter
const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;

//Isosceles Triangle Area
function isoscelesTriangleArea(base, height) {
    return (base * height) / 2;
}

//Equilateral Triangle Area
function equilateralTriangleArea(side) {
    return (Math.sqrt(3) / 4) * Math.pow(side, 2);
}

//Circle Code

//Circumference
const circlePerimeter = (radio) => radio * 2 * Math.PI;

//Circle Area
const circleArea = (radio) => Math.PI * (radio * radio);

//Interact with HTML
//Print perimeter of square
function calculateSquarePerimeter() {
    const inputSide = parseFloat(document.getElementById("InputSquare").value);
    const perimeter = squarePerimeter(inputSide);
    alert(perimeter);
}

//Print area of square
function calculateSquareArea() {
    const inputSide = parseFloat(document.getElementById("InputSquare").value);
    const area = squareArea(inputSide);
    alert(area);
}

//Print the Perimeter of the triangle
function calculateTrianglePerimeter() {
    const inputSide1 = parseFloat(
        document.getElementById("InputTriangleSide1").value
    );
    const inputSide2 = parseFloat(
        document.getElementById("InputTriangleSide2").value
    );
    const inputBase = parseFloat(
        document.getElementById("InputTriangleBase").value
    );
    const perimeter = trianglePerimeter(inputSide1, inputSide2, inputBase);
    alert(perimeter);
}

//Define the type of triangle and calculate its area
function defineTypeTriangle() {
    const inputSide1 = parseFloat(
        document.getElementById("InputTriangleSide1").value
    );
    const inputSide2 = parseFloat(
        document.getElementById("InputTriangleSide2").value
    );
    const inputBase = parseFloat(
        document.getElementById("InputTriangleBase").value
    );
    if (inputSide1 == inputSide2 && inputSide1 != inputBase) {
        //Isosceles triangle
        const height = calculateTriangleHeight(inputSide1, inputBase);
        const area = isoscelesTriangleArea(inputBase, height);
        alert(area);
    } else if (inputSide1 == inputSide2 && inputSide1 == inputBase) {
        //Equilateral triangle
        const area = equilateralTriangleArea(inputBase);
        alert(area);
    } else {
        alert("The sides of the triangle must be equal");
    }
}

//Calculate height of isosceles triangle
function calculateTriangleHeight(side, base) {
    const realBase = base / 2;
    //l^2 = b^2 + a^2
    //l^2 - b^2 = a^2
    //sqr(l^2 - b^2) = a
    const height = Math.sqrt(Math.pow(side, 2) - Math.pow(realBase, 2));
    return height;
}

//Print the perimeter of a circle
function calculateCirclePerimeter() {
    const inputRadio = parseFloat(document.getElementById("InputCircle").value);
    const perimeter = circlePerimeter(inputRadio);
    alert(perimeter);
}

//Print the perimeter of a circle
function calculateCircleArea() {
    const inputRadio = parseFloat(document.getElementById("InputCircle").value);
    const area = circleArea(inputRadio);
    alert(area);
}