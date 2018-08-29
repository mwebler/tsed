---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation Enumerable decorator
---
# Enumerable <Badge text="Decorator" type="decorator"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { Enumerable }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/core"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.1/src//core/decorators/enumerable.ts#L0-L0">/core/decorators/enumerable.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">Enumerable</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation"> = </span>true<span class="token punctuation">)</span><span class="token punctuation">:</span> Function <span class="token punctuation">{</span>
  return <span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> descriptor<span class="token punctuation"> = </span><span class="token function">descriptorOf</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propertyKey<span class="token punctuation">)</span> || <span class="token punctuation">{</span>writable<span class="token punctuation">:</span> true<span class="token punctuation">,</span> configurable<span class="token punctuation">:</span> true<span class="token punctuation">}</span><span class="token punctuation">;</span>
    descriptor.enumerable<span class="token punctuation"> = </span>value<span class="token punctuation">;</span>
    Object.<span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">(</span>target && target.prototype<span class="token punctuation">)</span> || target<span class="token punctuation">,</span> propertyKey<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>

    return descriptor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>