$(document).ready(function () {
  adjustContainerHeight();

  $(window).resize(function () {
    adjustContainerHeight();
  });
});

function adjustContainerHeight() {
  var containerWidth = $(".container").width();
  var imgWidth = $("#container-img").width();
  var imgHeight = $("#container-img").height();

  var aspectRatio = imgHeight / imgWidth;
  var bannerHeight = bannerWidth * aspectRatio;

  $(".container").height(containerHeight);
}
