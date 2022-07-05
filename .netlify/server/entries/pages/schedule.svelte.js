var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Schedule
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e1a1e114 = require("../../chunks/index-e1a1e114.js");
var GameCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '@import url("https://fonts.googleapis.com/css2?family=League+Gothic&display=swap");@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0370-03FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}:root{font-family:"Roboto", Times New Roman, serif;--font-mono:"Fira Mono", monospace;--pure-white:#ffffff;--column-width:42rem;--column-margin-top:4rem}h2.svelte-1odftmi.svelte-1odftmi{font-family:"League Gothic", Arial}a.svelte-1odftmi.svelte-1odftmi{color:#0000ee;text-decoration:none}a.svelte-1odftmi.svelte-1odftmi:hover{text-decoration:underline}h2.svelte-1odftmi.svelte-1odftmi{font-size:1.5rem}@media(min-width: 720px){}.game-card.svelte-1odftmi.svelte-1odftmi{width:100%;border-radius:0.5rem;margin-bottom:1rem;background-color:#b3b3b3;display:inline-block;box-shadow:2px 1px 5px #333}@media only screen and (min-width: 768px){.game-card.svelte-1odftmi.svelte-1odftmi{width:50%}}h2.game-date.svelte-1odftmi.svelte-1odftmi{background-color:#ffffff;margin:0;text-transform:uppercase;text-align:center;border-radius:0.25rem 0.25rem 0 0;border-bottom:2px solid #e99530;padding:0.5rem 0}.game-information.svelte-1odftmi.svelte-1odftmi{display:flex;flex-direction:column;margin-left:1rem}.score-container.svelte-1odftmi.svelte-1odftmi{padding-left:1rem;background-color:#e99530;text-align:center;border-radius:0 0 0.25rem 0.25rem}.score-container.svelte-1odftmi h2.svelte-1odftmi{padding:0.25rem 0 0 0;margin:0}.score-container.svelte-1odftmi p.svelte-1odftmi{font-weight:bold;margin:0}')();
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=League+Gothic&display=swap");@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0370-03FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}:root{font-family:"Roboto", Times New Roman, serif;--font-mono:"Fira Mono", monospace;--pure-white:#ffffff;--column-width:42rem;--column-margin-top:4rem}h2.svelte-1odftmi.svelte-1odftmi{font-family:"League Gothic", Arial}a.svelte-1odftmi.svelte-1odftmi{color:#0000ee;text-decoration:none}a.svelte-1odftmi.svelte-1odftmi:hover{text-decoration:underline}h2.svelte-1odftmi.svelte-1odftmi{font-size:1.5rem}@media(min-width: 720px){}.game-card.svelte-1odftmi.svelte-1odftmi{width:100%;border-radius:0.5rem;margin-bottom:1rem;background-color:#b3b3b3;display:inline-block;box-shadow:2px 1px 5px #333}@media only screen and (min-width: 768px){.game-card.svelte-1odftmi.svelte-1odftmi{width:50%}}h2.game-date.svelte-1odftmi.svelte-1odftmi{background-color:#ffffff;margin:0;text-transform:uppercase;text-align:center;border-radius:0.25rem 0.25rem 0 0;border-bottom:2px solid #e99530;padding:0.5rem 0}.game-information.svelte-1odftmi.svelte-1odftmi{display:flex;flex-direction:column;margin-left:1rem}.score-container.svelte-1odftmi.svelte-1odftmi{padding-left:1rem;background-color:#e99530;text-align:center;border-radius:0 0 0.25rem 0.25rem}.score-container.svelte-1odftmi h2.svelte-1odftmi{padding:0.25rem 0 0 0;margin:0}.score-container.svelte-1odftmi p.svelte-1odftmi{font-weight:bold;margin:0}',
  map: null
};
const GameCard = (0, import_index_e1a1e114.c)(($$result, $$props, $$bindings, slots) => {
  let { gameData } = $$props;
  const formattedDate = new Date(gameData.date).toLocaleDateString("en-us", {
    month: "long",
    day: "2-digit",
    year: "numeric"
  });
  new Date(gameData.date).toLocaleString("default", { month: "short" });
  new Date(gameData.date).getDate();
  if ($$props.gameData === void 0 && $$bindings.gameData && gameData !== void 0)
    $$bindings.gameData(gameData);
  $$result.css.add(css$1);
  return `<section class="${"game-card svelte-1odftmi"}">
	<h2 class="${"game-date svelte-1odftmi"}">${(0, import_index_e1a1e114.e)(formattedDate)}</h2>

	<div class="${"game-information svelte-1odftmi"}"><p><strong>Vs:</strong> ${(0, import_index_e1a1e114.e)(gameData.opponent)}</p>
		<p><strong>Location:</strong> <a target="${"_blank"}"${(0, import_index_e1a1e114.d)("href", gameData.mapsurl, 0)} class="${"svelte-1odftmi"}">${(0, import_index_e1a1e114.e)(gameData.location)}</a></p>
		<p><strong>Time:</strong> ${(0, import_index_e1a1e114.e)(gameData.time)}</p></div>
	${gameData.tigresRuns && gameData.opponentRuns ? `<div class="${"score-container svelte-1odftmi"}"><h2 class="${"svelte-1odftmi"}">Final Score:</h2>
			<p class="${"svelte-1odftmi"}">Tigres de San Antonio - ${(0, import_index_e1a1e114.e)(gameData.tigresRuns)}</p>
			<p class="${"svelte-1odftmi"}">${(0, import_index_e1a1e114.e)(gameData.opponent)} - ${(0, import_index_e1a1e114.e)(gameData.opponentRuns)}</p></div>` : ``}
</section>`;
});
var schedule_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '@import url("https://fonts.googleapis.com/css2?family=League+Gothic&display=swap");@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0370-03FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}:root{font-family:"Roboto", Times New Roman, serif;--font-mono:"Fira Mono", monospace;--pure-white:#ffffff;--column-width:42rem;--column-margin-top:4rem}h1.svelte-1shciq{font-family:"League Gothic", Arial}h1.svelte-1shciq{font-weight:400;color:#ffffff}h1.svelte-1shciq{font-size:2rem;text-align:center}@media(min-width: 720px){h1.svelte-1shciq{font-size:2.4rem}}#upcomingGames.svelte-1shciq,#previousGames.svelte-1shciq{display:flex;flex-direction:column;align-items:center}')();
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=League+Gothic&display=swap");@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0370-03FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}:root{font-family:"Roboto", Times New Roman, serif;--font-mono:"Fira Mono", monospace;--pure-white:#ffffff;--column-width:42rem;--column-margin-top:4rem}h1.svelte-1shciq{font-family:"League Gothic", Arial}h1.svelte-1shciq{font-weight:400;color:#ffffff}h1.svelte-1shciq{font-size:2rem;text-align:center}@media(min-width: 720px){h1.svelte-1shciq{font-size:2.4rem}}#upcomingGames.svelte-1shciq,#previousGames.svelte-1shciq{display:flex;flex-direction:column;align-items:center}',
  map: null
};
const Schedule = (0, import_index_e1a1e114.c)(($$result, $$props, $$bindings, slots) => {
  let games = $$props.games;
  const upcomingGames = games.filter((x) => {
    return new Date(x.date) >= new Date();
  }).sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  const previousGames = games.filter((x) => {
    return new Date(x.date) < new Date();
  });
  $$result.css.add(css);
  return `<h1 class="${"svelte-1shciq"}">Upcoming Games:</h1>
<section id="${"upcomingGames"}" class="${"svelte-1shciq"}">${(0, import_index_e1a1e114.f)(upcomingGames, (game) => {
    return `${(0, import_index_e1a1e114.v)(GameCard, "GameCard").$$render($$result, { gameData: game }, {}, {})}`;
  })}</section>

<h1 class="${"svelte-1shciq"}">Previous Games:</h1>
<section id="${"previousGames"}" class="${"svelte-1shciq"}">${(0, import_index_e1a1e114.f)(previousGames, (game) => {
    return `${(0, import_index_e1a1e114.v)(GameCard, "GameCard").$$render($$result, { gameData: game }, {}, {})}`;
  })}
</section>`;
});
