"use strict";

window.addEventListener("DOMContentLoaded", start);
let elementToPaint;
async function fetchSVG() {
    let response = await fetch("img/glasses-01.svg");
    let mySVGData = await response.text();
    displaySVG(mySVGData);
}

function start() {
    fetchSVG();
    let buttons = document.getElementsByClassName("color_btn");
    let colorsArr = Array.prototype.slice.call(buttons) //converts html collection into an array
    console.log(colorsArr);
    colorsArr.forEach(color => {
        color.addEventListener("click", function () {
            colorClick(color)
        });
    });

}

function displaySVG(mySVGData) {
    document.querySelector("#product-preview").innerHTML = mySVGData;
    eventListenersOnParts();

    let temples = document.querySelector("#Temples");
    let front = document.querySelector("#Front");

    console.log(temples);

    temples.addEventListener("click", function () {
        console.log(temples);
    })
}

function eventListenersOnParts() {
    const glassesParts = document.querySelectorAll(".g_to_interact_with");
    glassesParts.forEach((glassesPart) => {
        glassesPart.addEventListener("click", glassesPartClicked);
        glassesPart.addEventListener("mouseover", glassesPartHover);
        glassesPart.addEventListener("mouseout", removeStroke);
    });
}

function colorClick(x) {
    console.log("click", x.getAttribute("fill"));
    if (elementToPaint != undefined) {

        if (elementToPaint.id === x.getAttribute("value")) {
            console.log(elementToPaint);
            elementToPaint.style.fill = x.getAttribute("fill");
        }
    }
}

function glassesPartClicked() {
    console.log(this);
    elementToPaint = this;
}

function glassesPartHover() {
    this.classList.add("hover");
    this.style.stroke = "grey";
    this.style.strokeWidth = "5px";
    this.style.strokeDasharray = "15";
    console.log("hovers");
}

function removeStroke() {
    this.classList.remove("hover");
    this.style.stroke = "transparent";
}

function toggleSunglsses() {
    const sung = document.querySelector("#Sunglasses_Image");
    sung.classList.toggle("display_block");
}