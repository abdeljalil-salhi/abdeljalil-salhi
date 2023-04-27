// import { renderToString } from "react-dom/server.js";
import pkg from "react-dom/server.js";
const { renderToString } = pkg;
import { decode } from "querystring";
import { nowPlaying } from "../utils/spotify.js";
import { Player } from "../components/NowPlaying.js";
export default async function (req, res) {
  var _a;
  const {
    item = {},
    is_playing: isPlaying = false,
    progress_ms: progress = 0,
  } = await nowPlaying();
  const params = decode(req.url.split("?")[1]);
  if (params && typeof params.open !== "undefined") {
    if (item && item.external_urls) {
      res.writeHead(302, {
        Location: item.external_urls.spotify,
      });
      return res.end();
    }
    return res.status(200).end();
  }
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  const { duration_ms: duration, name: track } = item;
  const { images = [] } = item.album || {};
  const cover =
    (_a = images[images.length - 1]) === null || _a === void 0
      ? void 0
      : _a.url;
  let coverImg = null;
  if (cover) {
    const buff = await (await fetch(cover)).arrayBuffer();
    coverImg = `data:image/jpeg;base64,${Buffer.from(buff).toString("base64")}`;
  }
  const artist = (item.artists || []).map(({ name }) => name).join(", ");
  const text = renderToString(
    Player({ cover: coverImg, artist, track, isPlaying, progress, duration })
  );
  return res.status(200).send(text);
}
