# uniappDemo

```text
┌─components            符合vue组件规范的uni-app组件目录
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意： 静态资源只能存放于此
├─request               网络请求封装目录
├─uni_modules           存放[uni_module](/uni_modules)规范的插件。
├─config                配置的公共方法(模态框的封装)
├─wxcomponents          存放小程序组件的目录，详见
├─main.js               Vue初始化入口文件(全局挂载 $message 和 $http)更多复用功能也可写入
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
```  

具体可参照 [uniapp小程序开发的超长实践总结](https://juejin.cn/post/7020680215009427470?utm_source=gold_browser_extension)
