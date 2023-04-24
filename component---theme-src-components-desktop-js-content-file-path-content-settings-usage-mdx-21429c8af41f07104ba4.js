"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[960],{1216:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var a=t(1670),s=t(7378);function l(n){const e=Object.assign({p:"p",span:"span",a:"a"},(0,a.ah)(),n.components),{Tabs:t,Tab:l,Frame:p,Settings:c,FileFind:r,FilePencil:i,Fieldset:u,Wangimg130:m}=e;return u||o("Fieldset",!0),r||o("FileFind",!0),i||o("FilePencil",!0),p||o("Frame",!0),c||o("Settings",!0),l||o("Tab",!0),t||o("Tabs",!0),m||o("Wangimg130",!0),s.createElement(t,{defaultActiveTab:"Usage"},s.createElement(l,{title:"Usage"},s.createElement(p,{boxShadow:"none",display:"flex",gap:12},s.createElement("div",{style:{marginTop:"1em"}},s.createElement(c,{variant:"32x32_4"})),s.createElement(e.p,null,"You can provide some configs to ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@react95/gatsby-theme</code>'}})," theme. ",s.createElement("br"),"\nThey must be set in your ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby-config.js</code>'}}),", usually in project's root.")),s.createElement(e.p,null,"Example"),s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// gatsby-config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token string">\'@react95/gatsby-theme\'</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Root url for all content</span>\n        <span class="token comment">// defaults to \'/\'</span>\n        <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token string">\'/blog\'</span><span class="token punctuation">,</span>\n        <span class="token comment">// Location of your content,</span>\n        <span class="token comment">// defaults to \'content\'</span>\n        <span class="token literal-property property">contentPath</span><span class="token operator">:</span> <span class="token string">\'data\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}})),s.createElement(l,{title:"Additional configuration"},s.createElement(p,{boxShadow:"none",display:"flex",gap:12},s.createElement("div",{style:{marginTop:"1em"}},s.createElement(r,{variant:"32x32_4"})),s.createElement("div",null,s.createElement(e.p,null,"In addition to the theme options, there are a handful of items you can\ncustomize via the ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">siteMetadata</code>'}})," object in your site's\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby-config.js</code>'}}),". ",s.createElement("br")," Our theme will get these values to handle SEO for\nyou."),s.createElement(e.p,null,s.createElement("strong",null,"SEO"),": It's the practice of optimizing your web pages to make\nthem reach a high position in the search results of Google and other search\nengines. In other words: People will be more likely to encounter your website\nwhen searching online."))),s.createElement(e.p,null,"Example"),s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// gatsby-config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">siteMetadata</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Used for the site title and SEO</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Gatsby - Powered By React95</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token comment">// Used for SEO</span>\n    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">This is a Gatsby website that uses React95</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token comment">// Used for resolving images in social cards</span>\n    <span class="token literal-property property">siteUrl</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://example.com</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token comment">// Used for SEO in social cards</span>\n    <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/path-to/your/image</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token comment">// Used for SEO</span>\n    <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@mynickname</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}})),s.createElement(l,{title:"Content fields"},s.createElement(p,{boxShadow:"none",display:"flex",gap:12},s.createElement("div",{style:{marginTop:"1em"}},s.createElement(i,{variant:"32x32_4"})),s.createElement(e.p,null,"The following are the defined content fields based on the node interface\nin the schema")),s.createElement("br"),s.createElement(u,{legend:"Content type"},s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{style:{textAlign:"left",width:125}},"Field"),s.createElement("th",{style:{textAlign:"left"}},"Type"))),s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",null,"title"),s.createElement("td",null,"String")),s.createElement("tr",null,s.createElement("td",null,"image"),s.createElement("td",null,"String")),s.createElement("tr",null,s.createElement("td",null,"description"),s.createElement("td",null,"String")),s.createElement("tr",null,s.createElement("td",null,"icon"),s.createElement("td",null,"Icon")),s.createElement("tr",null,s.createElement("td",null,"image"),s.createElement("td",null,"String")),s.createElement("tr",null,s.createElement("td",null,"modal"),s.createElement("td",null,"Boolean"))))),s.createElement("br"),s.createElement(u,{legend:"Icon type"},s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{style:{textAlign:"left",width:125}},"Field"),s.createElement("th",null,"Type"))),s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",null,"name"),s.createElement("td",null,"String")),s.createElement("tr",null,s.createElement("td",null,"variant"),s.createElement("td",null,"String"))))),s.createElement("hr",{style:{marginBlock:"1.25em"}}),s.createElement(e.p,null,"Example"),s.createElement(p,{boxShadow:"in"},s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="md"><pre class="language-md"><code class="language-md"><span class="token front-matter-block"><span class="token punctuation">---</span>\n\n<span class="token front-matter yaml language-yaml">title: Getting Started\ndescription: Your awesome and nostalgic website!\nmodal: false\nicon:\n  name: Computer\n  variant: 32x32_4</span>\n\n<span class="token punctuation">---</span></span>\n\n<span class="token title important"><span class="token punctuation">#</span> Your website starts on this folder</span>\n\nFeel free to add your content!</code></pre></div>'}}))),s.createElement(l,{title:"Image Behavior"},s.createElement(p,{boxShadow:"none",display:"flex",gap:12},s.createElement("div",{style:{marginTop:"1em"}},s.createElement(m,{variant:"32x32_4"})),s.createElement("div",null,s.createElement(e.p,null,"Content can include references to images from static folder inside\nfrontmatter."),s.createElement(e.p,null,s.createElement("strong",null,"WARNING"),": When adding an image it will be the featured\nimage within the post."))),s.createElement(e.p,null,"Example"),s.createElement(p,{boxShadow:"in"},s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="md"><pre class="language-md"><code class="language-md"><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token front-matter yaml language-yaml">title: Hello World (example)\nimage: /some-image.jpg\nicon:\n  name: Computer\n  variant: 32x32_4</span>\n<span class="token punctuation">---</span></span></code></pre></div>'}}))),s.createElement(l,{title:"How styles work"},s.createElement(e.p,null,"Inside any ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">mdx</code>'}})," file you have all React95 components and all React95 icons at\nyour service:"),s.createElement(e.p,null,"Example"),s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="md"><pre class="language-md"><code class="language-md"><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token front-matter yaml language-yaml">title: How to play Freecell\nicon:\n  name: FolderExe\n  variant: 16x16_4</span>\n<span class="token punctuation">---</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Frame</span>\n  <span class="token attr-name">bg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span>\n  <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{6}</span>\n  <span class="token attr-name">boxShadow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>in<span class="token punctuation">"</span></span>\n  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span>\n\n<span class="token title important"><span class="token punctuation">#</span> How to play Freecell</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Freecell1</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>32x32_4<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n...\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Frame</span><span class="token punctuation">></span></span></code></pre></div>'}}),s.createElement("br"),s.createElement(e.p,null,s.createElement(e.a,{href:"https://react95.github.io/React95/"},"React95 components")," and ",s.createElement(e.a,{href:"https://react95.github.io/React95/?path=/docs/icon--all"},"React95 icons"))))}var p=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?s.createElement(e,n,s.createElement(l,n)):l(n)};function o(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=t(3353),r=t(734),i=t(8678),u=t(8441),m=t(2436);const g=n=>{let{pageContext:{data:e,content:t={},basePath:a},children:l}=n;const{allMdx:{edges:p}}=e,o=(0,c.ZS)(p.map((n=>n.node)),{basePath:a});return s.createElement(s.Fragment,null,s.createElement(u.Z,{content:t}),s.createElement(i.Z,{nav:o}),Object.keys(t).length>0&&s.createElement(r.Z,{content:t},l),s.createElement(m.Z,{nav:o}))};function d(n){return s.createElement(g,n,s.createElement(p,n))}}}]);
//# sourceMappingURL=component---theme-src-components-desktop-js-content-file-path-content-settings-usage-mdx-21429c8af41f07104ba4.js.map