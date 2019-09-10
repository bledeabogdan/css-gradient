var lines = 0;
var string = "height: 100vh; background: ";
document.getElementById('numberOfLines').innerHTML = lines;
const addLine = () => {
    lines++;
    document.getElementById('numberOfLines').innerHTML = lines;
    createProcentInput();
}

var addLineButton = document.getElementById('addLine');
addLineButton.onclick = addLine;

const createProcentInput = () => {
    var element = document.getElementById('procentInputs');
    element.append('procent: ');
    var child = document.createElement('input');
    child.type = 'text';
    child.id = 'procent';
    element.append(child);
    element.append(' degree: ');
    var child = document.createElement('input');
    child.type = 'text';
    child.id = 'degree';
    element.append(child);
    var saveButton = document.createElement('button');
    saveButton.innerText = "Save line";
    saveButton.onclick = createCss;
    element.append(saveButton);
}

const createCss = () => {
    var procent = document.getElementById('procent').value;
    var degree = document.getElementById('degree').value;

    string += "linear-gradient(" + degree + "deg,rgba(148, 148, 148, 0.07) 0%,rgba(148, 148, 148, 0.07) " + procent + "%,rgba(83, 83, 83, 0.07) " + procent + "%,rgba(83, 83, 83, 0.07) " + (2 * Number(procent)) + "%),";
    updateCss(string);
}

const updateCss = (string) => {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    string += "linear-gradient(90deg," + color1 + ", " + color2 + ");"
    console.log(string);
    document.getElementsByTagName('body')[0].style = string;
    document.getElementById('procentInputs').innerHTML = "";
}

