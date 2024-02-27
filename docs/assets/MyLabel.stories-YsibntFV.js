import{j as x}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const l=({label:s,size:h,allCaps:z,...t})=>x.jsx("span",{style:{backgroundColor:`${t.fontColor}`},className:`${h} ${t.color}`,children:z?s.toUpperCase():s});try{l.displayName="MyLabel",l.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Este es el mensaje a mostrar en la etiqueta.",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"Este es el tamaño de la etiqueta",name:"size",required:!0,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:null,description:"Todo mayuscula",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Colores basicos",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Colores de la etiqueta",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const L={title:"MyLabel",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Hola Como estas",size:"h1"}},a={args:{label:"All Caps",size:"h1",allCaps:!0}},r={args:{label:"Secondary Label",size:"h1",color:"text-secondary"}},o={args:{label:"CustomColor Label",size:"h1",fontColor:"#5517ac"}};var n,c,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Hola Como estas',
    size: "h1"
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'All Caps',
    size: "h1",
    allCaps: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,C,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    size: "h1",
    color: "text-secondary"
  }
}`,...(y=(C=r.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var b,g,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'CustomColor Label',
    size: "h1",
    fontColor: "#5517ac"
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const S=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,o as CustomColor,r as Secondary,S as __namedExportsOrder,L as default};
