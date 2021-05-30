$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "cat damien.le_borgne<br/>" +
      "<span class='caret'>$</span> Compétences en programmation: Python, C#, C++, Web<br/> ^100" +
      "<span class='caret'>$</span> Passions: Développement, Vélo, Ecouter de la musique<br/> ^300" +
      "<span class='caret'>$</span> alias: zDeltas <br/>"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});

