const images = [
    "morning.PNG",
    "noon.PNG",
    "midnight.PNG",
];

const date = new Date();
const hours = date.getHours();

if(hours>=6 && hours<=11){
    const chosenImage = images[0];
    const bgImage = document.createElement("img");

    bgImage.src = `img/${chosenImage}`;
    document.body.appendChild(bgImage);
} else if(hours>=12 && hours <=17){
    const chosenImage = images[1];
    const bgImage = document.createElement("img");

    bgImage.src = `img/${chosenImage}`;
    document.body.appendChild(bgImage);
} else {
    const chosenImage = images[2];
    const bgImage = document.createElement("img");
    
    bgImage.src = `img/${chosenImage}`;
    document.body.appendChild(bgImage);

}

