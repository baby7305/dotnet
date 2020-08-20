(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{385:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),a("p",[t._v("认证授权是两个过程，简单说认证是告诉服务器你是谁，授权是服务器告诉你你可以做什么。关于服务端管理用户授权有很多的权限管理方式，这里我们就不做阐述了。这里我们主要看用户认证。")]),t._v(" "),a("p",[t._v("目前常用的认证方式有"),a("code",[t._v("Session")]),t._v("和"),a("code",[t._v("JWT")]),t._v("两种，下面我们就简单分析下两者的基本工作原理。")]),t._v(" "),a("h2",{attrs:{id:"_1-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-session"}},[t._v("#")]),t._v(" 1. Session")]),t._v(" "),a("p",[t._v("前后端分离通过"),a("code",[t._v("Restful API")]),t._v("进行数据交互时，验证用户的登录信息及权限最传统的方式，前端提交用户名密码，后端验证通过后将用户信息记录到称为"),a("code",[t._v("Session")]),t._v("的内存区域中,"),a("code",[t._v("Session")]),t._v("是一个"),a("code",[t._v("key-value")]),t._v("集合，"),a("code",[t._v("key")]),t._v("一般名称为"),a("code",[t._v("session_id")]),t._v("唯一标识用户的一次会话，服务端会把"),a("code",[t._v("session_id")]),t._v("记录到"),a("code",[t._v("Cookie")]),t._v("中并返回给客户端，之后客户端每次请求都会带上这个"),a("code",[t._v("session_id")]),t._v("，服务端则可以根据"),a("code",[t._v("session_id")]),t._v("值来识别用户。")]),t._v(" "),a("p",[t._v("Session机制使用简单但也存在一些问题。")]),t._v(" "),a("ul",[a("li",[t._v("内存开销。每个用户经过我们的应用认证之后，我们的应用都要在服务端做一次记录，以方便用户下次请求的鉴别，通常而言"),a("code",[t._v("Session")]),t._v("都是保存在内存中，而随着认证用户的增多，服务端的开销会明显增大。")]),t._v(" "),a("li",[t._v("扩展性。用户认证之后，服务端做认证记录，如果认证的记录被保存在内存中的话，这意味着用户下次请求还必须要请求在这台服务器上,这样才能拿到授权的资源，这样在分布式的应用上，相应的限制了负载均衡器的能力。但是可以使用Redis等进程外"),a("code",[t._v("Session")]),t._v("来解决。")]),t._v(" "),a("li",[t._v("安全性。如果我们的页面出现了"),a("code",[t._v("XSS")]),t._v("漏洞，由于 "),a("code",[t._v("Cookie")]),t._v("可以被"),a("code",[t._v("JavaScript")]),t._v("读取导致"),a("code",[t._v("session_id")]),t._v("泄露，而作为后端识别用户的标识，"),a("code",[t._v("Cookie")]),t._v("的泄露意味着用户信息不再安全。设置 "),a("code",[t._v("httpOnly")]),t._v("后"),a("code",[t._v("Cookie")]),t._v("将不能被 JS 读取，那么"),a("code",[t._v("XSS")]),t._v("注入的问题也基本不用担心了。浏览器会自动的把它加在请求的"),a("code",[t._v("header")]),t._v("当中，设置"),a("code",[t._v("secure")]),t._v("的话，"),a("code",[t._v("Cookie")]),t._v("就只允许通过"),a("code",[t._v("HTTPS")]),t._v("传输。"),a("code",[t._v("secure")]),t._v("选项可以过滤掉一些使用"),a("code",[t._v("HTTP")]),t._v("协议的"),a("code",[t._v("XSS")]),t._v("注入，但并不能完全阻止，二期还存在"),a("code",[t._v("XSRF")]),t._v("风险。当你浏览器开着这个页面的时候，另一个页面可以很容易的跨站请求这个页面的内容。因为"),a("code",[t._v("Cookie")]),t._v("默认被发了出去。")])]),t._v(" "),a("h2",{attrs:{id:"_2-jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-jwt"}},[t._v("#")]),t._v(" 2. JWT")]),t._v(" "),a("p",[a("code",[t._v("JWT")]),t._v("(JSON WEB TOKEN)是一个开放标准(RFC 7519)方法实现，用于通信双方之间安全认证。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/26/sQbX5qamjrDlGSu.png",alt:"JWT验证流程图"}})]),t._v(" "),a("ol",[a("li",[t._v("前端通过Web表单将自己的用户名和密码发送到后端的接口。这一过程一般是一个"),a("code",[t._v("HTTP POST")]),t._v("请求。建议的方式是通过SSL加密的传输（"),a("code",[t._v("https")]),t._v("协议），从而避免敏感信息被嗅探。")]),t._v(" "),a("li",[t._v("服务端验证通过后将一些简单非敏感信息如"),a("code",[t._v("UserId")]),t._v("、"),a("code",[t._v("UserRole")]),t._v("等写到一个"),a("code",[t._v("Json")]),t._v("对象中并使用密钥签名后得到Token返回给客户端。")]),t._v(" "),a("li",[t._v("前端可以将返回的"),a("code",[t._v("JWT Token")]),t._v("保存在"),a("code",[t._v("sessionStorage")]),t._v("上，退出登录时前端删除保存的JWT即可。")]),t._v(" "),a("li",[t._v("前端每次请求将"),a("code",[t._v("JWT")]),t._v("放入"),a("code",[t._v("HTTP Header")]),t._v("中的Authorization位。(解决XSS和XSRF问题)")]),t._v(" "),a("li",[t._v("后端验证JWT的有效性。例如，检查签名是否正确；检查Token是否过期；检查Token的接收方是否是自己（可选）。")]),t._v(" "),a("li",[t._v("验证通过后后端使用JWT中包含的用户信息进行其他逻辑操作，返回相应结果。")])]),t._v(" "),a("p",[t._v("优势：")]),t._v(" "),a("ul",[a("li",[t._v("跨语言支持")]),t._v(" "),a("li",[t._v("可以存储简单信息")]),t._v(" "),a("li",[t._v("易于扩展。不需要在服务端保存会话信息,易于应用扩展")]),t._v(" "),a("li",[t._v("SSO。认证信息存在客户端，子系统无需再进行认证")])]),t._v(" "),a("p",[t._v("劣势：")]),t._v(" "),a("ul",[a("li",[t._v("不能强制客户端下线")]),t._v(" "),a("li",[t._v("不可存储敏感信息")]),t._v(" "),a("li",[a("code",[t._v("Secret")]),t._v("泄漏后不再安全")])]),t._v(" "),a("h3",{attrs:{id:"_2-1-jwt-结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-jwt-结构"}},[t._v("#")]),t._v(" 2.1 JWT 结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/26/yYPQqZsNBSz2wFC.jpg",alt:"JWT结构图"}})]),t._v(" "),a("p",[t._v("如上图所示，"),a("code",[t._v("JWT")]),t._v("由"),a("code",[t._v("Header")]),t._v("、"),a("code",[t._v("Payload")]),t._v("、"),a("code",[t._v("Signature")]),t._v("三部分构成。")]),t._v(" "),a("h4",{attrs:{id:"_1）-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1）-header"}},[t._v("#")]),t._v(" 1） Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("alg")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("声明加密的算法 通常使用"),a("code",[t._v("HMAC")]),t._v("或"),a("code",[t._v("SHA256")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("typ")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("声明类型，这里是"),a("code",[t._v("JWT")])])])])]),t._v(" "),a("h4",{attrs:{id:"_2）-payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2）-payload"}},[t._v("#")]),t._v(" 2） Payload")]),t._v(" "),a("p",[t._v('这部分是我们存放信息的地方。 包含三个部分"标准注册声明"、"公共声明"、"私有声明"。')]),t._v(" "),a("p",[t._v("标准注册声明是固定名称，存放固定内容但不强制使用。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("iss")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("签发者")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("sub")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所面向的用户")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("aud")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("接收方")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("exp")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("过期时间，这个过期时间必须要大于签发时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("nbf")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("定义在什么时间之前，该jwt都是不可用的.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("iat")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("签发时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("jti")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("唯一身份标识，主要用来作为"),a("strong",[t._v("一次性token,从而回避重放攻击")]),t._v("。")])])])]),t._v(" "),a("p",[t._v("公共声明可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息，但不建议添加敏感信息，因为该部分在客户端可解密。私有声明是提供者和消费者所共同定义的声明。")]),t._v(" "),a("h4",{attrs:{id:"_3）-signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3）-signature"}},[t._v("#")]),t._v(" 3） Signature")]),t._v(" "),a("p",[t._v("这部分是防篡改签名。"),a("code",[t._v("base64")]),t._v("编码"),a("code",[t._v("Header")]),t._v("和"),a("code",[t._v("Payload")]),t._v("后使用"),a("code",[t._v(".")]),t._v("连接组成的字符串，然后通过"),a("code",[t._v("Header")]),t._v("中声明的加密方式进行加盐"),a("code",[t._v("SecretKey")]),t._v("组合加密，然后就构成了签名。")]),t._v(" "),a("p",[t._v("对头部以及负载内容进行签名，可以防止内容被窜改。虽然"),a("code",[t._v("Header")]),t._v("和"),a("code",[t._v("Payload")]),t._v("可以使用"),a("code",[t._v("base64")]),t._v("解码后得到明文，但由于不知道"),a("code",[t._v("SecretKey")]),t._v("所以客户端或任何第三方篡改内容后无法获得正确签名，服务端校验签名不正确便会得知认证内容被篡改了进而拒绝请求。")]),t._v(" "),a("p",[a("code",[t._v("SecretKey")]),t._v("保存在服务器端，用来进行"),a("code",[t._v("JWT")]),t._v("的签发和验证，务必确保其安全，一旦泄漏，任何人都可以自我签发"),a("code",[t._v("JWT")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-jwt-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-jwt-操作"}},[t._v("#")]),t._v(" 2.2 JWT 操作")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateJwt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("JwtBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithAlgorithm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("HMACSHA256Algorithm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithSecret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddClaim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VerifyJwt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("out")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IDictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("JwtBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithSecret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MustVerifySignature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Decode")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IDictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TokenExpiredException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//JWT过期")]),t._v("\n        payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignatureVerificationException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//签名错误")]),t._v("\n        payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br")])]),a("p",[t._v("基于 https://github.com/jwt-dotnet/jwt")]),t._v(" "),a("blockquote",[a("p",[t._v("参考文档")])]),t._v(" "),a("ul",[a("li",[t._v("http://www.cnblogs.com/ldybyz/p/6943827.html")]),t._v(" "),a("li",[t._v("https://www.jianshu.com/p/576dbf44b2ae")]),t._v(" "),a("li",[t._v("https://lion1ou.win/2017/01/18/")])])])}),[],!1,null,null,null);s.default=n.exports}}]);