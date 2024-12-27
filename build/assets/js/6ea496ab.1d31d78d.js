"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2971],{4832:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"linux/compose-key","title":"Compose key","description":"For the longest time I have disabled my CapsLock key. I used to hit it from time to time and get annoyed by having to redo the bit I was typing, but this time not in all caps. For a little while I also used it in a keybinding, but found that using VoidSymbol (the key it will register as when disabled) is flakey. So this left me with a big button, right on the home row of my keyboard that does nothing at all, which is a waste.","source":"@site/docs/linux/compose-key.md","sourceDirName":"linux","slug":"/linux/compose-key","permalink":"/linux/compose-key","draft":false,"unlisted":false,"editUrl":"https://codeberg.org/jorisvandijk/joriscodes/src/branch/main/docs/linux/compose-key.md","tags":[{"inline":true,"label":"Linux","permalink":"/tags/linux"}],"version":"current","lastUpdatedBy":"Joris","lastUpdatedAt":1731713835000,"frontMatter":{"tags":["Linux"]},"sidebar":"docsSidebar","previous":{"title":"Auto mounting a drive","permalink":"/linux/automounting"},"next":{"title":"Distraction free YouTube videos","permalink":"/linux/distraction-free-youtube"}}');var n=s(4848),o=s(8453);const r={tags:["Linux"]},a="Compose key",d={},c=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"compose-key",children:"Compose key"})}),"\n",(0,n.jsxs)(t.p,{children:["For the longest time I have disabled my CapsLock key. I used to hit it from time to time and get annoyed by having to redo the bit I was typing, but this time not in all caps. For a little while I also used it in a keybinding, but found that using ",(0,n.jsx)(t.code,{children:"VoidSymbol"})," (the key it will register as when disabled) is flakey. So this left me with a big button, right on the home row of my keyboard that does nothing at all, which is a waste."]}),"\n",(0,n.jsxs)(t.p,{children:['In Dutch we use some special characters in writing, characters like \xe9, \xe8 or \xeb. To be able to type these, I\'ve always just relied on spell checking. It would underline a word like "Belgie", which is supposed to be "Belgi\xeb" in Dutch (meaning Belgium) and I\'d press ',(0,n.jsx)(t.code,{children:"F7"})," and it'd fix it for me. This works ok, but isn't great when you are in an application without spell checking. I've written a script in the past which would use ",(0,n.jsx)(t.a,{href:"https://github.com/davatorium/rofi",children:"Rofi"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/junegunn/fzf",children:"FZF"})," to display a list of special characters, which I could then arrow through to select a character. On pressing enter it'd copy the character to my clipboard and I could paste it anywhere."]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Compose key",src:s(2216).A+"",width:"430",height:"325"})})}),"\n",(0,n.jsxs)(t.p,{children:["This was not great. Way too convoluted for just placing a special character in a text. This should be easier. Enter the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Compose_key",children:"Compose Key"}),". Pressing the compose key begins a key press sequence that involves (usually two) additional key presses, which will then yield a character composed of the two. So for example pressing ",(0,n.jsx)(t.code,{children:"e"})," followed by ",(0,n.jsx)(t.code,{children:"'"})," (apostrophe/acute accent), will create ",(0,n.jsx)(t.code,{children:"\xe9"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The compose key is not a physical key on the keyboard, but you can map any key to act as the compose key in Linux. And suddenly a useless key is useful!"}),"\n",(0,n.jsxs)(t.p,{children:["I've added the following to my ",(0,n.jsx)(t.code,{children:"bspwmrc"})," file, which will remap CapsLock to the compose key:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"setxkbmap -option compose:caps &\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["I used my ",(0,n.jsx)(t.code,{children:"bspwmrc"})," file to set this up, but you can do this in your ",(0,n.jsx)(t.code,{children:".bashrc"})," or ",(0,n.jsx)(t.code,{children:".zshrc"})," file as well."]})}),"\n",(0,n.jsx)(t.p,{children:"Now I am able to add special characters without any hassle! And it's not just the e key with markings, there are loads of possible combinations to create a special character. Some of my favorites:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Char"}),(0,n.jsx)(t.th,{children:"Combination"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xb0"}),(0,n.jsx)(t.td,{children:"oo"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xa9"}),(0,n.jsx)(t.td,{children:"oc"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xb2"}),(0,n.jsx)(t.td,{children:"^2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xb3"}),(0,n.jsx)(t.td,{children:"^3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xe8"}),(0,n.jsx)(t.td,{children:"`e"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xe9"}),(0,n.jsx)(t.td,{children:"'e"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xeb"}),(0,n.jsx)(t.td,{children:'"e'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\xf8"}),(0,n.jsx)(t.td,{children:"/o"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u2260"}),(0,n.jsx)(t.td,{children:"=/"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["And more can be found ",(0,n.jsx)(t.a,{href:"https://math.dartmouth.edu/~sarunas/Linux_Compose_Key_Sequences.html",children:"here"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2216:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/compose-f4aeba7cfe8a103e80ea77ae2fe5a92b.jpg"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(6540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);