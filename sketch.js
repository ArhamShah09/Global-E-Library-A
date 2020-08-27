var canvas;

function preload() {

}

function setup() {
    canvas = createCanvas(displayWidth-25,displayHeight-165);
}

function draw() {
    background("white");
}

function openAttachment() {
    document.getElementById('attachment').click();
}

function fileSelected(input) {
    document.getElementById('btnAttachment').value = "File: " + input.files[0].name
}

function uploadAttachment() {

}