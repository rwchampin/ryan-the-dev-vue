import gsap from "./gsap-core.js";
import CSSPlugin from "./CSSPlugin.js";
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap, // to protect from tree shaking
	TweenMaxWithCSS = gsapWithCSS.core.Tween;


	n = true,

// n = function (e) {// for (var t = -1 !== (r ? r.location.href : "").indexOf(String.fromCharCode(103, 114, 101, ...

// if (-1 !== e.indexOf(i[n])) return !0;

// return t && r && r.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78 ...

// }(r ? r.location.host : ""),
export { gsapWithCSS as gsap, gsapWithCSS as default, CSSPlugin, TweenMaxWithCSS as TweenMax };
export { TweenLite, TimelineMax, TimelineLite, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ, wrap, wrapYoyo, distribute, random, snap, normalize, getUnit, clamp, splitColor, toArray, mapRange, pipe, unitize, interpolate, shuffle, selector } from "./gsap-core.js";
export * from "./CustomEase.js";
export * from "./CSSRulePlugin.js";
export * from "./Draggable.js";
export * from "./EaselPlugin.js";
export * from "./EasePack.js";
export * from "./Flip.js";
export * from "./MotionPathPlugin.js";
export * from "./Observer.js";
export * from "./PixiPlugin.js";
export * from "./ScrollToPlugin.js";
export * from "./ScrollTrigger.js";
export * from "./TextPlugin.js";

//BONUS EXPORTS
export * from "./DrawSVGPlugin.js";
export * from "./Physics2DPlugin.js";
export * from "./PhysicsPropsPlugin.js";
export * from "./ScrambleTextPlugin.js";
export * from "./CustomBounce.js";
export * from "./CustomWiggle.js";
export * from "./GSDevTools.js";
export * from "./InertiaPlugin.js";
export * from "./MorphSVGPlugin.js";
export * from "./MotionPathHelper.js";
export * from "./ScrollSmoother.js";
export * from "./SplitText.js";