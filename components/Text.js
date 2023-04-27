var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React from "react";
const sizes = {
  default: 14,
  small: 12,
};
const colors = {
  default: "#24292e",
  "gray-light": "#e1e4e8",
  gray: "#586069",
  "gray-dark": "#24292e",
};
const families = {
  default:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  mono: "SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace",
};
const weights = {
  default: 400,
  bold: 600,
};
const Text = (_a) => {
  var {
      children = "",
      weight = "default",
      family = "default",
      color = "default",
      size = "default",
    } = _a,
    props = __rest(_a, ["children", "weight", "family", "color", "size"]);
  return React.createElement(
    "p",
    Object.assign(
      {
        style: {
          whiteSpace: "pre",
          fontSize: `${sizes[size]}px`,
          lineHeight: 1.5,
          fontFamily: families[family],
          color: colors[color],
          fontWeight: weights[weight],
        },
      },
      props
    ),
    children
  );
};
export default Text;
