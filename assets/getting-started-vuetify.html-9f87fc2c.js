import{_ as e,M as p,p as o,q as l,R as i,Q as n,t as s,N as t,a1 as c}from"./framework-982b2d0c.js";const r={},u=n("h1",{id:"getting-started-vuetify",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-started-vuetify","aria-hidden":"true"},"#"),s(" Getting Started - Vuetify")],-1),d=n("p",null,"The fastest way to get started, is to use one of the prebuilt components.",-1),k=n("li",null,[n("a",{href:"./getting-started-core"},"cron-core"),s(" - renderless cron editor")],-1),v=n("li",null,[n("a",{href:"./getting-started-light"},"cron-light"),s(" - lightweight cron editor without external dependencies")],-1),m=n("a",{href:"./getting-started-ant"},"cron-ant",-1),g={href:"https://antdv.com/",target:"_blank",rel:"noopener noreferrer"},h=n("a",{href:"./getting-started-element-plus"},"cron-element-plus",-1),b={href:"https://element-plus.org/en-US/",target:"_blank",rel:"noopener noreferrer"},f=n("a",{href:"./getting-started-quasar"},"cron-quasar",-1),y={href:"https://quasar.dev/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://next.vuetifyjs.com/en/",target:"_blank",rel:"noopener noreferrer"},q=n("h2",{id:"requirements",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),s(" Requirements")],-1),x=n("p",null,"Make sure to install and setup all requirements.",-1),V={href:"https://next.vuetifyjs.com/en/",target:"_blank",rel:"noopener noreferrer"},w=c(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Open up a terminal and run the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @vue-js-cron/vuetify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @vue-js-cron/vuetify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you need to register the component</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;@vue-js-cron/vuetify/dist/vuetify.css&#39;</span>
<span class="token comment">// registers the component globally</span>
<span class="token comment">// registered name: CronVuetify</span>
<span class="token keyword">import</span> CronVuetifyPlugin <span class="token keyword">from</span> <span class="token string">&#39;@vue-js-cron/vuetify&#39;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>CronVuetifyPlugin<span class="token punctuation">)</span>

<span class="token comment">// alternatively you can also register the component yourself</span>
<span class="token comment">// https://vuejs.org/guide/components/registration.html</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CronVuetify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-js-cron/vuetify&#39;</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;CronVuetify&#39;</span><span class="token punctuation">,</span> CronVuetify<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Done! 🚀</p><br><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cron-vuetify</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:chip-props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;success&#39;, textColor: &#39;white&#39; }<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error=$event<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!-- editable cron expression --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-text-field</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pt-3<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">@update:</span>model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nextValue = $event<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value = nextValue<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cron expression<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:error-messages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">init</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;* * * * *&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>init<span class="token punctuation">,</span>
      <span class="token literal-property property">nextValue</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>init<span class="token punctuation">,</span>
      <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function j(C,N){const a=p("ExternalLinkIcon");return o(),l("div",null,[i(" Generated file "),u,d,n("ul",null,[k,v,n("li",null,[m,s(" - cron editor for "),n("a",g,[s("Ant Design Vue"),t(a)])]),n("li",null,[h,s(" - cron editor for "),n("a",b,[s("Element Plus"),t(a)])]),n("li",null,[f,s(" - cron editor for "),n("a",y,[s("Quasar"),t(a)])]),n("li",null,[s("cron-vuetify - cron editor for "),n("a",_,[s("Vuetify.js"),t(a)])])]),q,x,n("ul",null,[n("li",null,[n("a",V,[s("Vuetify"),t(a)])])]),w])}const S=e(r,[["render",j],["__file","getting-started-vuetify.html.vue"]]);export{S as default};
