import{_ as i,c as r,j as e,a as t,a3 as o,o as a}from"./chunks/framework.Cy-wNG_8.js";const oe=JSON.parse('{"title":"DocumenterCitations.jl integration","description":"","frontmatter":{},"headers":[],"relativePath":"citations.md","filePath":"citations.md","lastUpdated":null}'),n={name:"citations.md"},l=o('<h1 id="DocumenterCitations.jl-integration" tabindex="-1">DocumenterCitations.jl integration <a class="header-anchor" href="#DocumenterCitations.jl-integration" aria-label="Permalink to &quot;DocumenterCitations.jl integration {#DocumenterCitations.jl-integration}&quot;">​</a></h1><p>This page shows the DocumenterCitations.jl integration and what it looks like. You can use DocumenterCitations in DocumenterVitepress in the same way that you use them in Documenter!</p><p>This page&#39;s source was taken from the DocumenterCitations docs and rendered via DocumenterVitepress.</p><h1 id="gallery" tabindex="-1">Citation Style Gallery <a class="header-anchor" href="#gallery" aria-label="Permalink to &quot;Citation Style Gallery {#gallery}&quot;">​</a></h1><p>The citation style is determined when instantiating the <code>CitationBibliography</code>, via the <code>style</code> argument.</p><p>The built-in styles are:</p><ul><li><p><code>style=:numeric</code> (default): <a href="/DocumenterVitepress.jl/previews/PR160/citations#numeric_style">numeric style</a></p></li><li><p><code>style=:authoryear</code>: <a href="/DocumenterVitepress.jl/previews/PR160/citations#author_year_style">author-year style</a></p></li><li><p><code>style=:alpha</code>: <a href="/DocumenterVitepress.jl/previews/PR160/citations#alphabetic_style">alphabetic style</a></p></li></ul><h2 id="numeric_style" tabindex="-1">Numeric style <a class="header-anchor" href="#numeric_style" aria-label="Permalink to &quot;Numeric style {#numeric_style}&quot;">​</a></h2><p>This is the default style (<code>style=:numeric</code>) used throughout the other pages of this documentation, cf. the Syntax examples.</p><ul><li><p><code>[GoerzQ2022](@cite)</code> renders as &quot;[1]&quot;</p></li><li><p><code>[FuerstNJP2014,SolaAAMOP2018](@cite)</code> renders as &quot;[2, 3]&quot;</p></li><li><p><code>[GoerzQ2022](@citet)</code> renders as &quot;Goerz <em>et al.</em> [1]&quot;</p></li><li><p><code>[GoerzQ2022](@citep)</code> renders as &quot;[1]&quot; — <code>@citep</code> is the same as <code>@cite</code> for this style</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@cite)</code> renders as &quot;[1, Eq. (1)]&quot;</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@citet)</code> renders as &quot;Goerz <em>et al.</em> [1], Eq. (1)&quot;</p></li><li><p><code>[GoerzQ2022](@citet*)</code> renders as &quot;Goerz, Carrasco and Malinovsky [1]&quot;</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@citet*)</code> renders as &quot;Goerz, Carrasco and Malinovsky [1], Eq. (1)&quot;</p></li><li><p><code>[WinckelIP2008](@citet)</code> renders as &quot;von Winckel and Borzì [4]&quot;</p></li><li><p><code>[WinckelIP2008](@Citet)</code> renders as &quot;Von Winckel and Borzì [4]&quot;</p></li><li><p><code>[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@cite)</code> renders as &quot;[5–8, and references therein]&quot;</p></li><li><p><code>[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@Citet)</code> renders as &quot;Brumer and Shapiro [5], Brif <em>et al.</em> [6], Shapiro and Brumer [7], Koch [8], and references therein&quot;</p></li><li><p><code>[arbitrary text](@cite GoerzQ2022)</code> renders as &quot;arbitrary text&quot;</p></li></ul><p><strong>References:</strong></p><hr><h1 id="bibliography" tabindex="-1">Bibliography <a class="header-anchor" href="#bibliography" aria-label="Permalink to &quot;Bibliography&quot;">​</a></h1>',13),s=o('<li><p>M. H. Goerz, S. C. Carrasco and V. S. Malinovsky. <em>Quantum Optimal Control via Semi-Automatic Differentiation</em>. <a href="https://doi.org/10.22331/q-2022-12-07-871" target="_blank" rel="noreferrer">Quantum <strong>6</strong>, 871</a> (2022).</p></li><li><p>H. A. Fürst, M. H. Goerz, U. G. Poschinger, M. Murphy, S. Montangero, T. Calarco, F. Schmidt-Kaler, K. Singer and C. P. Koch. <em>Controlling the transport of an ion: Classical and quantum mechanical solutions</em>. <a href="https://doi.org/10.1088/1367-2630/16/7/075007" target="_blank" rel="noreferrer">New J. Phys. <strong>16</strong>, 075007</a> (2014). Special issue on coherent control of complex quantum systems.</p></li><li><p>I. R. Sola, B. Y. Chang, S. A. Malinovskaya and V. S. Malinovsky. <a href="https://doi.org/10.1016/bs.aamop.2018.02.003" target="_blank" rel="noreferrer"><em>Quantum Control in Multilevel Systems</em></a>. In: <em>Advances In Atomic, Molecular, and Optical Physics</em>, Vol. 67, edited by E. Arimondo, L. F. DiMauro and S. F. Yelin (Academic Press, 2018); Chapter 3, pp. 151–256.</p></li>',3),c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"0.988ex",height:"1.887ex",role:"img",focusable:"false",viewBox:"0 -833.9 436.6 833.9","aria-hidden":"true"},p=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"></g><g data-mml-node="mn" transform="translate(33,363) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g></g>',1),h=[p],u=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("msup",null,[e("mi"),e("mn",null,"1")])])],-1),m=e("a",{href:"https://doi.org/10.1088/0266-5611/24/3/034007",target:"_blank",rel:"noreferrer"},[t("Inverse Problems "),e("strong",null,"24"),t(", 034007")],-1),_=o('<li><p>P. Brumer and M. Shapiro. <em>Principles and Applications of the Quantum Control of Molecular Processes</em> (Wiley Interscience, 2003).</p></li><li><p>C. Brif, R. Chakrabarti and H. Rabitz. <em>Control of quantum phenomena: past, present and future</em>. <a href="https://doi.org/10.1088/1367-2630/12/7/075008" target="_blank" rel="noreferrer">New J. Phys. <strong>12</strong>, 075008</a> (2010).</p></li><li><p>M. Shapiro and P. Brumer. <a href="https://doi.org/10.1002/9783527639700" target="_blank" rel="noreferrer"><em>Quantum Control of Molecular Processes</em></a>. Second Edition (Wiley and Sons, 2012).</p></li><li><p>C. P. Koch. <em>Controlling open quantum systems: tools, achievements, and limitations</em>. <a href="https://doi.org/10.1088/0953-8984/28/21/213001" target="_blank" rel="noreferrer">J. Phys.: Condens. Matter <strong>28</strong>, 213001</a> (2016).</p></li>',4),g=o('<h2 id="author_year_style" tabindex="-1">Author-year style <a class="header-anchor" href="#author_year_style" aria-label="Permalink to &quot;Author-year style {#author_year_style}&quot;">​</a></h2><p>The author-year style (<code>style=:authoryear</code>) formats citations with the author name and publication year. This is the citation style used, e.g., in <a href="https://journals.aps.org/rmp/" target="_blank" rel="noreferrer">Rev. Mod. Phys.</a> (<code>rmp</code> option in <a href="https://www.ctan.org/tex-archive/macros/latex/contrib/revtex/auguide" target="_blank" rel="noreferrer">REVTeX</a>). The bibliography is sorted alphabetically by author name. The default <code>@cite</code> command is parenthetical (<code>@cite</code> and <code>@citep</code> are equivalent) which is different from the <code>authoryear</code> style in <a href="https://mirrors.rit.edu/CTAN/macros/latex/contrib/natbib/natnotes.pdf" target="_blank" rel="noreferrer">natbib</a>.</p><ul><li><p><code>[GoerzQ2022](@cite)</code> renders as &quot;(Goerz <em>et al.</em>, 2022)&quot;</p></li><li><p><code>[FuerstNJP2014,SolaAAMOP2018](@cite)</code> renders as &quot;(Fürst <em>et al.</em>, 2014; Sola <em>et al.</em>, 2018)&quot;</p></li><li><p><code>[GoerzQ2022](@citet)</code> renders as &quot;Goerz <em>et al.</em> (2022)&quot;</p></li><li><p><code>[GoerzQ2022](@citep)</code> renders as &quot;(Goerz <em>et al.</em>, 2022)&quot; — <code>@citep</code> is the same as <code>@cite</code> for this style</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@cite)</code> renders as &quot;(Goerz <em>et al.</em>, 2022; Eq. (1))&quot;</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@citet)</code> renders as &quot;Goerz <em>et al.</em> (2022), Eq. (1)&quot;</p></li><li><p><code>[GoerzQ2022](@cite*)</code> renders as &quot;(Goerz, Carrasco and Malinovsky, 2022)&quot;</p></li><li><p><code>[GoerzQ2022](@citet*)</code> renders as &quot;Goerz, Carrasco and Malinovsky (2022)&quot;</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@cite*)</code> renders as &quot;(Goerz, Carrasco and Malinovsky, 2022; Eq. (1))&quot;</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@citet*)</code> renders as &quot;Goerz, Carrasco and Malinovsky (2022), Eq. (1)&quot;</p></li><li><p><code>[WinckelIP2008](@citet)</code> renders as &quot;von Winckel and Borzì (2008)&quot;</p></li><li><p><code>[WinckelIP2008](@Citet)</code> renders as &quot;Von Winckel and Borzì (2008)&quot;</p></li><li><p><code>[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@cite)</code> renders as &quot;(Brumer and Shapiro, 2003; Brif <em>et al.</em>, 2010; Shapiro and Brumer, 2012; Koch, 2016; and references therein)&quot;</p></li><li><p><code>[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@Citet)</code> renders as &quot;Brumer and Shapiro (2003), Brif <em>et al.</em> (2010), Shapiro and Brumer (2012), Koch (2016), and references therein&quot;</p></li><li><p><code>[arbitrary text](@cite GoerzQ2022)</code> renders as &quot;arbitrary text&quot;</p></li></ul><p><strong>References:</strong></p><hr><h1 id="bibliography-1" tabindex="-1">Bibliography <a class="header-anchor" href="#bibliography-1" aria-label="Permalink to &quot;Bibliography&quot;">​</a></h1>',6),f=o('<li><p>Brif, C.; Chakrabarti, R. and Rabitz, H. (2010). <em>Control of quantum phenomena: past, present and future</em>. <a href="https://doi.org/10.1088/1367-2630/12/7/075008" target="_blank" rel="noreferrer">New J. Phys. <strong>12</strong>, 075008</a>.</p></li><li><p>Brumer, P. and Shapiro, M. (2003). <em>Principles and Applications of the Quantum Control of Molecular Processes</em> (Wiley Interscience).</p></li><li><p>Fürst, H. A.; Goerz, M. H.; Poschinger, U. G.; Murphy, M.; Montangero, S.; Calarco, T.; Schmidt-Kaler, F.; Singer, K. and Koch, C. P. (2014). <em>Controlling the transport of an ion: Classical and quantum mechanical solutions</em>. <a href="https://doi.org/10.1088/1367-2630/16/7/075007" target="_blank" rel="noreferrer">New J. Phys. <strong>16</strong>, 075007</a>. Special issue on coherent control of complex quantum systems.</p></li><li><p>Goerz, M. H.; Carrasco, S. C. and Malinovsky, V. S. (2022). <em>Quantum Optimal Control via Semi-Automatic Differentiation</em>. <a href="https://doi.org/10.22331/q-2022-12-07-871" target="_blank" rel="noreferrer">Quantum <strong>6</strong>, 871</a>.</p></li><li><p>Koch, C. P. (2016). <em>Controlling open quantum systems: tools, achievements, and limitations</em>. <a href="https://doi.org/10.1088/0953-8984/28/21/213001" target="_blank" rel="noreferrer">J. Phys.: Condens. Matter <strong>28</strong>, 213001</a>.</p></li><li><p>Shapiro, M. and Brumer, P. (2012). <a href="https://doi.org/10.1002/9783527639700" target="_blank" rel="noreferrer"><em>Quantum Control of Molecular Processes</em></a>. Second Edition (Wiley and Sons).</p></li><li><p>Sola, I. R.; Chang, B. Y.; Malinovskaya, S. A. and Malinovsky, V. S. (2018). <a href="https://doi.org/10.1016/bs.aamop.2018.02.003" target="_blank" rel="noreferrer"><em>Quantum Control in Multilevel Systems</em></a>. In: <em>Advances In Atomic, Molecular, and Optical Physics</em>, Vol. 67, edited by Arimondo, E.; DiMauro, L. F. and Yelin, S. F. (Academic Press); Chapter 3, pp. 151–256.</p></li>',7),y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},b={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"0.988ex",height:"1.887ex",role:"img",focusable:"false",viewBox:"0 -833.9 436.6 833.9","aria-hidden":"true"},C=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"></g><g data-mml-node="mn" transform="translate(33,363) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g></g>',1),q=[C],S=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("msup",null,[e("mi"),e("mn",null,"1")])])],-1),T=e("a",{href:"https://doi.org/10.1088/0266-5611/24/3/034007",target:"_blank",rel:"noreferrer"},[t("Inverse Problems "),e("strong",null,"24"),t(", 034007")],-1),k=o('<h2 id="alphabetic_style" tabindex="-1">Alphabetic style <a class="header-anchor" href="#alphabetic_style" aria-label="Permalink to &quot;Alphabetic style {#alphabetic_style}&quot;">​</a></h2><p>The <code>style=:alpha</code> formats citations and references like <code>:numeric</code>, except that it uses labels derived from the author names and publication year and sorts the references alphabetically.</p><ul><li><p><code>[GoerzQ2022](@cite)</code> renders as &quot;[GCM22]&quot;</p></li><li><p><code>[FuerstNJP2014,SolaAAMOP2018](@cite)</code> renders as &quot;[FGP+14, SCMM18]&quot;</p></li><li><p><code>[GoerzQ2022](@citet)</code> renders as &quot;Goerz <em>et al.</em> [GCM22]&quot;</p></li><li><p><code>[GoerzQ2022](@citep)</code> renders as &quot;[GCM22]&quot; — <code>@citep</code> is the same as <code>@cite</code> for this style</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@cite)</code> renders as &quot;[GCM22, Eq. (1)]&quot;</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@citet)</code> renders as &quot;Goerz <em>et al.</em> [GCM22], Eq. (1)&quot;</p></li><li><p><code>[GoerzQ2022](@citet*)</code> renders as &quot;Goerz, Carrasco and Malinovsky [GCM22]&quot;</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@citet*)</code> renders as &quot;Goerz, Carrasco and Malinovsky [GCM22], Eq. (1)&quot;</p></li><li><p><code>[WinckelIP2008](@citet)</code> renders as &quot;von Winckel and Borzì [vWB08]&quot;</p></li><li><p><code>[WinckelIP2008](@Citet)</code> renders as &quot;Von Winckel and Borzì [vWB08]&quot;</p></li><li><p><code>[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@cite)</code> renders as &quot;[BS03, BCR10, SB12, Koc16, and references therein]&quot;. Note that unlike for <code>style=:numeric</code>, the citations are not compressed.</p></li><li><p><code>[BrumerShapiro2003, BrifNJP2010, Shapiro2012, KochJPCM2016; and references therein](@Citet)</code> renders as &quot;Brumer and Shapiro [BS03], Brif <em>et al.</em> [BCR10], Shapiro and Brumer [SB12], Koch [Koc16], and references therein&quot;</p></li><li><p><code>[arbitrary text](@cite GoerzQ2022)</code> renders as &quot;arbitrary text&quot;</p></li></ul><p><strong>References:</strong></p><hr><h1 id="bibliography-2" tabindex="-1">Bibliography <a class="header-anchor" href="#bibliography-2" aria-label="Permalink to &quot;Bibliography&quot;">​</a></h1>',6),P=o('<li><p>C. Brif, R. Chakrabarti and H. Rabitz. <em>Control of quantum phenomena: past, present and future</em>. <a href="https://doi.org/10.1088/1367-2630/12/7/075008" target="_blank" rel="noreferrer">New J. Phys. <strong>12</strong>, 075008</a> (2010).</p></li><li><p>P. Brumer and M. Shapiro. <em>Principles and Applications of the Quantum Control of Molecular Processes</em> (Wiley Interscience, 2003).</p></li><li><p>H. A. Fürst, M. H. Goerz, U. G. Poschinger, M. Murphy, S. Montangero, T. Calarco, F. Schmidt-Kaler, K. Singer and C. P. Koch. <em>Controlling the transport of an ion: Classical and quantum mechanical solutions</em>. <a href="https://doi.org/10.1088/1367-2630/16/7/075007" target="_blank" rel="noreferrer">New J. Phys. <strong>16</strong>, 075007</a> (2014). Special issue on coherent control of complex quantum systems.</p></li><li><p>M. H. Goerz, S. C. Carrasco and V. S. Malinovsky. <em>Quantum Optimal Control via Semi-Automatic Differentiation</em>. <a href="https://doi.org/10.22331/q-2022-12-07-871" target="_blank" rel="noreferrer">Quantum <strong>6</strong>, 871</a> (2022).</p></li><li><p>C. P. Koch. <em>Controlling open quantum systems: tools, achievements, and limitations</em>. <a href="https://doi.org/10.1088/0953-8984/28/21/213001" target="_blank" rel="noreferrer">J. Phys.: Condens. Matter <strong>28</strong>, 213001</a> (2016).</p></li><li><p>M. Shapiro and P. Brumer. <a href="https://doi.org/10.1002/9783527639700" target="_blank" rel="noreferrer"><em>Quantum Control of Molecular Processes</em></a>. Second Edition (Wiley and Sons, 2012).</p></li><li><p>I. R. Sola, B. Y. Chang, S. A. Malinovskaya and V. S. Malinovsky. <a href="https://doi.org/10.1016/bs.aamop.2018.02.003" target="_blank" rel="noreferrer"><em>Quantum Control in Multilevel Systems</em></a>. In: <em>Advances In Atomic, Molecular, and Optical Physics</em>, Vol. 67, edited by E. Arimondo, L. F. DiMauro and S. F. Yelin (Academic Press, 2018); Chapter 3, pp. 151–256.</p></li>',7),x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"0.988ex",height:"1.887ex",role:"img",focusable:"false",viewBox:"0 -833.9 436.6 833.9","aria-hidden":"true"},w=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"></g><g data-mml-node="mn" transform="translate(33,363) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g></g>',1),v=[w],A=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("msup",null,[e("mi"),e("mn",null,"1")])])],-1),Q=e("a",{href:"https://doi.org/10.1088/0266-5611/24/3/034007",target:"_blank",rel:"noreferrer"},[t("Inverse Problems "),e("strong",null,"24"),t(", 034007")],-1),z=o('<p>Note that the <code>:alpha</code> style is able to automatically disambiguate labels:</p><hr><h1 id="bibliography-3" tabindex="-1">Bibliography <a class="header-anchor" href="#bibliography-3" aria-label="Permalink to &quot;Bibliography&quot;">​</a></h1><ol><li><p>M. Grace, C. Brif, H. Rabitz, I. A. Walmsley, R. L. Kosut and D. A. Lidar. <em>Optimal control of quantum gates and suppression of decoherence in a system of interacting two-level particles</em>. <a href="https://doi.org/10.1088/0953-4075/40/9/s06" target="_blank" rel="noreferrer">J. Phys. B <strong>40</strong>, S103</a> (2007), <a href="https://arxiv.org/abs/quant-ph/0702147" target="_blank" rel="noreferrer">arXiv:quant-ph/0702147</a>.</p></li><li><p>M. D. Grace, C. Brif, H. Rabitz, D. A. Lidar, I. A. Walmsley and R. L. Kosut. <em>Fidelity of optimally controlled quantum gates with randomly coupled multiparticle environments</em>. <a href="https://doi.org/10.1080/09500340701639615" target="_blank" rel="noreferrer">J. Mod. Opt. <strong>54</strong>, 2339</a> (2007), <a href="https://arxiv.org/abs/0712.2935" target="_blank" rel="noreferrer">arXiv:0712.2935</a>.</p></li></ol><p>This works because the <code>DocumenterCitations</code> plugin automatically upgrades <code>style=:alpha</code> to the internal</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DocumenterCitations.AlphaStyle</span></span></code></pre></div><h2 id="custom_styles" tabindex="-1">Custom styles <a class="header-anchor" href="#custom_styles" aria-label="Permalink to &quot;Custom styles {#custom_styles}&quot;">​</a></h2><p>In the following, we show two examples for user-defined styles. See the notes on customization on how to generally define a custom style.</p><h3 id="Custom-style:-enumerated-author-year" tabindex="-1">Custom style: enumerated author-year <a class="header-anchor" href="#Custom-style:-enumerated-author-year" aria-label="Permalink to &quot;Custom style: enumerated author-year {#Custom-style:-enumerated-author-year}&quot;">​</a></h3><p>In this example, the <code>:authoryear</code> style is used, but the references are shown in an enumerated list.</p><p>The important part of the definition is in the last line, indicating that the References should be shown as an enumeration (ordered list, <code>&lt;ol&gt;</code>, in HTML), see below. Meanwhile, citations render exactly as with <code>style=:authoryear</code>:</p><ul><li><p><code>[GoerzQ2022](@cite)</code> renders as &quot;(Goerz <em>et al.</em>, 2022)&quot;</p></li><li><p><code>[FuerstNJP2014,SolaAAMOP2018](@cite)</code> renders as &quot;(Fürst <em>et al.</em>, 2014; Sola <em>et al.</em>, 2018)&quot;</p></li><li><p><code>[WinckelIP2008](@Citet)</code> renders as &quot;Von Winckel and Borzì (2008)&quot;</p></li></ul><p><strong>References:</strong></p><hr><h1 id="bibliography-4" tabindex="-1">Bibliography <a class="header-anchor" href="#bibliography-4" aria-label="Permalink to &quot;Bibliography&quot;">​</a></h1>',15),G=o('<li><p>Brif, C.; Chakrabarti, R. and Rabitz, H. (2010). <em>Control of quantum phenomena: past, present and future</em>. <a href="https://doi.org/10.1088/1367-2630/12/7/075008" target="_blank" rel="noreferrer">New J. Phys. <strong>12</strong>, 075008</a>.</p></li><li><p>Brumer, P. and Shapiro, M. (2003). <em>Principles and Applications of the Quantum Control of Molecular Processes</em> (Wiley Interscience).</p></li><li><p>Fürst, H. A.; Goerz, M. H.; Poschinger, U. G.; Murphy, M.; Montangero, S.; Calarco, T.; Schmidt-Kaler, F.; Singer, K. and Koch, C. P. (2014). <em>Controlling the transport of an ion: Classical and quantum mechanical solutions</em>. <a href="https://doi.org/10.1088/1367-2630/16/7/075007" target="_blank" rel="noreferrer">New J. Phys. <strong>16</strong>, 075007</a>. Special issue on coherent control of complex quantum systems.</p></li><li><p>Goerz, M. H.; Carrasco, S. C. and Malinovsky, V. S. (2022). <em>Quantum Optimal Control via Semi-Automatic Differentiation</em>. <a href="https://doi.org/10.22331/q-2022-12-07-871" target="_blank" rel="noreferrer">Quantum <strong>6</strong>, 871</a>.</p></li><li><p>Koch, C. P. (2016). <em>Controlling open quantum systems: tools, achievements, and limitations</em>. <a href="https://doi.org/10.1088/0953-8984/28/21/213001" target="_blank" rel="noreferrer">J. Phys.: Condens. Matter <strong>28</strong>, 213001</a>.</p></li><li><p>Shapiro, M. and Brumer, P. (2012). <a href="https://doi.org/10.1002/9783527639700" target="_blank" rel="noreferrer"><em>Quantum Control of Molecular Processes</em></a>. Second Edition (Wiley and Sons).</p></li><li><p>Sola, I. R.; Chang, B. Y.; Malinovskaya, S. A. and Malinovsky, V. S. (2018). <a href="https://doi.org/10.1016/bs.aamop.2018.02.003" target="_blank" rel="noreferrer"><em>Quantum Control in Multilevel Systems</em></a>. In: <em>Advances In Atomic, Molecular, and Optical Physics</em>, Vol. 67, edited by Arimondo, E.; DiMauro, L. F. and Yelin, S. F. (Academic Press); Chapter 3, pp. 151–256.</p></li>',7),V={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},B={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"0.988ex",height:"1.887ex",role:"img",focusable:"false",viewBox:"0 -833.9 436.6 833.9","aria-hidden":"true"},I=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"></g><g data-mml-node="mn" transform="translate(33,363) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g></g>',1),H=[I],E=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("msup",null,[e("mi"),e("mn",null,"1")])])],-1),R=e("a",{href:"https://doi.org/10.1088/0266-5611/24/3/034007",target:"_blank",rel:"noreferrer"},[t("Inverse Problems "),e("strong",null,"24"),t(", 034007")],-1),D=o('<h3 id="Custom-style:-Citation-key-labels" tabindex="-1">Custom style: Citation-key labels <a class="header-anchor" href="#Custom-style:-Citation-key-labels" aria-label="Permalink to &quot;Custom style: Citation-key labels {#Custom-style:-Citation-key-labels}&quot;">​</a></h3><p>In this less trivial example, a style similar to <code>:alpha</code> is used, using the citation keys in the <code>.bib</code> file as labels. This would be somewhat more appropriate with citation keys that are shorter that the ones used here (keys similar to those automatically generated with the <code>:alpha</code> style).</p><ul><li><p><code>[GoerzQ2022](@cite)</code> renders as &quot;[GoerzQ2022]&quot;</p></li><li><p><code>[FuerstNJP2014,SolaAAMOP2018](@cite)</code> renders as &quot;[FuerstNJP2014, SolaAAMOP2018]&quot;</p></li><li><p><code>[GoerzQ2022](@citet)</code> renders as &quot;Goerz <em>et al.</em> [GoerzQ2022]&quot;</p></li><li><p><code>[GoerzQ2022](@citep)</code> renders as &quot;[GoerzQ2022]&quot; — <code>@citep</code> is the same as <code>@cite</code> for this style</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@cite)</code> renders as &quot;[GoerzQ2022, Eq. (1)]&quot;</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@citet)</code> renders as &quot;Goerz <em>et al.</em> [GoerzQ2022], Eq. (1)&quot;</p></li><li><p><code>[GoerzQ2022](@citet*)</code> renders as &quot;Goerz, Carrasco and Malinovsky [GoerzQ2022]&quot;</p></li><li><p><code>[GoerzQ2022; Eq. (1)](@citet*)</code> renders as &quot;Goerz, Carrasco and Malinovsky [GoerzQ2022], Eq. (1)&quot;</p></li><li><p><code>[WinckelIP2008](@citet)</code> renders as &quot;von Winckel and Borzì [WinckelIP2008]&quot;</p></li><li><p><code>[WinckelIP2008](@Citet)</code> renders as &quot;Von Winckel and Borzì [WinckelIP2008]&quot;</p></li><li><p><code>[arbitrary text](@cite GoerzQ2022)</code> renders as &quot;arbitrary text&quot;</p></li></ul><p><strong>References:</strong></p><hr><h1 id="bibliography-5" tabindex="-1">Bibliography <a class="header-anchor" href="#bibliography-5" aria-label="Permalink to &quot;Bibliography&quot;">​</a></h1>',6),N=o('<li><p>C. Brif, R. Chakrabarti and H. Rabitz. <em>Control of quantum phenomena: past, present and future</em>. <a href="https://doi.org/10.1088/1367-2630/12/7/075008" target="_blank" rel="noreferrer">New J. Phys. <strong>12</strong>, 075008</a> (2010).</p></li><li><p>P. Brumer and M. Shapiro. <em>Principles and Applications of the Quantum Control of Molecular Processes</em> (Wiley Interscience, 2003).</p></li><li><p>H. A. Fürst, M. H. Goerz, U. G. Poschinger, M. Murphy, S. Montangero, T. Calarco, F. Schmidt-Kaler, K. Singer and C. P. Koch. <em>Controlling the transport of an ion: Classical and quantum mechanical solutions</em>. <a href="https://doi.org/10.1088/1367-2630/16/7/075007" target="_blank" rel="noreferrer">New J. Phys. <strong>16</strong>, 075007</a> (2014). Special issue on coherent control of complex quantum systems.</p></li><li><p>M. H. Goerz, S. C. Carrasco and V. S. Malinovsky. <em>Quantum Optimal Control via Semi-Automatic Differentiation</em>. <a href="https://doi.org/10.22331/q-2022-12-07-871" target="_blank" rel="noreferrer">Quantum <strong>6</strong>, 871</a> (2022).</p></li><li><p>C. P. Koch. <em>Controlling open quantum systems: tools, achievements, and limitations</em>. <a href="https://doi.org/10.1088/0953-8984/28/21/213001" target="_blank" rel="noreferrer">J. Phys.: Condens. Matter <strong>28</strong>, 213001</a> (2016).</p></li><li><p>M. Shapiro and P. Brumer. <a href="https://doi.org/10.1002/9783527639700" target="_blank" rel="noreferrer"><em>Quantum Control of Molecular Processes</em></a>. Second Edition (Wiley and Sons, 2012).</p></li><li><p>I. R. Sola, B. Y. Chang, S. A. Malinovskaya and V. S. Malinovsky. <a href="https://doi.org/10.1016/bs.aamop.2018.02.003" target="_blank" rel="noreferrer"><em>Quantum Control in Multilevel Systems</em></a>. In: <em>Advances In Atomic, Molecular, and Optical Physics</em>, Vol. 67, edited by E. Arimondo, L. F. DiMauro and S. F. Yelin (Academic Press, 2018); Chapter 3, pp. 151–256.</p></li>',7),J={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},W={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"0.988ex",height:"1.887ex",role:"img",focusable:"false",viewBox:"0 -833.9 436.6 833.9","aria-hidden":"true"},K=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"></g><g data-mml-node="mn" transform="translate(33,363) scale(0.707)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g></g>',1),F=[K],j=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("msup",null,[e("mi"),e("mn",null,"1")])])],-1),L=e("a",{href:"https://doi.org/10.1088/0266-5611/24/3/034007",target:"_blank",rel:"noreferrer"},[t("Inverse Problems "),e("strong",null,"24"),t(", 034007")],-1);function O(Y,U,Z,$,X,ee){return a(),r("div",null,[l,e("ol",null,[s,e("li",null,[e("p",null,[t("G. von Winckel and A. Borzì. "),e("em",null,[t("Computational techniques for a quantum control problem with H"),e("mjx-container",c,[(a(),r("svg",d,h)),u]),t("-cost")]),t(". "),m,t(" (2008).")])]),_]),g,e("ul",null,[f,e("li",null,[e("p",null,[t("von Winckel, G. and Borzì, A. (2008). "),e("em",null,[t("Computational techniques for a quantum control problem with H"),e("mjx-container",y,[(a(),r("svg",b,q)),S]),t("-cost")]),t(". "),T,t(".")])])]),k,e("ol",null,[P,e("li",null,[e("p",null,[t("G. von Winckel and A. Borzì. "),e("em",null,[t("Computational techniques for a quantum control problem with H"),e("mjx-container",x,[(a(),r("svg",M,v)),A]),t("-cost")]),t(". "),Q,t(" (2008).")])])]),z,e("ol",null,[G,e("li",null,[e("p",null,[t("Von Winckel, G. and Borzì, A. (2008). "),e("em",null,[t("Computational techniques for a quantum control problem with H"),e("mjx-container",V,[(a(),r("svg",B,H)),E]),t("-cost")]),t(". "),R,t(".")])])]),D,e("ol",null,[N,e("li",null,[e("p",null,[t("G. von Winckel and A. Borzì. "),e("em",null,[t("Computational techniques for a quantum control problem with H"),e("mjx-container",J,[(a(),r("svg",W,F)),j]),t("-cost")]),t(". "),L,t(" (2008).")])])])])}const re=i(n,[["render",O]]);export{oe as __pageData,re as default};
