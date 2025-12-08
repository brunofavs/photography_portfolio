
  // <script>
    // List of image filenames inside /fotos/retratos/
    const imageFiles = [
"IMG_0451.jpg",
"IMG_1137.jpg",
"IMG_1180.jpg",
"IMG_1585.jpg",
"IMG_6263-Enhanced-NR.jpg",
"IMG_6271-Enhanced-NR.jpg",
"IMG_6281-Enhanced-NR.jpg",
"IMG_6282-Enhanced-NR.jpg",
"IMG_6318-Enhanced-NR.jpg",
"IMG_6494-Enhanced-NR.jpg",
"IMG_6497-Enhanced-NR.jpg",
"IMG_6885-Enhanced-NR.jpg",
"IMG_6888-Enhanced-NR.jpg",
"IMG_6893-Enhanced-NR.jpg",
"IMG_7258.jpg",
"IMG_8506.jpg",
"IMG_8922-Enhanced-NR.jpg",
"IMG_8928-Enhanced-NR.jpg",
"IMG_9144-Enhanced-NR.jpg",
"IMG_9358-Enhanced-NR.jpg",
"IMG_9803-Enhanced-NR.jpg",
"_MG_7763.jpg",
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
        img.src = `fotos/NL_Ambiente/${file}`;
        img.loading = "lazy";

        div.appendChild(img);
        grid.appendChild(div);
      });
  // </script>
