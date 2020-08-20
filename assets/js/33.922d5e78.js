(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{384:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),a("h2",{attrs:{id:"_1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),a("h4",{attrs:{id:"_1-http-的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-的问题"}},[t._v("#")]),t._v(" 1) HTTP 的问题")]),t._v(" "),a("ul",[a("li",[t._v("认证网站\n假如你正在访问支付宝，怎样确定你正在访问的是阿里巴巴提供的支付宝而不是假冒伪劣的钓鱼网站呢？")]),t._v(" "),a("li",[t._v("数据安全\nHTTP协议以明文方式发送内容，不提供任何方式的数据加密，如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息，因此，HTTP协议不适合传输一些敏感信息，比如：信用卡号、密码等支付信息。")])]),t._v(" "),a("p",[t._v("为了解决上面的问题，HTTPS出场了 👏👏👏")]),t._v(" "),a("h4",{attrs:{id:"_2-https-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-https-是什么"}},[t._v("#")]),t._v(" 2) HTTPS 是什么")]),t._v(" "),a("p",[t._v("传输层安全性（TLS）是HTTPS的官方名称，你可能听说过它称为SSL（安全套接字层），SSL是已弃用的名称，TLS是一种加密协议，可通过计算机网络提供安全通信。")]),t._v(" "),a("p",[t._v("HTTPS是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL或TLS，HTTPS的安全基础是SSL/TLS。")]),t._v(" "),a("p",[t._v("HTTPS协议的主要作用有两个：一种是建立一个信息安全通道，来保证数据传输的安全；另一种就是认证网站的真实性。")]),t._v(" "),a("h2",{attrs:{id:"_2-工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-工作原理"}},[t._v("#")]),t._v(" 2. 工作原理")]),t._v(" "),a("h4",{attrs:{id:"_1-主体对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-主体对象"}},[t._v("#")]),t._v(" 1) 主体对象")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("客户端。通常是浏览器(Chrome、IE、FireFox等)，也可以自己编写的各种语言的客户端程序。")])]),t._v(" "),a("li",[a("p",[t._v("服务端。一般指支持Https的网站，比如github、支付宝。")])]),t._v(" "),a("li",[a("p",[t._v("CA(Certificate Authorities)机构。Https证书签发和管理机构，比如Symantec、Comodo、GoDaddy、GlobalSign。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/26/2vJl74IhwHiasWT.png",alt:"https主体"}})])])]),t._v(" "),a("h4",{attrs:{id:"_2-工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-工作流程"}},[t._v("#")]),t._v(" 2) 工作流程")]),t._v(" "),a("p",[t._v("客户端在使用HTTPS方式与Web服务器通信时有以下几个步骤，如图所示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/26/t8dKfR6CbrOMYBS.png",alt:"HTTPS工作原理"}})]),t._v(" "),a("p",[t._v("工作流程，基本分为三个阶段:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("认证服务器。浏览器内置一个受信任的CA机构列表，并保存了这些CA机构的证书。第一阶段服务器会提供经CA机构认证颁发的服务器证书，如果认证该服务器证书的CA机构，存在于浏览器的受信任CA机构列表中，并且服务器证书中的信息与当前正在访问的网站（域名等）一致，那么浏览器就认为服务端是可信的，并从服务器证书中取得服务器公钥，用于后续流程。否则，浏览器将提示用户，根据用户的选择，决定是否继续。当然，我们可以管理这个受信任CA机构列表，添加我们想要信任的CA机构，或者移除我们不信任的CA机构。")])]),t._v(" "),a("li",[a("p",[t._v("协商会话密钥。客户端在认证完服务器，获得服务器的公钥之后，利用该公钥与服务器进行加密通信，协商出两个会话密钥，分别是用于加密客户端往服务端发送数据的客户端会话密钥，用于加密服务端往客户端发送数据的服务端会话密钥。在已有服务器公钥，可以加密通讯的前提下，还要协商两个对称密钥的原因，是因为非对称加密相对复杂度更高，在数据传输过程中，使用对称加密，可以节省计算资源。另外，会话密钥是随机生成，每次协商都会有不一样的结果，所以安全性也比较高。")])]),t._v(" "),a("li",[a("p",[t._v("加密通讯。此时客户端服务器双方都有了本次通讯的会话密钥，之后传输的所有Http数据，都通过会话密钥加密。这样网路上的其它用户，将很难窃取和篡改客户端和服务端之间传输的数据，从而保证了数据的私密性和完整性。")])])]),t._v(" "),a("p",[a("em",[t._v("Https就是Http跑在SSL或者TLS上，所以本文讨论的原理和流程其实是SSL和TLS的流程，对于其它使用SSL或者TLS的应用层协议，本文内容一样有效。")])]),t._v(" "),a("h2",{attrs:{id:"_3-现状分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-现状分析"}},[t._v("#")]),t._v(" 3. 现状分析")]),t._v(" "),a("h4",{attrs:{id:"_1-优缺点分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-优缺点分析"}},[t._v("#")]),t._v(" 1) 优缺点分析")]),t._v(" "),a("p",[t._v("搞明白了Https的工作原理后，其优缺点就很容易理解了。")]),t._v(" "),a("p",[a("strong",[t._v("优点")])]),t._v(" "),a("p",[t._v("尽管HTTPS并非绝对安全，掌握根证书的机构、掌握加密算法的组织同样可以进行中间人形式的攻击，但HTTPS仍是现行架构下最安全的解决方案，并且解决了网站认证的问题，这两点也正是我们在最开始提出的问题。另外，Google曾表示“比起同等HTTP网站，采用HTTPS加密的网站在搜索结果中的排名将会更高”，因此采用HTTPS的网站更有利于SEO.")]),t._v(" "),a("p",[a("strong",[t._v("缺点")])]),t._v(" "),a("ul",[a("li",[t._v("HTTPS协议握手阶段比较费时，没有HTTP高效，且会使页面的加载时间延长近功耗增加；")]),t._v(" "),a("li",[t._v("SSL证书收费")]),t._v(" "),a("li",[t._v("SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名。")])]),t._v(" "),a("h4",{attrs:{id:"_2-现状分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-现状分析"}},[t._v("#")]),t._v(" 2) 现状分析")]),t._v(" "),a("p",[t._v("了解了HTTPS的优缺点，我们再来看下其发展现状。")]),t._v(" "),a("p",[t._v("一般来说，很多公司都会直接购买由GlobalSign、GeoTrust、Verisign等全球公认的数字证书颁发机构颁发的SSL证书。购买？没错，大多数SSL证书都需要按年付费使用，而且价格不菲。过去HTTPS被认为比较低效。这也是前面提到的HTTPS的主要缺点。")]),t._v(" "),a("p",[t._v("但随着技术的发展，现在机器变得更快，已经解决了性能问题，Let's Encrypt等机构提供免费TLS证书，这两项发展改变了游戏，并使TLS成为主流。")]),t._v(" "),a("h4",{attrs:{id:"_3-免费证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-免费证书"}},[t._v("#")]),t._v(" 3) 免费证书")]),t._v(" "),a("p",[t._v("Let's Encrypt 是一个免费、开放，自动化的证书颁发机构，由 ISRG（Internet Security Research Group）运作。ISRG 是一个关注网络安全的公益组织，其赞助商包括 Mozilla、Akamai、Cisco、EFF、Chrome、IdenTrust、Facebook等公司。ISRG 的目的是消除资金和技术领域的障碍，全面推进网站从HTTP到HTTPS过度的进程。")]),t._v(" "),a("p",[t._v("目前，包括FireFox、Chrome在内的主流浏览器都支持Let's Encrypt证书，已经有不少用户在真实项目中使用Let's Encrypt证书。Let's Encrypt免费SSL证书的有效期是90天，到期后可以再续期，这样也就可以变相长期使用了。")]),t._v(" "),a("h2",{attrs:{id:"_4-免费升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-免费升级"}},[t._v("#")]),t._v(" 4. 免费升级")]),t._v(" "),a("p",[t._v("一般的HTTPS使用流程如下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/26/H5OhIoYkGQE3Wvf.png",alt:"HTTPS使用流程"}})]),t._v(" "),a("blockquote",[a("p",[t._v("Let’s Encrypt TLS 免费证书使用")])]),t._v(" "),a("p",[t._v("Let’s Encrypt TLS证书可以自动化生成和更新，由于他们是免费的，所以没有理由不去做。相信大家也更关注免费证书如何使用，不多说，这就搞起来 😊😊😊")]),t._v(" "),a("p",[a("em",[t._v("以下案例使用 "),a("code",[t._v("Ubuntu 18.10/nginx 1.15.5")]),t._v(" 环境。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("根据"),a("a",{attrs:{href:"https://letsencrypt.org/getting-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let’s Encrypt 官网"),a("OutboundLink")],1),t._v("推荐，我们选择使用"),a("a",{attrs:{href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Certbot ACME client"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("选择对应的软件和操作系统环境")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/26/S8XhGaJvfgBOlxz.jpg",alt:"Certbot官网"}})])]),t._v(" "),a("li",[a("p",[t._v("参照网站给出的命令进行安装/配置/更新 证书")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/26/NAxD6MGTXW9KbUz.jpg",alt:"证书安装配置"}})])]),t._v(" "),a("li",[a("p",[t._v("完成以上配置后，访问你的网站，不出意外已经升级到https了👍")])])]),t._v(" "),a("p",[t._v("自动配置完成之后的Nginx的配置文件形如：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    server_name   localhost "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("104.199")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("230.207")]),t._v(" bet518.win www.bet518.win;\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_pass         localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v(";\n        proxy_http_version "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(";\n        proxy_set_header   Upgrade $http_upgrade;\n        proxy_set_header   Connection keep-alive;\n        proxy_set_header   Host $host;\n        proxy_cache_bypass $http_upgrade;\n        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header   X-Forwarded-Proto $scheme;\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl; # managed by Certbot\n    ssl_certificate /etc/letsencrypt/live/bet518.win/fullchain.pem; # managed by Certbot\n    ssl_certificate_key /etc/letsencrypt/live/bet518.win/privkey.pem; # managed by Certbot\n    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot\n    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    if ($host = www.bet518.win) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        return "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//$host$request_uri;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" # managed by Certbot\n\n\n    if ($host = bet518.win) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        return "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//$host$request_uri;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" # managed by Certbot\n\n    listen        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("; \n    server_name   localhost "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("104.199")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("230.207")]),t._v(" ccstudio.org www.ccstudio.org;\n    return "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v("; # managed by Certbot\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br")])]),a("h2",{attrs:{id:"_5-github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-github-pages"}},[t._v("#")]),t._v(" 5. GitHub Pages")]),t._v(" "),a("p",[t._v("2018年5月1日，GitHub Pages 官方宣布 GitHub Pages 对自定义域名支持 HTTPS。\nhttps://blog.github.com/2018-05-01-github-pages-custom-domains-https/")]),t._v(" "),a("p",[t._v("什么，你问我为什么要GitHub Page使用HTTPS？简单来说，除了 HTTPS 自身带来的加密、防劫持等特性外，Github 官方基于 HTTPS 配合 CND，使得网站的加载速度更快，还能提供额外的防御 DDoS 攻击的保护。")]),t._v(" "),a("p",[t._v("GitHub官方文档已经说明了如何开启HTTPS。英文不熟悉的小伙伴看我下面的简单粗暴的讲解即可。")]),t._v(" "),a("h4",{attrs:{id:"_1）绑定域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1）绑定域名"}},[t._v("#")]),t._v(" 1）绑定域名")]),t._v(" "),a("p",[t._v("注册域名不多说。如何使用GitHub Pages中创建博客也不多说。废话完了，下面开始正题，以博主自己的账户为例(GitHub用户名为"),a("code",[t._v("colin-chang")]),t._v(")")]),t._v(" "),a("ul",[a("li",[t._v("解析域名")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/27/AYqRwvrJu6DoEFm.jpg",alt:"解析域名"}})]),t._v(" "),a("ul",[a("li",[t._v("Github Pages 项目配置\n"),a("ul",[a("li",[t._v("打开 username.github.io 项目设置,并找到 "),a("code",[t._v("GitHub Pages")]),t._v(" 模块的"),a("code",[t._v("Custom domain")]),t._v("填写自己的域名并点击 Save")])])]),t._v(" "),a("li",[t._v("在项目根目录新建一个名为 “CNAME” 的文件，内容为自己的域名")])]),t._v(" "),a("h4",{attrs:{id:"_2）开启https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2）开启https"}},[t._v("#")]),t._v(" 2）开启HTTPS")]),t._v(" "),a("p",[t._v("找到如下图所示的"),a("code",[t._v("Enforce HTTPS")]),t._v("选项并勾选。然后访问下自己的域名，不出意外的话，已经是https了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/26/yjJwiaeBrEOxoYd.jpg",alt:"解析域名"}})]),t._v(" "),a("p",[t._v("那么如果如果之前已经开启了自定义域名， enforce HTTPS 无法勾选且怎么办？往下看...")]),t._v(" "),a("ol",[a("li",[t._v("把 Custom domain 中的值清空，并点击 Save 进行保存；")]),t._v(" "),a("li",[t._v("在 Custom domain 中的填入之前清空的值，填入后点击保存；")]),t._v(" "),a("li",[t._v("刷新项目设置页，如果 enforce HTTPS 可勾选，勾选即可；")]),t._v(" "),a("li",[t._v("如果 enforce HTTPS 不可勾选，并且提示 Not yet available for your site because the certificate has not finished being issued” ，说明证书尚未申请完成，等待一天即可。")]),t._v(" "),a("li",[t._v("完成以上步骤重新访问自己的域名，享受https吧开始")])]),t._v(" "),a("p",[a("small",[t._v("注意，如果使用仍然存在问题，请检查自己的网站引用的资源文件有没有使用了 http 协议，请替换成相应的 https 资源。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);