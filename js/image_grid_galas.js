
  // <script>
    // List of image filenames inside /fotos/retratos/
    const imageFiles = [
"IMG_1430.jpg",
"IMG_1436.jpg",
"IMG_1501.jpg",
"IMG_1625.jpg",
"IMG_2575.jpg",
"IMG_2576.jpg",
"IMG_2578.jpg",
"IMG_2850.jpg",
"IMG_2851.jpg",
"IMG_2859.jpg",
"IMG_2869.jpg",
"IMG_2966.jpg",
"IMG_2995.jpg",
"IMG_3210-Edit.jpg",
"IMG_3228-Edit.jpg",
"IMG_3231-Edit-2.jpg",
"IMG_3237-Edit.jpg",
"IMG_3276.jpg",
"IMG_3561.jpg",
"IMG_3597.jpg",
"IMG_3651.jpg",
"IMG_3669.jpg",
"IMG_3671.jpg",
"IMG_3672.jpg",
"IMG_3848.jpg",
"IMG_4150-Enhanced-NR-Edit.jpg",
"IMG_4158-Enhanced-NR-Edit.jpg",
"IMG_4175-Enhanced-NR-Edit.jpg",
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
        img.src = `fotos/Galas/${file}`;
        // img.loading = "lazy";

        div.appendChild(img);
        grid.appendChild(div);
      });
  // </script>
