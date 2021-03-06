/*!
 * ScrollSmoother 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */
let e,
  t,
  r,
  o,
  s,
  n,
  i,
  l,
  a,
  c,
  h,
  d,
  g,
  u = () => 'undefined' != typeof window,
  f = () => e || (u() && (e = window.gsap) && e.registerPlugin && e),
  p = function () {
    return String.fromCharCode.apply(null, arguments)
  },
  m = p(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
  w =
    (function (e) {
      var t = 'undefined' != typeof window,
      r = true,
        // r =
        //   0 ===
        //     (t ? window.location.href : '').indexOf(
        //       p(102, 105, 108, 101, 58, 47, 47),
        //     ) ||
        //   -1 !== e.indexOf(p(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
        //   -1 !== e.indexOf(p(49, 50, 55, 46, 48, 32, 48, 46, 49)),
        // o = [
        //   m,
        //   p(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
        //   p(
        //     99,
        //     111,
        //     100,
        //     101,
        //     112,
        //     101,
        //     110,
        //     46,
        //     112,
        //     108,
        //     117,
        //     109,
        //     98,
        //     105,
        //     110,
        //     103,
        //   ),
        //   p(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
        //   p(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
        //   p(
        //     99,
        //     111,
        //     100,
        //     101,
        //     112,
        //     101,
        //     110,
        //     46,
        //     119,
        //     101,
        //     98,
        //     115,
        //     105,
        //     116,
        //     101,
        //   ),
        //   p(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
        //   p(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
        //   p(99, 100, 112, 110, 46, 105, 111),
        //   p(112, 101, 110, 115, 46, 105, 111),
        //   p(103, 97, 110, 110, 111, 110, 46, 116, 118),
        //   p(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
        //   p(
        //     116,
        //     104,
        //     101,
        //     109,
        //     101,
        //     102,
        //     111,
        //     114,
        //     101,
        //     115,
        //     116,
        //     46,
        //     110,
        //     101,
        //     116,
        //   ),
        //   p(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
        //   p(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
        //   p(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
        //   p(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109),
        //   p(112, 108, 110, 107, 114, 46, 99, 111),
        //   p(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
        //   p(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
        //   p(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
        //   p(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
        //   p(99, 115, 98, 46, 97, 112, 112),
        //   p(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
        //   p(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
        //   p(99, 111, 100, 105, 101, 114, 46, 105, 111),
        //   p(
        //     109,
        //     111,
        //     116,
        //     105,
        //     111,
        //     110,
        //     116,
        //     114,
        //     105,
        //     99,
        //     107,
        //     115,
        //     46,
        //     99,
        //     111,
        //     109,
        //   ),
        //   p(
        //     115,
        //     116,
        //     97,
        //     99,
        //     107,
        //     111,
        //     118,
        //     101,
        //     114,
        //     102,
        //     108,
        //     111,
        //     119,
        //     46,
        //     99,
        //     111,
        //     109,
        //   ),
        //   p(
        //     115,
        //     116,
        //     97,
        //     99,
        //     107,
        //     101,
        //     120,
        //     99,
        //     104,
        //     97,
        //     110,
        //     103,
        //     101,
        //     46,
        //     99,
        //     111,
        //     109,
        //   ),
        //   p(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
        // ],
        s = function () {
          true &&
            ('loading' === document.readyState ||
            'interactive' === document.readyState
              ? document.addEventListener('readystatechange', s)
              : (document.removeEventListener('readystatechange', s),
                // t &&
                //   window.console &&
                //   !window._gsapWarned &&
                //   'object' == typeof window.gsap &&
                //   !1 !== window.gsap.config().trialWarn &&
                //   (console.log(
                //     p(37, 99, 87, 97, 114, 110, 105, 110, 103),
                //     p(
                //       102,
                //       111,
                //       110,
                //       116,
                //       45,
                //       115,
                //       105,
                //       122,
                //       101,
                //       58,
                //       51,
                //       48,
                //       112,
                //       120,
                //       59,
                //       99,
                //       111,
                //       108,
                //       111,
                //       114,
                //       58,
                //       114,
                //       101,
                //       100,
                //       59,
                //     ),
                //   ),
                //   console.log(
                //     p(
                //       65,
                //       32,
                //       116,
                //       114,
                //       105,
                //       97,
                //       108,
                //       32,
                //       118,
                //       101,
                //       114,
                //       115,
                //       105,
                //       111,
                //       110,
                //       32,
                //       111,
                //       102,
                //       32,
                //     ) +
                //       'ScrollSmoother' +
                //       p(
                //         32,
                //         105,
                //         115,
                //         32,
                //         108,
                //         111,
                //         97,
                //         100,
                //         101,
                //         100,
                //         32,
                //         116,
                //         104,
                //         97,
                //         116,
                //         32,
                //         111,
                //         110,
                //         108,
                //         121,
                //         32,
                //         119,
                //         111,
                //         114,
                //         107,
                //         115,
                //         32,
                //         108,
                //         111,
                //         99,
                //         97,
                //         108,
                //         108,
                //         121,
                //         32,
                //         97,
                //         110,
                //         100,
                //         32,
                //         111,
                //         110,
                //         32,
                //         100,
                //         111,
                //         109,
                //         97,
                //         105,
                //         110,
                //         115,
                //         32,
                //         108,
                //         105,
                //         107,
                //         101,
                //         32,
                //         99,
                //         111,
                //         100,
                //         101,
                //         112,
                //         101,
                //         110,
                //         46,
                //         105,
                //         111,
                //         32,
                //         97,
                //         110,
                //         100,
                //         32,
                //         99,
                //         111,
                //         100,
                //         101,
                //         115,
                //         97,
                //         110,
                //         100,
                //         98,
                //         111,
                //         120,
                //         46,
                //         105,
                //         111,
                //         46,
                //         32,
                //         42,
                //         42,
                //         42,
                //         32,
                //         68,
                //         79,
                //         32,
                //         78,
                //         79,
                //         84,
                //         32,
                //         68,
                //         69,
                //         80,
                //         76,
                //         79,
                //         89,
                //         32,
                //         84,
                //         72,
                //         73,
                //         83,
                //         32,
                //         70,
                //         73,
                //         76,
                //         69,
                //         32,
                //         42,
                //         42,
                //         42,
                //         32,
                //         76,
                //         111,
                //         97,
                //         100,
                //         105,
                //         110,
                //         103,
                //         32,
                //         105,
                //         116,
                //         32,
                //         111,
                //         110,
                //         32,
                //         97,
                //         110,
                //         32,
                //         117,
                //         110,
                //         97,
                //         117,
                //         116,
                //         104,
                //         111,
                //         114,
                //         105,
                //         122,
                //         101,
                //         100,
                //         32,
                //         115,
                //         105,
                //         116,
                //         101,
                //         32,
                //         118,
                //         105,
                //         111,
                //         108,
                //         97,
                //         116,
                //         101,
                //         115,
                //         32,
                //         116,
                //         104,
                //         101,
                //         32,
                //         108,
                //         105,
                //         99,
                //         101,
                //         110,
                //         115,
                //         101,
                //         32,
                //         97,
                //         110,
                //         100,
                //         32,
                //         119,
                //         105,
                //         108,
                //         108,
                //         32,
                //         99,
                //         97,
                //         117,
                //         115,
                //         101,
                //         32,
                //         97,
                //         32,
                //         114,
                //         101,
                //         100,
                //         105,
                //         114,
                //         101,
                //         99,
                //         116,
                //         46,
                //         32,
                //         80,
                //         108,
                //         101,
                //         97,
                //         115,
                //         101,
                //         32,
                //         106,
                //         111,
                //         105,
                //         110,
                //         32,
                //         67,
                //         108,
                //         117,
                //         98,
                //         32,
                //         71,
                //         114,
                //         101,
                //         101,
                //         110,
                //         83,
                //         111,
                //         99,
                //         107,
                //         32,
                //         116,
                //         111,
                //         32,
                //         103,
                //         101,
                //         116,
                //         32,
                //         102,
                //         117,
                //         108,
                //         108,
                //         32,
                //         97,
                //         99,
                //         99,
                //         101,
                //         115,
                //         115,
                //         32,
                //         116,
                //         111,
                //         32,
                //         116,
                //         104,
                //         101,
                //         32,
                //         98,
                //         111,
                //         110,
                //         117,
                //         115,
                //         32,
                //         112,
                //         108,
                //         117,
                //         103,
                //         105,
                //         110,
                //         115,
                //         32,
                //         116,
                //         104,
                //         97,
                //         116,
                //         32,
                //         98,
                //         111,
                //         111,
                //         115,
                //         116,
                //         32,
                //         121,
                //         111,
                //         117,
                //         114,
                //         32,
                //         97,
                //         110,
                //         105,
                //         109,
                //         97,
                //         116,
                //         105,
                //         111,
                //         110,
                //         32,
                //         115,
                //         117,
                //         112,
                //         101,
                //         114,
                //         112,
                //         111,
                //         119,
                //         101,
                //         114,
                //         115,
                //         46,
                //         32,
                //         68,
                //         105,
                //         115,
                //         97,
                //         98,
                //         108,
                //         101,
                //         32,
                //         116,
                //         104,
                //         105,
                //         115,
                //         32,
                //         119,
                //         97,
                //         114,
                //         110,
                //         105,
                //         110,
                //         103,
                //         32,
                //         119,
                //         105,
                //         116,
                //         104,
                //         32,
                //         103,
                //         115,
                //         97,
                //         112,
                //         46,
                //         99,
                //         111,
                //         110,
                //         102,
                //         105,
                //         103,
                //         40,
                //         123,
                //         116,
                //         114,
                //         105,
                //         97,
                //         108,
                //         87,
                //         97,
                //         114,
                //         110,
                //         58,
                //         32,
                //         102,
                //         97,
                //         108,
                //         115,
                //         101,
                //         125,
                //         41,
                //         59,
                //       ),
                //   ),
                //   console.log(
                //     p(
                //       37,
                //       99,
                //       71,
                //       101,
                //       116,
                //       32,
                //       117,
                //       110,
                //       114,
                //       101,
                //       115,
                //       116,
                //       114,
                //       105,
                //       99,
                //       116,
                //       101,
                //       100,
                //       32,
                //       102,
                //       105,
                //       108,
                //       101,
                //       115,
                //       32,
                //       97,
                //       116,
                //       32,
                //       104,
                //       116,
                //       116,
                //       112,
                //       115,
                //       58,
                //       47,
                //       47,
                //       103,
                //       114,
                //       101,
                //       101,
                //       110,
                //       115,
                //       111,
                //       99,
                //       107,
                //       46,
                //       99,
                //       111,
                //       109,
                //       47,
                //       99,
                //       108,
                //       117,
                //       98,
                //     ),
                //     p(
                //       102,
                //       111,
                //       110,
                //       116,
                //       45,
                //       115,
                //       105,
                //       122,
                //       101,
                //       58,
                //       49,
                //       54,
                //       112,
                //       120,
                //       59,
                //       99,
                //       111,
                //       108,
                //       111,
                //       114,
                //       58,
                //       35,
                //       52,
                //       101,
                //       57,
                //       56,
                //       49,
                //       53,
                //     ),
                //   ),
                //   (window._gsapWarned = 1))))
        // },
        // n = true//o.length
      //for (setTimeout(s, 50); --n > -1; ) if (-1 !== e.indexOf(o[n])) return !0
    //   r ||
    //     setTimeout(function () {
    //       t &&
    //         (window.location.href =
    //           p(104, 116, 116, 112, 115, 58, 47, 47) +
    //           m +
    //           p(
    //             47,
    //             114,
    //             101,
    //             113,
    //             117,
    //             105,
    //             114,
    //             101,
    //             115,
    //             45,
    //             109,
    //             101,
    //             109,
    //             98,
    //             101,
    //             114,
    //             115,
    //             104,
    //             105,
    //             112,
    //             47,
    //           ) +
    //           '?plugin=ScrollSmoother&source=trial')
    //     }, 3e3)??

   // })
    ('undefined' != typeof window ? window.location.host : '')

    e => {
      let t = o.querySelector('.ScrollSmoother-wrapper')
      return (
        t ||
          ((t = o.createElement('div')),
          t.classList.add('ScrollSmoother-wrapper'),
          e.parentNode.insertBefore(t, e),
          t.appendChild(e)),
        t
      )
    })
class y {
  constructor(u) {
    t ||
      y.register(e) ||
      console.warn('Please gsap.registerPlugin(ScrollSmoother)'),
      (u = this.vars = u || {}),
      c && c.kill(),
      (c = this)
    let f,
      p,
      m,
      v,
      S,
      b,
      T,
      x,
      E,
      k,
      C,
      P,
      R,
      A,
      {
        smoothTouch: _,
        onUpdate: F,
        onStop: M,
        smooth: B,
        onFocusIn: z,
        normalizeScroll: I,
      } = u,
      L = a.getScrollFunc(r),
      O =
        1 === a.isTouch
          ? !0 === _
            ? 0.8
            : parseFloat(_) || 0
          : 0 === B || !1 === B
          ? 0
          : parseFloat(B) || 0.8,
      H = 0,
      N = 0,
      U = 1,
      q = d(0),
      V = () => q.update(-H),
      W = {
        y: 0,
      },
      D = () => (f.style.overflow = 'visible'),
      Y = e => {
        e.update()
        let t = e.getTween()
        t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)),
          (R = !1),
          e.animation.progress(e.progress, !0)
      },
      j = (e, t) => {
        ;((e !== H && !k) || t) &&
          (O &&
            (f.style.transform =
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
              e +
              ', 0, 1)'),
          (N = e - H),
          (H = e),
          a.isUpdating || a.update())
      },
      K = function (e) {
        return arguments.length
          ? (k ? (H = -e) : j(-e), (W.y = -e), (R = !0), L(e), this)
          : -H - L.offset
      },
      G = e => {
        ;(p.scrollTop = 0),
          (z && !1 === z(this, e)) ||
            (a.isInViewport(e.target) ||
              e.target === A ||
              this.scrollTo(e.target, !1, 'center center'),
            (A = e.target))
      },
      J = (t, r) => {
        let o, s, n, i
        S.forEach(r => {
          ;(o = r.pins),
            (i = r.markers),
            t.forEach(t => {
              ;(t.trigger !== r.trigger && t.pinnedContainer !== r.trigger) ||
                r === t ||
                ((s = t.start),
                (n = (s - r.start - r.offset) / r.ratio - (s - r.start)),
                o.forEach(e => (n -= e.distance / r.ratio - e.distance)),
                t.setPositions(s + n, t.end + n),
                t.markerStart &&
                  i.push(
                    e.quickSetter([t.markerStart, t.markerEnd], 'y', 'px'),
                  ),
                t.pin &&
                  t.end > 0 &&
                  ((n = t.end - t.start),
                  o.push({
                    start: t.start,
                    end: t.end,
                    distance: n,
                    trig: t,
                  }),
                  r.setPositions(r.start, r.end + n),
                  r.vars.onRefresh(r)))
            })
        })
      },
      Q = () => {
        D(),
          requestAnimationFrame(D),
          S &&
            (S.forEach(e => {
              let t = e.start,
                r = e.auto
                  ? Math.min(a.maxScroll(e.scroller), e.end)
                  : t + (e.end - t) / e.ratio,
                o = (r - e.end) / 2
              ;(t -= o),
                (r -= o),
                (e.offset = o || 1e-4),
                (e.pins.length = 0),
                e.setPositions(Math.min(t, r), Math.max(t, r)),
                e.vars.onRefresh(e)
            }),
            J(a.sort())),
          q.reset()
      },
      X = () => S && S.forEach(e => e.vars.onRefresh(e)),
      Z = () => (S && S.forEach(e => e.vars.onRefreshInit(e)), X),
      $ = (e, t, r, o) => () => {
        let s = 'function' == typeof t ? t(r, o) : t
        return (
          s ||
            0 === s ||
            (s = o.getAttribute('data-' + e) || ('speed' === e ? 1 : 0)),
          o.setAttribute('data-' + e, s),
          'auto' === s ? s : parseFloat(s)
        )
      },
      ee = (t, o, n, i) => {
        let c,
          d,
          g,
          u,
          f,
          m,
          w = $('speed', o, i, t),
          y = $('lag', n, i, t),
          v = e.getProperty(t, 'y'),
          b = t._gsap,
          T = () => {
            ;(o = w()),
              (n = y()),
              (c = parseFloat(o) || 1),
              (g = 'auto' === o),
              (f = g ? 0 : 0.5),
              u && u.kill(),
              (u =
                n &&
                e.to(t, {
                  ease: h,
                  overwrite: !1,
                  y: '+=0',
                  duration: n,
                })),
              d && ((d.ratio = c), (d.autoSpeed = g))
          },
          x = () => {
            ;(b.y = v + 'px'), b.renderTransform(1), T()
          },
          E = [],
          k = [],
          C = 0,
          P = e => {
            if (g) {
              x()
              let o = ((e, t) => {
                let o,
                  n,
                  i = e.parentNode || s,
                  l = e.getBoundingClientRect(),
                  a = i.getBoundingClientRect(),
                  c = a.top - l.top,
                  h = a.bottom - l.bottom,
                  d = (Math.abs(c) > Math.abs(h) ? c : h) / (1 - t),
                  g = -d * t
                return (
                  d > 0 &&
                    ((o = a.height / (r.innerHeight + a.height)),
                    (n =
                      0.5 === o
                        ? 2 * a.height
                        : 2 * Math.min(a.height, (-d * o) / (2 * o - 1))),
                    (g += -n / 2),
                    (d += n)),
                  {
                    change: d,
                    offset: g,
                  }
                )
              })(t, l(0, 1, -e.start / (e.end - e.start)))
              ;(C = o.change), (m = o.offset)
            } else (C = (e.end - e.start) * (1 - c)), (m = 0)
            E.forEach(e => (C -= e.distance * (1 - c))),
              e.vars.onUpdate(e),
              u && u.progress(1)
          }
        return (
          T(),
          (1 !== c || g || u) &&
            ((d = a.create({
              trigger: g ? t.parentNode : t,
              scroller: p,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: x,
              onRefresh: P,
              onKill: e => {
                let t = S.indexOf(e)
                t >= 0 && S.splice(t, 1), x()
              },
              onUpdate: t => {
                let r,
                  o,
                  s,
                  n = v + C * (t.progress - f),
                  i = E.length,
                  l = 0
                if (t.offset) {
                  if (i) {
                    for (o = -H, s = t.end; i--; ) {
                      if (
                        ((r = E[i]),
                        r.trig.isActive || (o >= r.start && o <= r.end))
                      )
                        return void (
                          u &&
                          ((r.trig.progress +=
                            r.trig.direction < 0 ? 0.001 : -0.001),
                          r.trig.update(0, 0, 1),
                          u.resetTo('y', parseFloat(b.y), -N, !0),
                          U && u.progress(1))
                        )
                      o > r.end && (l += r.distance), (s -= r.distance)
                    }
                    n =
                      v +
                      l +
                      C *
                        ((e.utils.clamp(t.start, t.end, o) - t.start - l) /
                          (s - t.start) -
                          f)
                  }
                  ;(a = n + m),
                    (n = Math.round(1e5 * a) / 1e5 || 0),
                    k.length && !g && k.forEach(e => e(n - l)),
                    u
                      ? (u.resetTo('y', n, -N, !0), U && u.progress(1))
                      : ((b.y = n + 'px'), b.renderTransform(1))
                }
                var a
              },
            })),
            P(d),
            (e.core.getCache(d.trigger).stRevert = Z),
            (d.startY = v),
            (d.pins = E),
            (d.markers = k),
            (d.ratio = c),
            (d.autoSpeed = g),
            (t.style.willChange = 'transform')),
          d
        )
      }

    function te() {
      return (
        (m = f.clientHeight),
        (f.style.overflow = 'visible'),
        (n.style.height = m + 'px'),
        m - r.innerHeight
      )
    }
    a.addEventListener('refresh', Q),
      e.delayedCall(0.5, () => (U = 0)),
      (this.scrollTop = K),
      (this.scrollTo = (t, o, s) => {
        let n = e.utils.clamp(
          0,
          a.maxScroll(r),
          isNaN(t) ? this.offset(t, s) : +t,
        )
        o
          ? k
            ? e.to(this, {
                duration: O,
                scrollTop: n,
                overwrite: 'auto',
                ease: h,
              })
            : L(n)
          : K(n)
      }),
      (this.offset = (t, r) => {
        let o,
          s = (t = i(t)[0]).style.cssText,
          n = a.create({
            trigger: t,
            start: r || 'top top',
          })
        return (
          S && J([n]),
          (o = n.start),
          n.kill(!1),
          (t.style.cssText = s),
          (e.core.getCache(t).uncache = 1),
          o
        )
      }),
      (this.content = function (t) {
        if (arguments.length) {
          let r = i(t || '#smooth-content')[0] || n.children[0]
          return (
            r !== f &&
              ((f = r),
              (E = f.getAttribute('style') || ''),
              e.set(f, {
                overflow: 'visible',
                width: '100%',
                boxSizing: 'border-box',
              })),
            this
          )
        }
        return f
      }),
      (this.wrapper = function (t) {
        return arguments.length
          ? ((p = i(t || '#smooth-wrapper')[0] || w(f)),
            (x = p.getAttribute('style') || ''),
            te(),
            e.set(
              p,
              O
                ? {
                    overflow: 'hidden',
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }
                : {
                    overflow: 'visible',
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    top: 'auto',
                    bottom: 'auto',
                    left: 'auto',
                    right: 'auto',
                  },
            ),
            this)
          : p
      }),
      (this.effects = (e, t) => {
        if ((S || (S = []), !e)) return S.slice(0)
        ;(e = i(e)).forEach(e => {
          let t = S.length
          for (; t--; ) S[t].trigger === e && (S[t].kill(), S.splice(t, 1))
        }),
          (t = t || {})
        let r,
          o,
          { speed: s, lag: n } = t,
          l = []
        for (r = 0; r < e.length; r++) (o = ee(e[r], s, n, r)), o && l.push(o)
        return S.push(...l), l
      }),
      (this.sections = (e, t) => {
        if ((b || (b = []), !e)) return b.slice(0)
        let r = i(e).map(e =>
          a.create({
            trigger: e,
            start: 'top 120%',
            end: 'bottom -20%',
            onToggle: t => {
              ;(e.style.opacity = t.isActive ? '1' : '0'),
                (e.style.pointerEvents = t.isActive ? 'all' : 'none')
            },
          }),
        )
        return t && t.add ? b.push(...r) : (b = r.slice(0)), r
      }),
      this.content(u.content),
      this.wrapper(u.wrapper),
      (this.render = e => j(e || 0 === e ? e : H)),
      (this.getVelocity = () => q.getVelocity(-H)),
      a.scrollerProxy(p, {
        scrollTop: K,
        scrollHeight: () => te() && n.scrollHeight,
        fixedMarkers: !1 !== u.fixedMarkers && !!O,
        content: f,
        getBoundingClientRect: () => ({
          top: 0,
          left: 0,
          width: r.innerWidth,
          height: r.innerHeight,
        }),
      }),
      a.defaults({
        scroller: p,
      })
    let re = a.getAll().filter(e => e.scroller === r || e.scroller === p)
    re.forEach(e => e.revert(!0)),
      (v = a.create({
        animation: e.to(W, {
          y: () => -te(),
          ease: 'none',
          data: 'ScrollSmoother',
          duration: 100,
          onUpdate: () => {
            let e = R
            e && ((W.y = H), Y(v)), j(W.y, e), V(), F && !k && F(this)
          },
        }),
        onRefreshInit: () => {
          ;(P = H), (W.y = p.scrollTop = 0)
        },
        id: 'ScrollSmoother',
        scroller: r,
        invalidateOnRefresh: !0,
        start: 0,
        refreshPriority: -9999,
        end: te,
        onScrubComplete: () => {
          q.reset(), M && M(this)
        },
        scrub: O || !0,
        onRefresh: t => {
          Y(t),
            (W.y = -L()),
            j(W.y),
            U || t.animation.progress(e.utils.clamp(0, 1, P / -t.end))
        },
      })),
      (this.smooth = function (e) {
        return (
          (O = e),
          arguments.length
            ? v.scrubDuration(e)
            : v.getTween()
            ? v.getTween().duration()
            : 0
        )
      }),
      v.getTween() && (v.getTween().vars.ease = u.ease || h),
      (this.scrollTrigger = v),
      u.effects &&
        this.effects(
          !0 === u.effects ? '[data-speed], [data-lag]' : u.effects,
          {},
        ),
      u.sections &&
        this.sections(!0 === u.sections ? '[data-section]' : u.sections),
      re.forEach(e => {
        ;(e.vars.scroller = p), e.init(e.vars, e.animation)
      }),
      (this.paused = function (e, t) {
        return arguments.length
          ? (!!k !== e &&
              (e
                ? (v.getTween() && v.getTween().pause(),
                  L(-H),
                  q.reset(),
                  (C = a.normalizeScroll()),
                  C && C.disable(),
                  (k = a.observe({
                    preventDefault: !0,
                    type: 'wheel,touch,scroll',
                    debounce: !1,
                    allowClicks: !0,
                    onChangeY: () => K(-H),
                  })),
                  (k.nested = g(s, 'wheel,touch,scroll', !0, !1 !== t)))
                : (k.nested.kill(),
                  k.kill(),
                  (k = 0),
                  C && C.enable(),
                  (v.progress = (-H - v.start) / (v.end - v.start)),
                  Y(v))),
            this)
          : !!k
      }),
      (this.kill = () => {
        this.paused(!1), Y(v), v.kill()
        let e = (S || []).concat(b || []),
          t = e.length
        for (; t--; ) e[t].kill()
        a.scrollerProxy(p),
          a.removeEventListener('refresh', Q),
          n.style.removeProperty('height'),
          (p.style.cssText = x),
          (f.style.cssText = E)
        let o = a.defaults({})
        o &&
          o.scroller === p &&
          a.defaults({
            scroller: r,
          }),
          this.normalizer && a.normalizeScroll(!1),
          clearInterval(T),
          (c = null),
          r.removeEventListener('focusin', G)
      }),
      (this.refresh = (e, t) => v.refresh(e, t)),
      I &&
        (this.normalizer = a.normalizeScroll(
          !0 === I
            ? {
                debounce: !0,
                content: f,
              }
            : I,
        )),
      a.config(u),
      'overscrollBehavior' in r.getComputedStyle(n) &&
        e.set([n, s], {
          overscrollBehavior: 'none',
        }),
      'scrollBehavior' in r.getComputedStyle(n) &&
        e.set([n, s], {
          scrollBehavior: 'auto',
        }),
      r.addEventListener('focusin', G),
      (T = setInterval(V, 250)),
      'loading' === o.readyState || requestAnimationFrame(() => a.refresh())
  }
  get progress() {
    return this.scrollTrigger.animation._time / 100
  }
  static register(c) {
    return (
      t ||
        ((e = c || f()),
        u() &&
          window.document &&
          ((r = window), (o = document), (s = o.documentElement), (n = o.body)),
        e &&
          ((i = e.utils.toArray),
          (l = e.utils.clamp),
          (h = e.parseEase('expo')),
          (a = e.core.globals().ScrollTrigger),
          e.core.globals('ScrollSmoother', y),
          n &&
            a &&
            ((d = a.core._getVelocityProp),
            (g = a.core._inputObserver),
            (y.refresh = a.refresh),
            (t = 1)))),
      t
    )
  }
}
;(y.version = '3.10.4'),
  (y.create = e => (c && e && c.content() === i(e.content)[0] ? c : new y(e))),
  (y.get = () => c),
  f() && e.registerPlugin(y)
export default y
export { y as ScrollSmoother }
