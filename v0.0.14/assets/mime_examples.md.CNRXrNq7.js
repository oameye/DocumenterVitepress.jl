import { _ as _export_sfc, c as createElementBlock, o as openBlock, a4 as createStaticVNode } from "./chunks/framework.CKC4wjzQ.js";
const _imports_0 = "/DocumenterVitepress.jl/v0.0.14/assets/yuxihrb.CGGmtknr.png";
const _imports_1 = "/DocumenterVitepress.jl/v0.0.14/assets/ijnjllv.yDDNeA3I.jpeg";
const _imports_2 = "/DocumenterVitepress.jl/v0.0.14/assets/fprphmw.C-W3LInb.gif";
const _imports_3 = "/DocumenterVitepress.jl/v0.0.14/assets/fprphmw.C-W3LInb.gif";
const __pageData = JSON.parse('{"title":"MIME-type examples","description":"","frontmatter":{},"headers":[],"relativePath":"mime_examples.md","filePath":"mime_examples.md","lastUpdated":null}');
const _sfc_main = { name: "mime_examples.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="MIME-type-examples" tabindex="-1">MIME-type examples <a class="header-anchor" href="#MIME-type-examples" aria-label="Permalink to &quot;MIME-type examples {#MIME-type-examples}&quot;">​</a></h1><p>This file tests the output for all available MIME-types.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    MediaOutput{MIME&quot;...&quot;}(contents::String)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">A struct representing media output with a specific MIME type.</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Fields</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- `contents::String`: The contents of the media output.</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MediaOutput{MimeType}</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    contents</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vector{UInt8}</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MediaOutput</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{MimeType}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(contents</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MimeType </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MediaOutput{MimeType}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vector{UInt8}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(contents))</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This defines the show method for the target MIME type only!</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Base</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(io, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MimeType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, media</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MediaOutput{MimeType}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MimeType </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(io, media</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">contents)</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># MediaOutput{MIME&quot;text/plain&quot;}(&quot;Hello there!&quot;)</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DocumenterVitepress</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MediaOutput{MIME&quot;image/png&quot;}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">joinpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pathof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(DocumenterVitepress) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dirname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;assets&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;logo.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)))</span></span></code></pre></div><p><img src="' + _imports_0 + '" alt=""></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MediaOutput{MIME&quot;image/jpeg&quot;}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/519px-Felis_silvestris_silvestris.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)))</span></span></code></pre></div><p><img src="' + _imports_1 + '" alt=""></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MediaOutput{MIME&quot;image/svg+xml&quot;}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/commons/6/6c/SVG_Simple_Icon.svg&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> download </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> read)</span></span></code></pre></div><img src="data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iLTMwMCAtMzAwIDYwMCA2MDAiPgo8dGl0bGU+U1ZHIFNpbXBsZSBJY29uIFRpbnk8L3RpdGxlPgo8ZGVzYz5EZXNpZ25lZCBmb3IgdGhlIFNWRyBMb2dvIENvbnRlc3QgaW4gMjAwNiBieSBIYXJ2ZXkgUmF5bmVyLiBJdCBpcyBhdmFpbGFibGUgdW5kZXIgdGhlIENyZWF0aXZlIENvbW1vbnMgbGljZW5zZSBmb3IgdGhvc2Ugd2hvIGhhdmUgYW4gU1ZHIHByb2R1Y3Qgb3Igd2hvIGFyZSB1c2luZyBTVkcgb24gdGhlaXIgc2l0ZS48L2Rlc2M+Cjx1c2UgeGxpbms6aHJlZj0iI2EiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI3Ni43Ii8+CjxnIGlkPSJhIj4KCTxnIGlkPSJiIj4KCQk8ZyBpZD0iYyIgZmlsbD0iI2ZmZiI+CgkJCTxjaXJjbGUgaWQ9ImQiIGN4PSItMjAyIiByPSI0NS4yIi8+CgkJCTxwYXRoIGQ9Im0yMDEtMzItNDAyLDAgMCw2NCA0MDIsMCIvPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNkIiB4PSI0MDQiLz4KCQk8L2c+CgkJPHVzZSB4bGluazpocmVmPSIjYyIgdHJhbnNmb3JtPSJyb3RhdGUoOTApIi8+Cgk8L2c+Cgk8dXNlIHhsaW5rOmhyZWY9IiNiIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSkiLz4KPC9nPgo8L3N2Zz4="><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MediaOutput{MIME&quot;image/gif&quot;}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)))</span></span></code></pre></div><p><img src="' + _imports_2 + '" alt=""></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MediaOutput{MIME&quot;image/gif&quot;}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">read</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)))</span></span></code></pre></div><p><img src="' + _imports_3 + '" alt=""></p>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
const mime_examples = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  mime_examples as default
};
