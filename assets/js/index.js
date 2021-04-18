$(document).ready(function () {
  var count = localStorage.getItem("count") || 0;
  var level = 0;

  if (count % 2 === 0) {
    $("#darkmode-link").remove();
  } else {
    $(document.head).append(
      '<link id="darkmode-link" href="assets/css/darkmode.css" rel="stylesheet" type="text/css">'
    );
  }

  $("#how-to-play-button, #how-to-play-dropdown").click(function () {
    $("#exampleModalCenter").modal("show");
  });

  $(".close-modal").click(function () {
    $("#exampleModalCenter").modal("hide");
  });

  $("#darkmode-button, #darkmode-dropdown").click(function () {
    count = parseInt(count) + 1;
    if (count % 2 === 0) {
      $("#darkmode-link").remove();
      localStorage.setItem("count", count);
    } else {
      $(document.head).append(
        '<link id="darkmode-link" href="assets/css/darkmode.css" rel="stylesheet" type="text/css">'
      );
      localStorage.setItem("count", count);
    }
  });

  $("#level-1-button").click(function () {
    level = 1;
    localStorage.setItem("level", level);
  });

  $("#level-2-button").click(function () {
    level = 2;
    localStorage.setItem("level", level);
  });

  $("#level-3-button").click(function () {
    level = 3;
    localStorage.setItem("level", level);
  });

  $(".facebook-login").click(function () {
    FB.getLoginStatus(function (response) {
      if (response.status === "connected") {
        FB.api("/me", { fields: "name,email" }, function (response) {
          $(".facebook-login").html(
            "<i class='fab fa-facebook-f'></i> Logged in as " + response.name
          );
        });
      } else {
        FB.login(
          function (response) {
            if (response.status === "connected") {
              FB.api("/me", { fields: "name,email" }, function (response) {
                $(".facebook-login").html(
                  "<i class='fab fa-facebook-f'></i> Logged in as " +
                    response.name
                );
              });
            }
          },
          { scope: "email" }
        );
      }
    });
  });
});
