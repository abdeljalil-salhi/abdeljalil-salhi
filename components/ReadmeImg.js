import React from "react";
const ReadmeImg = ({ width, height, children }) => {
  return React.createElement(
    "svg",
    {
      fill: "none",
      width: width,
      height: height,
      viewBox: `0 0 ${width} ${height}`,
      xmlns: "http://www.w3.org/2000/svg",
    },
    React.createElement(
      "foreignObject",
      { width: width, height: height },
      React.createElement(
        "div",
        Object.assign({}, { xmlns: "http://www.w3.org/1999/xhtml" }),
        React.createElement(
          "style",
          null,
          `
              * {
                margin: 0;
                box-sizing: border-box;
              }
            `
        ),
        children
      )
    )
  );
};
export default ReadmeImg;
