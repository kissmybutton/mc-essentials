# MotorCortex-mc-essentials

**Table of Contents**

- [MotorCortex-mc-essentials](#motorcortex-mc-essentials)
  - [Description](#description)
  - [Demo](#demo)
- [Incidents](#incidents)
  - [Animation](#animation)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Using the Plugin](#importing-and-using-the-plugin)
- [Using the Animation Incident](#using-the-animation-incident)
  - [Ready-to-Use Animations](#ready-to-use-animations)
  - [Custom Keyframes](#custom-keyframes)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Description

`mc-essentials` provides developers with a range of convenient CSS animations such as flash, bounce, etc., while also accepting custom keyframes for creating unique animation combinations.

## Demo

[Check out the demo here](https://kissmybutton.github.io/mc-essentials/demo/)

# Incidents

## Animation

The `Animation` incident can take an object in its attributes, which may have either the `keyframes` key for defining custom keyframes or the `animation` key to use one of the plugin's ready-made animations.

# Getting Started

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-mc-essentials
# OR
$ yarn add @kissmybutton/motorcortex-mc-essentials
```

## Importing and using the plugin

```javascript
import { loadPlugin } from "@kissmybutton/motorcortex";
import MCEssentials from "@kissmybutton/motorcortex-mc-essentials";
const EssentialsPlugin = loadPlugin(MCEssentials);
```

# Using the Animation Incident

## Ready-to-Use Animations

The list of available animations includes:

- pulse
- bounce
- flash
- heartBeat
- jello
- backInDown
- backInLeft
- backInRight
- backInUp
- backOutDown
- backOutLeft
- backOutRight
- backOutUp
- bounceIn
- bounceInDown
- bounceInLeft
- bounceInRight
- bounceOut
- bounceOutDown
- bounceOutLeft
- bounceOutRight
- bounceOutUp
- fadeInDown
- fadeInLeft
- fadeInRight
- fadeInUp
- fadeOutDown
- fadeOutLeft
- fadeOutRight
- fadeOutUp
- flipInX
- headShake
- rubberBand
- shakeX
- shakeY
- tada

```javascript
import { loadPlugin } from "@kissmybutton/motorcortex";
import MCEssentials from "@kissmybutton/motorcortex-mc-essentials";
const EssentialsPlugin = loadPlugin(MCEssentials);

const bounceAnimation = new EssentialsPlugin.Animation(
  {
    animation: "bounce",
  },
  {
    selector: ".classA",
    duration: 1000,
    easing: "linear",
  }
);
```

## Custom Keyframes

For custom keyframes, users can define the CSS attributes' values animations by specifying their values at various percentages of the animation. The `easing` key is supported and defines the easing of the animation from the previous step to the current one.

Example:

```javascript
const animation = new EssentialsPlugin.Animation(
  {
    keyframes: {
      0: {
        top: "20px",
        width: "400px",
        easing: "easeInOutQuad",
      },
      50: {
        easing: "easeInOutQuad",
        top: "200px",
        width: "200px",
        background: "pink",
      },
      100: {
        width: "10px",
        background: "red",
        easing: "easeInOutQuad",
      },
    },
  },
  {
    selector: ".classA",
    duration: 1000,
    easing: "linear",
  }
);
```

# Contributing

Please refer to the general guidelines for contributing to MotorCortex plugins.

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by

[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
