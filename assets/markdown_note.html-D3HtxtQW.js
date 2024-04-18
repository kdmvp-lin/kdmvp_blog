import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,f as s}from"./app-Co1PqJYe.js";const t={},i=s(`<h1 id="markdown-note" tabindex="-1"><a class="header-anchor" href="#markdown-note"><span>markdown_note</span></a></h1><p>Markdown是一种纯文本格式的标记语言。通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p><h2 id="一、标题" tabindex="-1"><a class="header-anchor" href="#一、标题"><span>一、标题</span></a></h2><p>在想要设置为标题的文字前面加#来表示 一个#是一级标题，二个#是二级标题，以此类推。支持六级标题。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、字体" tabindex="-1"><a class="header-anchor" href="#二、字体"><span>二、字体</span></a></h2><ul><li><h5 id="加粗" tabindex="-1"><a class="header-anchor" href="#加粗"><span>加粗</span></a></h5><p>要加粗的文字左右分别用两个*号包起来</p></li><li><h5 id="斜体" tabindex="-1"><a class="header-anchor" href="#斜体"><span>斜体</span></a></h5><p>要倾斜的文字左右分别用一个*号包起来</p></li><li><h5 id="斜体加粗" tabindex="-1"><a class="header-anchor" href="#斜体加粗"><span>斜体加粗</span></a></h5><p>要倾斜和加粗的文字左右分别用三个*号包起来</p></li><li><h5 id="删除线" tabindex="-1"><a class="header-anchor" href="#删除线"><span>删除线</span></a></h5><p>要加删除线的文字左右分别用两个~~号包起来</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>**这是加粗的文字**
*这是倾斜的文字*\`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、引用" tabindex="-1"><a class="header-anchor" href="#三、引用"><span>三、引用</span></a></h2><p>在引用的文字前加&gt;即可。引用也可以嵌套，如加两个&gt;&gt;三个&gt;&gt;&gt; n个...</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt;这是引用的内容
&gt;&gt;这是引用的内容
&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;这是引用的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、分割线" tabindex="-1"><a class="header-anchor" href="#四、分割线"><span>四、分割线</span></a></h2><p>三个或者三个以上的 - 或者 * 都可以。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>---
----
***
*****
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、图片" tabindex="-1"><a class="header-anchor" href="#五、图片"><span>五、图片</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span><span class="token punctuation">[</span>图片alt<span class="token punctuation">]</span><span class="token punctuation">(</span>图片地址 <span class="token string">&#39;&#39;</span>图片title<span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/
u=702257389,1274025419&amp;fm=27&amp;gp=0.jpg &quot;区块链&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、超链接" tabindex="-1"><a class="header-anchor" href="#六、超链接"><span>六、超链接</span></a></h2><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span>超链接名<span class="token punctuation">]</span><span class="token punctuation">(</span>超链接地址 <span class="token string">&quot;超链接title&quot;</span><span class="token punctuation">)</span>
title可加可不加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[简书](http://jianshu.com)
[百度](http://baidu.com)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、列表" tabindex="-1"><a class="header-anchor" href="#七、列表"><span>七、列表</span></a></h2><h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表"><span>无序列表</span></a></h3><p>语法： 无序列表用 - + * 任何一种都可以</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表"><span>有序列表</span></a></h3><p>语法： 数字加点</p><div class="language-undefined line-numbers-mode" data-ext="undefined" data-title="undefined"><pre class="language-undefined"><code>1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="列表嵌套" tabindex="-1"><a class="header-anchor" href="#列表嵌套"><span>列表嵌套</span></a></h5><p><strong>上一级和下一级之间敲三个空格即可</strong></p><h2 id="八、表格" tabindex="-1"><a class="header-anchor" href="#八、表格"><span>八、表格</span></a></h2><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>表头<span class="token operator">|</span>表头<span class="token operator">|</span>表头
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">|</span><span class="token operator">:</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">:</span><span class="token operator">|</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">:</span>
内容<span class="token operator">|</span>内容<span class="token operator">|</span>内容
内容<span class="token operator">|</span>内容<span class="token operator">|</span>内容

第二行分割表头和内容。
<span class="token operator">-</span> 有一个就行，为了对齐，多加了几个
文字默认居左
<span class="token operator">-</span>两边加：表示文字居中
<span class="token operator">-</span>右边加：表示文字居右
注：原生的语法两边都要用 <span class="token operator">|</span> 包起来。此处省略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、代码" tabindex="-1"><a class="header-anchor" href="#九、代码"><span>九、代码</span></a></h2><p>语法： 单行代码：代码之间分别用一个反引号包起来</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>    <span class="token string">\`代码内容\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token punctuation">(</span><span class="token string">\`\`</span><span class="token string">\`)
  代码...
  代码...
  代码...
(\`</span><span class="token string">\`\`</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、流程图" tabindex="-1"><a class="header-anchor" href="#十、流程图"><span>十、流程图</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token string backtick-quoted-string">\`\`</span><span class="token string backtick-quoted-string">\`flow
st=&gt;start: 开始
op=&gt;operation: My Operation
cond=&gt;condition: Yes or No?
e=&gt;end
st-&gt;op-&gt;cond
cond(yes)-&gt;e
cond(no)-&gt;op
&amp;\`</span><span class="token string backtick-quoted-string">\`\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一、空格回车制表" tabindex="-1"><a class="header-anchor" href="#十一、空格回车制表"><span>十一、空格回车制表</span></a></h2><p>要在Markdown编辑器中实现按下tab效果，只需在文档中写入：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&amp;emsp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要实现添加空格的效果只需写如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&amp;nbsp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,44),d=[i];function l(r,c){return n(),a("div",null,d)}const v=e(t,[["render",l],["__file","markdown_note.html.vue"]]),u=JSON.parse(`{"path":"/posts/markdown_note/markdown_note.html","title":"markdown_note","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","category":["笔记","计算机"],"tag":["markdown"],"description":"markdown_note Markdown是一种纯文本格式的标记语言。通过简单的标记语法，它可以使普通文本内容具有一定的格式。 一、标题 在想要设置为标题的文字前面加#来表示 一个#是一级标题，二个#是二级标题，以此类推。支持六级标题。 二、字体 加粗 要加粗的文字左右分别用两个*号包起来 斜体 要倾斜的文字左右分别用一个*号包起来 斜体加粗 要倾斜...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/markdown_note/markdown_note.html"}],["meta",{"property":"og:site_name","content":"kdmvp's\\tblog"}],["meta",{"property":"og:title","content":"markdown_note"}],["meta",{"property":"og:description","content":"markdown_note Markdown是一种纯文本格式的标记语言。通过简单的标记语法，它可以使普通文本内容具有一定的格式。 一、标题 在想要设置为标题的文字前面加#来表示 一个#是一级标题，二个#是二级标题，以此类推。支持六级标题。 二、字体 加粗 要加粗的文字左右分别用两个*号包起来 斜体 要倾斜的文字左右分别用一个*号包起来 斜体加粗 要倾斜..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-18T06:44:44.000Z"}],["meta",{"property":"article:author","content":"林伟强"}],["meta",{"property":"article:tag","content":"markdown"}],["meta",{"property":"article:modified_time","content":"2024-04-18T06:44:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"markdown_note\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-18T06:44:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"林伟强\\"}]}"]]},"headers":[{"level":2,"title":"一、标题","slug":"一、标题","link":"#一、标题","children":[]},{"level":2,"title":"二、字体","slug":"二、字体","link":"#二、字体","children":[]},{"level":2,"title":"四、分割线","slug":"四、分割线","link":"#四、分割线","children":[]},{"level":2,"title":"五、图片","slug":"五、图片","link":"#五、图片","children":[]},{"level":2,"title":"六、超链接","slug":"六、超链接","link":"#六、超链接","children":[]},{"level":2,"title":"七、列表","slug":"七、列表","link":"#七、列表","children":[{"level":3,"title":"无序列表","slug":"无序列表","link":"#无序列表","children":[]},{"level":3,"title":"有序列表","slug":"有序列表","link":"#有序列表","children":[]}]},{"level":2,"title":"八、表格","slug":"八、表格","link":"#八、表格","children":[]},{"level":2,"title":"九、代码","slug":"九、代码","link":"#九、代码","children":[]},{"level":2,"title":"十、流程图","slug":"十、流程图","link":"#十、流程图","children":[]},{"level":2,"title":"十一、空格回车制表","slug":"十一、空格回车制表","link":"#十一、空格回车制表","children":[]}],"git":{"createdTime":1713422684000,"updatedTime":1713422684000,"contributors":[{"name":"kdmvp-lin","email":"1561790129@qq.com","commits":1}]},"readingTime":{"minutes":2.68,"words":804},"filePathRelative":"posts/markdown_note/markdown_note.md","localizedDate":"2024年4月18日","excerpt":"\\n<p>Markdown是一种纯文本格式的标记语言。通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p>\\n<h2>一、标题</h2>\\n<p>在想要设置为标题的文字前面加#来表示\\n一个#是一级标题，二个#是二级标题，以此类推。支持六级标题。</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code># 这是一级标题\\n## 这是二级标题\\n### 这是三级标题\\n#### 这是四级标题\\n##### 这是五级标题\\n###### 这是六级标题\\n</code></pre></div>","autoDesc":true}`);export{v as comp,u as data};
