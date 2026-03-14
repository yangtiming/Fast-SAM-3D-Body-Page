/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'static/js/particles.json', function() {
    console.log('callback - particles.js config loaded');

    // Pause particles animation when any video is playing to save GPU
    var pJS = window.pJSDom[0].pJS;
    var videos = document.querySelectorAll('video');

    function checkVideos() {
        var anyPlaying = false;
        videos.forEach(function(v) {
            if (!v.paused) anyPlaying = true;
        });
        if (anyPlaying && pJS.particles.move.enable) {
            pJS.particles.move.enable = false;
            pJS.fn.particlesRefresh();
        } else if (!anyPlaying && !pJS.particles.move.enable) {
            pJS.particles.move.enable = true;
            pJS.fn.particlesRefresh();
        }
    }

    videos.forEach(function(v) {
        v.addEventListener('play', checkVideos);
        v.addEventListener('pause', checkVideos);
        v.addEventListener('ended', checkVideos);
    });
  });