(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{247:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var r=a(0),n=a.n(r),i=a(107),o=a(238),c=a(239),l=a(250),p=a(110),m=a.n(p);t.default=function(e){var t=e.data.allMarkdownRemark.edges;return n.a.createElement(i.b,null,n.a.createElement(o.a,null,n.a.createElement("div",{className:"index-container"},n.a.createElement(i.a,{title:m.a.siteTitle}),n.a.createElement(l.a,null),n.a.createElement(c.a,{postEdges:t}))))};var s="1014838814"},250:function(e,t,a){"use strict";a(79);var r=a(0),n=a.n(r),i=a(237),o=a.n(i),c=a(251),l=a.n(c),p=a(110),m=a.n(p);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t,a,r,i=this.props,c=i.postNode,p=i.postPath,s=i.postSEO;if(s){var u=c.frontmatter;e=u.title,t=u.description?u.description:c.excerpt,a=u.cover,r=l()(m.a.siteUrl,m.a.pathPrefix,p)}else e=m.a.siteTitle,t=m.a.siteDescription,a=m.a.siteLogo;a.match("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")||(a=l()(m.a.siteUrl,m.a.pathPrefix,a));var f=l()(m.a.siteUrl,m.a.pathPrefix),g=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return s&&g.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),n.a.createElement(o.a,null,n.a.createElement("meta",{name:"description",content:t}),n.a.createElement("meta",{name:"image",content:a}),n.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),n.a.createElement("meta",{property:"og:url",content:s?r:f}),s?n.a.createElement("meta",{property:"og:type",content:"article"}):null,n.a.createElement("meta",{property:"og:title",content:e}),n.a.createElement("meta",{property:"og:description",content:t}),n.a.createElement("meta",{property:"og:image",content:a}),n.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter?m.a.userTwitter:""}),n.a.createElement("meta",{name:"twitter:title",content:e}),n.a.createElement("meta",{name:"twitter:description",content:t}),n.a.createElement("meta",{name:"twitter:image",content:a}))},r}(r.Component);t.a=s},251:function(e,t,a){var r,n,i;a(33),a(5),a(79),i=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var n=e[r];if("string"!=typeof n)throw new TypeError("Url must be a string. Received "+n);""!==n&&(r>0&&(n=n.replace(/^[\/]+/,"")),n=r<e.length-1?n.replace(/[\/]+$/,""):n.replace(/[\/]+$/,"/"),t.push(n))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(n="function"==typeof(r=i)?r.call(t,a,t,e):r)||(e.exports=n)}}]);
//# sourceMappingURL=component---src-pages-index-jsx-d503ede88a085140feaa.js.map