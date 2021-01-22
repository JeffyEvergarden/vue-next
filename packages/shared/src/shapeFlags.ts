export const enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1, // 2 函数组件
  STATEFUL_COMPONENT = 1 << 2, // 4  状态组件
  TEXT_CHILDREN = 1 << 3, // 8 文本孩子
  ARRAY_CHILDREN = 1 << 4, // 16 数组孩子
  SLOTS_CHILDREN = 1 << 5, // 32 插槽孩子
  TELEPORT = 1 << 6, // 传送
  SUSPENSE = 1 << 7, // 悬念
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8, // 应该缓存的组件
  COMPONENT_KEPT_ALIVE = 1 << 9, // 被缓存的组件
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
