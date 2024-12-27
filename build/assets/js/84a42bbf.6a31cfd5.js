"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8496],{5135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"linux/fzf-and-arch-software-install","title":"Installing software on Arch Linux with fzf","description":"Fuzzy file finding is amazing. It really is. You can search a query containing at least part of what you\'re looking for and it\'ll find it. It\'s like magic. My fuzzy file finder of choice is called fzf.","source":"@site/docs/linux/fzf-and-arch-software-install.md","sourceDirName":"linux","slug":"/linux/fzf-and-arch-software-install","permalink":"/linux/fzf-and-arch-software-install","draft":false,"unlisted":false,"editUrl":"https://codeberg.org/jorisvandijk/joriscodes/src/branch/main/docs/linux/fzf-and-arch-software-install.md","tags":[{"inline":true,"label":"Arch","permalink":"/tags/arch"},{"inline":true,"label":"Linux","permalink":"/tags/linux"},{"inline":true,"label":"fzf","permalink":"/tags/fzf"}],"version":"current","lastUpdatedBy":"Joris","lastUpdatedAt":1731713835000,"frontMatter":{"tags":["Arch","Linux","fzf"]},"sidebar":"docsSidebar","previous":{"title":"Distraction free YouTube videos","permalink":"/linux/distraction-free-youtube"},"next":{"title":"Global playback control","permalink":"/linux/global-playback-control"}}');var a=t(4848),s=t(8453);const r={tags:["Arch","Linux","fzf"]},l="Installing software on Arch Linux with fzf",o={},c=[{value:"Bonus",id:"bonus",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"installing-software-on-arch-linux-with-fzf",children:"Installing software on Arch Linux with fzf"})}),"\n",(0,a.jsxs)(n.p,{children:["Fuzzy file finding is amazing. It really is. You can search a query containing at least part of what you're looking for and it'll find it. It's like magic. My fuzzy file finder of choice is called ",(0,a.jsx)(n.a,{href:"https://github.com/junegunn/fzf",children:"fzf"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Fzf on its own is nothing special. Type ",(0,a.jsx)(n.code,{children:"fzf"})," in your terminal after installing it and it'll list all files on our system but it also provides you with an input prompt. Say you type ",(0,a.jsx)(n.code,{children:".bashrc"})," in that prompt and hit enter, it will just spit out only the path to that file. Nothing more. Basically fzf will launch an interactive finder, read the list from STDIN, and write the selected item to STDOUT. This can be used in many interesting and very useful ways. Like using it to find an application and install it."]}),"\n",(0,a.jsx)(n.p,{children:"So for my AUR helper I use Yay. Yay is not only capable of installing from the AUR, it also is able to install from the \"normal\" repositories as well as search all of 'em. This means that you don't need to use Pacman at all, but you can just use Yay to install anything on Arch."}),"\n",(0,a.jsxs)(n.p,{children:["I have the following line in my ",(0,a.jsx)(n.code,{children:".bashrc"})," file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"alias i='yay -Slq | fzf --multi --preview \"yay -Si {1}\" | xargs -ro yay -S'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The command above makes it so that when I press ",(0,a.jsx)(n.code,{children:"i"})," and hit enter in my terminal I get a search prompt powered by fzf, which allows me to search for any bit of software available on either the standard repos, or in the AUR and select it to install it."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Remember to refresh your terminal emulator (by typing ",(0,a.jsx)(n.code,{children:"source ~/.bashrc"}),", or ",(0,a.jsx)(n.code,{children:"bash"})," in your terminal) after adding the alias to your ",(0,a.jsx)(n.code,{children:".bashrc"})," file. If you don't do this, the alias will not be available until you restart your terminal emulator."]})}),"\n",(0,a.jsx)(n.p,{children:"It can even install several things at once by selecting the thing you want to install with tab, and then entering another search query and selecting the next thing to install. Also great to know is that searching with fzf is blazing fast."}),"\n",(0,a.jsx)("center",{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(5055).A+"",children:(0,a.jsx)(n.img,{alt:"FZF Yay searching",src:t(4303).A+"",width:"600",height:"473"})}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"Fzf searching the repositories."})]})}),"\n",(0,a.jsx)(n.h2,{id:"bonus",children:"Bonus"}),"\n",(0,a.jsxs)(n.p,{children:["You can also use this to remove applications from your system. To do so, add the following to your ",(0,a.jsx)(n.code,{children:".bashrc"})," file and press ",(0,a.jsx)(n.code,{children:"r"})," in your terminal followed by ",(0,a.jsx)(n.code,{children:"enter"})," to search for an application to remove."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"alias r='pacman -Qq | fzf --multi --preview \"pacman -Qi {1}\" | xargs -ro sudo pacman -Rns'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5055:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/files/fzf-dc6d6ee5edad11e7417f0fd506d3f98e.png"},4303:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fzf_thumb-686dc521847e7d65c3d9016514457169.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);