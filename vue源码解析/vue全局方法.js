function initGlobalAPI (Vue: GlobalAPI) {
  // config    只读属性
  Vue.config = {
    optionMergeStrategies: Object.create(null),
    silent: false,
    productionTip: process.env.NODE_ENV !== 'production',
    devtools: process.env.NODE_ENV !== 'production',
    performance: false,
    errorHandler: null,
    warnHandler: null,
    ignoredElements: [],
    keyCodes: Object.create(null),
    isReservedTag: no,
    isReservedAttr: no,
    isUnknownElement: no,
    getTagNamespace: noop,
    parsePlatformTagName: identity,
    mustUseProp: no,
    async: true,
    _lifecycleHooks: LIFECYCLE_HOOKS
  }


  // 暴露的使用方法
  // 注意：这些不是公共API的一部分-避免依赖,除非你意识到风险。
  // util/index'
  Vue.util = {
    warn,
    extend,
    mergeOptions,
    defineReactive
  }

  

  // observer/index  set
  Vue.set = function set (target: Array<any> | Object, key: any, val: any): any {
    return val
  }

  // observer/index  del
  Vue.delete = function del (target: Array<any> | Object, key: any) {
  
  }
  
  // util/next-tick
  Vue.nextTick = {
    function nextTick (cb?: Function, ctx?: Object) {}
    let isUsingMicroTask = false
  }

  // 2.6 explicit observable API
  Vue.observable = () => {}

  Vue.options = {
    components: {
      KeepAlive
    },
    directives,
    filters,
    _base
  }

  // initUse(Vue);
  Vue.use = function (plugin: Function | Object) {
    
  }
  // initMixin(Vue)
  Vue.mixin = function (mixin: Object) {
    
  }
  // initExtend(Vue)
  Vue.cid = 0
  Vue.extend = function (extendOptions: Object): Function {
  }
  //initAssetRegisters(Vue)
  Vue.component = function (id: string,definition: Function | Object) {

  }
  Vue.directive = function (id: string,definition: Function | Object) {
    
  }
  Vue.filter = function (id: string,definition: Function | Object) {
    
  }
}

Vue.version = '__VERSION__'