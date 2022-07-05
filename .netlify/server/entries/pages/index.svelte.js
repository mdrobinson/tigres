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
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e1a1e114 = require("../../chunks/index-e1a1e114.js");
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "section.svelte-1bgohwt{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1bgohwt{width:100%}")();
const css = {
  code: "section.svelte-1bgohwt{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1bgohwt{width:100%}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_e1a1e114.c)(($$result, $$props, $$bindings, slots) => {
  $$props.games;
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Tigres de San Antonio</title>`, ""}<meta name="${"description"}" content="${"Tigres de San Antonio"}" data-svelte="svelte-1yqz60v">`, ""}

<section class="${"svelte-1bgohwt"}"><h1 class="${"svelte-1bgohwt"}">TIGRES DE SAN ANTONIO</h1>
</section>`;
});
