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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e1a1e114 = require("../../chunks/index-e1a1e114.js");
const getStores = () => {
  const stores = (0, import_index_e1a1e114.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '@import url("https://fonts.googleapis.com/css2?family=League+Gothic&display=swap");@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0370-03FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}:root{font-family:"Roboto", Times New Roman, serif;--font-mono:"Fira Mono", monospace;--pure-white:#ffffff;--column-width:42rem;--column-margin-top:4rem}a.svelte-ji5arm{color:#0000ee;text-decoration:none}a.svelte-ji5arm:hover{text-decoration:underline}@media(min-width: 720px){}header.svelte-ji5arm{display:flex;justify-content:center;position:sticky;top:0px}nav.svelte-ji5arm{width:100vw;background-color:#e99530;border-radius:0 0 0.25rem 0.25rem;box-shadow:2px 1px 5px #333}@media only screen and (min-width: 768px){nav.svelte-ji5arm{width:75%}}ul.svelte-ji5arm{display:flex;justify-content:space-around;padding:0.5rem;list-style:none}a.svelte-ji5arm{color:inherit}')();
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=League+Gothic&display=swap");@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0370-03FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}:root{font-family:"Roboto", Times New Roman, serif;--font-mono:"Fira Mono", monospace;--pure-white:#ffffff;--column-width:42rem;--column-margin-top:4rem}a.svelte-ji5arm{color:#0000ee;text-decoration:none}a.svelte-ji5arm:hover{text-decoration:underline}@media(min-width: 720px){}header.svelte-ji5arm{display:flex;justify-content:center;position:sticky;top:0px}nav.svelte-ji5arm{width:100vw;background-color:#e99530;border-radius:0 0 0.25rem 0.25rem;box-shadow:2px 1px 5px #333}@media only screen and (min-width: 768px){nav.svelte-ji5arm{width:75%}}ul.svelte-ji5arm{display:flex;justify-content:space-around;padding:0.5rem;list-style:none}a.svelte-ji5arm{color:inherit}',
  map: null
};
const Header = (0, import_index_e1a1e114.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e1a1e114.a)(page, (value) => $page = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<header class="${"svelte-ji5arm"}"><nav class="${"svelte-ji5arm"}"><ul class="${"svelte-ji5arm"}"><li${(0, import_index_e1a1e114.b)(($page.url.pathname === "/" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/"}" class="${"svelte-ji5arm"}">Home</a></li>
			<li${(0, import_index_e1a1e114.b)(($page.url.pathname === "/schedule" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/schedule"}" class="${"svelte-ji5arm"}">Schedule</a></li>
			<li${(0, import_index_e1a1e114.b)(($page.url.pathname === "/about" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/about"}" class="${"svelte-ji5arm"}">Team</a></li>
			<li${(0, import_index_e1a1e114.b)(($page.url.pathname === "/about" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/about"}" class="${"svelte-ji5arm"}">Sponsors</a></li>
			</ul></nav>
</header>`;
});
const InstagramIcon = (0, import_index_e1a1e114.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_e1a1e114.d)("width", size, 0)}${(0, import_index_e1a1e114.d)("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${(0, import_index_e1a1e114.d)("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-instagram " + (0, import_index_e1a1e114.e)(customClass)}"><rect x="${"2"}" y="${"2"}" width="${"20"}" height="${"20"}" rx="${"5"}" ry="${"5"}"></rect><path d="${"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}"></path><line x1="${"17.5"}" y1="${"6.5"}" x2="${"17.51"}" y2="${"6.5"}"></line></svg>`;
});
const MailIcon = (0, import_index_e1a1e114.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_e1a1e114.d)("width", size, 0)}${(0, import_index_e1a1e114.d)("height", size, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"${(0, import_index_e1a1e114.d)("stroke-width", strokeWidth, 0)} stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"feather feather-mail " + (0, import_index_e1a1e114.e)(customClass)}"><path d="${"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}"></path><polyline points="${"22,6 12,13 2,6"}"></polyline></svg>`;
});
var Footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '@import url("https://fonts.googleapis.com/css2?family=League+Gothic&display=swap");@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0370-03FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}:root{font-family:"Roboto", Times New Roman, serif;--font-mono:"Fira Mono", monospace;--pure-white:#ffffff;--column-width:42rem;--column-margin-top:4rem}a.svelte-1920h90.svelte-1920h90{color:#0000ee;text-decoration:none}a.svelte-1920h90.svelte-1920h90:hover{text-decoration:underline}@media(min-width: 720px){}footer.svelte-1920h90.svelte-1920h90{display:flex;justify-content:right}div.contact-icons.svelte-1920h90.svelte-1920h90{color:white;display:flex;justify-content:space-around;align-items:center;margin:0 1rem 1rem 0}div.contact-icons.svelte-1920h90 a.svelte-1920h90{text-decoration:none;color:white;margin-left:0.5rem}div.contact-icons.svelte-1920h90 a.svelte-1920h90:hover{color:#e99530}')();
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=League+Gothic&display=swap");@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-cyrillic-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+1F00-1FFF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-greek-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0370-03FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-ext-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:"Fira Mono";font-style:normal;font-display:swap;font-weight:400;src:url("./files/fira-mono-latin-400-normal.woff2") format("woff2"), url("./files/fira-mono-all-400-normal.woff") format("woff");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}:root{font-family:"Roboto", Times New Roman, serif;--font-mono:"Fira Mono", monospace;--pure-white:#ffffff;--column-width:42rem;--column-margin-top:4rem}a.svelte-1920h90.svelte-1920h90{color:#0000ee;text-decoration:none}a.svelte-1920h90.svelte-1920h90:hover{text-decoration:underline}@media(min-width: 720px){}footer.svelte-1920h90.svelte-1920h90{display:flex;justify-content:right}div.contact-icons.svelte-1920h90.svelte-1920h90{color:white;display:flex;justify-content:space-around;align-items:center;margin:0 1rem 1rem 0}div.contact-icons.svelte-1920h90 a.svelte-1920h90{text-decoration:none;color:white;margin-left:0.5rem}div.contact-icons.svelte-1920h90 a.svelte-1920h90:hover{color:#e99530}',
  map: null
};
const Footer = (0, import_index_e1a1e114.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1920h90"}"><div class="${"contact-icons svelte-1920h90"}"><a href="${"https://www.instagram.com/tigresdesanantonio/"}" target="${"_blank"}" class="${"svelte-1920h90"}">${(0, import_index_e1a1e114.v)(InstagramIcon, "InstagramIcon").$$render($$result, { size: "32" }, {}, {})}</a>
		<a href="${"mailto:tigresdesanantonio@gmail.com"}" class="${"svelte-1920h90"}">${(0, import_index_e1a1e114.v)(MailIcon, "MailIcon").$$render($$result, { size: "32" }, {}, {})}</a></div>
</footer>`;
});
var app = /* @__PURE__ */ (() => '\n@import url("https://fonts.googleapis.com/css2?family=League+Gothic&display=swap");\n@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");\n/* fira-mono-cyrillic-ext-400-normal*/\n@font-face {\n  font-family: "Fira Mono";\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2") format("woff2"), url("/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff") format("woff");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* fira-mono-cyrillic-400-normal*/\n@font-face {\n  font-family: "Fira Mono";\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("/_app/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2") format("woff2"), url("/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff") format("woff");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* fira-mono-greek-ext-400-normal*/\n@font-face {\n  font-family: "Fira Mono";\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("/_app/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2") format("woff2"), url("/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff") format("woff");\n  unicode-range: U+1F00-1FFF;\n}\n/* fira-mono-greek-400-normal*/\n@font-face {\n  font-family: "Fira Mono";\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("/_app/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2") format("woff2"), url("/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff") format("woff");\n  unicode-range: U+0370-03FF;\n}\n/* fira-mono-latin-ext-400-normal*/\n@font-face {\n  font-family: "Fira Mono";\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("/_app/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2") format("woff2"), url("/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff") format("woff");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* fira-mono-latin-400-normal*/\n@font-face {\n  font-family: "Fira Mono";\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url("/_app/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2") format("woff2"), url("/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff") format("woff");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n:root {\n  font-family: "Roboto", Times New Roman, serif;\n  --font-mono: "Fira Mono", monospace;\n  --pure-white: #ffffff;\n  --column-width: 42rem;\n  --column-margin-top: 4rem;\n}\nbody,\ndiv#app {\n  min-height: 100vh;\n  min-width: 100vw;\n  margin: 0;\n  background-color: #1f415d;\n}\ndiv#app {\n  display: flex;\n  flex-direction: column;\n}\nh1,\nh2,\nh3 {\n  font-family: "League Gothic", Arial;\n}\nh1 {\n  font-weight: 400;\n  color: #ffffff;\n}\na {\n  color: #0000ee;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\nh1 {\n  font-size: 2rem;\n  text-align: center;\n}\nh2 {\n  font-size: 1.5rem;\n}\ninput,\nbutton {\n  font-size: inherit;\n  font-family: inherit;\n}\nbutton:focus:not(:focus-visible) {\n  outline: none;\n}\n@media (min-width: 720px) {\n  h1 {\n    font-size: 2.4rem;\n  }\n}')();
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "main.svelte-oquoff{margin:1rem;flex-grow:1}")();
const css = {
  code: "main.svelte-oquoff{margin:1rem;flex-grow:1}",
  map: null
};
const _layout = (0, import_index_e1a1e114.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_e1a1e114.v)(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"svelte-oquoff"}">${slots.default ? slots.default({}) : ``}</main>
${(0, import_index_e1a1e114.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
