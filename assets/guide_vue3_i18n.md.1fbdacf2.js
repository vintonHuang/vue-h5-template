import{_ as s,c as n,o as a,a as l}from"./app.2b769fcb.js";const i=JSON.parse('{"title":"i18n \u6587\u672C\u591A\u8BED\u8A00\u89E3\u51B3\u65B9\u6848","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49\u56FE\u7247\u7684\u76EE\u5F55\u683C\u5F0F","slug":"\u5B9A\u4E49\u56FE\u7247\u7684\u76EE\u5F55\u683C\u5F0F"},{"level":2,"title":"HTML\u7684\u4F7F\u7528\u65B9\u5F0F","slug":"html\u7684\u4F7F\u7528\u65B9\u5F0F"}],"relativePath":"guide/vue3/i18n.md","lastUpdated":1661140251000}'),p={name:"guide/vue3/i18n.md"},o=l(`<h1 id="i18n-\u6587\u672C\u591A\u8BED\u8A00\u89E3\u51B3\u65B9\u6848" tabindex="-1">i18n \u6587\u672C\u591A\u8BED\u8A00\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#i18n-\u6587\u672C\u591A\u8BED\u8A00\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h1><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createI18n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-i18n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5F15\u5165\u7B2C\u4E09\u65B9\u6700\u65B0\u7684i18n\u6CE8\u610F\u7248\u672C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;">: \u52A0\u8F7D\u5F53\u524D\u914D\u7F6E\u7684\u8BED\u8A00\u914D\u7F6E\u76EE\u5F55\uFF0C\u968F\u610F\u6DFB\u52A0</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">loadLang</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">glob</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lang/*.ts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> eager</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">langs</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">modules</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/(</span><span style="color:#A6ACCD;">\\.\\/</span><span style="color:#C3E88D;">lang</span><span style="color:#A6ACCD;">\\/</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">langs</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">modules</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lang</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">langs</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> i18n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createI18n</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// globalInjection: true,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// legacy: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">locale</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u9ED8\u8BA4\u8BED\u8A00\uFF0C\u5F53\u524D\u8FD9\u91CC\u7684\u6570\u636E\u8981\u8DDF\u914D\u7F6E\u7684lang\u76EE\u5F55\u4E0B\u9762\u7684\u6587\u4EF6\u540D\u5B57\u524D\u7F00\u4E00\u81F4</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fallbackLocale</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">messages</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">loadLang</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u8BB0\u8F7D\u5F53\u524D\u5F15\u5165\u7684\u8BED\u8A00\u76EE\u5F55\u7684\u5904\u7406\u8FC7\u540E\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;">: \u5207\u6362\u5F53\u524D\u591A\u8BED\u8A00</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setLang</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">locale</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">locale</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">locale</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">i18n</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">global</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">locale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">locale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h1 id="css\u56FE\u7247\u89E3\u51B3\u65B9\u6848" tabindex="-1">css\u56FE\u7247\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#css\u56FE\u7247\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h1><p>\u76EE\u524D\u5728\u4E1A\u52A1\u5F00\u53D1\u4E2D,css\u7684\u6837\u5F0F\u591A\u8BED\u8A00\u4E5F\u4F1A\u7ECF\u5E38\u7528\u5230\uFF0C\u53EF\u80FD\u4E00\u4E9B\u56FE\u7247\u7684\u5B57\u4F53\u6BD4\u8F83\u590D\u6742\uFF0C\u4EE3\u7801\u5F88\u96BE\u5B9E\u73B0\u3002\u6216\u8005\u6211\u4EEC\u4E3A\u4E86\u51CF\u5C11\u591A\u8BED\u8A00\u7684\u914D\u7F6E\uFF0C\u52A0\u5FEB\u5F00\u53D1\u6548\u7387\u4E5F\u4F1A\u4F7F\u7528\u591A\u8BED\u8A00\u7684\u914D\u7F6E,\u76EE\u524D\u8FD9\u91CC\u63D0\u4F9Bscss\u7684\u56FE\u7247\u591A\u8BED\u8A00\u7684\u65B9\u6848</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">@mixin</span><span style="color:#A6ACCD;"> main-lang-bg($width, $height, $preUrl, $posUrl) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  width: $width;</span></span>
<span class="line"><span style="color:#A6ACCD;">  height: $height;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">background-repeat</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">no-repeat</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">background-size</span><span style="color:#A6ACCD;">: 100% 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@include</span><span style="color:#A6ACCD;"> loop-lang-bg($preUrl, $posUrl)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u80CC\u666F\u56FE\u591A\u8BED\u8A00</span></span>
<span class="line"><span style="color:#89DDFF;">@mixin</span><span style="color:#A6ACCD;"> loop-lang-bg($preUrl, $posUrl) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  $list: </span><span style="color:#FFCB6B;">zh-cn</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">en-us</span><span style="color:#A6ACCD;">; // \u914D\u7F6E\u9700\u8981\u7684\u591A\u8BED\u8A00\uFF0C\u6839\u636E\u9879\u76EE\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@each</span><span style="color:#A6ACCD;"> $i in $list </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;.#</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">$i</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#{$preUrl}/#{$i}/#{$posUrl}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B9A\u4E49\u56FE\u7247\u7684\u76EE\u5F55\u683C\u5F0F" tabindex="-1">\u5B9A\u4E49\u56FE\u7247\u7684\u76EE\u5F55\u683C\u5F0F <a class="header-anchor" href="#\u5B9A\u4E49\u56FE\u7247\u7684\u76EE\u5F55\u683C\u5F0F" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 button</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 en-us</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 confirm.png</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 zh-cn</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 confirm.png</span></span>
<span class="line"></span></code></pre></div><h2 id="html\u7684\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">HTML\u7684\u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#html\u7684\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h2><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;btn-confirm&#39;, i18n.global.locale]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">HomePage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i18n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/@/i18n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">btn-confirm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        @include main-lang-bg(302px, 82px, &#39;/@/assets/button&#39;, &#39;confirm.png&#39;)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function c(t,r,F,D,y,C){return a(),n("div",null,e)}const g=s(p,[["render",c]]);export{i as __pageData,g as default};
