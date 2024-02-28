"use strict";exports.id=24,exports.ids=[24],exports.modules={9024:(e,o,r)=>{r.d(o,{BO:()=>m,Ns:()=>d,X8:()=>w,ZL:()=>p,eq:()=>C,wn:()=>I,Table:()=>L});var n=r(5322),t=r(7324),s=r(4967),l=r(2015);const c=(0,l.createContext)({totalSection:0,currentSection:0,setTotalSection:e=>{},setCurrentSection:e=>{},onNextSection:()=>{},onPrevSection:()=>{}}),a=()=>(0,l.useContext)(c);var i=r(4250);const d=({onSectionIndexChange:e,children:o,initialSectionLength:r})=>{const[n,t]=(0,l.useState)(0),[a,d]=(0,l.useState)(r||0),u=(0,s.usePrevious)(n),x=(0,s.useCallbackRef)(e),h=(0,s.useCallbackRef)((()=>{t(n===a-1?0:e=>e+1)})),p=(0,s.useCallbackRef)((()=>{t(0===n?a-1:e=>e-1)}));(0,l.useEffect)((()=>{x(n,u)}),[n,x]);const m=(0,l.useMemo)((()=>({totalSection:a,currentSection:n,onNextSection:h,onPrevSection:p,setCurrentSection:t,setTotalSection:d})),[n,h,p,a]);return(0,i.jsx)(c.Provider,{value:m,children:o})};var u=r(7918);const x=(0,l.createContext)({ref:{current:null}}),h=(0,l.createContext)({inViewArray:[],setCurrentView:(e,o)=>{}}),p=({children:e,index:o})=>{const r=(0,l.useRef)(null),t=(0,l.useMemo)((()=>({ref:r})),[]),{currentSection:c}=a(),{setCurrentView:d,inViewArray:u}=(0,l.useContext)(h),p=(0,n.useInView)(r,{amount:"some",margin:"-300px 0px"});return(0,l.useEffect)((()=>{null!=o&&d(p,o)}),[o,p,d,u.length]),(0,i.jsx)(x.Provider,{value:t,children:(0,i.jsx)(s.Box,{ref:r,position:"relative",overflow:"hidden","data-scroll-section":o,"data-active":c===o,children:e})})},m=({children:e})=>{const o=[],{scrollY:r}=(0,n.useScroll)();l.Children.forEach(e,(e=>{(0,l.isValidElement)(e)&&e.type===p&&o.push(e)}));const t=o.length,[c,d]=(0,l.useState)((()=>Array(t).fill(!1)));(0,l.useEffect)((()=>{d(Array(t).fill(!1))}),[t]);const x=(0,s.useCallbackRef)(((e,o)=>{d((r=>{if(r[o]!==e){const n=[...r];return n[o]=e,n}return r}))})),m=(0,l.useMemo)((()=>({inViewArray:c,setCurrentView:x})),[c,x]),{setTotalSection:f,setCurrentSection:g,currentSection:C}=a(),w=(0,s.useCallbackRef)((e=>{e?c[C-1]&&g(C-1):c[C+1]&&g(C+1)}));return(0,l.useEffect)((()=>{let e=0;const o=(0,u.throttle)((o=>{w(!(o>e)),e=o}),100,{leading:!0,trailing:!0});return r.onChange(o),()=>r.clearListeners()}),[w,r]),(0,s.useSafeLayoutEffect)((()=>{f(t),g(0)}),[t,f,g]),(0,i.jsx)(h.Provider,{value:m,children:l.Children.map(o,((e,o)=>(0,l.cloneElement)(e,{index:o})))})},f=({className:e})=>(0,i.jsx)("svg",{className:e,width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M1 7L7 1L13 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),g=(0,l.memo)(f),C=()=>{const{currentSection:e}=a();return(0,i.jsx)(s.Box,{fontSize:"20px",position:"fixed",right:"10px",bottom:"20px",width:"20px",height:"20px",color:"orangeSand",textAlign:"center",verticalAlign:"middle",borderRadius:"999999px",zIndex:"sticky",display:{base:e>0?"flex":"none",md:"none"},alignItems:"center",justifyContent:"center",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,i.jsx)(s.Icon,{as:g,width:"20px",height:"20px"})})},w=({render:e})=>{const{totalSection:o,currentSection:r}=a(),n=(0,s.useCallbackRef)((e=>{const o=document.querySelector(`[data-scroll-section="${e}"]`);if(o){const e=o.getBoundingClientRect(),r=(document.scrollingElement?.scrollTop||0)+e.top;window.scrollTo({top:r,behavior:"smooth"})}})),t=(0,l.useMemo)((()=>Array(o).fill(0)),[o]);return o<=1?null:(0,i.jsx)(s.Flex,{height:"100vh",position:"fixed",width:"30px",display:{base:"none",md:"flex"},flexDirection:"column",top:"0",right:"100px",alignItems:"center",justifyContent:"center",zIndex:"dropdown","data-scroll-tool":!0,children:r<=o-1&&(0,i.jsx)(s.Wrap,{spacing:"6",children:t.map(((o,t)=>(0,i.jsx)(s.WrapItem,{children:e?e({index:t,isSelect:r===t,onClick:()=>n(t)}):(0,i.jsx)(s.Box,{width:"10px",height:"10px",cursor:"pointer",borderRadius:"full",sx:{backgroundColor:r===t?"purple.600":"initial",border:r===t?"none":"1.5px solid #e2e2e2"},onClick:()=>n(t)})},t)))})})},S=({children:e})=>{const{ref:o}=(0,l.useContext)(x),{scrollYProgress:r}=(0,n.useScroll)({target:o,axis:"y",offset:["-0.5","0.5"]}),t=(0,n.useTransform)(r,[0,.3,.65,1],[.3,1,1,.5]),s=(0,n.useTransform)(r,[0,.3,.65,1],[100,0,0,-120]);return(0,i.jsx)(n.motion.div,{style:{opacity:t,y:s},children:e})},I=({children:e})=>(0,t.aq)()?(0,i.jsx)(S,{children:e}):e,j=({...e})=>(0,i.jsx)(s.TableContainer,{children:(0,i.jsx)(s.Table,{variant:"simple",...e})});function y({dataIndex:e,cellProps:o,headCellProps:r,bodyCellProps:n,isHidden:t,headCellRender:s,bodyCellRender:l}){return(0,i.jsx)(i.Fragment,{})}var b=r(6855);const R=e=>(0,i.jsx)(s.Button,{border:"1px",size:"sm",borderColor:"gray.200",textStyle:"light",fontWeight:"normal",_active:{background:"none"},_hover:{background:"none"},fontSize:"sm",...e,children:e.children}),P=({page:e,total:o,pageSize:r=50,onChange:n,preButtonProps:t,nextButtonProps:l,...c})=>{const{hasNextPage:a,hasPrePage:d}=(({page:e,total:o,pageSize:r=50})=>{const n=o?Math.ceil(o/r):1;return{totalPage:n,hasNextPage:e<n,hasPrePage:e>1}})({page:e,total:o,pageSize:r});return(0,i.jsxs)(s.Flex,{justifyContent:"flex-end",...c,children:[d&&(0,i.jsx)(R,{"aria-label":"Prev page",leftIcon:(0,i.jsx)(s.Icon,{as:b.AiOutlineLeft}),onClick:()=>{n(e-1)},marginEnd:"4",...t,children:t?.children||"prevPage"}),a&&(0,i.jsx)(R,{"aria-label":"Next page",rightIcon:(0,i.jsx)(s.Icon,{as:b.AiOutlineRight}),onClick:()=>{n(e+1)},marginEnd:{base:4,lg:0},...l,children:l?.children||"nextPage"})]})};var k=r(799),v=r.n(k);class D extends l.Component{constructor(...e){super(...e),this.state={error:"",stack:"",hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,o){this.setState({error:e.message,stack:o.componentStack})}render(){const{hasError:e,stack:o,error:r}=this.state;return e?(console.error(r,o),"some error happen"):this.props.children}}const A=e=>{const{children:o,...r}=e;return(0,i.jsx)(s.Td,{...r,children:(0,i.jsx)(D,{children:o})})},T=({Render:e,...o})=>(0,i.jsx)(i.Fragment,{children:e(o)}),E=({Render:e,CustomRender:o,dataIndex:r,rowIndex:n,colIndex:t,rowData:s,cellProps:l,...c})=>"function"==typeof o?o(r?{rowData:s,rowIndex:n,colIndex:t,dataIndex:r,cellData:s[r]}:{rowData:s,rowIndex:n,colIndex:t}):(0,i.jsx)(A,{fontWeight:"medium",...c,...l,children:"function"==typeof e?(0,i.jsx)(T,{Render:e,dataIndex:r||"",rowIndex:n,colIndex:t,cellData:r?s[r]:{},rowData:s}):e});function F({Render:e,CustomRender:o,dataIndex:r,rowIndex:n,colIndex:t,rowData:l,cellProps:c,showSkeleton:a=(({rowData:e})=>!e),Skeleton:d,...u}){return("function"==typeof a?a({rowIndex:n,rowData:l,colIndex:t}):a)?d?(0,i.jsx)(A,{fontWeight:"medium",...u,...c,children:(0,i.jsx)(d,{rowIndex:n,colIndex:t})}):(0,i.jsx)(A,{fontWeight:"medium",...u,...c,children:(0,i.jsx)(s.Skeleton,{width:"80%",height:"24px"})}):(0,i.jsx)(E,{rowData:l,rowIndex:n,dataIndex:r,colIndex:t,cellProps:c,Render:e,CustomRender:o,...u})}let N=function(e){return e[e.None=0]="None",e[e.Asc=1]="Asc",e[e.Desc=2]="Desc",e}({});const B=(0,l.createContext)({sorter:{order:N.None},onSort:()=>{}});function V({Render:e,CustomRender:o,genCompareFn:r,dataIndex:n,rowIndex:t,colIndex:c,cellProps:a,cancelSort:d,sort:u,sortedColor:x="blue.500",defaultOrder:h=N.Desc,tooltipProps:p}){const{sorter:m,onSort:f}=(0,l.useContext)(B),g=(0,l.useCallback)((e=>m?.by===n&&m?.order===e?x:void 0),[n,m,x]),C=(0,l.useMemo)((()=>m?.by!==n||m?.order===N.None?h:d&&m?.order!=h?N.None:m?.order===N.Asc?N.Desc:N.Asc),[n,m,h,d]);if("function"==typeof o){let e=null;return e=o(n?{dataIndex:n,rowIndex:t,colIndex:c,sorter:m,onSort:f,genCompareFn:r,defaultOrder:h,cancelSort:d,sorterClick:()=>{f(r&&m?.genCompareFn!==r?{by:n,order:C,genCompareFn:r}:{by:n,order:C})},sortAscColor:g(N.Asc),sortDescColor:g(N.Desc),toggledSortOrder:C}:{rowIndex:t,colIndex:c,sorter:m,onSort:f,sort:u,defaultOrder:h,sortAscColor:g(N.Asc),sortDescColor:g(N.Desc)}),p?(0,i.jsx)(s.Tooltip,{...p,children:e}):e}const w="function"==typeof e?e({dataIndex:n||"",rowIndex:t,colIndex:c}):e,S=`Sort by ${"string"==typeof e?e:n.toString()}`,I=u?(0,i.jsxs)(s.Flex,{display:"inline-flex",as:"button",width:"auto",cursor:"pointer","aria-label":S,textTransform:"inherit",fontWeight:"semibold",onClick:()=>{f(r&&m?.genCompareFn!==r?{by:n,order:C,genCompareFn:r}:{by:n,order:C})},alignItems:"center",children:[w,(0,i.jsxs)(s.Flex,{transform:"scale(0.7)",marginStart:"2px",flexDirection:"column",children:[(0,i.jsx)(s.IconButton,{icon:(0,i.jsx)(s.Icon,{as:b.AiOutlineUp}),"aria-label":"Sort ascend",fontSize:"xx-small",color:g(N.Asc)}),(0,i.jsx)(s.IconButton,{icon:(0,i.jsx)(s.Icon,{as:b.AiOutlineDown}),"aria-label":"Sort descend",fontSize:"xx-small",color:g(N.Desc)})]})]}):(0,i.jsx)(s.Box,{fontWeight:"semibold",children:w});return(0,i.jsx)(s.Th,{textTransform:"none",color:"inherit",...a,children:p?(0,i.jsx)(s.Tooltip,{...p,children:I}):I})}v()((()=>{console.warn("pls make sure:\n 1. do not add hook into hyper column usage.\n 2. hyper column usage do not support hot reload")}));const z=(e,o=0)=>({skeletonRows:(0,l.useMemo)((()=>new Array(o).fill(null)),[o]),skeletonVisible:!e});function L({dataSource:e,sorter:o,pagination:r,noResultText:n,CustomNoResult:t,tableProps:c,skeletonRowCount:a,rowProps:d,children:u,containerProps:x,afterSorting:h}){const{innerSorter:p,onSort:m,sortedRows:f}=function(e,o,r){const[n,t]=(0,l.useState)({order:N.None,genCompareFn:e=>(o,r)=>{const n=e.by;return null===n?0:n in o&&n in r?e.order===N.Asc?o[n].length-r[n].length:r[n].length-o[n].length:0},...e}),s=(0,l.useCallback)((e=>{const o={...n,...e};e.onSort?.(o),t(o)}),[n]),c=(0,l.useMemo)((()=>{const e=[...o||[]];return n.order!==N.None&&(e.sort(n.genCompareFn?.(n)),r&&r()),e}),[o,n,r]);return{innerSorter:n,onSort:s,sortedRows:c}}(o,e,h),{skeletonRows:g,skeletonVisible:C}=z(e,a),w=function(e,o){const r=[],n=[];let t=e;(0,l.isValidElement)(e)&&e.type===l.Fragment&&(t=e.props.children),l.Children.forEach(t,(e=>{let o=null;if(e?.type===y)o=e;else if("function"==typeof e?.type)try{const r=e.type(e.props);(0,l.isValidElement)(r)&&r.type===y&&(o=r)}catch(e){}if(o){const{dataIndex:e,cellProps:t,headCellProps:s,bodyCellProps:l,isHidden:c,headCellRender:a,bodyCellRender:d}=o.props,u=(Array.isArray(a)?a:[a]).map((o=>{const{cellProps:r,...n}=o;return({rowIndex:o,colIndex:l})=>(0,i.jsx)(V,{rowIndex:o,colIndex:l,dataIndex:e,cellProps:{...t,...r,...s},...n},e?String(e):`${o}-${l}`)})),{cellProps:x,...h}=d,p=({rowIndex:o,colIndex:r,rowData:n})=>(0,i.jsx)(F,{rowIndex:o,colIndex:r,rowData:n,dataIndex:e,cellProps:{...t,...x,...l},...h},e?String(e):`${o}-${r}`);c||(n.push(p),u.forEach(((e,o)=>{r[o]=r[o]||[],r[o].push(e)})))}}));const c=function(e,o={}){const r=(0,l.useRef)({headCellRender:e,rowProps:o});return r.current={headCellRender:e,rowProps:o},(0,l.useCallback)((()=>{const{headCellRender:e,rowProps:{commonRow:o,theadRow:n}}=r.current;return(0,i.jsx)(s.Thead,{children:e.map(((e,r)=>{const t={...o,...Array.isArray(n)?n[r]:n};return(0,i.jsx)(s.Tr,{...t,children:e.map(((e,o)=>e({rowIndex:r,colIndex:o})))},r)}))})}),[])}(r,o),a=function(e,o={}){const r=(0,l.useRef)({bodyCellRender:e,rowProps:o});return r.current={bodyCellRender:e,rowProps:o},(0,l.useCallback)((({dataSource:e})=>{const{bodyCellRender:o,rowProps:{commonRow:n,tbodyRow:t,genTbodyRow:l}}=r.current;return(0,i.jsx)(s.Tbody,{children:e.map(((e,r)=>{const c={...n,...t},a=l?l({rowIndex:r,rowData:e}):{};return(0,i.jsx)(s.Tr,{...c,...a,children:o.map(((o,n)=>o({rowData:e,rowIndex:r,colIndex:n})))},r)}))})}),[])}(n,o);return(0,l.useCallback)((({dataSource:e})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(a,{dataSource:e})]})),[a,c])}(u,d);return(0,i.jsxs)(B.Provider,{value:{sorter:p,onSort:m},children:[(0,i.jsxs)(s.Box,{...x,children:[(0,i.jsx)(j,{...c,children:u&&(0,i.jsx)(w,{dataSource:C?g:f})}),!C&&0===f.length&&(t?(0,i.jsx)(t,{}):"empty")]}),!!r&&(0,i.jsx)(P,{...r})]})}L.Column=y}};