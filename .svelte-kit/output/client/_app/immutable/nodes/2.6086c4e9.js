import{S as R,i as B,s as M,k as m,a as N,q as D,l as g,m as p,h as f,c as q,r as O,n as h,J as F,b as w,D as d,H as k,u as Q,K as W,L as G,M as U,v as X,d as I,f as Y,g as E,N as z,O as V,y as S,z as T,A as j,B as A}from"../chunks/index.f93c11f0.js";function ee(i){let e,t,l,o,n,s,a,r,c,u,_,y,v,b;return{c(){e=m("div"),t=m("div"),l=m("img"),n=N(),s=m("p"),a=D(`As you might have red my name is Simon I am second year ICT sudent in the Netherlands.
        `),r=m("br"),c=D(`
        I study at HZ university of applied sciences and my focus lies within software engeneering
        `),u=m("br"),_=D(`
        I come from Slovakia from smaller town called Presov
        `),y=m("br"),v=D(`
        I like playing electric guitar and reading books about computer graphics
        `),b=m("br"),this.h()},l(x){e=g(x,"DIV",{class:!0});var H=p(e);t=g(H,"DIV",{class:!0});var Z=p(t);l=g(Z,"IMG",{alt:!0,class:!0,src:!0}),Z.forEach(f),n=q(H),s=g(H,"P",{class:!0});var $=p(s);a=O($,`As you might have red my name is Simon I am second year ICT sudent in the Netherlands.
        `),r=g($,"BR",{}),c=O($,`
        I study at HZ university of applied sciences and my focus lies within software engeneering
        `),u=g($,"BR",{}),_=O($,`
        I come from Slovakia from smaller town called Presov
        `),y=g($,"BR",{}),v=O($,`
        I like playing electric guitar and reading books about computer graphics
        `),b=g($,"BR",{}),$.forEach(f),H.forEach(f),this.h()},h(){h(l,"alt","me"),h(l,"class","rounded-full w-full h-full"),F(l.src,o="/me.jpg")||h(l,"src",o),h(t,"class","bg-slate-150 p-2 rounded-full h-32 w-32 lg:w-64 lg:h-64 shadow-2xl"),h(s,"class","text-slate-900 mt-2 shadow-2xl text-md lg:text-2xl p-10 w-full rounded-lg "),h(e,"class","lg:w-[70%] h-full p-10 flex flex-col items-center z-50")},m(x,H){w(x,e,H),d(e,t),d(t,l),d(e,n),d(e,s),d(s,a),d(s,r),d(s,c),d(s,u),d(s,_),d(s,y),d(s,v),d(s,b)},p:k,i:k,o:k,d(x){x&&f(e)}}}class te extends R{constructor(e){super(),B(this,e,null,ee,M,{})}}function J(i,e,t){const l=i.slice();return l[3]=e[t],l[5]=t,l}function K(i){let e,t,l,o,n,s,a;return{c(){e=m("div"),t=m("div"),l=m("img"),n=N(),this.h()},l(r){e=g(r,"DIV",{class:!0});var c=p(e);t=g(c,"DIV",{class:!0});var u=p(t);l=g(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(f),n=q(c),c.forEach(f),this.h()},h(){h(l,"class","w-20 h-20"),F(l.src,o=i[3].icon)||h(l,"src",o),h(l,"alt","hobbypng"),h(t,"class","rotate-0 w-full h-full flex flex-col justify-center items-center"),h(e,"class","w-28 h-28 circle absolute flex flex-col items-center bg-slate-200 shadow-2xl rounded-full svelte-15u1rnd")},m(r,c){w(r,e,c),d(e,t),d(t,l),d(e,n),s||(a=[G(e,"mouseenter",i[2](i[3])),G(e,"mouseleave",i[2](void 0))],s=!0)},p(r,c){i=r},d(r){r&&f(e),s=!1,U(a)}}}function le(i){let e,t,l,o,n,s=i[1],a=[];for(let r=0;r<s.length;r+=1)a[r]=K(J(i,s,r));return{c(){e=m("dvi"),t=m("div");for(let r=0;r<a.length;r+=1)a[r].c();l=N(),o=m("h1"),n=D(i[0]),this.h()},l(r){e=g(r,"DVI",{class:!0});var c=p(e);t=g(c,"DIV",{class:!0});var u=p(t);for(let y=0;y<a.length;y+=1)a[y].l(u);u.forEach(f),l=q(c),o=g(c,"H1",{class:!0});var _=p(o);n=O(_,i[0]),_.forEach(f),c.forEach(f),this.h()},h(){h(t,"class","relative flex flex-col justify-center mr-20 items-center h-full main "),h(o,"class","text-slate-200 text-3xl text-center absolute "),h(e,"class","flex flex-col items-center h-full justify-center w-full")},m(r,c){w(r,e,c),d(e,t);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(t,null);d(e,l),d(e,o),d(o,n)},p(r,[c]){if(c&6){s=r[1];let u;for(u=0;u<s.length;u+=1){const _=J(r,s,u);a[u]?a[u].p(_,c):(a[u]=K(_),a[u].c(),a[u].m(t,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=s.length}c&1&&Q(n,r[0])},i:k,o:k,d(r){r&&f(e),W(a,r)}}}function ne(i,e,t){let l=[{name:"Playing guitar",icon:"/guitar.png"},{name:"Programming",icon:"/coding.png"},{name:"Rendering",icon:"/rendering.png"},{name:"Reading",icon:"/reading.png"},{name:"Gaming",icon:"/gaming.png"},{name:"Driving",icon:"/driving.png"},{name:"Metal music",icon:"/metal.png"},{name:"Game engines",icon:"/game-engine.png"}],o="hello";function n(s){console.log(s),s!=null?t(0,o=s.name):t(0,o="")}return[o,l,n]}class re extends R{constructor(e){super(),B(this,e,ne,le,M,{})}}function se(i){const e=i-1;return e*e*e+1}function C(i){return--i*i*i*i*i+1}function P(i,{delay:e=0,duration:t=400,easing:l=se,start:o=0,opacity:n=0}={}){const s=getComputedStyle(i),a=+s.opacity,r=s.transform==="none"?"":s.transform,c=1-o,u=a*(1-n);return{delay:e,duration:t,easing:l,css:(_,y)=>`
			transform: ${r} scale(${1-c*y});
			opacity: ${a-u*y}
		`}}function ae(i){let e,t,l,o;return t=new re({}),{c(){e=m("div"),S(t.$$.fragment),this.h()},l(n){e=g(n,"DIV",{class:!0});var s=p(e);T(t.$$.fragment,s),s.forEach(f),this.h()},h(){h(e,"class","flex flex-col items-center h-full")},m(n,s){w(n,e,s),j(t,e,null),o=!0},p(n,s){},i(n){o||(E(t.$$.fragment,n),z(()=>{o&&(l||(l=V(e,P,{duration:400,delay:20,opacity:.1,start:.5,easing:C},!0)),l.run(1))}),o=!0)},o(n){I(t.$$.fragment,n),l||(l=V(e,P,{duration:400,delay:20,opacity:.1,start:.5,easing:C},!1)),l.run(0),o=!1},d(n){n&&f(e),A(t),n&&l&&l.end()}}}function ie(i){let e,t,l,o;return t=new te({}),{c(){e=m("div"),S(t.$$.fragment),this.h()},l(n){e=g(n,"DIV",{class:!0});var s=p(e);T(t.$$.fragment,s),s.forEach(f),this.h()},h(){h(e,"class","flex flex-col items-center")},m(n,s){w(n,e,s),j(t,e,null),o=!0},p(n,s){},i(n){o||(E(t.$$.fragment,n),z(()=>{o&&(l||(l=V(e,P,{duration:400,delay:10,opacity:0,start:.5,easing:C},!0)),l.run(1))}),o=!0)},o(n){I(t.$$.fragment,n),l||(l=V(e,P,{duration:400,delay:10,opacity:0,start:.5,easing:C},!1)),l.run(0),o=!1},d(n){n&&f(e),A(t),n&&l&&l.end()}}}function oe(i){let e,t,l,o,n,s,a,r,c;const u=[ie,ae],_=[];function y(v,b){return v[1]&&v[0]=="About me"?0:v[1]&&v[0]=="Hobbies"?1:-1}return~(a=y(i))&&(r=_[a]=u[a](i)),{c(){e=m("div"),t=m("h1"),l=D(i[0]),s=N(),r&&r.c(),this.h()},l(v){e=g(v,"DIV",{class:!0});var b=p(e);t=g(b,"H1",{class:!0});var x=p(t);l=O(x,i[0]),x.forEach(f),s=q(b),r&&r.l(b),b.forEach(f),this.h()},h(){h(t,"class",o="text-6xl lg:text-9xl text-"+i[2]+" font-julius lg:mt-20 mt-2"),h(e,"class","w-full flex h-full flex-col items-center justify-center")},m(v,b){w(v,e,b),d(e,t),d(t,l),d(e,s),~a&&_[a].m(e,null),c=!0},p(v,[b]){i=v,(!c||b&1)&&Q(l,i[0]),(!c||b&4&&o!==(o="text-6xl lg:text-9xl text-"+i[2]+" font-julius lg:mt-20 mt-2"))&&h(t,"class",o);let x=a;a=y(i),a===x?~a&&_[a].p(i,b):(r&&(X(),I(_[x],1,1,()=>{_[x]=null}),Y()),~a?(r=_[a],r?r.p(i,b):(r=_[a]=u[a](i),r.c()),E(r,1),r.m(e,null)):r=null)},i(v){c||(z(()=>{c&&(n||(n=V(t,P,{duration:200,delay:200,opacity:.1,start:.5,easing:C},!0)),n.run(1))}),E(r),c=!0)},o(v){n||(n=V(t,P,{duration:200,delay:200,opacity:.1,start:.5,easing:C},!1)),n.run(0),I(r),c=!1},d(v){v&&f(e),v&&n&&n.end(),~a&&_[a].d()}}}function ce(i,e,t){let{headerText:l}=e,{isHoveredOn:o}=e,n;return l==="About me"?n="slate-900":n="slate-100",i.$$set=s=>{"headerText"in s&&t(0,l=s.headerText),"isHoveredOn"in s&&t(1,o=s.isHoveredOn)},i.$$.update=()=>{i.$$.dirty&2},[l,o,n]}class ue extends R{constructor(e){super(),B(this,e,ce,oe,M,{headerText:0,isHoveredOn:1})}}function fe(i){let e,t,l,o,n,s;return t=new ue({props:{isHoveredOn:i[2],headerText:i[1]}}),{c(){e=m("div"),S(t.$$.fragment),this.h()},l(a){e=g(a,"DIV",{class:!0});var r=p(e);T(t.$$.fragment,r),r.forEach(f),this.h()},h(){h(e,"class",l="w-full h-full bg-"+i[0])},m(a,r){w(a,e,r),j(t,e,null),o=!0,n||(s=[G(e,"mouseover",i[3]),G(e,"mouseout",i[4])],n=!0)},p(a,[r]){const c={};r&4&&(c.isHoveredOn=a[2]),r&2&&(c.headerText=a[1]),t.$set(c),(!o||r&1&&l!==(l="w-full h-full bg-"+a[0]))&&h(e,"class",l)},i(a){o||(E(t.$$.fragment,a),o=!0)},o(a){I(t.$$.fragment,a),o=!1},d(a){a&&f(e),A(t),n=!1,U(s)}}}function de(i,e,t){let{bgcolor:l}=e,{header:o}=e,n;function s(){t(2,n=!0)}function a(){t(2,n=!1)}return i.$$set=r=>{"bgcolor"in r&&t(0,l=r.bgcolor),"header"in r&&t(1,o=r.header)},[l,o,n,s,a]}class L extends R{constructor(e){super(),B(this,e,de,fe,M,{bgcolor:0,header:1})}}function he(i){let e,t,l,o,n,s,a;return l=new L({props:{bgcolor:"slate-100",header:"About me"}}),s=new L({props:{bgcolor:"slate-950",header:"Hobbies"}}),{c(){e=m("section"),t=m("div"),S(l.$$.fragment),o=N(),n=m("div"),S(s.$$.fragment),this.h()},l(r){e=g(r,"SECTION",{class:!0});var c=p(e);t=g(c,"DIV",{class:!0});var u=p(t);T(l.$$.fragment,u),u.forEach(f),o=q(c),n=g(c,"DIV",{class:!0});var _=p(n);T(s.$$.fragment,_),_.forEach(f),c.forEach(f),this.h()},h(){h(t,"class","w-full h-1/2 lg:w-1/2 lg:hover:h-full hover:h-[95%] lg:hover:w-[90%] lg:h-full duration-150"),h(n,"class","w-full h-1/2 lg:w-1/2 lg:hover:h-full hover:h-[95%] lg:hover:w-[90%] lg:h-full duration-150"),h(e,"class","w-full h-full flex flex-col lg:flex-row items-center")},m(r,c){w(r,e,c),d(e,t),j(l,t,null),d(e,o),d(e,n),j(s,n,null),a=!0},p:k,i(r){a||(E(l.$$.fragment,r),E(s.$$.fragment,r),a=!0)},o(r){I(l.$$.fragment,r),I(s.$$.fragment,r),a=!1},d(r){r&&f(e),A(l),A(s)}}}class me extends R{constructor(e){super(),B(this,e,null,he,M,{})}}function ge(i){let e,t,l,o;return l=new me({}),{c(){e=m("div"),t=m("section"),S(l.$$.fragment),this.h()},l(n){e=g(n,"DIV",{class:!0});var s=p(e);t=g(s,"SECTION",{class:!0});var a=p(t);T(l.$$.fragment,a),a.forEach(f),s.forEach(f),this.h()},h(){h(t,"class","w-full h-full flex flex-col items-center snap-center"),h(e,"class","w-full h-full flex-col items-center snap-y snap-mandatory overflow-auto scroll-m-24")},m(n,s){w(n,e,s),d(e,t),j(l,t,null),o=!0},p:k,i(n){o||(E(l.$$.fragment,n),o=!0)},o(n){I(l.$$.fragment,n),o=!1},d(n){n&&f(e),A(l)}}}class ve extends R{constructor(e){super(),B(this,e,null,ge,M,{})}}export{ve as component};