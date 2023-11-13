export const bounceInDown = {
  0: {
    opacity: 0,
    transform: {
      translateX: 0,
      translateY: "-3000px",
      translateZ: 0,
      scaleY: 3,
    },
    easing: [0.215, 0.61, 0.355, 1],
  },
  60: {
    opacity: 1,
    transform: {
      translateX: 0,
      translateY: "25px",
      translateZ: 0,
      scaleY: 0.9,
    },
    easing: [0.215, 0.61, 0.355, 1],
  },
  75: {
    transform: {
      translateX: 0,
      translateY: "-10px",
      translateZ: 0,
      scaleY: 0.95,
    },
    easing: [0.215, 0.61, 0.355, 1],
  },
  90: {
    transform: {
      translateX: 0,
      translateY: "5px",
      translateZ: 0,
      scaleY: 0.985,
    },
    easing: [0.215, 0.61, 0.355, 1],
  },
  100: {
    transform: {
      translateX: 0,
      translateY: 0,
      translateZ: 0,
    },
    easing: [0.215, 0.61, 0.355, 1],
  },
};
