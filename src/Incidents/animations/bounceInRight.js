export const bounceInRight = {
  0: {
    opacity: 0,
    transform: {
      translateX: "3000px",
      scaleX: 3,
    },
    easing: [0.215, 0.61, 0.355, 1],
  },
  60: {
    opacity: 1,
    transform: {
      translateX: "-25px",
      scaleX: 1,
    },
    easing: [0.215, 0.61, 0.355, 1],
  },
  75: {
    transform: {
      translateX: "10px",
      scaleX: 0.98,
    },
    easing: [0.215, 0.61, 0.355, 1],
  },
  90: {
    transform: {
      translateX: "-5px",
      scaleX: 0.995,
    },
    easing: [0.215, 0.61, 0.355, 1],
  },
  100: {
    transform: {
      translateX: 0,
    },
    easing: [0.215, 0.61, 0.355, 1],
  },
};
