//lazy load images
// document.addEventListener("DOMContentLoaded", function () {
//   var lazyImages = document.querySelectorAll("img");

//   // IntersectionObserver for lazy loading
//   var lazyImageObserver = new IntersectionObserver(function (
//     entries,
//     observer
//   ) {
//     entries.forEach(function (entry) {
//       if (entry.isIntersecting) {
//         var lazyImage = entry.target;
//         lazyImage.src = lazyImage.getAttribute("data-src");
//         lazyImage.removeAttribute("data-src");
//         lazyImageObserver.unobserve(lazyImage);
//       }
//     });
//   });

//   // Observe each image
//   lazyImages.forEach(function (lazyImage) {
//     lazyImage.setAttribute("data-src", lazyImage.src);
//     lazyImage.removeAttribute("src");
//     lazyImageObserver.observe(lazyImage);
//   });
// });

//play name
function playAudio() {
  var audioElement = new Audio(
    document.getElementById("playButton").getAttribute("data-audio")
  );

  // Play the audio
  audioElement.play();
}

const hamburger = document.getElementById("hamburger");
const naviMenu = document.getElementById("navi-menu");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");

window.addEventListener("mouseup", function (event) {
  // On click of hamburger icons, toggle active menu and toggle hamburger classes
  hamburger.addEventListener("click", function () {
    naviMenu.classList.toggle("active");
    menu1.classList.toggle("top");
    menu2.classList.toggle("middle");
    menu3.classList.toggle("bottom");
  });

  // Close menu and deactivate hamburger classes on click outside the menu
  if (event.target != naviMenu) {
    naviMenu.classList.remove("active"); //close menu
    menu1.classList.remove("top"); //go back to default hamburger
    menu2.classList.remove("middle"); //go back to default hamburger
    menu3.classList.remove("bottom"); //go back to default hamburger
  }
});

// Dark Mode toggler

const toggle = document.getElementById("toggle");

toggle.onclick = function () {
  // add settimeout to delay dark-mode transition by .3 secs
  setTimeout(function () {
    document.body.classList.toggle("dark-mode");
  }, 300);
};

const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Load More feature

const load = document.getElementById("load");
const loadButton = document.getElementById("loadmore");
const loadLessBtn = document.getElementById("loadless");
const moreSection = document.getElementById("more-section");

window.addEventListener("mouseup", function () {
  // On click of hamburger icons, toggle active menu and toggle hamburger classes
  loadButton.addEventListener("click", function () {
    setTimeout(function () {
      moreSection.style.display = "block";
      load.style.display = "none";
    }, 200);
  });

  loadLessBtn.addEventListener("click", function () {
    setTimeout(function () {
      moreSection.style.display = "none";
      load.style.display = "flex";
    }, 200);
  });
});

// video embeds
document.addEventListener("DOMContentLoaded", function () {
  // hangman
  $("body")
    .on("click", "#hangmanLaunch", function () {
      var hangmanVideoID = $(this).data("vimeo-id"),
        $video =
          '<div id="vimeo-pop-container"><div><span class="vimeo-close"></span><iframe src="https://player.vimeo.com/video/898648860?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="hangman-ios"></iframe></div></div>';
      $("body").append($video);
    })

    .on("click", ".vimeo-close", function () {
      $(this).addClass("closing");

      $("#vimeo-pop-container")
        .delay(700)
        .animate(
          {
            height: 0,
            top: "50%",
          },
          "fast",
          function () {
            $("#vimeo-pop-container").remove();
          }
        );
    });

  // Weather app
  $("body")
    .on("click", "#weatherAppLaunch", function () {
      var weatherVideoID = $(this).data("vimeo-id"),
        $video =
          '<div id="vimeo-pop-container"><div><span class="vimeo-close"></span><iframe src="https://player.vimeo.com/video/898651311?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="weather-app"></iframe></div></div>';
      $("body").append($video);
    })

    .on("click", ".vimeo-close", function () {
      $(this).addClass("closing");

      $("#vimeo-pop-container")
        .delay(700)
        .animate(
          {
            height: 0,
            top: "50%",
          },
          "fast",
          function () {
            $("#vimeo-pop-container").remove();
          }
        );
    });

  //Todo app
  $("body")
    .on("click", "#todoLaunch", function () {
      var todoVideoID = $(this).data("vimeo-id"),
        $video =
          '<div id="vimeo-pop-container"><div><span class="vimeo-close"></span><iframe src="https://player.vimeo.com/video/898803877?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="todo-app-demo"></iframe></div></div>';
      $("body").append($video);
    })

    .on("click", ".vimeo-close", function () {
      $(this).addClass("closing");

      $("#vimeo-pop-container")
        .delay(700)
        .animate(
          {
            height: 0,
            top: "50%",
          },
          "fast",
          function () {
            $("#vimeo-pop-container").remove();
          }
        );
    });
});

//Yelpiee App
$("body")
  .on("click", "#yelpieeLaunch", function () {
    var yelpieeVideoID = $(this).data("vimeo-id"),
      $video =
        '<div id="vimeo-pop-container"><div><span class="vimeo-close"></span><iframe src="https://player.vimeo.com/video/923929556?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="todo-app-demo"></iframe></div></div>';
    $("body").append($video);
  })

  .on("click", ".vimeo-close", function () {
    $(this).addClass("closing");

    $("#vimeo-pop-container")
      .delay(700)
      .animate(
        {
          height: 0,
          top: "50%",
        },
        "fast",
        function () {
          $("#vimeo-pop-container").remove();
        }
      );
  });
