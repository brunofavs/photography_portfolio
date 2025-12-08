
  // <script>
    // List of image filenames inside /fotos/retratos/
    const imageFiles = [
                "IMG_0829.jpg",
                "IMG_0833.jpg",
                "IMG_0854.jpg",
                "IMG_0870.jpg",
                "IMG_0895.jpg",
                "IMG_0896.jpg",
                "IMG_0897.jpg",
                "IMG_0972.jpg",
                "IMG_0973.jpg",
                "IMG_0977.jpg",
                "IMG_3228-Edit.jpg",
                "IMG_1100.jpg",
                "IMG_1430.jpg",
                "IMG_1431.jpg",
                "IMG_1436.jpg",
                "IMG_2850.jpg",
                "IMG_2851.jpg",
                "IMG_2859.jpg",
                "IMG_2869.jpg",
                "IMG_2966.jpg",
                "IMG_2973.jpg",
                "IMG_2995.jpg",
                "IMG_3003.jpg",
                "IMG_3043.jpg",
                "IMG_3045.jpg",
                "IMG_3050.jpg",
                "IMG_3087-Edit.jpg",
                "IMG_3103.jpg",
                "IMG_3210-Edit.jpg",
                "IMG_3231-Edit-2.jpg",
                "IMG_3237-Edit.jpg",
                "IMG_3276.jpg",
                "IMG_3561.jpg",
                "IMG_3597.jpg",
                "IMG_3651.jpg",
                "IMG_3669.jpg",
                "IMG_3671.jpg",
                "IMG_3672.jpg",
                "IMG_4150-Enhanced-NR-Edit.jpg",
                "IMG_4153-Enhanced-NR-Edit.jpg",
                "IMG_4158-Enhanced-NR-Edit.jpg",
                "IMG_4496.jpg",
                "IMG_4498.jpg",
                "IMG_4513.jpg",
                "IMG_5025.jpg",
                "IMG_5059.jpg",
                "IMG_6645.jpg",
                "IMG_9047.jpg",
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
        img.src = `fotos/Retrato/${file}`;
        img.loading = "lazy";

        div.appendChild(img);
        grid.appendChild(div);
      });
  // </script>
