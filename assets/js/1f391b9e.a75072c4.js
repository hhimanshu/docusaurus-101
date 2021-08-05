"use strict";(self.webpackChunkmy_classic=self.webpackChunkmy_classic||[]).push([[85],{6159:function(e,t,n){n.d(t,{N:function(){return d},Z:function(){return f}});var r=n(3366),a=n(7462),l=n(7294),c=n(6010),o=n(4973),i=n(3018),s="enhancedAnchor_2LWZ",m="h1Heading_27L5",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,a.Z)({},t,{id:void 0,className:m}),t.children))},f=function(e){return"h1"===e?d:(t=e,function(e){var n,a=e.id,m=(0,r.Z)(e,u),d=(0,i.LU)().navbar.hideOnScroll;return a?l.createElement(t,m,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.Z)("anchor",(n={},n[s]=!d,n)),id:a}),m.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,m)});var t}},2238:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),l=n(6742),c=n(9444),o=n(6159),i=n(6010),s=n(3018),m="details_1VDD";function u(e){var t=Object.assign({},e);return a.createElement(s.PO,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",m,t.className)}))}var d={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(c.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(l.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(c.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(u,(0,r.Z)({},e,{summary:n}),l)},h1:(0,o.Z)("h1"),h2:(0,o.Z)("h2"),h3:(0,o.Z)("h3"),h4:(0,o.Z)("h4"),h5:(0,o.Z)("h5"),h6:(0,o.Z)("h6")}},7979:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),a=n(6010),l=n(5992),c=n(3905),o=n(2238),i=n(571),s=n(3018),m="mdxPageWrapper_3qD3";var u=function(e){var t=e.content,n=t.frontMatter,u=t.metadata,d=n.title,f=n.description,h=n.wrapperClassName,v=n.hide_table_of_contents,E=u.permalink;return r.createElement(l.Z,{title:d,description:f,permalink:E,wrapperClassName:null!=h?h:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",m)},r.createElement("div",{className:(0,a.Z)("col",!v&&"col--8")},r.createElement(c.Zo,{components:o.Z},r.createElement(t,null))),!v&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(i.Z,{toc:t.toc})))))}},571:function(e,t,n){n.d(t,{r:function(){return i},Z:function(){return s}});var r=n(7294),a=n(6010);var l=function(e,t,n){var a=(0,r.useState)(void 0),l=a[0],c=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,o=!1,i=document.getElementsByClassName(e);a<i.length&&!o;){var s=i[a],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));r.id===u&&(l&&l.classList.remove(t),s.classList.add(t),c(s),o=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},c="tableOfContents_35-E",o="table-of-contents__link";function i(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(c,"thin-scrollbar")},r.createElement(i,{toc:t}))}},6197:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(3366),l=n(7294),c=n(6010),o=n(6742),i=n(3018),s=n(4996),m=n(3919),u="footerLogoLink_qW4Z",d=n(8465),f=n(8617),h=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,n=e.href,c=e.label,i=e.prependBaseUrlToHref,u=(0,a.Z)(e,h),d=(0,s.Z)(t),v=(0,s.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,r.Z)({className:"footer__link-item"},n?{href:i?v:n}:{to:d},u),n&&!(0,m.Z)(n)?l.createElement("span",null,c,l.createElement(f.Z,null)):c)}var E=function(e){var t=e.sources,n=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:n,sources:t})};var p=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,r=t.links,a=void 0===r?[]:r,m=t.logo,d=void 0===m?{}:m,f={light:(0,s.Z)(d.src),dark:(0,s.Z)(d.srcDark||d.src)};return e?l.createElement("footer",{className:(0,c.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},a&&a.length>0&&l.createElement("div",{className:"row footer__links"},a.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(v,e))}))):null)}))),(d||n)&&l.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement(o.Z,{href:d.href,className:u},l.createElement(E,{alt:d.alt,sources:f})):l.createElement(E,{alt:d.alt,sources:f})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null}},6922:function(e,t,n){var r=n(7462),a=n(7294),l=Object.assign({React:a},a,{ButtonExample:function(e){return a.createElement("button",(0,r.Z)({},e,{style:Object.assign({backgroundColor:"white",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}});t.Z=l}}]);