"use strict";(self.webpackChunksmart_web=self.webpackChunksmart_web||[]).push([[656],{"./src/ui/components/common/Photo/Photo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circular:()=>Circular,Default:()=>Default,WithHoverContent:()=>WithHoverContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/ui/components/common/Photo/index.tsx").$,tags:["autodocs"],argTypes:{src:{description:"URL of the image to be displayed"},alt:{description:"Alternative text for the image"},children:{description:"Content to show on hover"},styles:{description:"Custom CSS classes to apply to the Photo component"},isCircle:{description:"Makes the image circular if true"},fixedSize:{description:"Fixed size for the image (width, height)"},autoSize:{description:"Automatically size the image based on the container"},isBlur:{description:"To be used as a placeholder image before the src image successfully loads."}}},Default={args:{src:"/background-hero.webp",alt:"Hero Background",isBlur:!0,fixedSize:{width:500,height:500}}},WithHoverContent={args:{src:"https://i.ibb.co/KwS0QKz/san-3.webp",alt:"San 3",styles:"max-w-[200px]",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Hover Content"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"Example Text"})]}),fixedSize:{width:200,height:200}}},Circular={args:{src:"https://i.ibb.co/KwS0QKz/san-3.webp",alt:"San 3",fixedSize:{width:200,height:200},styles:"max-w-[200px]",isCircle:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Hover Content"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"Example Text"})]})}},__namedExportsOrder=["Default","WithHoverContent","Circular"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: '/background-hero.webp',\n    alt: 'Hero Background',\n    isBlur: true,\n    fixedSize: {\n      width: 500,\n      height: 500\n    }\n  }\n}",...Default.parameters?.docs?.source}}},WithHoverContent.parameters={...WithHoverContent.parameters,docs:{...WithHoverContent.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: 'https://i.ibb.co/KwS0QKz/san-3.webp',\n    alt: 'San 3',\n    styles: 'max-w-[200px]',\n    children: <div className=\"flex gap-2\">\r\n        <p>Hover Content</p>\r\n        <h1>Example Text</h1>\r\n      </div>,\n    fixedSize: {\n      width: 200,\n      height: 200\n    }\n  }\n}",...WithHoverContent.parameters?.docs?.source}}},Circular.parameters={...Circular.parameters,docs:{...Circular.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: 'https://i.ibb.co/KwS0QKz/san-3.webp',\n    alt: 'San 3',\n    fixedSize: {\n      width: 200,\n      height: 200\n    },\n    styles: 'max-w-[200px]',\n    isCircle: true,\n    children: <div className=\"flex gap-2\">\r\n        <p>Hover Content</p>\r\n        <h1>Example Text</h1>\r\n      </div>\n  }\n}",...Circular.parameters?.docs?.source}}}},"./src/ui/components/common/Photo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Photo});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.2.9_@jest+globals@29.7.0_@types+jest@29.5.12_esbuild@0.21.5_jest@29.7.0_@_duz2hux2yyao7mzcvehydfmvru/node_modules/@storybook/nextjs/dist/images/next-image.mjs");const Photo=({src,alt,children,styles,isCircle,fixedSize,autoSize,isBlur,...res})=>{const[hovered,setHovered]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),toggleHover=()=>setHovered(!hovered),containerStyles=(0,clsx__WEBPACK_IMPORTED_MODULE_3__.$)("relative",styles,{"rounded-full overflow-hidden border-4 border-gray-300 hover:border-second":isCircle,"w-full h-full":autoSize,[`w-[${null==fixedSize?void 0:fixedSize.width}px] h-[${null==fixedSize?void 0:fixedSize.height}px]`]:fixedSize&&!autoSize});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:containerStyles,onMouseEnter:toggleHover,onMouseLeave:toggleHover,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__.A,{src,alt,fill:autoSize,width:null==fixedSize?void 0:fixedSize.width,height:null==fixedSize?void 0:fixedSize.height,style:{objectFit:"cover"},className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.$)("transition-opacity duration-300",{"opacity-50":hovered&&children}),placeholder:isBlur?"blur":"empty",blurDataURL:isBlur?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkNA3fBAACLQFJQfEBVAAAAABJRU5ErkJggg==":void 0,...res}),hovered&&children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute inset-0 flex items-center bg-black bg-opacity-50 text-white p-4",children})]})};Photo.__docgenInfo={description:"",methods:[],displayName:"Photo",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},styles:{required:!1,tsType:{name:"string"},description:""},isCircle:{required:!1,tsType:{name:"boolean"},description:""},fixedSize:{required:!1,tsType:{name:"signature",type:"object",raw:"{ width: number; height: number }",signature:{properties:[{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]}},description:""},autoSize:{required:!1,tsType:{name:"boolean"},description:""},isBlur:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ImageProps"]}}}]);