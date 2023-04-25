const d=(o,a)=>{const i=o.toLowerCase(),e=a.toLowerCase(),s=[];let n=0,l=0;const c=(t,p=!1)=>{let r="";l===0?r=t.length>20?`… ${t.slice(-20)}`:t:p?r=t.length+l>100?`${t.slice(0,100-l)}… `:t:r=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,r&&s.push(r),l+=r.length,p||(s.push(["strong",a]),l+=a.length,l>=100&&s.push(" …"))};let h=i.indexOf(e,n);if(h===-1)return null;for(;h>=0;){const t=h+e.length;if(c(o.slice(n,h)),n=t,l>100)break;h=i.indexOf(e,n)}return l<100&&c(o.slice(n),!0),s},g=Object.entries,y=Object.keys,f=o=>o.reduce((a,{type:i})=>a+(i==="title"?50:i==="heading"?20:i==="custom"?10:1),0),$=(o,a)=>{var i;const e={};for(const[s,n]of g(a)){const l=((i=a[s.replace(/\/[^\\]*$/,"")])==null?void 0:i.title)||"",c=`${l?`${l} > `:""}${n.title}`,h=d(n.title,o);h&&(e[c]=[...e[c]||[],{type:"title",path:s,display:h}]),n.customFields&&g(n.customFields).forEach(([t,p])=>{p.forEach(r=>{const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"custom",path:s,index:t,display:u}])})});for(const t of n.contents){const p=d(t.header,o);p&&(e[c]=[...e[c]||[],{type:"heading",path:s+(t.slug?`#${t.slug}`:""),display:p}]);for(const r of t.contents){const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"content",header:t.header,path:s+(t.slug?`#${t.slug}`:""),display:u}])}}}return y(e).sort((s,n)=>f(e[s])-f(e[n])).map(s=>({title:s,contents:e[s]}))},m=JSON.parse("{\"/\":{\"/intro.html\":{\"title\":\"个人介绍\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"这个人很懒，什么都没有留下。\"]}]},\"/code-learning/\":{\"title\":\"编程学习\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"Nginx 开启 https\"]}]},\"/learning-docs/\":{\"title\":\"系列文档（知识点记录）\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"MySQL 安装\"]}]},\"/software-guide/\":{\"title\":\"杂七杂八的记录\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"ChatGPT 使用指南\",\"MacOS 手动删除允许在后台列表\",\"OpenWrt 配置 AdguardHome 搭配 OpenClash\",\"Windows 10 右键运行 Terminal 终端\"]}]},\"/code-learning/nginx/https.html\":{\"title\":\"配置Https\",\"contents\":[{\"header\":\"描述\",\"slug\":\"描述\",\"contents\":[\"HTTPS (Hypertext Transfer Protocol Secure)是 HTTP 的安全版本。它使用 SSL/TLS (安全套接字层/传输层安全)对 web 服务器和客户端之间传输的数据进行加密，使攻击者更难以拦截、读取或修改数据。HTTPS 广泛用于互联网上的安全通信，特别是在传输密码、信用卡详细信息或个人信息等敏感信息时。\"]},{\"header\":\"本地实验\",\"slug\":\"本地实验\",\"contents\":[]},{\"header\":\"环境准备\",\"slug\":\"环境准备\",\"contents\":[\"Windows 10+\",\"Nginx\",\"keytool（Windows 自带）\",\"openssl（Git 自带）\",\"JDK（实验环境：JDK 11）\",\"在 Nginx 根目录下打开终端\"]},{\"header\":\"生成 JKS 格式密钥库\",\"slug\":\"生成-jks-格式密钥库\",\"contents\":[\"打开 Windows 终端\",\"在终端键入\",\"替换 <> 里的内容，并回车\"]},{\"header\":\"将 JKS 转为 P 12 密钥库\",\"slug\":\"将-jks-转为-p-12-密钥库\",\"contents\":[\"在终端键入\",\"替换 <> 里的内容，并回车\"]},{\"header\":\"生成证书\",\"slug\":\"生成证书\",\"contents\":[\"注意替换为自己的名称\",\"证书生成后移动到 nginx 根目录的 conf 文件夹下\"]},{\"header\":\"修改 Nginx 内容\",\"slug\":\"修改-nginx-内容\",\"contents\":[\"Windows 终端输入命令重新加载\"]},{\"header\":\"服务器部署\",\"slug\":\"服务器部署\",\"contents\":[]},{\"header\":\"环境准备\",\"slug\":\"环境准备-1\",\"contents\":[\"有一台服务器\",\"域名已解析到服务器 IP\"]},{\"header\":\"免费 SSL 证书机构\",\"slug\":\"免费-ssl-证书机构\",\"contents\":[\"Certbot\",\"Let's Encrypt\",\"提供以上两个申请 SSL 的机构，具体使用方法可以自行使用搜索引擎。\"]}]},\"/learning-docs/mysql/install.html\":{\"title\":\"1、MySQL8.0 安装\",\"contents\":[{\"header\":\"准备\",\"slug\":\"准备\",\"contents\":[\"MySQL 下载地址\"]},{\"header\":\"Windows 安装\",\"slug\":\"windows-安装\",\"contents\":[\"下载时选择不登录直接下载，下面将展示如何安装绿色版 (MySQL Community Server) 和安装版 (MySQL Installer for Windows)\"]},{\"header\":\"绿色版 (MySQL Community Server)\",\"slug\":\"绿色版-mysql-community-server\",\"contents\":[]},{\"header\":\"安装 MySQL\",\"slug\":\"安装-mysql\",\"contents\":[\"绿色版下载的是一个压缩包，没有 图形界面\",\"解压后，文件结构如下\",\"安装完成后根目录应该是下图所示\",\"需要自己在 MySQL 的根目录 创建 一个 my.ini 的文件，基本内容如下，此配置基本满足学习需要。\",\"以管理员身份打开终端，进入 bin 目录，执行命令。\",\"安装 MySQL 服务\",\"启动服务\",\"进入 MySQL 命令行\",\"修改密码\"]},{\"header\":\"删除 MySQL\",\"slug\":\"删除-mysql\",\"contents\":[\"进入 MySQL 的根目录上一层 Environment，选中 mysql-8.x.xx，按住键盘 Shift + Del，回车。\"]},{\"header\":\"安装版 (MySQL Installer for Windows)\",\"slug\":\"安装版-mysql-installer-for-windows\",\"contents\":[]},{\"header\":\"安装 MySQL\",\"slug\":\"安装-mysql-1\",\"contents\":[\"双击下载好的 .msi 文件，以管理员运行，选择 Custom 安装\",\"将 MySQL 服务选择到下载列表，单击右边的 MySQL Server 8.0.32 - X64 ，出现蓝色字体 Advanced Options ，单击。\",\"将数据目录修改为 MySQL 的根目录下，点击 OK。\",\"下一步直到如图所示\",\"选择修改端口 Port，或者保持默认。\",\"点击下一步直到提示输入密码界面，输入两次密码。\",\"修改 MySQL 服务名或保持默认\",\"连续点击下一步，安装完成。\"]},{\"header\":\"删除 MySQL\",\"slug\":\"删除-mysql-1\",\"contents\":[\"双击 .msi 安装文件\",\"勾选当前卸载项\",\"勾选删除数据文件\"]}]},\"/software-guide/internet-surfing/chatgpt.html\":{\"title\":\"ChatGPT使用指南\",\"contents\":[{\"header\":\"概述\",\"slug\":\"概述\",\"contents\":[\"ChatGPT 是一个大型的语言模型，使用了 OpenAI 开发的 GPT-3.5 架构进行训练。它可以通过文本交互与用户进行对话，具有广泛的知识和语言理解能力。ChatGPT 是人工智能技术的一种应用，可以用于多种任务，如问答、自然语言处理、文本生成等。\",\"注册方法 1\",\"注册方法 2\",\"新账号注册成功后，官方会赠送 $18 的 API token 使用余额\"]},{\"header\":\"工具\",\"slug\":\"工具\",\"contents\":[\"ChatBoxopen：开源的 ChatGPT API (OpenAI API) 桌面客户端，Prompt 的调试与管理工具，支持 Windows、Mac 和 Linux\",\"lenxc/ChatGPT：支持导出 ChatGPT 的历史，生成图片、PDF、分享连接的开源客户端\",\"Playground：OpenAI 官方 API 调用工具\",\"ChatGPT-API Demo：第三方 API 调用工具\",\"KeepChatGPT：油猴脚本，一键解决弹出红框错误，不再需要刷新网页\"]},{\"header\":\"Prompts\",\"slug\":\"prompts\",\"contents\":[\"ChatGPT快捷提问\"]}]},\"/software-guide/internet-surfing/wireless-route/adguard.html\":{\"title\":\"OpenWrt 配置 Adguard Home 搭配 OpenClash\",\"contents\":[{\"header\":\"概述\",\"slug\":\"概述\",\"contents\":[]},{\"header\":\"为什么使用 Adguard Home？\",\"slug\":\"为什么使用-adguard-home\",\"contents\":[\"广告过滤：AdGuard Home 能够屏蔽大量的广告，包括网页广告、视频广告、社交媒体广告等，能够提升网络浏览的体验。\",\"隐私保护：AdGuard Home 可以阻止许多跟踪器，保护用户的隐私，减少个人信息被泄露的风险。\",\"家庭网络保护：AdGuard Home 可以在家庭网络中设置家长控制，阻止成人内容的访问，保护未成年人的安全。\",\"自定义规则：AdGuard Home 支持用户自定义过滤规则，能够根据个人需要定制不同的过滤策略。\",\"跨平台支持：AdGuard Home 支持多个操作系统，包括 Windows、MacOS、Linux 等，可以在不同的设备上使用。\"]},{\"header\":\"为什么使用 OpenClash？\",\"slug\":\"为什么使用-openclash\",\"contents\":[\"多协议支持：OpenClash 支持多种协议，包括 Shadowsocks、VMess、Trojan等，可以满足用户的不同需求。\",\"自定义规则：OpenClash 支持用户自定义规则，包括黑名单、白名单、DNS 规则等，能够根据个人需要定制不同的过滤策略。\",\"界面友好：OpenClash 的用户界面简洁明了，易于使用，能够方便地管理节点和规则。\",\"免费开源：OpenClash 是一款免费开源软件，用户可以自由下载、使用、修改和分享。\",\"上网需求：DDDD。\"]},{\"header\":\"提示：\",\"slug\":\"提示\",\"contents\":[\"本指南环境为 N1 软路由 OpenWrt 系统\",\"N1: 斐讯 N1 电视盒子，N1 作为软路由运行在局域网中。\",\"OpenWrt: 基于 Linux 操作系统，专为嵌入式设备和路由器而设计。\"]},{\"header\":\"注意事项\",\"slug\":\"注意事项\",\"contents\":[\"确保关闭其它 DNS 插件\",\"例：Turbo ACC 网络加速设置\",\"关闭 DNS 缓存 [ ]\",\"改动配置后记得点击页面底部的 保存&应用\"]},{\"header\":\"配置步骤\",\"slug\":\"配置步骤\",\"contents\":[]},{\"header\":\"OpenClash 配置\",\"slug\":\"openclash-配置\",\"contents\":[\"Redir-Host （TUN 模式） \",\"旁路网关（旁路由）兼容 [✔️]\",\"DNS 设置\",\"本地 DNS 劫持：停用\",\"*自定义上游 DNS 服务器 [✔️]\",\"追加上游 DNS [✔️]\",\"追加默认 DNS [✔️]\"]},{\"header\":\"Adguard Home 配置\",\"slug\":\"adguard-home-配置\",\"contents\":[\"设置唯一的上游 DNS 服务器为 OpenClash 的 DNS 监听端口：7874（默认）\",\"[✔️]并行请求\",\"Bootstrap DNS 服务器设置几个国内或者本地的 DNS\",\"常规设置\",\"[✔️]使用过滤器和Hoss文件以拦截指定域名\",\"过滤广告 => DNS 黑名单\",\"添加以下规则并勾选以启用\",\"查看左侧菜单网络下的 DHCP/DNS 选项中 DNS 转发 是否为 Adguard Home 监听端口（作者的监听端口为 1745）\"]}]},\"/software-guide/system/mac/remove-background.html\":{\"title\":\"将 MacOS 已删除的程序在登录项中的允许在后台列表中去除\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"方法一：在终端中查看允许在后台列表应用的路径\",\"方法二：输出到桌面\"]}]},\"/software-guide/system/windows/terminal.html\":{\"title\":\"Windows 10 添加 Terminal 右键菜单\",\"contents\":[{\"header\":\"准备工作\",\"slug\":\"准备工作\",\"contents\":[\"一台 Windows 10 系统的电脑\",\"已在微软应用(Microsoft Store)商店 安装 Windows Terminal\"]},{\"header\":\"编写注册表命令添加\",\"slug\":\"编写注册表命令添加\",\"contents\":[\"新建 .reg 后缀的文件，填写内容，注意 {用户名} 需要填写自己电脑当前账号的用户名\",\"如果需要管理员运行终端，也可以填写以下内容\",\"保存并双击运行\"]},{\"header\":\"在注册表中手动添加\",\"slug\":\"在注册表中手动添加\",\"contents\":[]},{\"header\":\"当前用户打开终端\",\"slug\":\"当前用户打开终端\",\"contents\":[\"键盘按住 Windows 图标 + R 键\",\"输入regedit，点击确定\",\"在地址栏输入HKEY_CLASSES_ROOT\\\\Directory\\\\background\\\\shell或手动查找HKEY_CLASSES_ROOT -> Directory -> background -> shell\",\"右键shell -> 新建 项 -> 输入 wt\",\"右键wt -> 新建 字符串值(S) -> 输入 Icon，设置 Terminal 图标\",\"双击 Icon 并输入C:\\\\Users\\\\{用户名}\\\\AppData\\\\Local\\\\Microsoft\\\\WindowsApps\\\\terminal.ico，{用户名}替换为电脑当前的用户名\",\"修改(默认)项为：在终端中打开\",\"右键左侧 wt 新建 项 -> 输入 command，设置启动路径\",\"定位到 command 修改(默认)项为：C:\\\\Users\\\\{用户名}\\\\AppData\\\\Local\\\\Microsoft\\\\WindowsApps\\\\wt.exe，{用户名}替换为电脑当前的用户名\",\"添加完成，右键桌面测试是否添加成功\"]},{\"header\":\"管理员打开终端\",\"slug\":\"管理员打开终端\",\"contents\":[\"步骤与上一节一样\",\"需要注意\",\"在第4步中，wt替换为runas\",\"在第7步中，在终端中打开替换为在终端中打开(管理员)\"]}]}}}");self.onmessage=({data:o})=>{self.postMessage($(o.query,m[o.routeLocale]))};
//# sourceMappingURL=original.js.map
