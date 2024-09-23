(self.webpackChunksmart_web=self.webpackChunksmart_web||[]).push([[444],{"./src/ui/components/common/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_mocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/mocks/index.ts"),_ui_components_common_Dropdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/components/common/Dropdown/index.tsx"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_ui_components_common_Dropdown__WEBPACK_IMPORTED_MODULE_2__.m,tags:["autodocs"],argTypes:{onSelect:{description:"Callback function that is called when an item is selected. Receives the value of the selected item."},items:{description:"Array of items where each item contains a label to be displayed and a value to be used in logic."},selectedValue:{description:"The value of the currently selected item."}}},Default={render:()=>{const[selectedValue,setSelectedValue]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_mocks__WEBPACK_IMPORTED_MODULE_1__.Jd[0].value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_components_common_Dropdown__WEBPACK_IMPORTED_MODULE_2__.m,{items:_mocks__WEBPACK_IMPORTED_MODULE_1__.Jd,selectedValue,onSelect:value=>{setSelectedValue(value)}})}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [selectedValue, setSelectedValue] = useState<string>(itemDropdown[0].value);\n    const handleSelect = (value: string) => {\n      setSelectedValue(value);\n    };\n    return <Dropdown items={itemDropdown} selectedValue={selectedValue} onSelect={handleSelect} />;\n  }\n}",...Default.parameters?.docs?.source}}}},'./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Abel","arguments":[{"subsets":["latin"],"weight":"400"}],"variableName":"abel"}':module=>{if(!document.getElementById("id-e83550")){const fontDeclarations="/* latin */\n@font-face {\n  font-family: 'Abel';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/abel/v18/MwQ5bhbm2POE2V9BPbh5uGM.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",style=document.createElement("style");style.setAttribute("id","font-face-e83550"),style.innerHTML=fontDeclarations,document.head.appendChild(style);const classNamesCSS="\n    .abel-normal-400 {\n      font-family: Abel;\n      font-style: normal;\n      font-weight: 400;\n    }\n\n    \n  ",classNamesStyle=document.createElement("style");classNamesStyle.setAttribute("id","classnames-e83550"),classNamesStyle.innerHTML=classNamesCSS,document.head.appendChild(classNamesStyle)}module.exports={className:"abel-normal-400",style:{fontFamily:"Abel",fontStyle:"normal",fontWeight:"400"}}},'./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Montserrat","arguments":[{"weight":["400","700"],"subsets":["latin"]}],"variableName":"montserrat"}':module=>{if(!document.getElementById("id-2b1c1f")){const fontDeclarations="/* cyrillic-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",style=document.createElement("style");style.setAttribute("id","font-face-2b1c1f"),style.innerHTML=fontDeclarations,document.head.appendChild(style);const classNamesCSS="\n    .montserrat-normal {\n      font-family: Montserrat;\n      font-style: normal;\n      \n    }\n\n    \n  ",classNamesStyle=document.createElement("style");classNamesStyle.setAttribute("id","classnames-2b1c1f"),classNamesStyle.innerHTML=classNamesCSS,document.head.appendChild(classNamesStyle)}module.exports={className:"montserrat-normal",style:{fontFamily:"Montserrat",fontStyle:"normal"}}},"./src/constants/fonts.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>next_font_google_target_css_path_src_constants_fonts_ts_import_Abel_arguments_subsets_latin_weight_400_variableName_abel___WEBPACK_IMPORTED_MODULE_1___default.a,a:()=>next_font_google_target_css_path_src_constants_fonts_ts_import_Montserrat_arguments_weight_400_700_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_0___default.a});var next_font_google_target_css_path_src_constants_fonts_ts_import_Montserrat_arguments_weight_400_700_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__('./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Montserrat","arguments":[{"weight":["400","700"],"subsets":["latin"]}],"variableName":"montserrat"}'),next_font_google_target_css_path_src_constants_fonts_ts_import_Montserrat_arguments_weight_400_700_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(next_font_google_target_css_path_src_constants_fonts_ts_import_Montserrat_arguments_weight_400_700_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_0__),next_font_google_target_css_path_src_constants_fonts_ts_import_Abel_arguments_subsets_latin_weight_400_variableName_abel___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__('./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/font/google/target.css?{"path":"src\\\\constants\\\\fonts.ts","import":"Abel","arguments":[{"subsets":["latin"],"weight":"400"}],"variableName":"abel"}'),next_font_google_target_css_path_src_constants_fonts_ts_import_Abel_arguments_subsets_latin_weight_400_variableName_abel___WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_font_google_target_css_path_src_constants_fonts_ts_import_Abel_arguments_subsets_latin_weight_400_variableName_abel___WEBPACK_IMPORTED_MODULE_1__)},"./src/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var SIZE,TYPE;__webpack_require__.d(__webpack_exports__,{hv:()=>END_POINT,ZE:()=>TYPE,Dc:()=>fonts.D,aR:()=>fonts.a}),function(SIZE){SIZE.MINI="extra-small",SIZE.SMALL="small",SIZE.LARGE="large"}(SIZE||(SIZE={})),function(TYPE){TYPE.PRIMARY="primary",TYPE.SECOND="second",TYPE.THIRD="third"}(TYPE||(TYPE={}));const END_POINT={HOME:"/",PLACES:"/places",PRODUCTS:"/products",PROJECTS:"/project",PORTFOLIO:"/portfolio",ABOUT_US:"/about"};var fonts=__webpack_require__("./src/constants/fonts.ts")},"./src/hooks/useOutsideClick.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");const useOutsideClick=({ref,handler})=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickOutside=event=>{ref.current&&!ref.current.contains(event.target)&&handler()};return document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[ref,handler])}},"./src/mocks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Cn:()=>navItems,Jd:()=>itemDropdown,Ko:()=>mockProject,d8:()=>mockImages,wG:()=>mockProduct});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/index.ts");const itemDropdown=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],mockImages=[{id:"1",name:"Project One",image:"/background-hero.webp",date:"2020-03-10T09:30:00.000Z",detail:"This is a detailed description of project one.",view:120,favorite:45,comment:12},{id:"2",name:"Project Two",image:"/background-hero.webp",date:"2020-03-10T09:30:00.000Z",detail:"This is a detailed description of project two",view:85,favorite:32,comment:7},{id:"3",name:"Project Three",image:"/background-hero.webp",date:"2020-03-10T09:30:00.000Z",detail:"This is a detailed description of project three",view:445,favorite:632,comment:71}],mockProduct=[{id:"1",name:"Project One",image:"/background-hero.webp",view:120,users:["User A","User B"]},{id:"2",name:"Project Two",image:"/background-hero.webp",view:85,users:["User C","User D"]},{id:"3",name:"Project Three",image:"/background-hero.webp",view:445,users:["User E","User F"]}],mockProject=[{id:"1",name:"Project One",image:"/background-hero.webp",category:"Category-A",comment:1232,favorite:444,views:81532},{id:"2",name:"Project Two",image:"/background-hero.webp",category:"Category-A",comment:1232,favorite:444,views:81532},{id:"3",name:"Project Three",image:"/background-hero.webp",category:"Category-A",comment:1232,favorite:444,views:81532}],navItems=[{name:"Home",url:_constants__WEBPACK_IMPORTED_MODULE_0__.hv.HOME},{name:"Places",url:_constants__WEBPACK_IMPORTED_MODULE_0__.hv.PLACES},{name:"Products",url:_constants__WEBPACK_IMPORTED_MODULE_0__.hv.PRODUCTS},{name:"Projects",url:_constants__WEBPACK_IMPORTED_MODULE_0__.hv.PROJECTS},{name:"Portfolio",url:_constants__WEBPACK_IMPORTED_MODULE_0__.hv.PORTFOLIO},{name:"About Us",url:_constants__WEBPACK_IMPORTED_MODULE_0__.hv.ABOUT_US}]},"./src/ui/components/common/Dropdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@fortawesome+react-fontawesome@0.2.2_@fortawesome+fontawesome-svg-core@6.6.0_react@18.3.1/node_modules/@fortawesome/react-fontawesome/index.es.js"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.6.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useOutsideClick.ts");const Dropdown=(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((({items,selectedValue,onSelect})=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),selectedItem=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>items.find((item=>item.value===selectedValue))||items[0]),[selectedValue,items]),dropdownRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),toggleDropdown=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{setIsOpen((prev=>!prev))}),[]),handleItemClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((item=>{setIsOpen(!1),onSelect&&onSelect(item.value)}),[onSelect]);return(0,_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_3__.j)({ref:dropdownRef,handler:()=>setIsOpen(!1)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref:dropdownRef,className:"relative inline-block text-left w-36",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex items-center justify-between w-full px-3 py-2 border border-primary rounded-full md:text-base text-x-xs uppercase",onClick:toggleDropdown,children:[selectedItem.label,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.g,{icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.xBV,className:"ml-2 transition-transform "+(isOpen?"rotate-180":"rotate-0")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute right-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 transition-transform duration-300 ease-in-out "+(isOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-2"),children:items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"w-full text-left px-4 py-2 hover:bg-gray-100 md:text-base text-xs uppercase",onClick:handleItemClick.bind(null,item),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:item.label})},item.value)))})]})}));Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ItemProps"}],raw:"ItemProps[]"},description:""},selectedValue:{required:!1,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}}}}]);