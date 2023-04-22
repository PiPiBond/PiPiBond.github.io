import{_ as e,X as s,Y as a,a1 as n}from"./framework-23afdf50.js";const t={},i=n(`<h2 id="macos-设置时区" tabindex="-1"><a class="header-anchor" href="#macos-设置时区" aria-hidden="true">#</a> MacOS 设置时区</h2><h3 id="查看-get" tabindex="-1"><a class="header-anchor" href="#查看-get" aria-hidden="true">#</a> 查看(Get)</h3><p>---shell sudo systemsetup -getdate # 查看日期</p><p>sudo systemsetup -gettime # 查看时间</p><p>sudo systemsetup -gettimezone # 查看时区</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
### 设置(Set)

\`\`\`shell
sudo systemsetup -settimezone &quot;Asia/Shanghai&quot; # 设置时区

sudo systemsetup -settime 10:57:19 # 设置时间

sudo systemsetup -setdate 04/22/23 # 设置日期
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu-设置时区" tabindex="-1"><a class="header-anchor" href="#ubuntu-设置时区" aria-hidden="true">#</a> Ubuntu 设置时区</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>timedatectl <span class="token comment">#查看时间及时区</span>
timedatectl <span class="token parameter variable">-h</span> <span class="token comment">#查看帮助</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[i];function l(c,r){return s(),a("div",null,d)}const m=e(t,[["render",l],["__file","Timezone.html.vue"]]);export{m as default};
