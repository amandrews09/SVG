const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
const fs = require("fs");

const initialQuestion = {
    type: 'list',
    message: 'Whatcha wanna do?',
    choices: ['Add Shape', 'Exit'],
    name: 'initialChoice'
}


const shapeQuestion = [{
    type: 'list',
    message: 'What shape would you like to summon?',
    choices: ['Circle', 'Square', 'Triangle'],
    name: 'shapeChoice'
},
{
    type: 'input',
    message: 'Decisions decisions, what shall your shape color be?',
    name: 'shapeColor'
},
{
    type: 'input',
    message: 'Behold! Tell me what text you would like within your shape...',
    name: 'shapeText'
},
{
    type: 'input',
    message: 'Oooh, I like it. What is next? Tell me what color you would like the text to be...',
    name: 'shapeTextColor'
}]


inquirer.prompt(initialQuestion).then((answer) => {
    //console.log(answer);
    if (answer.initialChoice === 'Add Shape') {

        addShape();

    } else { return }
})
function addShape() {
    inquirer.prompt(shapeQuestion).then((answer) => {

        //console.log(answer);
        let newShape;

        if (answer.shapeChoice === 'Circle') {
             newShape = new Circle(answer.shapeColor);
        } else if (answer.shapeChoice === 'Square') {
             newShape = new Square(answer.shapeColor);
        } else {
             newShape = new Triangle(answer.shapeColor);
        }

        newShape.setColor(answer.shapeColor);
        const shapeElement = newShape.render();

        const svgData =
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shapeElement}

<text x="150" y="150" font-size="60" text-anchor="middle" fill="${answer.shapeTextColor}">${answer.shapeText}</text>

</svg>`;

        fs.writeFileSync('logo.svg', svgData);

    })



}