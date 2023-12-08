const sharp = require("sharp");

sharp("./img/Screenshot from 2023-09-13 19-23-56.png")
  .rotate()
  .resize(200)
  .jpeg({ mozjpeg: true })
  .toBuffer()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
