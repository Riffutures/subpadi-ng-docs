"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[41],{4916:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=r(5893),t=r(1151);const s={sidebar_position:2},o="Buy Airtime",a={id:"Airtime-Service/airtime",title:"Buy Airtime",description:"- network: Network Provider int",source:"@site/docs/Airtime-Service/airtime.md",sourceDirName:"Airtime-Service",slug:"/Airtime-Service/airtime",permalink:"/subpadi-ng-docs/docs/Airtime-Service/airtime",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Airtime - API Service",permalink:"/subpadi-ng-docs/docs/category/airtime---api-service"},next:{title:"Buy Bulk Airtime",permalink:"/subpadi-ng-docs/docs/Airtime-Service/bulk-airtime"}},d={},c=[{value:"Send a post request with the payload",id:"send-a-post-request-with-the-payload",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"buy-airtime",children:"Buy Airtime"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"network"}),": Network Provider ",(0,i.jsx)(n.code,{children:"int"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1: 'MTN'"}),"\n",(0,i.jsx)(n.li,{children:"2: 'GLO'"}),"\n",(0,i.jsx)(n.li,{children:"3: '9MOBILE'"}),"\n",(0,i.jsx)(n.li,{children:"4: 'AIRTEL'"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"amount"}),": Your password ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mobile_number"}),": Recipient number ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"airtime_type"}),": Airtime type ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Port_number"}),": Port number default to ",(0,i.jsx)(n.strong,{children:"true"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\npayload = {\n"network": 1,\n"amount" :"200",\n"mobile_number": "07062198688",\n"Ported_number":true,\n"airtime_type":"VTU"\n}\nuser_token = \'eacf1ab727d134b254361d834c28a2bf6ab0a111\'\nheaders = {\n      "Content-Type": "application/json",\n      "Authorization": f\'Token {user_token}\'\n} \n# jsonify the payload\ndata = json.dumps(payload)\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"send-a-post-request-with-the-payload",children:"Send a post request with the payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'url = "https://subpadi.com/api/topup/"\nres = requests.post(url, data=data, headers=headers)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'{\n    "id": 76,\n    "airtime_type": "VTU",\n    "network": 1,\n    "tran_id": "Airtime-SVKjDfker7634",\n    "paid_amount": "200.0",\n    "mobile_number": "08011111111",\n    "amount": "200",\n    "plan_amount": "N200",\n    "plan_network": "MTN",\n    "balance_before": "535585.0",\n    "balance_after": "535385.0",\n    "Status": "successful",\n    "create_date": "2023-12-13T16:20:26.041472",\n    "Ported_number": true,\n    "api_response": "TRANSACTION SUCCESSFUL",\n    "ident": "20231213162024337872761638e639b6b7-814d-4d3a-9da0-dabdee3b8de9"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["View code in other programming languages ",(0,i.jsx)(n.a,{href:"https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99",children:"here"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var i=r(7294);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);