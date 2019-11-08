jQuery(document).ready(function($) {


    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    function loadParticle(){
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS("particles-js", {
              "particles": {
                  "number": {
                      "value": 120,
                      "density": {
                          "enable": true,
                          "value_area": 300
                      }
                  },
                  "color": {
                      "value": "#252533"
                  },
                  "opacity": {
                      "value": 1,
                      "random": false,
                      "anim": {
                          "enable": false,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                      }
                  },
                  "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                          "enable": false,
                          "speed": 10,
                          "size_min": 0.1,
                          "sync": false
                      }
                  },
                  "line_linked": {
                      "enable": true,
                      "distance": 100,
                      "color": "#4c9cdf",
                      "opacity": 0.7,
                      condensed_mode: {
                          enable: 0,
                          rotateX: 600,
                          rotateY: 600
                      },
                      "width": 1
                  },
                  "move": {
                      "enable": true,
                      "speed": 1,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                      }
                  }
              },
              "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "grab"
                      },
                      "onclick": {
                          "enable": false,
                          "mode": "push"
                      },
                      "resize": true
                  },
                  "modes": {
                      "grab": {
                          "distance": 140,
                          "line_linked": {
                              "opacity": 1
                          }
                      },
                      "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                      },
                      "repulse": {
                          "distance": 200,
                          "duration": 0.4
                      },
                      "push": {
                          "particles_nb": 4
                      },
                      "remove": {
                          "particles_nb": 2
                      }
                  }
              },
              "retina_detect": true
          });
        }
        loadParticle();
});
