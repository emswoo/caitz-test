// SLIDE
const img_src = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
      let num = -1;
 
      function slide_time() {
        if (num === 2) {
          num = 0;
        } else {
          num++;
        }
        document.getElementById("slide_img").src = img_src[num];
      }
 
      setInterval(slide_time, 2000);

      // NEWS
      function HeaderClick() {
        target = document.getElementById("contentsPanel");
        if (target.style.display == "none") {
          target.style.display = "block";
        } else {
          target.style.display = "none";
        }
      }