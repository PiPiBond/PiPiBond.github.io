import{_ as s,X as n,Y as a,a1 as e}from"./framework-23afdf50.js";const i="/assets/1681797111532-79229bde.png",t="/assets/1681797320946-3eb73bc4.png",r="/assets/1681796015056-8324d1fb.png",l="/assets/1681796097078-b84f0b11.png",d="/assets/1681796133653-8ce3bded.png",o="/assets/1681796178388-1357be90.png",p="/assets/1681797476706-aa454714.png",c="/assets/1681796546260-7750f6bd.png",g="/assets/1681796605852-4a73ab6a.png",m="/assets/1681796738163-1a18c393.png",u={},v=e('<h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h2><p><strong>本指南环境为 N1 软路由 OpenWrt 系统</strong></p><p><strong>确保关闭其它 DNS 插件</strong></p><p>检查所有配置，并且 <strong>保存&amp;应用</strong></p><p>例：Turbo ACC 网络加速设置</p><p>关闭 DNS 缓存</p><p><img src="'+i+'" alt="" loading="lazy"></p><p><strong>查看左侧菜单网络下的 DHCP/DNS</strong></p><p><img src="'+t+'" alt="DNS 转发已经自动设置为 Adguard Home 监听端口 (本人的 Adguard Home 监听端口为 1745)" loading="lazy"></p><h2 id="openclash-配置" tabindex="-1"><a class="header-anchor" href="#openclash-配置" aria-hidden="true">#</a> OpenClash 配置</h2><p><img src="'+r+'" alt="Redir-Host （TUN 模式）" loading="lazy"></p><p><img src="'+l+'" alt="旁路网关（旁路由）兼容 [✔️]" loading="lazy"></p><p><strong>DNS 设置</strong></p><ul><li>*<strong>本地 DNS 劫持：停用</strong></li><li>*<strong>自定义上游 DNS 服务器 [✔️]</strong></li><li><strong>追加上游 DNS [✔️]</strong></li><li><strong>追加默认 DNS [✔️]</strong></li></ul><p><img src="'+d+'" alt="" loading="lazy"></p><p><img src="'+o+'" alt="" loading="lazy"></p><h2 id="adguard-home-配置" tabindex="-1"><a class="header-anchor" href="#adguard-home-配置" aria-hidden="true">#</a> Adguard Home 配置</h2><p><img src="'+p+`" alt="" loading="lazy"></p><p><strong>设置上游 DNS 服务器为 OpenClash 的 DNS 监听端口：7874（默认）</strong></p><p>---http 127.0.0.1:7874</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
 **[✔️]并行请求**

![](./../.vuepress/public/assets/images/AdguardHome/1681796258998.png)

**Bootstrap DNS 服务器设置几个国内 DNS**

\`\`\`http
114.114.114.114
114.114.115.115
223.5.5.5
223.6.6.6
180.76.76.76
4.2.2.2
4.2.2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt="" loading="lazy"></p><p>可参考：DNS 服务配置</p><p><img src="'+g+'" alt="" loading="lazy"></p><p><strong>常规设置</strong></p><p><strong>[✔️]使用过滤器和Hoss文件以拦截指定域名</strong></p><p><img src="'+m+`" alt="" loading="lazy"></p><p><strong>如果需要过滤广告=&gt;DNS黑名单</strong></p><p>可以添加以下规则并勾选</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># halflife合并乘风</span>
https://cdn.jsdelivr.net/gh/sbwml/halflife-list@master/ad-pc.txt
<span class="token comment"># anti-AD</span>
https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-easylist.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),b=[v];function h(_,D){return n(),a("div",null,b)}const f=s(u,[["render",h],["__file","AdguardHome.html.vue"]]);export{f as default};
