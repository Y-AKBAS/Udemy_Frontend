const idName = "myImage"
const className = "my_images"
let image = document.getElementById(idName);
console.log(`Your base uri is: ${image.baseURI}`)

let images = document.getElementsByTagName("img");
console.log(`You have ${images.length} images on this page!`);
console.log("Tag images:")
for (let img of images) {
    console.log(img.src)
}
console.log("Class images:")
let classImage = document.getElementsByClassName(className)
for (const img of classImage) {
    console.log(img.src);
};

// with querySelector we can select the first all of them and much more above
console.log("QuerySelector: ")
let firstImage = document.querySelector("img");
console.log(firstImage.baseURI)

console.log("QuerySelectorAll: ")
let allImages = document.querySelectorAll("img");
console.log(allImages.length);
