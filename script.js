let cnv = document.getElementById("canvas");
let cxt = cnv.getContext("2d");
let cloud = document.getElementById("cloud")
cnv.width = 400;
cnv.height = 400;


cxt.fillStyle = "rgb(0, 0, 255)";
cxt.fillRect(0, 0, 400, 400);
cxt.fillStyle = "red";
cxt.beginPath();
cxt.arc(200, 250, 30, 0, 2 * Math.PI);
cxt.fill();
cxt.fillStyle = "green";
cxt.fillRect(0, 250, 400, 150);
cxt.drawImage(cloud, 120, 70);
cxt.drawImage(cloud, 150, 50);
