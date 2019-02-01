// Wrap every letter in a span
$('.ml14 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutationRecord) {
    anime.timeline({loop: false})
    .add({})
    .add({
      targets: '.ml14 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeInOutExpo",
      duration: 900
    }).add({
      targets: '.ml14 .letter',
      opacity: [0,1],
      translateX: [40,0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: '-=600'
    }).add({
      targets: '.ml14',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo"
    });
  });
});

var target = document.getElementById('slidesContainer');
observer.observe(target, { attributes : true, attributeFilter : ['style'] });
