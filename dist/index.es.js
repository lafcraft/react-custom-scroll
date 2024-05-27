var un = Object.defineProperty;
var fn = (e, t, r) => t in e ? un(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var w = (e, t, r) => (fn(e, typeof t != "symbol" ? t + "" : t, r), r);
import ge, { useRef as dn, useDebugValue as qt, createElement as pn, useContext as hn, Component as gn, createRef as He } from "react";
var St = { exports: {} }, Ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function mn() {
  if (Xt)
    return Ie;
  Xt = 1;
  var e = ge, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, p) {
    var h, g = {}, b = null, R = null;
    p !== void 0 && (b = "" + p), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (R = l.ref);
    for (h in l)
      o.call(l, h) && !s.hasOwnProperty(h) && (g[h] = l[h]);
    if (f && f.defaultProps)
      for (h in l = f.defaultProps, l)
        g[h] === void 0 && (g[h] = l[h]);
    return { $$typeof: t, type: f, key: b, ref: R, props: g, _owner: i.current };
  }
  return Ie.Fragment = r, Ie.jsx = c, Ie.jsxs = c, Ie;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function vn() {
  return Kt || (Kt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ge, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), O = Symbol.iterator, j = "@@iterator";
    function F(n) {
      if (n === null || typeof n != "object")
        return null;
      var a = O && n[O] || n[j];
      return typeof a == "function" ? a : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(n) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), d = 1; d < a; d++)
          u[d - 1] = arguments[d];
        k("error", n, u);
      }
    }
    function k(n, a, u) {
      {
        var d = T.ReactDebugCurrentFrame, P = d.getStackAddendum();
        P !== "" && (a += "%s", u = u.concat([P]));
        var _ = u.map(function(C) {
          return String(C);
        });
        _.unshift("Warning: " + a), Function.prototype.apply.call(console[n], console, _);
      }
    }
    var A = !1, N = !1, E = !1, m = !1, Z = !1, Q;
    Q = Symbol.for("react.module.reference");
    function lt(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === s || Z || n === i || n === p || n === h || m || n === R || A || N || E || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === g || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Q || n.getModuleId !== void 0));
    }
    function ut(n, a, u) {
      var d = n.displayName;
      if (d)
        return d;
      var P = a.displayName || a.name || "";
      return P !== "" ? u + "(" + P + ")" : u;
    }
    function We(n) {
      return n.displayName || "Context";
    }
    function z(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var a = n;
            return We(a) + ".Consumer";
          case c:
            var u = n;
            return We(u._context) + ".Provider";
          case l:
            return ut(n, n.render, "ForwardRef");
          case g:
            var d = n.displayName || null;
            return d !== null ? d : z(n.type) || "Memo";
          case b: {
            var P = n, _ = P._payload, C = P._init;
            try {
              return z(C(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, ue = 0, Ye, ve, De, V, ie, se, L;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ne() {
      {
        if (ue === 0) {
          Ye = console.log, ve = console.info, De = console.warn, V = console.error, ie = console.group, se = console.groupCollapsed, L = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ue++;
      }
    }
    function be() {
      {
        if (ue--, ue === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, n, {
              value: Ye
            }),
            info: ee({}, n, {
              value: ve
            }),
            warn: ee({}, n, {
              value: De
            }),
            error: ee({}, n, {
              value: V
            }),
            group: ee({}, n, {
              value: ie
            }),
            groupCollapsed: ee({}, n, {
              value: se
            }),
            groupEnd: ee({}, n, {
              value: L
            })
          });
        }
        ue < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = T.ReactCurrentDispatcher, ae;
    function G(n, a, u) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (P) {
            var d = P.stack.trim().match(/\n( *(at )?)/);
            ae = d && d[1] || "";
          }
        return `
` + ae + n;
      }
    }
    var q = !1, ce;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new Se();
    }
    function X(n, a) {
      if (!n || q)
        return "";
      {
        var u = ce.get(n);
        if (u !== void 0)
          return u;
      }
      var d;
      q = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = te.current, te.current = null, Ne();
      try {
        if (a) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (re) {
              d = re;
            }
            Reflect.construct(n, [], C);
          } else {
            try {
              C.call();
            } catch (re) {
              d = re;
            }
            n.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            d = re;
          }
          n();
        }
      } catch (re) {
        if (re && d && typeof re.stack == "string") {
          for (var S = re.stack.split(`
`), W = d.stack.split(`
`), H = S.length - 1, I = W.length - 1; H >= 1 && I >= 0 && S[H] !== W[I]; )
            I--;
          for (; H >= 1 && I >= 0; H--, I--)
            if (S[H] !== W[I]) {
              if (H !== 1 || I !== 1)
                do
                  if (H--, I--, I < 0 || S[H] !== W[I]) {
                    var B = `
` + S[H].replace(" at new ", " at ");
                    return n.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", n.displayName)), typeof n == "function" && ce.set(n, B), B;
                  }
                while (H >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        q = !1, te.current = _, be(), Error.prepareStackTrace = P;
      }
      var Ee = n ? n.displayName || n.name : "", Gt = Ee ? G(Ee) : "";
      return typeof n == "function" && ce.set(n, Gt), Gt;
    }
    function Wr(n, a, u) {
      return X(n, !1);
    }
    function Yr(n) {
      var a = n.prototype;
      return !!(a && a.isReactComponent);
    }
    function ze(n, a, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return X(n, Yr(n));
      if (typeof n == "string")
        return G(n);
      switch (n) {
        case p:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return Wr(n.render);
          case g:
            return ze(n.type, a, u);
          case b: {
            var d = n, P = d._payload, _ = d._init;
            try {
              return ze(_(P), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, Ht = {}, It = T.ReactDebugCurrentFrame;
    function Be(n) {
      if (n) {
        var a = n._owner, u = ze(n.type, n._source, a ? a.type : null);
        It.setExtraStackFrame(u);
      } else
        It.setExtraStackFrame(null);
    }
    function zr(n, a, u, d, P) {
      {
        var _ = Function.call.bind(Ve);
        for (var C in n)
          if (_(n, C)) {
            var S = void 0;
            try {
              if (typeof n[C] != "function") {
                var W = Error((d || "React class") + ": " + u + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              S = n[C](a, C, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              S = H;
            }
            S && !(S instanceof Error) && (Be(P), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, C, typeof S), Be(null)), S instanceof Error && !(S.message in Ht) && (Ht[S.message] = !0, Be(P), y("Failed %s type: %s", u, S.message), Be(null));
          }
      }
    }
    var Vr = Array.isArray;
    function ft(n) {
      return Vr(n);
    }
    function Br(n) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Ur(n) {
      try {
        return $t(n), !1;
      } catch {
        return !0;
      }
    }
    function $t(n) {
      return "" + n;
    }
    function Mt(n) {
      if (Ur(n))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(n)), $t(n);
    }
    var je = T.ReactCurrentOwner, Gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Lt, dt;
    dt = {};
    function qr(n) {
      if (Ve.call(n, "ref")) {
        var a = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Xr(n) {
      if (Ve.call(n, "key")) {
        var a = Object.getOwnPropertyDescriptor(n, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Kr(n, a) {
      if (typeof n.ref == "string" && je.current && a && je.current.stateNode !== a) {
        var u = z(je.current.type);
        dt[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(je.current.type), n.ref), dt[u] = !0);
      }
    }
    function Jr(n, a) {
      {
        var u = function() {
          Ft || (Ft = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Zr(n, a) {
      {
        var u = function() {
          Lt || (Lt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Qr = function(n, a, u, d, P, _, C) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: a,
        ref: u,
        props: C,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function en(n, a, u, d, P) {
      {
        var _, C = {}, S = null, W = null;
        u !== void 0 && (Mt(u), S = "" + u), Xr(a) && (Mt(a.key), S = "" + a.key), qr(a) && (W = a.ref, Kr(a, P));
        for (_ in a)
          Ve.call(a, _) && !Gr.hasOwnProperty(_) && (C[_] = a[_]);
        if (n && n.defaultProps) {
          var H = n.defaultProps;
          for (_ in H)
            C[_] === void 0 && (C[_] = H[_]);
        }
        if (S || W) {
          var I = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          S && Jr(C, I), W && Zr(C, I);
        }
        return Qr(n, S, W, P, d, je.current, C);
      }
    }
    var pt = T.ReactCurrentOwner, Wt = T.ReactDebugCurrentFrame;
    function we(n) {
      if (n) {
        var a = n._owner, u = ze(n.type, n._source, a ? a.type : null);
        Wt.setExtraStackFrame(u);
      } else
        Wt.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function gt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Yt() {
      {
        if (pt.current) {
          var n = z(pt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function tn(n) {
      {
        if (n !== void 0) {
          var a = n.fileName.replace(/^.*[\\\/]/, ""), u = n.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var zt = {};
    function rn(n) {
      {
        var a = Yt();
        if (!a) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function Vt(n, a) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = rn(a);
        if (zt[u])
          return;
        zt[u] = !0;
        var d = "";
        n && n._owner && n._owner !== pt.current && (d = " It was passed a child from " + z(n._owner.type) + "."), we(n), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), we(null);
      }
    }
    function Bt(n, a) {
      {
        if (typeof n != "object")
          return;
        if (ft(n))
          for (var u = 0; u < n.length; u++) {
            var d = n[u];
            gt(d) && Vt(d, a);
          }
        else if (gt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var P = F(n);
          if (typeof P == "function" && P !== n.entries)
            for (var _ = P.call(n), C; !(C = _.next()).done; )
              gt(C.value) && Vt(C.value, a);
        }
      }
    }
    function nn(n) {
      {
        var a = n.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === g))
          u = a.propTypes;
        else
          return;
        if (u) {
          var d = z(a);
          zr(u, n.props, "prop", d, n);
        } else if (a.PropTypes !== void 0 && !ht) {
          ht = !0;
          var P = z(a);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function on(n) {
      {
        for (var a = Object.keys(n.props), u = 0; u < a.length; u++) {
          var d = a[u];
          if (d !== "children" && d !== "key") {
            we(n), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), we(null);
            break;
          }
        }
        n.ref !== null && (we(n), y("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function Ut(n, a, u, d, P, _) {
      {
        var C = lt(n);
        if (!C) {
          var S = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = tn(P);
          W ? S += W : S += Yt();
          var H;
          n === null ? H = "null" : ft(n) ? H = "array" : n !== void 0 && n.$$typeof === t ? (H = "<" + (z(n.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : H = typeof n, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, S);
        }
        var I = en(n, a, u, P, _);
        if (I == null)
          return I;
        if (C) {
          var B = a.children;
          if (B !== void 0)
            if (d)
              if (ft(B)) {
                for (var Ee = 0; Ee < B.length; Ee++)
                  Bt(B[Ee], n);
                Object.freeze && Object.freeze(B);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Bt(B, n);
        }
        return n === o ? on(I) : nn(I), I;
      }
    }
    function sn(n, a, u) {
      return Ut(n, a, u, !0);
    }
    function an(n, a, u) {
      return Ut(n, a, u, !1);
    }
    var cn = an, ln = sn;
    $e.Fragment = o, $e.jsx = cn, $e.jsxs = ln;
  }()), $e;
}
process.env.NODE_ENV === "production" ? St.exports = mn() : St.exports = vn();
var ne = St.exports, Y = function() {
  return Y = Object.assign || function(t) {
    for (var r, o = 1, i = arguments.length; o < i; o++) {
      r = arguments[o];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, Y.apply(this, arguments);
};
function Ce(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, i = t.length, s; o < i; o++)
      (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function yn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var bn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Sn = /* @__PURE__ */ yn(
  function(e) {
    return bn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), D = "-ms-", Fe = "-moz-", x = "-webkit-", gr = "comm", nt = "rule", _t = "decl", wn = "@import", mr = "@keyframes", En = "@layer", vr = Math.abs, Ot = String.fromCharCode, wt = Object.assign;
function Rn(e, t) {
  return M(e, 0) ^ 45 ? (((t << 2 ^ M(e, 0)) << 2 ^ M(e, 1)) << 2 ^ M(e, 2)) << 2 ^ M(e, 3) : 0;
}
function yr(e) {
  return e.trim();
}
function oe(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function v(e, t, r) {
  return e.replace(t, r);
}
function Ke(e, t, r) {
  return e.indexOf(t, r);
}
function M(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pe(e, t, r) {
  return e.slice(t, r);
}
function J(e) {
  return e.length;
}
function br(e) {
  return e.length;
}
function Me(e, t) {
  return t.push(e), e;
}
function Cn(e, t) {
  return e.map(t).join("");
}
function Jt(e, t) {
  return e.filter(function(r) {
    return !oe(r, t);
  });
}
var ot = 1, xe = 1, Sr = 0, U = 0, $ = 0, Oe = "";
function it(e, t, r, o, i, s, c, f) {
  return { value: e, root: t, parent: r, type: o, props: i, children: s, line: ot, column: xe, length: c, return: "", siblings: f };
}
function le(e, t) {
  return wt(it("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Re(e) {
  for (; e.root; )
    e = le(e.root, { children: [e] });
  Me(e, e.siblings);
}
function Pn() {
  return $;
}
function xn() {
  return $ = U > 0 ? M(Oe, --U) : 0, xe--, $ === 10 && (xe = 1, ot--), $;
}
function K() {
  return $ = U < Sr ? M(Oe, U++) : 0, xe++, $ === 10 && (xe = 1, ot++), $;
}
function pe() {
  return M(Oe, U);
}
function Je() {
  return U;
}
function st(e, t) {
  return Pe(Oe, e, t);
}
function Et(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Tn(e) {
  return ot = xe = 1, Sr = J(Oe = e), U = 0, [];
}
function kn(e) {
  return Oe = "", e;
}
function mt(e) {
  return yr(st(U - 1, Rt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function _n(e) {
  for (; ($ = pe()) && $ < 33; )
    K();
  return Et(e) > 2 || Et($) > 3 ? "" : " ";
}
function On(e, t) {
  for (; --t && K() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return st(e, Je() + (t < 6 && pe() == 32 && K() == 32));
}
function Rt(e) {
  for (; K(); )
    switch ($) {
      case e:
        return U;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rt($);
        break;
      case 40:
        e === 41 && Rt(e);
        break;
      case 92:
        K();
        break;
    }
  return U;
}
function An(e, t) {
  for (; K() && e + $ !== 57; )
    if (e + $ === 84 && pe() === 47)
      break;
  return "/*" + st(t, U - 1) + "*" + Ot(e === 47 ? e : K());
}
function Dn(e) {
  for (; !Et(pe()); )
    K();
  return st(e, U);
}
function Nn(e) {
  return kn(Ze("", null, null, null, [""], e = Tn(e), 0, [0], e));
}
function Ze(e, t, r, o, i, s, c, f, l) {
  for (var p = 0, h = 0, g = c, b = 0, R = 0, O = 0, j = 1, F = 1, T = 1, y = 0, k = "", A = i, N = s, E = o, m = k; F; )
    switch (O = y, y = K()) {
      case 40:
        if (O != 108 && M(m, g - 1) == 58) {
          Ke(m += v(mt(y), "&", "&\f"), "&\f", vr(p ? f[p - 1] : 0)) != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += mt(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += _n(O);
        break;
      case 92:
        m += On(Je() - 1, 7);
        continue;
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            Me(jn(An(K(), Je()), t, r, l), l);
            break;
          default:
            m += "/";
        }
        break;
      case 123 * j:
        f[p++] = J(m) * T;
      case 125 * j:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            F = 0;
          case 59 + h:
            T == -1 && (m = v(m, /\f/g, "")), R > 0 && J(m) - g && Me(R > 32 ? Qt(m + ";", o, r, g - 1, l) : Qt(v(m, " ", "") + ";", o, r, g - 2, l), l);
            break;
          case 59:
            m += ";";
          default:
            if (Me(E = Zt(m, t, r, p, h, i, f, k, A = [], N = [], g, s), s), y === 123)
              if (h === 0)
                Ze(m, t, E, E, A, s, g, f, N);
              else
                switch (b === 99 && M(m, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ze(e, E, E, o && Me(Zt(e, E, E, 0, 0, i, f, k, i, A = [], g, N), N), i, N, g, f, o ? A : N);
                    break;
                  default:
                    Ze(m, E, E, E, [""], N, 0, f, N);
                }
        }
        p = h = R = 0, j = T = 1, k = m = "", g = c;
        break;
      case 58:
        g = 1 + J(m), R = O;
      default:
        if (j < 1) {
          if (y == 123)
            --j;
          else if (y == 125 && j++ == 0 && xn() == 125)
            continue;
        }
        switch (m += Ot(y), y * j) {
          case 38:
            T = h > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            f[p++] = (J(m) - 1) * T, T = 1;
            break;
          case 64:
            pe() === 45 && (m += mt(K())), b = pe(), h = g = J(k = m += Dn(Je())), y++;
            break;
          case 45:
            O === 45 && J(m) == 2 && (j = 0);
        }
    }
  return s;
}
function Zt(e, t, r, o, i, s, c, f, l, p, h, g) {
  for (var b = i - 1, R = i === 0 ? s : [""], O = br(R), j = 0, F = 0, T = 0; j < o; ++j)
    for (var y = 0, k = Pe(e, b + 1, b = vr(F = c[j])), A = e; y < O; ++y)
      (A = yr(F > 0 ? R[y] + " " + k : v(k, /&\f/g, R[y]))) && (l[T++] = A);
  return it(e, t, r, i === 0 ? nt : f, l, p, h, g);
}
function jn(e, t, r, o) {
  return it(e, t, r, gr, Ot(Pn()), Pe(e, 2, -2), 0, o);
}
function Qt(e, t, r, o, i) {
  return it(e, t, r, _t, Pe(e, 0, o), Pe(e, o + 1, -1), o, i);
}
function wr(e, t, r) {
  switch (Rn(e, t)) {
    case 5103:
      return x + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return x + e + e;
    case 4789:
      return Fe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return x + e + Fe + e + D + e + e;
    case 5936:
      switch (M(e, t + 11)) {
        case 114:
          return x + e + D + v(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return x + e + D + v(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return x + e + D + v(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return x + e + D + e + e;
    case 6165:
      return x + e + D + "flex-" + e + e;
    case 5187:
      return x + e + v(e, /(\w+).+(:[^]+)/, x + "box-$1$2" + D + "flex-$1$2") + e;
    case 5443:
      return x + e + D + "flex-item-" + v(e, /flex-|-self/g, "") + (oe(e, /flex-|baseline/) ? "" : D + "grid-row-" + v(e, /flex-|-self/g, "")) + e;
    case 4675:
      return x + e + D + "flex-line-pack" + v(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return x + e + D + v(e, "shrink", "negative") + e;
    case 5292:
      return x + e + D + v(e, "basis", "preferred-size") + e;
    case 6060:
      return x + "box-" + v(e, "-grow", "") + x + e + D + v(e, "grow", "positive") + e;
    case 4554:
      return x + v(e, /([^-])(transform)/g, "$1" + x + "$2") + e;
    case 6187:
      return v(v(v(e, /(zoom-|grab)/, x + "$1"), /(image-set)/, x + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return v(e, /(image-set\([^]*)/, x + "$1$`$1");
    case 4968:
      return v(v(e, /(.+:)(flex-)?(.*)/, x + "box-pack:$3" + D + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + x + e + e;
    case 4200:
      if (!oe(e, /flex-|baseline/))
        return D + "grid-column-align" + Pe(e, t) + e;
      break;
    case 2592:
    case 3360:
      return D + v(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(o, i) {
        return t = i, oe(o.props, /grid-\w+-end/);
      }) ? ~Ke(e + (r = r[t].value), "span", 0) ? e : D + v(e, "-start", "") + e + D + "grid-row-span:" + (~Ke(r, "span", 0) ? oe(r, /\d+/) : +oe(r, /\d+/) - +oe(e, /\d+/)) + ";" : D + v(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return oe(o.props, /grid-\w+-start/);
      }) ? e : D + v(v(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return v(e, /(.+)-inline(.+)/, x + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (J(e) - 1 - t > 6)
        switch (M(e, t + 1)) {
          case 109:
            if (M(e, t + 4) !== 45)
              break;
          case 102:
            return v(e, /(.+:)(.+)-([^]+)/, "$1" + x + "$2-$3$1" + Fe + (M(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ke(e, "stretch", 0) ? wr(v(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return v(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, i, s, c, f, l, p) {
        return D + i + ":" + s + p + (c ? D + i + "-span:" + (f ? l : +l - +s) + p : "") + e;
      });
    case 4949:
      if (M(e, t + 6) === 121)
        return v(e, ":", ":" + x) + e;
      break;
    case 6444:
      switch (M(e, M(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return v(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + x + (M(e, 14) === 45 ? "inline-" : "") + "box$3$1" + x + "$2$3$1" + D + "$2box$3") + e;
        case 100:
          return v(e, ":", ":" + D) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return v(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function tt(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Hn(e, t, r, o) {
  switch (e.type) {
    case En:
      if (e.children.length)
        break;
    case wn:
    case _t:
      return e.return = e.return || e.value;
    case gr:
      return "";
    case mr:
      return e.return = e.value + "{" + tt(e.children, o) + "}";
    case nt:
      if (!J(e.value = e.props.join(",")))
        return "";
  }
  return J(r = tt(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function In(e) {
  var t = br(e);
  return function(r, o, i, s) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, i, s) || "";
    return c;
  };
}
function $n(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Mn(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case _t:
        e.return = wr(e.value, e.length, r);
        return;
      case mr:
        return tt([le(e, { value: v(e.value, "@", "@" + x) })], o);
      case nt:
        if (e.length)
          return Cn(r = e.props, function(i) {
            switch (oe(i, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Re(le(e, { props: [v(i, /:(read-\w+)/, ":" + Fe + "$1")] })), Re(le(e, { props: [i] })), wt(e, { props: Jt(r, o) });
                break;
              case "::placeholder":
                Re(le(e, { props: [v(i, /:(plac\w+)/, ":" + x + "input-$1")] })), Re(le(e, { props: [v(i, /:(plac\w+)/, ":" + Fe + "$1")] })), Re(le(e, { props: [v(i, /:(plac\w+)/, D + "input-$1")] })), Re(le(e, { props: [i] })), wt(e, { props: Jt(r, o) });
                break;
            }
            return "";
          });
    }
}
var Fn = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, me = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Er = "active", Rr = "data-styled-version", at = "6.1.8", At = `/*!sc*/
`, Dt = typeof window < "u" && "HTMLElement" in window, Ln = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), er = /invalid hook call/i, Ue = /* @__PURE__ */ new Set(), Wn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var s = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++)
          f[l - 1] = arguments[l];
        er.test(c) ? (s = !1, Ue.delete(o)) : i.apply(void 0, Ce([c], f, !1));
      }, dn(), s && !Ue.has(o) && (console.warn(o), Ue.add(o));
    } catch (c) {
      er.test(c.message) && Ue.delete(o);
    } finally {
      console.error = i;
    }
  }
}, ct = Object.freeze([]), Te = Object.freeze({});
function Yn(e, t, r) {
  return r === void 0 && (r = Te), e.theme !== r.theme && e.theme || t || r.theme;
}
var Ct = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), zn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vn = /(^-|-$)/g;
function tr(e) {
  return e.replace(zn, "-").replace(Vn, "");
}
var Bn = /(a)(d)/gi, Ge = 52, rr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Pt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Ge; t = t / Ge | 0)
    r = rr(t % Ge) + r;
  return (rr(t % Ge) + r).replace(Bn, "$1-$2");
}
var vt, Cr = 5381, fe = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Pr = function(e) {
  return fe(Cr, e);
};
function Un(e) {
  return Pt(Pr(e) >>> 0);
}
function xr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function yt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Tr = typeof Symbol == "function" && Symbol.for, kr = Tr ? Symbol.for("react.memo") : 60115, Gn = Tr ? Symbol.for("react.forward_ref") : 60112, qn = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Xn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, _r = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Kn = ((vt = {})[Gn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, vt[kr] = _r, vt);
function nr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === kr ? _r : "$$typeof" in e ? Kn[e.$$typeof] : qn;
  var t;
}
var Jn = Object.defineProperty, Zn = Object.getOwnPropertyNames, or = Object.getOwnPropertySymbols, Qn = Object.getOwnPropertyDescriptor, eo = Object.getPrototypeOf, ir = Object.prototype;
function Or(e, t, r) {
  if (typeof t != "string") {
    if (ir) {
      var o = eo(t);
      o && o !== ir && Or(e, o, r);
    }
    var i = Zn(t);
    or && (i = i.concat(or(t)));
    for (var s = nr(e), c = nr(t), f = 0; f < i.length; ++f) {
      var l = i[f];
      if (!(l in Xn || r && r[l] || c && l in c || s && l in s)) {
        var p = Qn(t, l);
        try {
          Jn(e, l, p);
        } catch {
        }
      }
    }
  }
  return e;
}
function ke(e) {
  return typeof e == "function";
}
function Nt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function de(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function sr(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], o = 1; o < e.length; o++)
    r += t ? t + e[o] : e[o];
  return r;
}
function _e(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function xt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !_e(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      e[o] = xt(e[o], t[o]);
  else if (_e(t))
    for (var o in t)
      e[o] = xt(e[o], t[o]);
  return e;
}
function jt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var to = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function ro() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], o = [], i = 1, s = e.length; i < s; i += 1)
    o.push(e[i]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Ae(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ro.apply(void 0, Ce([to[e]], t, !1)).trim());
}
var no = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, s = i; t >= s; )
        if ((s <<= 1) < 0)
          throw Ae(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var c = i; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), l = (c = 0, r.length); c < l; c++)
      this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r;
      this.groupSizes[t] = 0;
      for (var s = o; s < i; s++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], i = this.indexOfGroup(t), s = i + o, c = i; c < s; c++)
      r += "".concat(this.tag.getRule(c)).concat(At);
    return r;
  }, e;
}(), Qe = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), et = 1, qe = function(e) {
  if (Qe.has(e))
    return Qe.get(e);
  for (; rt.has(et); )
    et++;
  var t = et++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1073741824))
    throw Ae(16, "".concat(t));
  return Qe.set(e, t), rt.set(t, e), t;
}, oo = function(e, t) {
  et = t + 1, Qe.set(e, t), rt.set(t, e);
}, io = "style[".concat(me, "][").concat(Rr, '="').concat(at, '"]'), so = new RegExp("^".concat(me, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ao = function(e, t, r) {
  for (var o, i = r.split(","), s = 0, c = i.length; s < c; s++)
    (o = i[s]) && e.registerName(t, o);
}, co = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(At), i = [], s = 0, c = o.length; s < c; s++) {
    var f = o[s].trim();
    if (f) {
      var l = f.match(so);
      if (l) {
        var p = 0 | parseInt(l[1], 10), h = l[2];
        p !== 0 && (oo(h, p), ao(e, h, l[3]), e.getTag().insertRules(p, i)), i.length = 0;
      } else
        i.push(f);
    }
  }
};
function lo() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ar = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), i = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(me, "]")));
    return l[l.length - 1];
  }(r), s = i !== void 0 ? i.nextSibling : null;
  o.setAttribute(me, Er), o.setAttribute(Rr, at);
  var c = lo();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, s), o;
}, uo = function() {
  function e(t) {
    this.element = Ar(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var o = document.styleSheets, i = 0, s = o.length; i < s; i++) {
        var c = o[i];
        if (c.ownerNode === r)
          return c;
      }
      throw Ae(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), fo = function() {
  function e(t) {
    this.element = Ar(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), po = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), ar = Dt, ho = { isServer: !Dt, useCSSOMInjection: !Ln }, Dr = function() {
  function e(t, r, o) {
    t === void 0 && (t = Te), r === void 0 && (r = {});
    var i = this;
    this.options = Y(Y({}, ho), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Dt && ar && (ar = !1, function(s) {
      for (var c = document.querySelectorAll(io), f = 0, l = c.length; f < l; f++) {
        var p = c[f];
        p && p.getAttribute(me) !== Er && (co(s, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this)), jt(this, function() {
      return function(s) {
        for (var c = s.getTag(), f = c.length, l = "", p = function(g) {
          var b = function(T) {
            return rt.get(T);
          }(g);
          if (b === void 0)
            return "continue";
          var R = s.names.get(b), O = c.getGroup(g);
          if (R === void 0 || O.length === 0)
            return "continue";
          var j = "".concat(me, ".g").concat(g, '[id="').concat(b, '"]'), F = "";
          R !== void 0 && R.forEach(function(T) {
            T.length > 0 && (F += "".concat(T, ","));
          }), l += "".concat(O).concat(j, '{content:"').concat(F, '"}').concat(At);
        }, h = 0; h < f; h++)
          p(h);
        return l;
      }(i);
    });
  }
  return e.registerId = function(t) {
    return qe(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(Y(Y({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, i = r.target;
      return r.isServer ? new po(i) : o ? new uo(i) : new fo(i);
    }(this.options), new no(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (qe(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(qe(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(qe(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), go = /&/g, mo = /^\s*\/\/.*$/gm;
function Nr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Nr(r.children, t)), r;
  });
}
function vo(e) {
  var t, r, o, i = e === void 0 ? Te : e, s = i.options, c = s === void 0 ? Te : s, f = i.plugins, l = f === void 0 ? ct : f, p = function(b, R, O) {
    return O.startsWith(r) && O.endsWith(r) && O.replaceAll(r, "").length > 0 ? ".".concat(t) : b;
  }, h = l.slice();
  h.push(function(b) {
    b.type === nt && b.value.includes("&") && (b.props[0] = b.props[0].replace(go, r).replace(o, p));
  }), c.prefix && h.push(Mn), h.push(Hn);
  var g = function(b, R, O, j) {
    R === void 0 && (R = ""), O === void 0 && (O = ""), j === void 0 && (j = "&"), t = j, r = R, o = new RegExp("\\".concat(r, "\\b"), "g");
    var F = b.replace(mo, ""), T = Nn(O || R ? "".concat(O, " ").concat(R, " { ").concat(F, " }") : F);
    c.namespace && (T = Nr(T, c.namespace));
    var y = [];
    return tt(T, In(h.concat($n(function(k) {
      return y.push(k);
    })))), y;
  };
  return g.hash = l.length ? l.reduce(function(b, R) {
    return R.name || Ae(15), fe(b, R.name);
  }, Cr).toString() : "", g;
}
var yo = new Dr(), Tt = vo(), jr = ge.createContext({ shouldForwardProp: void 0, styleSheet: yo, stylis: Tt });
jr.Consumer;
ge.createContext(void 0);
function cr() {
  return hn(jr);
}
var lr = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(i, s) {
      s === void 0 && (s = Tt);
      var c = o.name + s.hash;
      i.hasNameForId(o.id, c) || i.insertRules(o.id, c, s(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, jt(this, function() {
      throw Ae(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Tt), this.name + t.hash;
  }, e;
}(), bo = function(e) {
  return e >= "A" && e <= "Z";
};
function ur(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-")
      return e;
    bo(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Hr = function(e) {
  return e == null || e === !1 || e === "";
}, Ir = function(e) {
  var t, r, o = [];
  for (var i in e) {
    var s = e[i];
    e.hasOwnProperty(i) && !Hr(s) && (Array.isArray(s) && s.isCss || ke(s) ? o.push("".concat(ur(i), ":"), s, ";") : _e(s) ? o.push.apply(o, Ce(Ce(["".concat(i, " {")], Ir(s), !1), ["}"], !1)) : o.push("".concat(ur(i), ": ").concat((t = i, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Fn || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function he(e, t, r, o) {
  if (Hr(e))
    return [];
  if (Nt(e))
    return [".".concat(e.styledComponentId)];
  if (ke(e)) {
    if (!ke(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var i = e(t);
    return process.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof lr || _e(i) || i === null || console.error("".concat(xr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), he(i, t, r, o);
  }
  var s;
  return e instanceof lr ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : _e(e) ? Ir(e) : Array.isArray(e) ? Array.prototype.concat.apply(ct, e.map(function(c) {
    return he(c, t, r, o);
  })) : [e.toString()];
}
function So(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ke(r) && !Nt(r))
      return !1;
  }
  return !0;
}
var wo = Pr(at), Eo = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && So(t), this.componentId = r, this.baseHash = fe(wo, r), this.baseStyle = o, Dr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        i = de(i, this.staticRulesId);
      else {
        var s = sr(he(this.rules, t, r, o)), c = Pt(fe(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var f = o(s, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, f);
        }
        i = de(i, c), this.staticRulesId = c;
      }
    else {
      for (var l = fe(this.baseHash, o.hash), p = "", h = 0; h < this.rules.length; h++) {
        var g = this.rules[h];
        if (typeof g == "string")
          p += g, process.env.NODE_ENV !== "production" && (l = fe(l, g));
        else if (g) {
          var b = sr(he(g, t, r, o));
          l = fe(l, b + h), p += b;
        }
      }
      if (p) {
        var R = Pt(l >>> 0);
        r.hasNameForId(this.componentId, R) || r.insertRules(this.componentId, R, o(p, ".".concat(R), void 0, this.componentId)), i = de(i, R);
      }
    }
    return i;
  }, e;
}(), $r = ge.createContext(void 0);
$r.Consumer;
var bt = {}, fr = /* @__PURE__ */ new Set();
function Ro(e, t, r) {
  var o = Nt(e), i = e, s = !yt(e), c = t.attrs, f = c === void 0 ? ct : c, l = t.componentId, p = l === void 0 ? function(A, N) {
    var E = typeof A != "string" ? "sc" : tr(A);
    bt[E] = (bt[E] || 0) + 1;
    var m = "".concat(E, "-").concat(Un(at + E + bt[E]));
    return N ? "".concat(N, "-").concat(m) : m;
  }(t.displayName, t.parentComponentId) : l, h = t.displayName, g = h === void 0 ? function(A) {
    return yt(A) ? "styled.".concat(A) : "Styled(".concat(xr(A), ")");
  }(e) : h, b = t.displayName && t.componentId ? "".concat(tr(t.displayName), "-").concat(t.componentId) : t.componentId || p, R = o && i.attrs ? i.attrs.concat(f).filter(Boolean) : f, O = t.shouldForwardProp;
  if (o && i.shouldForwardProp) {
    var j = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var F = t.shouldForwardProp;
      O = function(A, N) {
        return j(A, N) && F(A, N);
      };
    } else
      O = j;
  }
  var T = new Eo(r, b, o ? i.componentStyle : void 0);
  function y(A, N) {
    return function(E, m, Z) {
      var Q = E.attrs, lt = E.componentStyle, ut = E.defaultProps, We = E.foldedComponentIds, z = E.styledComponentId, ee = E.target, ue = ge.useContext($r), Ye = cr(), ve = E.shouldForwardProp || Ye.shouldForwardProp;
      process.env.NODE_ENV !== "production" && qt(z);
      var De = Yn(m, ue, ut) || Te, V = function(be, te, ae) {
        for (var G, q = Y(Y({}, te), { className: void 0, theme: ae }), ce = 0; ce < be.length; ce += 1) {
          var Se = ke(G = be[ce]) ? G(q) : G;
          for (var X in Se)
            q[X] = X === "className" ? de(q[X], Se[X]) : X === "style" ? Y(Y({}, q[X]), Se[X]) : Se[X];
        }
        return te.className && (q.className = de(q.className, te.className)), q;
      }(Q, m, De), ie = V.as || ee, se = {};
      for (var L in V)
        V[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" && V.theme === De || (L === "forwardedAs" ? se.as = V.forwardedAs : ve && !ve(L, ie) || (se[L] = V[L], ve || process.env.NODE_ENV !== "development" || Sn(L) || fr.has(L) || !Ct.has(ie) || (fr.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ye = function(be, te) {
        var ae = cr(), G = be.generateAndInjectStyles(te, ae.styleSheet, ae.stylis);
        return process.env.NODE_ENV !== "production" && qt(G), G;
      }(lt, V);
      process.env.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(ye);
      var Ne = de(We, z);
      return ye && (Ne += " " + ye), V.className && (Ne += " " + V.className), se[yt(ie) && !Ct.has(ie) ? "class" : "className"] = Ne, se.ref = Z, pn(ie, se);
    }(k, A, N);
  }
  y.displayName = g;
  var k = ge.forwardRef(y);
  return k.attrs = R, k.componentStyle = T, k.displayName = g, k.shouldForwardProp = O, k.foldedComponentIds = o ? de(i.foldedComponentIds, i.styledComponentId) : "", k.styledComponentId = b, k.target = o ? i.target : e, Object.defineProperty(k, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = o ? function(N) {
      for (var E = [], m = 1; m < arguments.length; m++)
        E[m - 1] = arguments[m];
      for (var Z = 0, Q = E; Z < Q.length; Z++)
        xt(N, Q[Z], !0);
      return N;
    }({}, i.defaultProps, A) : A;
  } }), process.env.NODE_ENV !== "production" && (Wn(g, b), k.warnTooManyClasses = /* @__PURE__ */ function(A, N) {
    var E = {}, m = !1;
    return function(Z) {
      if (!m && (E[Z] = !0, Object.keys(E).length >= 200)) {
        var Q = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(A).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), m = !0, E = {};
      }
    };
  }(g, b)), jt(k, function() {
    return ".".concat(k.styledComponentId);
  }), s && Or(k, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), k;
}
function dr(e, t) {
  for (var r = [e[0]], o = 0, i = t.length; o < i; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}
var pr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Co(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (ke(e) || _e(e))
    return pr(he(dr(ct, Ce([e], t, !0))));
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? he(o) : pr(he(dr(o, t)));
}
function kt(e, t, r) {
  if (r === void 0 && (r = Te), !t)
    throw Ae(1, t);
  var o = function(i) {
    for (var s = [], c = 1; c < arguments.length; c++)
      s[c - 1] = arguments[c];
    return e(t, r, Co.apply(void 0, Ce([i], s, !1)));
  };
  return o.attrs = function(i) {
    return kt(e, t, Y(Y({}, r), { attrs: Array.prototype.concat(r.attrs, i).filter(Boolean) }));
  }, o.withConfig = function(i) {
    return kt(e, t, Y(Y({}, r), i));
  }, o;
}
var Mr = function(e) {
  return kt(Ro, e);
}, Le = Mr;
Ct.forEach(function(e) {
  Le[e] = Mr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Xe = "__sc-".concat(me, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Xe] || (window[Xe] = 0), window[Xe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Xe] += 1);
const Po = (e, t) => {
  let r;
  function o() {
    clearTimeout(r);
  }
  function i() {
    o(), r = setTimeout(() => {
      e();
    }, t);
  }
  return i.cancel = o, i;
}, hr = (e, t, r) => (t = !t && t !== 0 ? e : t, r = !r && r !== 0 ? e : r, t > r ? (console.error("min limit is greater than max limit"), e) : e < t ? t : e > r ? r : e), Fr = (e, t) => e.clientX > t.left && e.clientX < t.right && e.clientY > t.top && e.clientY < t.top + t.height, xo = (e, t) => {
  const r = t.getBoundingClientRect();
  return Fr(e, r);
}, Lr = Le.div`
  position: absolute;
  height: 100%;
  width: 6px;
  right: 3px;
  z-index: 1;
  padding: 6px 0;
  box-sizing: border-box;
  pointer-events: none;

  &.rcs-custom-scrollbar-rtl {
    right: auto;
    left: 3px;
  }
`, To = Le.div`
  margin-top: 7px;
  background: #2c2c2c;
  border-radius: 3px;
  width: 6px;
`, ko = Le.div`
  height: calc(100% - 12px);
  margin-top: 6px;
  background: #dcdcdc;
  border-radius: 3px;
`, _o = Le.div`
  min-height: 0;
  min-width: 0;

  & .rcs-outer-container {
    overflow: hidden;

    & .rcs-positioning {
      position: relative;
    }
  }

  & .rcs-inner-container {
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 0;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.05) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      pointer-events: none;
      transition: height 0.1s ease-in;
      will-change: height;
    }

    &.rcs-content-scrolled:after {
      height: 5px;
      transition: height 0.15s ease-out;
    }
  }

  &.rcs-scroll-handle-dragged .rcs-inner-container {
    user-select: none;
  }

  &.rcs-scroll-handle-dragged ${Lr} {
    opacity: 1;
  }

  & .rcs-custom-scroll-handle {
    position: absolute;
    width: 100%;
    top: 0;
  }
`;
class Do extends gn {
  constructor(r) {
    super(r);
    w(this, "scrollbarYWidth");
    w(this, "hideScrollThumb");
    w(this, "contentHeight", 0);
    w(this, "visibleHeight", 0);
    w(this, "scrollHandleHeight", 0);
    w(this, "scrollRatio", 1);
    w(this, "hasScroll", !1);
    w(this, "startDragHandlePos", 0);
    w(this, "startDragMousePos", 0);
    w(this, "customScrollRef", He());
    w(this, "innerContainerRef", He());
    w(this, "customScrollbarRef", He());
    w(this, "scrollHandleRef", He());
    w(this, "contentWrapperRef", He());
    w(this, "adjustFreezePosition", (r) => {
      if (!this.contentWrapperRef.current)
        return;
      const o = this.getScrolledElement(), i = this.contentWrapperRef.current;
      this.props.freezePosition && (i.scrollTop = this.state.scrollPos), r.freezePosition && (o.scrollTop = this.state.scrollPos);
    });
    w(this, "toggleScrollIfNeeded", () => {
      const r = this.contentHeight - this.visibleHeight > 1;
      this.hasScroll !== r && (this.hasScroll = r, this.forceUpdate());
    });
    w(this, "updateScrollPosition", (r) => {
      const o = this.getScrolledElement(), i = hr(
        r,
        0,
        this.contentHeight - this.visibleHeight
      );
      o.scrollTop = i, this.setState({
        scrollPos: i
      });
    });
    w(this, "onClick", (r) => {
      if (!this.hasScroll || !this.isMouseEventOnCustomScrollbar(r) || this.isMouseEventOnScrollHandle(r))
        return;
      const o = this.calculateNewScrollHandleTop(r), i = this.getScrollValueFromHandlePosition(o);
      this.updateScrollPosition(i);
    });
    w(this, "isMouseEventOnCustomScrollbar", (r) => {
      if (!this.customScrollbarRef.current)
        return !1;
      const i = this.customScrollRef.current.getBoundingClientRect(), s = this.customScrollbarRef.current.getBoundingClientRect(), c = this.props.rtl ? {
        left: i.left,
        right: s.right
      } : {
        left: s.left,
        width: i.right
      }, f = {
        right: i.right,
        top: i.top,
        height: i.height,
        ...c
      };
      return Fr(r, f);
    });
    w(this, "isMouseEventOnScrollHandle", (r) => {
      if (!this.scrollHandleRef.current)
        return !1;
      const o = this.scrollHandleRef.current;
      return xo(r, o);
    });
    w(this, "calculateNewScrollHandleTop", (r) => {
      const s = this.customScrollRef.current.getBoundingClientRect().top + window.pageYOffset, c = r.pageY - s, f = this.getScrollHandleStyle().top;
      let l;
      return c > f + this.scrollHandleHeight ? l = f + Math.min(
        this.scrollHandleHeight,
        this.visibleHeight - this.scrollHandleHeight
      ) : l = f - Math.max(this.scrollHandleHeight, 0), l;
    });
    w(this, "getScrollValueFromHandlePosition", (r) => r / this.scrollRatio);
    w(this, "getScrollHandleStyle", () => {
      const r = this.state.scrollPos * this.scrollRatio;
      return this.scrollHandleHeight = this.visibleHeight * this.scrollRatio, {
        height: this.scrollHandleHeight,
        top: r
      };
    });
    w(this, "adjustCustomScrollPosToContentPos", (r) => {
      this.setState({
        scrollPos: r
      });
    });
    w(this, "onScroll", (r) => {
      this.props.freezePosition || (this.hideScrollThumb(), this.adjustCustomScrollPosToContentPos(r.currentTarget.scrollTop), this.props.onScroll && this.props.onScroll(r));
    });
    w(this, "getScrolledElement", () => this.innerContainerRef.current);
    w(this, "onMouseDown", (r) => {
      !this.hasScroll || !this.isMouseEventOnScrollHandle(r) || (this.startDragHandlePos = this.getScrollHandleStyle().top, this.startDragMousePos = r.pageY, this.setState({
        onDrag: !0
      }), document.addEventListener("mousemove", this.onHandleDrag, {
        passive: !1
      }), document.addEventListener("mouseup", this.onHandleDragEnd, {
        passive: !1
      }));
    });
    w(this, "onTouchStart", () => {
      this.setState({
        onDrag: !0
      });
    });
    w(this, "onHandleDrag", (r) => {
      r.preventDefault();
      const o = r.pageY - this.startDragMousePos, i = hr(
        this.startDragHandlePos + o,
        0,
        this.visibleHeight - this.scrollHandleHeight
      ), s = this.getScrollValueFromHandlePosition(i);
      this.updateScrollPosition(s);
    });
    w(this, "onHandleDragEnd", (r) => {
      this.setState({
        onDrag: !1
      }), r.preventDefault(), document.removeEventListener("mousemove", this.onHandleDrag), document.removeEventListener("mouseup", this.onHandleDragEnd);
    });
    w(this, "getInnerContainerClasses", () => this.state.scrollPos && this.props.addScrolledClass ? "rcs-inner-container rcs-content-scrolled" : "rcs-inner-container");
    w(this, "getScrollStyles", () => {
      const r = this.scrollbarYWidth || 20, o = this.props.rtl ? "marginLeft" : "marginRight", i = {
        height: this.props.heightRelativeToParent || this.props.flex ? "100%" : "",
        overscrollBehavior: this.props.allowOuterScroll ? "auto" : "none"
      };
      i[o] = -1 * r;
      const s = {
        height: this.props.heightRelativeToParent || this.props.flex ? "100%" : "",
        overflowY: this.props.freezePosition ? "hidden" : "visible"
      };
      return s[o] = this.scrollbarYWidth ? 0 : r, {
        innerContainer: i,
        contentWrapper: s
      };
    });
    w(this, "getOuterContainerStyle", () => ({
      height: this.props.heightRelativeToParent || this.props.flex ? "100%" : ""
    }));
    w(this, "getRootStyles", () => {
      const r = {};
      return this.props.heightRelativeToParent ? r.height = this.props.heightRelativeToParent : this.props.flex && (r.flex = this.props.flex), r;
    });
    w(this, "enforceMinHandleHeight", (r) => {
      const o = this.props.minScrollHandleHeight || 38;
      if (r.height >= o)
        return r;
      const i = o - r.height, s = this.state.scrollPos / (this.contentHeight - this.visibleHeight), c = i * s, f = r.top - c;
      return {
        height: o,
        top: f
      };
    });
    this.scrollbarYWidth = 0, this.state = {
      scrollPos: 0,
      onDrag: !1
    }, this.hideScrollThumb = Po(() => {
      this.setState({
        onDrag: !1
      });
    }, 500);
  }
  componentDidMount() {
    typeof this.props.scrollTo < "u" ? this.updateScrollPosition(this.props.scrollTo) : this.forceUpdate();
  }
  componentDidUpdate(r, o) {
    const i = this.contentHeight, s = this.visibleHeight, c = this.getScrolledElement(), f = o.scrollPos >= i - s;
    this.contentHeight = c.scrollHeight, this.scrollbarYWidth = c.offsetWidth - c.clientWidth, this.visibleHeight = c.clientHeight, this.scrollRatio = this.contentHeight ? this.visibleHeight / this.contentHeight : 1, this.toggleScrollIfNeeded();
    const l = this.state === o;
    (this.props.freezePosition || r.freezePosition) && this.adjustFreezePosition(r), typeof this.props.scrollTo < "u" && this.props.scrollTo !== r.scrollTo ? this.updateScrollPosition(this.props.scrollTo) : this.props.keepAtBottom && l && f && this.updateScrollPosition(this.contentHeight - this.visibleHeight);
  }
  componentWillUnmount() {
    this.hideScrollThumb.cancel(), document.removeEventListener("mousemove", this.onHandleDrag), document.removeEventListener("mouseup", this.onHandleDragEnd);
  }
  render() {
    var f, l;
    const r = this.getScrollStyles(), o = this.getRootStyles(), i = this.enforceMinHandleHeight(
      this.getScrollHandleStyle()
    ), s = {
      height: `${(((l = (f = this.contentWrapperRef) == null ? void 0 : f.current) == null ? void 0 : l.clientHeight) || 0) - 20}px`
    }, c = [
      this.props.className || "",
      "rcs-custom-scroll",
      this.state.onDrag ? "rcs-scroll-handle-dragged" : ""
    ].join(" ");
    return /* @__PURE__ */ ne.jsx(
      _o,
      {
        className: c,
        style: o,
        ref: this.customScrollRef,
        children: /* @__PURE__ */ ne.jsxs(
          "div",
          {
            "data-testid": "outer-container",
            className: "rcs-outer-container",
            style: this.getOuterContainerStyle(),
            onMouseDown: this.onMouseDown,
            onTouchStart: this.onTouchStart,
            onClick: this.onClick,
            children: [
              this.hasScroll ? /* @__PURE__ */ ne.jsx("div", { className: "rcs-positioning", children: /* @__PURE__ */ ne.jsxs(
                Lr,
                {
                  "data-testid": "custom-scrollbar",
                  ref: this.customScrollbarRef,
                  className: `rcs-custom-scrollbar ${this.props.rtl ? "rcs-custom-scrollbar-rtl" : ""}`,
                  children: [
                    /* @__PURE__ */ ne.jsx(
                      To,
                      {
                        style: s
                      }
                    ),
                    /* @__PURE__ */ ne.jsx(
                      "div",
                      {
                        "data-testid": "custom-scroll-handle",
                        ref: this.scrollHandleRef,
                        className: "rcs-custom-scroll-handle",
                        style: i,
                        children: /* @__PURE__ */ ne.jsx(
                          ko,
                          {
                            className: this.props.handleClass || "rcs-inner-handle"
                          }
                        )
                      }
                    )
                  ]
                },
                "scrollbar"
              ) }) : null,
              /* @__PURE__ */ ne.jsx(
                "div",
                {
                  "data-testid": "inner-container",
                  ref: this.innerContainerRef,
                  className: this.getInnerContainerClasses(),
                  style: r.innerContainer,
                  onScroll: this.onScroll,
                  children: /* @__PURE__ */ ne.jsx(
                    "div",
                    {
                      ref: this.contentWrapperRef,
                      style: r.contentWrapper,
                      children: this.props.children
                    }
                  )
                }
              )
            ]
          }
        )
      }
    );
  }
}
export {
  Do as CustomScroll
};
//# sourceMappingURL=index.es.js.map
