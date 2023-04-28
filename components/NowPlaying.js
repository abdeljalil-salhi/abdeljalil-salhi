import React from "react";
import ReadmeImg from "./ReadmeImg.js";
import Text from "./Text.js";

export const Player = ({
  cover,
  track,
  artist,
  progress,
  duration,
  isPlaying,
}) => {
  return React.createElement(
    ReadmeImg,
    { width: "466", height: "85" },
    React.createElement(
      "style",
      null,
      `
			.now-playing-wrapper {
				display: flex;
				justify-content: center;
				mix-blend-mode: difference;
			}

			#title {
				text-align: center;
			}
			
            .paused { 
				animation-play-state: paused !important;
				background: #e1e4e8 !important;
            }

            img:not([src]) {
				content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
				border-radius: 6px;
				background: #FFF;
				mix-blend-mode: normal;
				border: 1px solid #e1e4e8;
            }

            p {
				display: block;
				opacity: 0;
            }

            .progress-bar {
				animation-delay: 550ms;
				position: relative;
				width: 100%;
				height: 4px;
				margin: -1px;
  				margin-top: 4px;
				border: 1px solid #e1e4e8;
				border-radius: 4px;
				overflow: hidden;
				padding: 2px;
				z-index: 0;
            }

            #progress {
				position: absolute;
				top: -1px;
				left: 0;
				width: 100%;
				height: 6px;
				transform-origin: left center;
				background-color: #24292e;
				animation: progress ${duration}ms linear;
				animation-delay: -${progress}ms;
            }
            
            .progress-bar,
            #track,
            #artist,
            #cover,
			#title {
				opacity: 0;
				animation: appear 300ms ease-out forwards;
            }

            #track {
            	animation-delay: 400ms;
            }
            #artist {
            	animation-delay: 500ms;
            }
            .progress-bar {
				animation-delay: 550ms;
				margin-top: 4px;
            }

            #cover {
				animation-name: cover-appear;
				animation-delay: 300ms;
				box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.05);
            }

			.bar-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 111px;
			}
			
			.bar-container.right {
				align-items: flex-start;
			}
			
			.bar-container.left {
				align-items: flex-end;
			}
			
			.bar {
				--offset: 0;
				animation: bars 1.7143166666666665s ease calc(var(--offset) * -.5s) infinite;
				background: rgba(224.4, 237.66000000000003, 101.745, .7);
				height: 10px;
				margin: 2px 0;
				width: 70px;
			}

            #cover:not([src]) {
            	box-shadow: none;
            }

            @keyframes cover-appear {
				from {
					opacity: 0;
					transform: scale(0.8);
				}
				to {
					opacity: 1;
					transform: scale(1);
				}
            }

            @keyframes appear {
				from {
					opacity: 0;
					transform: translateX(-8px);
				}
				to {
					opacity: 1;
					transform: translateX(0);
				}
            }

            @keyframes progress {
				from {
					transform: scaleX(0)
				}
				to {
					transform: scaleX(1)
				}
            }

			@keyframes bars {
				0% {
					width: 25%;
				}
				50% {
					width: 90%;
				}
				100% {
				  	width: 25%;
				}
			}
        `
    ),
    React.createElement(
      "div",
      {
        className: "now-playing-wrapper",
      },
      !artist ||
        !isPlaying ||
        React.createElement(
          "div",
          {
            className: "bar-container left",
          },
          React.createElement("div", {
            className: "bar",
            style: { "--offset": 0 },
          }),
          React.createElement("div", {
            className: "bar",
            style: { "--offset": 1 },
          }),
          React.createElement("div", {
            className: "bar",
            style: { "--offset": 2 },
          })
        ),
      React.createElement(
        "div",
        {
          className: isPlaying ? "disabled" : "",
          style: {
            display: "flex",
            alignItems: "center",
            background: "rgb(255,255,255,.6)",
            border: "1px solid rgba(125, 125, 125, .3)",
            borderRadius: ".3rem",
            margin: ".5rem 0",
            padding: ".6rem",
            paddingTop: 8,
            paddingLeft: 4,
            minWidth: 250,
          },
        },
        React.createElement("img", {
          id: "cover",
          src: cover !== null && cover !== void 0 ? cover : null,
          width: "48",
          height: "48",
        }),
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              flex: 1,
              flexDirection: "column",
              marginTop: -4,
              marginLeft: 8,
            },
          },
          React.createElement(
            Text,
            { id: "track", weight: "bold" },
            `${track !== null && track !== void 0 ? track : ""} `.trim()
          ),
          React.createElement(
            Text,
            { id: "artist", color: !track ? "gray" : undefined },
            artist || "Nothing playing..."
          ),
          track &&
            React.createElement(
              "div",
              { className: "progress-bar" },
              React.createElement("div", {
                id: "progress",
                className: !isPlaying ? "paused" : "",
              })
            )
        )
      ),
      !artist ||
        !isPlaying ||
        React.createElement(
          "div",
          {
            className: "bar-container right",
          },
          React.createElement("div", {
            className: "bar",
            style: { "--offset": 0 },
          }),
          React.createElement("div", {
            className: "bar",
            style: { "--offset": 1 },
          }),
          React.createElement("div", {
            className: "bar",
            style: { "--offset": 2 },
          })
        )
    )
  );
};
