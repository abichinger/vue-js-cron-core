import{_ as e,M as o,p,q as l,R as i,Q as n,t as s,N as t,a1 as c}from"./framework-982b2d0c.js";const r={},u=n("h1",{id:"getting-started-ant",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-started-ant","aria-hidden":"true"},"#"),s(" Getting Started - Ant")],-1),d=n("p",null,"The fastest way to get started, is to use one of the prebuilt components.",-1),k=n("li",null,[n("a",{href:"./getting-started-core"},"cron-core"),s(" - renderless cron editor")],-1),v=n("li",null,[n("a",{href:"./getting-started-light"},"cron-light"),s(" - lightweight cron editor without external dependencies")],-1),m={href:"https://antdv.com/",target:"_blank",rel:"noopener noreferrer"},g=n("a",{href:"./getting-started-element-plus"},"cron-element-plus",-1),h={href:"https://element-plus.org/en-US/",target:"_blank",rel:"noopener noreferrer"},b=n("a",{href:"./getting-started-quasar"},"cron-quasar",-1),f={href:"https://quasar.dev/",target:"_blank",rel:"noopener noreferrer"},_=n("a",{href:"./getting-started-vuetify"},"cron-vuetify",-1),y={href:"https://next.vuetifyjs.com/en/",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"requirements",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),s(" Requirements")],-1),q=n("p",null,"Make sure to install and setup all requirements.",-1),w={href:"https://www.antdv.com/components/overview/",target:"_blank",rel:"noopener noreferrer"},j=c(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Open up a terminal and run the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @vue-js-cron/ant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @vue-js-cron/ant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you need to register the component</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;@vue-js-cron/ant/dist/ant.css&#39;</span>
<span class="token comment">// registers the component globally</span>
<span class="token comment">// registered name: CronAnt</span>
<span class="token keyword">import</span> CronAntPlugin <span class="token keyword">from</span> <span class="token string">&#39;@vue-js-cron/ant&#39;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>CronAntPlugin<span class="token punctuation">)</span>

<span class="token comment">// alternatively you can also register the component yourself</span>
<span class="token comment">// https://vuejs.org/guide/components/registration.html</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CronAnt <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-js-cron/ant&#39;</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;CronAnt&#39;</span><span class="token punctuation">,</span> CronAnt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Done! 🚀</p><br><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cron-ant</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:button-props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ type: &#39;primary&#39;, shape: &#39;round&#39;, style: {backgroundColor: &#39;#0277BD&#39;} }<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error=$event<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-lightest pt-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>cron expression: {{value}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;* * * * *&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function A(C,V){const a=o("ExternalLinkIcon");return p(),l("div",null,[i(" Generated file "),u,d,n("ul",null,[k,v,n("li",null,[s("cron-ant - cron editor for "),n("a",m,[s("Ant Design Vue"),t(a)])]),n("li",null,[g,s(" - cron editor for "),n("a",h,[s("Element Plus"),t(a)])]),n("li",null,[b,s(" - cron editor for "),n("a",f,[s("Quasar"),t(a)])]),n("li",null,[_,s(" - cron editor for "),n("a",y,[s("Vuetify.js"),t(a)])])]),x,q,n("ul",null,[n("li",null,[n("a",w,[s("Ant Design Vue"),t(a)])])]),j])}const E=e(r,[["render",A],["__file","getting-started-ant.html.vue"]]);export{E as default};
