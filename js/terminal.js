'use strict';

var terminal = function () {

  var $t = void 0;
  var $c = document.getElementById('caret');
  var $b = document.body;
  var filler = void 0;
  var speed = void 0;
  var notTypingTimer = void 0;

  var init = function init(terminal, fakeCode, wordsPerKey) {
    $t = terminal;
    filler = fakeCode;
    speed = wordsPerKey;
  };

  var nextSnippet = function nextSnippet(pos, str, speed) {
    return str.slice(pos, pos + speed);
  };
  var outputDeleted = function outputDeleted(str, speed) {
    return str.slice(0, -speed);
  };
  var currentPos = function currentPos(str) {
    return str.length;
  };

  var hack = function hack(e) {
    var currentOutput = $t.textContent;
    var pos = currentPos(currentOutput);
    if (pos >= filler.length) $t.innerHTML = '';
    e.preventDefault;
    if (e.keyCode == 8 || e.keyCode == 46) $t.innerHTML = outputDeleted(currentOutput, speed);else $t.innerHTML += nextSnippet(pos, filler, speed);
    scrollTo(0, $b.scrollHeight);
    rage($b);
  };

  var showCaret = function showCaret() {
    return $c.className = '';
  };
  var blinkCaret = function blinkCaret(clname) {
    return $c.className = clname;
  };

  var rage = function rage() {
    $b.style.transform = 'translateX(0) translateY(0)';
    $b.style.transform = 'translateX(' + Math.floor(Math.random() * 3 - 1) / 4 + 'vw) translateY(' + Math.floor(Math.random() * 3 - 1) / 4 + 'vh)';
    $b.style.color = "hsl(" + Math.floor(Math.random() * 360 + 1) + ",100%,50%)";
    clearTimeout(notTypingTimer);
    showCaret();
    notTypingTimer = setTimeout(function () {
      $b.style.color = "#0fb";
      blinkCaret('blink');
    }, 80);
  };

  return {
    init: init,
    hack: hack
  };
}();
