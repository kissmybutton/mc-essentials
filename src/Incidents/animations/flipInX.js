export const flipInX = {
  0: {
    transform: {
      // perspective: "400px",
      rotateX: "90deg",
    },
    easing: "easeInQuad",
    opacity: 0,
  },
  40: {
    transform: {
      // perspective: "400px",
      rotateX: "-20deg",
    },
    easing: "easeInQuad",
  },
  60: {
    transform: {
      // perspective: "400px",
      rotateX: "10deg",
    },
    opacity: 1,
  },
  80: {
    transform: {
      perspective: "400px",
      rotateX: "-5deg",
    },
  },
  100: {
    transform: {
      perspective: "400px",
    },
  },
};
