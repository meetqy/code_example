function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    
  }
}

function stateMixin (Vue: Class<Component>) {
  Object.defineProperty(Vue.prototype, '$data', dataDef)
  Object.defineProperty(Vue.prototype, '$props', propsDef)
  Vue.prototype.$set = set
  Vue.prototype.$delete = del
  Vue.prototype.$watch = function (expOrFn: string | Function,cb: any,options?: Object): Function {

  }
}

function eventsMixin (Vue: Class<Component>) {
  Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {}
  Vue.prototype.$once = function (event: string, fn: Function): Component {}
  Vue.prototype.$off = function (event?: string | Array<string>, fn?: Function): Component {}
  Vue.prototype.$emit = function (event: string): Component {}
}


function lifecycleMixin (Vue: Class<Component>) {
  Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {}
  Vue.prototype.$forceUpdate = function () {}
  Vue.prototype.$destroy = function () {}
}

function renderMixin (Vue: Class<Component>) {
  // instance/render-helpers          installRenderHelpers   
  Vue.prototype._o = markOnce
  Vue.prototype._n = toNumber
  Vue.prototype._s = toString
  Vue.prototype._l = renderList
  Vue.prototype._t = renderSlot
  Vue.prototype._q = looseEqual
  Vue.prototype._i = looseIndexOf
  Vue.prototype._m = renderStatic
  Vue.prototype._f = resolveFilter
  Vue.prototype._k = checkKeyCodes
  Vue.prototype._b = bindObjectProps
  Vue.prototype._v = createTextVNode
  Vue.prototype._e = createEmptyVNode
  Vue.prototype._u = resolveScopedSlots
  Vue.prototype._g = bindObjectListeners
  Vue.prototype._d = bindDynamicKeys
  Vue.prototype._p = prependModifier


  Vue.prototype.$nextTick = function (fn: Function) {}
  Vue.prototype._render = function (): VNode {}
}