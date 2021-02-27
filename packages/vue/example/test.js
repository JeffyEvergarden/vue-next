// 根组件以状态组件的形式存在
// type的可选值  Symbol(Text) / Comment / Static / Fragment / 包含 data方法 和template
const firstDiv = {
  anchor: null,
  appContext: null,
  children: null,
  component: null,
  dirs: null,
  dynamicChildren: null,
  dynamicProps: null,
  el: null,
  key: null,
  patchFlag: 0,
  props: null,
  ref: null,
  scopeId: null,
  shapeFlag: 4,
  ssContent: null,
  ssFallback: null,
  staticCount: 0,
  suspense: null,
  target: null,
  targetAnchor: null,
  transition: null,
  type: {
    template:
      "<p>{{msg}}</p>↵    <div>静态组件</div>↵    <stati…    <!-- <func-comp level='1'></func-comp> -->",
    data: function() {}
  },
  __v_isVNode: true,
  __v_skip: true
}
// renderComponentRoot执行的时候
// 根节点会是以下
// {
//   anchor: null
//   appContext: null
//   children: (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//   component: null
//   dirs: null
//   dynamicChildren: (5) [{…}, {…}, {…}, {…}, {…}]
//   dynamicProps: null
//   el: null
//   key: null
//   patchFlag: 64
//   props: null
//   ref: null
//   scopeId: null
//   shapeFlag: 16
//   ssContent: null
//   ssFallback: null
//   staticCount: 0
//   suspense: null
//   target: null
//   targetAnchor: null
//   transition: null
//   type: Symbol(Fragment)
//   __v_isVNode: true
//   __v_skip: true
//   __proto__: Object
// }
