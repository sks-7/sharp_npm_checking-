const sharp = require("sharp");

sharp("./img/Screenshot from 2023-09-04 17-25-38.png")
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
