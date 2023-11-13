import { Combo, CSSEffect } from "@donkeyclip/motorcortex";
import { backInDown } from "./animations/backInDown";
import { backInLeft } from "./animations/backInLeft";
import { backInRight } from "./animations/backInRight";
import { backInUp } from "./animations/backInUp";
import { backOutDown } from "./animations/backOutDown";
import { backOutLeft } from "./animations/backOutLeft";
import { backOutRight } from "./animations/backOutRight";
import { backOutUp } from "./animations/backOutUp";
import { bounce } from "./animations/bounce";
import { bounceIn } from "./animations/bounceIn";
import { bounceInDown } from "./animations/bounceInDown";
import { bounceInLeft } from "./animations/bounceInLeft";
import { bounceInRight } from "./animations/bounceInRight";
import { bounceOut } from "./animations/bounceOut";
import { bounceOutDown } from "./animations/bounceOutDown";
import { bounceOutLeft } from "./animations/bounceOutLeft";
import { bounceOutRight } from "./animations/bounceOutRight";
import { bounceOutUp } from "./animations/bounceOutUp";
import { fadeInDown } from "./animations/fadeInDown";
import { fadeInLeft } from "./animations/fadeInLeft";
import { fadeInRight } from "./animations/fadeInRight";
import { fadeInUp } from "./animations/fadeInUp";
import { fadeOutDown } from "./animations/fadeOutDown";
import { fadeOutLeft } from "./animations/fadeOutLeft";
import { fadeOutRight } from "./animations/fadeOutRight";
import { fadeOutUp } from "./animations/fadeOutUp";
import { flash } from "./animations/flash";
import { flipInX } from "./animations/flipInX";
import { heartBeat } from "./animations/hearBeat";
import { headShake } from "./animations/headShake";
import { jello } from "./animations/jello";
import { pulse } from "./animations/pulse";
import { rubberBand } from "./animations/rubberBand";
import { shakeX } from "./animations/shakeX";
import { shakeY } from "./animations/shakeY";
import { tada } from "./animations/tada";

const animations = {
  pulse,
  bounce,
  flash,
  heartBeat,
  jello,
  backInDown,
  backInLeft,
  backInRight,
  backInUp,
  backOutDown,
  backOutLeft,
  backOutRight,
  backOutUp,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  fadeOutDown,
  fadeOutLeft,
  fadeOutRight,
  fadeOutUp,
  flipInX,
  headShake,
  rubberBand,
  shakeX,
  shakeY,
  tada,
};

function createAnimations(keyframes, totalDuration) {
  const animations = [];
  const initialKey = 0;
  let previousKey = 0;

  // Extract initial values and use a current state to track changes
  const currentState = { ...keyframes[initialKey] };

  // Process each keyframe
  Object.keys(keyframes).forEach((key) => {
    const theKey = parseFloat(key);
    if (theKey !== initialKey) {
      const duration = Math.floor(
        (theKey / 100) * totalDuration - (previousKey / 100) * totalDuration
      );
      const position = Math.floor((previousKey / 100) * totalDuration);
      const animatedAttrs = { ...keyframes[key] };
      const initialVals = {};

      // Remove easing from animatedAttrs if exists
      const easing = animatedAttrs.easing || "linear";
      delete animatedAttrs.easing;

      // Get initial values for the current animation step
      Object.keys(animatedAttrs).forEach((attr) => {
        if (currentState[attr] !== undefined) {
          initialVals[attr] = currentState[attr];
        }
      });

      animations.push({
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs,
          initialValues: initialVals,
        },
        props: {
          duration,
          easing,
        },
        position,
      });

      // Update current state with target values for the next iteration
      Object.assign(currentState, animatedAttrs);
      previousKey = theKey;
    }
  });
  return animations;
}

export default class Keyframes extends Combo {
  get incidents() {
    let keyframes = this.attrs.keyframes;
    if (this.attrs.animation) {
      keyframes = animations[this.attrs.animation];
    }
    const incidents = createAnimations(keyframes, this.props.duration);
    return incidents;
  }
}
