var imagesFlick = [
  "felicity1.JPG",
  "felicity2.JPG",
  "felicity3.JPG",
  "felicity4.JPG",
];
var imagesSneaks = ["","cecelia1.JPG", "cecelia2.JPG", "cecelia3.JPG"];
var gradesSneaks = ["","K", "1", "2"];
var imageNum = 0;
document.getElementById("sneaks").style.display = "none";
document.getElementById("flickaImage").src = imagesFlick[0];

var play = true;

var button1 = document.getElementById("button1");

function playPause() {
  if (play) {
    play = false;
    button1.innerText = "Play";
  } else {
    play = true;
    button1.innerText = "Pause";
  }
}

setInterval(() => {
  if (play) {
    imageNum++;
    //felicity
    document.getElementById("flickaImage").src = imagesFlick[imageNum % 4];
    document.getElementById("flickaGrade").innerText =
      "Grade " + ((imageNum % 4) + 1);
    document.getElementById("schoolYear").innerText =
      2017 + (imageNum % 4) + "-" + (2018 + (imageNum % 4));

    //cecelia
    document.getElementById("sneaksImage").src = imagesSneaks[imageNum % 4];
    document.getElementById("sneaksGrade").innerText =
      "Grade " + gradesSneaks[imageNum % 4];
    document.getElementById("schoolYearSneaks").innerText =
      2017 + (imageNum % 4) + "-" + (2018 + (imageNum % 4));
    if (imageNum % 4 == 0) {
      document.getElementById("sneaks").style.display = "none";
    } else {
      document.getElementById("sneaks").style.display = "block";
    }
  }
}, 3000);
