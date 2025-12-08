
  // <script>
    // List of image filenames inside /fotos/retratos/
    const imageFiles = [
"IMG_0073-Enhanced-NR.jpg",
"IMG_0214-Enhanced-NR.jpg",
"IMG_0316.jpg",
"IMG_0338.jpg",
// "IMG_0356.jpg",
// "IMG_0361.jpg",
"IMG_0362.jpg",
"IMG_0380.jpg",
"IMG_0510.jpg",
"IMG_0767-Enhanced-NR.jpg",
"IMG_0774-Enhanced-NR.jpg",
"IMG_0775-Enhanced-NR.jpg",
"IMG_0820-Enhanced-NR.jpg",
"IMG_1246-Edit.jpg",
"IMG_1386.jpg",
"IMG_1425.jpg",
"IMG_1688.jpg",
"IMG_1728.jpg",
"IMG_1817.jpg",
"IMG_1871.jpg",
"IMG_1993-Edit.jpg",
"IMG_2006-Edit.jpg",
"IMG_2109-Edit.jpg",
"IMG_2280.jpg",
"IMG_6808-Enhanced-NR.jpg",
"IMG_6883-Enhanced-NR.jpg",
"IMG_6885-Enhanced-NR.jpg",
"IMG_6888-Enhanced-NR.jpg",
"IMG_6893-Enhanced-NR.jpg",
"IMG_6939-Enhanced-NR.jpg",
"IMG_7020-Enhanced-NR.jpg",
"IMG_8289-Enhanced-NR.jpg",
"IMG_8869-Enhanced-NR.jpg",
"IMG_8929-Enhanced-NR.jpg",
"IMG_8930-Enhanced-NR.jpg",
"IMG_9504-Enhanced-NR.jpg",
"IMG_9545-Enhanced-NR.jpg",
"IMG_9592-Enhanced-NR.jpg",
"IMG_9662-Enhanced-NR.jpg",
"IMG_9702-Enhanced-NR.jpg",
"IMG_9703-Enhanced-NR.jpg",
"IMG_9714-Enhanced-NR.jpg",
"IMG_9772-Enhanced-NR.jpg",
"IMG_9837-Enhanced-NR.jpg",
"IMG_9898.jpg",
      // Add more filenames here
    ];

    // const grid = document.getElementById("grid");
    //
    // imageFiles.forEach(file => {
    //   const img = document.createElement("img");
    //   img.src = `fotos/Retrato/${file}`;
    //   img.loading = "lazy";
    //   grid.appendChild(img);
    // });

      const grid = document.getElementById("grid");

      imageFiles.forEach(file => {
        const div = document.createElement("div");
        div.className = "grid-item";

        const img = document.createElement("img");
        img.src = `fotos/NL_Concerto/${file}`;
        // img.loading = "lazy";

        div.appendChild(img);
        grid.appendChild(div);
      });
  // </script>
