(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{244:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u})),a.d(t,"pageQuery",(function(){return d}));var n=a(0),r=a.n(n),o=a(233),c=a.n(o),l=a(234),s=a(249),i=a(109),p=a.n(i);var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.pageContext.category,t=this.props.data.allMarkdownRemark.edges;return r.a.createElement(l.a,null,r.a.createElement("div",{className:"category-container"},r.a.createElement(c.a,{title:'Posts in category "'+e+'" | '+p.a.siteTitle}),r.a.createElement(s.a,{postEdges:t})))},n}(r.a.Component),d="4191571131"},249:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(35),c=a(236),l=(a(237),a(235)),s=a.n(l);t.a=function(e){var t=function(){var t=[];return e.postEdges.forEach((function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})})),t}();return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(c.a,{key:e.title,className:"post"},r.a.createElement(c.a.Body,null,r.a.createElement("h3",{className:"post-title"},r.a.createElement(o.Link,{to:e.path,className:"post-link"},e.title)),r.a.createElement("p",null,"Posted on: ",s()(e.date).format("DD/MM/YYYY")),r.a.createElement(c.a.Text,null,e.excerpt),r.a.createElement(o.Link,{to:e.path},"Read →")))})))}}}]);
//# sourceMappingURL=component---src-templates-category-jsx-66b476e5bc166530d3d6.js.map