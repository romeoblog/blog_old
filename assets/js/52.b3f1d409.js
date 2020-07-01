(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{222:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[a._v("#")]),a._v(" Quick Start")]),a._v(" "),t("h2",{attrs:{id:"下载-rocketmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载-rocketmq","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载 RocketMQ")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://rocketmq.apache.org/release_notes/release-notes-4.5.1/",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载"),t("OutboundLink")],1),a._v("RocketMQ源码版本或者二进制文件（以4.5.1版本为例）")]),a._v(" "),t("ol",[t("li",[a._v("如果是源码版，需要进行解压和编译，在运行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" rocketmq-all-4.5.1-source-release.zip\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" rocketmq-all-4.5.1/\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" mvn -Prelease-all -DskipTests clean "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -U\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" distribution/target/apache-rocketmq\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("如果是二进制文件，解压运行即可（推荐方式）")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" rocketmq-all-4.5.1-bin-release.zip\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" rocketmq-all-4.5.1-bin-release/\n")])])]),t("h2",{attrs:{id:"启动-nameserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-nameserver","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动 NameServer")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" sh bin/mqnamesrv "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f ~/logs/rocketmqlogs/namesrv.log\n")])])]),t("p",[a._v("如果启动过程中打印"),t("code",[a._v("The Name Server boot success...")]),a._v("说明启动NameServer成功")]),a._v(" "),t("h2",{attrs:{id:"启动-broker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-broker","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动 Broker")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" sh bin/mqbroker -n localhost:9876 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f ~/logs/rocketmqlogs/broker.log \n")])])]),t("p",[a._v("如果启动过程中打印"),t("code",[a._v("The broker boot success...")]),a._v("说明启动Broker成功")]),a._v(" "),t("h2",{attrs:{id:"发送、接收消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送、接收消息","aria-hidden":"true"}},[a._v("#")]),a._v(" 发送、接收消息")]),a._v(" "),t("p",[a._v("在发送/接收消息之前，我们需要告诉NameServer的位置在哪里。 目的是通过Name Server再找到Broker。以下有几种方式指定：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("客户端寻址方式")]),a._v(" "),t("ol",[t("li",[a._v("代码中指定Name Server地址，多个namesrv地址之间用分号分割")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("producer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setNamesrvAddr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"localhost:9876"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n\nconsumer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setNamesrvAddr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"localhost:9876"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("Java启动参数中指定Name Server地址")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-Drocketmq.namesrv.addr=localhost:9876  \n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("环境变量指定Name Server地址")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v("  NAMESRV_ADDR"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost:9876 \n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("HTTP静态服务器寻址")])]),a._v(" "),t("p",[a._v("TDB")])]),a._v(" "),t("li",[t("p",[a._v("为了测试，使用第4种方式来寻址：")]),a._v(" "),t("ol",[t("li",[a._v("使用环境变量NAMESRV_ADDR")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v("  NAMESRV_ADDR"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost:9876 \n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("发送消息")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n")])])]),t("p",[a._v("打印：SendResult [sendStatus=SEND_OK, msgId= ...")]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("接受消息")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n")])])]),t("p",[a._v("打印：ConsumeMessageThread_%d Receive New Messages: [MessageExt...")])])]),a._v(" "),t("h2",{attrs:{id:"关闭-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭-server","aria-hidden":"true"}},[a._v("#")]),a._v(" 关闭 Server")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" sh bin/mqshutdown broker\nThe mqbroker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("36695"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" is running"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nSend "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" request to mqbroker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("36695"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" OK\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" sh bin/mqshutdown namesrv\nThe mqnamesrv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("36664"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" is running"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nSend "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" request to mqnamesrv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("36664"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" OK\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);