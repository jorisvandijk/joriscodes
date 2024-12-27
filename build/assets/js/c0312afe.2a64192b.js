"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6034],{2559:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"linux/automounting","title":"Auto mounting a drive","description":"fstab","source":"@site/docs/linux/automounting.md","sourceDirName":"linux","slug":"/linux/automounting","permalink":"/linux/automounting","draft":false,"unlisted":false,"editUrl":"https://codeberg.org/jorisvandijk/joriscodes/src/branch/main/docs/linux/automounting.md","tags":[{"inline":true,"label":"Linux","permalink":"/tags/linux"}],"version":"current","lastUpdatedBy":"Joris","lastUpdatedAt":1731918280000,"frontMatter":{"tags":["Linux"]},"sidebar":"docsSidebar","previous":{"title":"Barless","permalink":"/linux/Scripting/barless"},"next":{"title":"Compose key","permalink":"/linux/compose-key"}}');var s=i(4848),o=i(8453);const r={tags:["Linux"]},a="Auto mounting a drive",d={},l=[{value:"Creating the directory structure",id:"creating-the-directory-structure",level:2},{value:"Getting information on the drive to be mounted",id:"getting-information-on-the-drive-to-be-mounted",level:2},{value:"Adding the drive to fstab",id:"adding-the-drive-to-fstab",level:2},{value:"Enable the changes",id:"enable-the-changes",level:2},{value:"Owning the drive",id:"owning-the-drive",level:2},{value:"Reboot",id:"reboot",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"auto-mounting-a-drive",children:"Auto mounting a drive"})}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(4647).A+"",children:(0,s.jsx)(n.img,{alt:"fstab",src:i(6551).A+"",width:"600",height:"375"})})})}),"\n",(0,s.jsx)(n.p,{children:"The goal here is to automatically mount an SSD drive I added internally to my laptop when I boot it up."}),"\n",(0,s.jsx)(n.h2,{id:"creating-the-directory-structure",children:"Creating the directory structure"}),"\n",(0,s.jsxs)(n.p,{children:["We will be mounting the drive to ",(0,s.jsx)(n.strong,{children:"/media/data"}),". The ",(0,s.jsx)(n.strong,{children:"/media"})," folder is where you ",(0,s.jsx)(n.em,{children:"should"})," be mounting drives on a Linux system. I am on Arch, which does not come with this folder out of the box, so I will have to create it and the ",(0,s.jsx)(n.strong,{children:"data"})," folder, which is the name I am giving the drive I am mounting. You can name yours anything you'd like."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"cd /\nsudo mkdir media\ncd media\nsudo mkdir data\n"})}),"\n",(0,s.jsx)(n.h2,{id:"getting-information-on-the-drive-to-be-mounted",children:"Getting information on the drive to be mounted"}),"\n",(0,s.jsx)(n.p,{children:"Next we'll need some information on the drive that we'll be mounting. Most importantly its UUID, which is an id the system uses to recognize this drive."}),"\n",(0,s.jsxs)(n.p,{children:["First well use ",(0,s.jsx)(n.code,{children:"lsblk"})," to find the right drive."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lsblk\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will list all drives on your system. Usually it's easy to see which name is associated with your drive by looking at the size of the drives. This is my output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS\nsda           8:0    1  57.3G  0 disk \n\u251c\u2500sda1        8:1    1   798M  0 part \n\u2514\u2500sda2        8:2    1    15M  0 part \nzram0       254:0    0     4G  0 disk [SWAP]\nnvme1n1     259:0    0 465.8G  0 disk \n\u251c\u2500nvme1n1p1 259:3    0   511M  0 part /boot\n\u2514\u2500nvme1n1p2 259:4    0 465.3G  0 part /home\n                                      /var/cache/pacman/pkg\n                                      /var/log\n                                      /.snapshots\n                                      /\nnvme0n1     259:1    0   1.9T  0 disk \n\u2514\u2500nvme0n1p1 259:2    0   1.9T  0 part \n"})}),"\n",(0,s.jsx)(n.p,{children:'The drive I want is the one with 1.9T of storage space and I would like to use the "nvme0n1p1" partition on it. We will need this ID in the next command:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo blkid | grep [ID]\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will provide you with an output which has all the information on your drive. Mine looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'/dev/nvme1n1p1: LABEL="Data" UUID="ab8bbd93-ebbf-4827-b08c-6d89efe123ef" UUID_SUB="a0133592-e3ce-4879-a41d-cd1b181753b0" BLOCK_SIZE="4096" TYPE="btrfs" PARTUUID="f0a17384-01"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"adding-the-drive-to-fstab",children:"Adding the drive to fstab"}),"\n",(0,s.jsx)(n.p,{children:"Auto mount magic will be done for us by fstab. Open the fstab file, replacing [your editor] with the editor of your choice. If you're unsure, you can use nano."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo [your editor] /etc/fstab\n"})}),"\n",(0,s.jsx)(n.p,{children:"We will now add our drive to the bottom of the fstab file in the following format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# [name]\nUUID=[uuid of your drive]  [mount point]  [file system type]  [mount option]  [dump]  [pass]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[name]"})," is not needed, but makes it easier to identify the drive. You can name it anything you like. The hash symbol in front of it is needed, as this is a comment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[uuid of your drive]"})," is the id we got from the ",(0,s.jsx)(n.em,{children:"blkid"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[mount point]"})," is where we want to mount the drive. This is the location we created in the first step, ",(0,s.jsx)(n.strong,{children:"/media/data"})," in my case."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[file system type]"})," is exactly what is says. This is specified as ",(0,s.jsx)(n.strong,{children:"TYPE"})," in the ",(0,s.jsx)(n.em,{children:"blkid"})," command. It is ",(0,s.jsx)(n.strong,{children:"btrfs"})," in my case."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[mount option]"})," I am not getting into right now. Setting it to ",(0,s.jsx)(n.strong,{children:"defaults"})," is fine."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[dump]"})," is meant for stating if this drive should be enabled or disabled when backing up. 0 would be disabling it, 1 enabling it. I will be ",(0,s.jsx)(n.strong,{children:"disabling"})," it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[pass]"})," controls if fsck should check the device for errors on boot time. Root devices should always be on 1. Other partitions on 2, or 0 to disable checking. I am setting this to ",(0,s.jsx)(n.strong,{children:"0"}),", thus disabling it."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Putting it all together I will add the following to the fstab file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# /dev/nvme1n1p1\nUUID=ab8bbd93-ebbf-4827-b08c-6d89efe123ef /media/data btrfs defaults 0 0\n"})}),"\n",(0,s.jsx)(n.p,{children:"Save and close the file."}),"\n",(0,s.jsx)(n.h2,{id:"enable-the-changes",children:"Enable the changes"}),"\n",(0,s.jsx)(n.p,{children:"We will first reload the daemon so systemd will use the newly modified version of fstab."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next we will mount the new drive manually."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mount -a\n"})}),"\n",(0,s.jsx)(n.p,{children:"Be sure to check if there are any issues by taking a look at dmsg."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dmesg -wH\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If all went well, the new drive should be mounted. You can check in your file manager or re-run the ",(0,s.jsx)(n.em,{children:"lsblk"})," command to see that after the name of your drive, there's now also a mount point listed."]}),"\n",(0,s.jsx)(n.h2,{id:"owning-the-drive",children:"Owning the drive"}),"\n",(0,s.jsxs)(n.p,{children:["Considering this is all done by your system, chances are the file system on your drive is owned by root. This is not very handy, as you'd constantly would have to interact with it as root (through sudo). We do not want this, so we will be handing ownership of the entire ",(0,s.jsx)(n.strong,{children:"media"})," directory and everything in it to our user."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo chown -R [username] /media \n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"[username]"})," would be your own username, obviously."]}),"\n",(0,s.jsx)(n.h2,{id:"reboot",children:"Reboot"}),"\n",(0,s.jsx)(n.p,{children:"Reboot to see if it all went fine."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["If there was a problem your system might not boot. You can edit fstab through a TTY at ",(0,s.jsx)(n.code,{children:"/etc/fstab"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"And that's it. Every time you boot, your drive will boot with you!"})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4647:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/files/fstab-51eceaefbbaae30602b598734e47e669.png"},6551:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/fstab_thumb-2f7aa9b1993a5c8308b7b3ed5ee39f34.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);