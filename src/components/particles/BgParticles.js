import React from 'react'
import Particles from 'react-particles-js';
import './BgParticles.css'

const BgParticles = () =>
{
  return (<div>
    <Particles
      id="tsparticles"
      className="particles"
      params={{
        "background": {
          "color": {
            "value": "#283044"
          },
          "image": "",
          "position": "0 50%",
          "repeat": "no-repeat",
          "size": "60%",
          "opacity": 1
        },
        "backgroundMask": {
          "cover": {
            "color": {
              "value": "#fff"
            },
            "opacity": 1
          },
          "enable": false
        },
        "detectRetina": true,
        "fpsLimit": 30,
        "infection": {
          "cure": false,
          "delay": 0,
          "enable": false,
          "infections": 0,
          "stages": []
        },
        "interactivity": {
          "detectsOn": "canvas",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "repulse"
            },
            "onDiv": {
              "ids": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": false,
              "mode": "grab",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "speed": 1
            },
            "bubble": {
              "distance": 400,
              "duration": 2,
              "opacity": 8,
              "size": 40
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 200,
              "links": {
                "opacity": 1
              }
            },
            "push": {
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4,
              "speed": 1
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "trail": {
              "delay": 1,
              "quantity": 1
            }
          }
        },
        "particles": {
          "collisions": {
            "enable": false,
            "mode": "bounce"
          },
          "color": {
            "value": "#ffffff",
            "animation": {
              "enable": false,
              "speed": 1,
              "sync": true
            }
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#ffffff"
            },
            "consent": false,
            "distance": 150,
            "enable": false,
            "opacity": 0.4,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#00ff00"
              },
              "enable": false
            },
            "triangles": {
              "enable": false
            },
            "width": 1,
            "warp": false
          },
          "move": {
            "angle": 90,
            "attract": {
              "enable": false,
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "direction": "left",
            "enable": true,
            "noise": {
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false
            },
            "outMode": "out",
            "random": false,
            "speed": 6,
            "straight": true,
            "trail": {
              "enable": false,
              "length": 10,
              "fillColor": {
                "value": "#000000"
              }
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": false,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 100
          },
          "opacity": {
            "animation": {
              "enable": false,
              "minimumValue": 0.1,
              "speed": 1,
              "sync": false
            },
            "random": {
              "enable": false,
              "minimumValue": 1
            },
            "value": 0.5
          },
          "rotate": {
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false,
            "random": false,
            "value": 0
          },
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "options": {
              "polygon": {
                "nb_sides": 5
              },
              "star": {
                "nb_sides": 5
              },
              "image": {
                "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                "width": 100,
                "height": 100
              },
              "images": {
                "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "type": "star"
          },
          "size": {
            "animation": {
              "destroy": "none",
              "enable": false,
              "minimumValue": 0.1,
              "speed": 40,
              "startValue": "max",
              "sync": false
            },
            "random": {
              "enable": true,
              "minimumValue": 1
            },
            "value": 4
          },
          "stroke": {
            "width": 0,
            "color": {
              "value": "#000000",
              "animation": {
                "enable": false,
                "speed": 1,
                "sync": true
              }
            }
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          }
        },
        "pauseOnBlur": true
      }}
    />
    <img src='https://uiaczw.dm.files.1drv.com/y4pgzpAb5261BvauszKfkVbwsz2IaiKfVIuLtSKfI4uPEFu-N7yuXsr4nJYxHJh-wgTFSrauFh2DCmSbsOaxCYmYLELYuCV4UhNAH8yP87UYdylTJ8se8i9vympifycNDtDevvmt6V_EpSCOhDkONlRfEtZcN4Y7iW9AhhWb0C9eP8EXAV-xxFFeViaAbyeTQ6e_Z3NhHWuJGzY5qcfIyv6iUV4qtMW5_uTc4XVCyjeaEE/nyan%20cat.gif?download&psid=1' 
    alt='Cat'
    className='cat w-50 h-auto-ns'
    />
    </div>
  );
}

export default BgParticles;