## webpack-cli(基于webpack + vue + es6的多页面构建模板)

### 这个只是基于webpack，暂时并没有包含node相关配合使用

这里将结合具体的项目，说明一下我是如何配置的。我们希望能在项目里做到

 - 只需维护一张webpack-base.json文件，就可以进行开发
 - 静态资源就近维护
 - 采用vue + es6的方式进行组件模块化开发
 - 生成自动引用webpack打包好的js文件到项目需要的目录
 - 具有良好的开发支持，拥有如vue模块的热替换

### 项目目录结构

    ├─Application (根目录)
        │
        ├─build (打包资源文件目录)
        │  ├─image
        │  ├─javascript
        │  ├─style
        │  └─views
        ├─client (前端开发目录)
        │    ├─bower (需要依赖的第三方类库或框架和公共图片资源)
        │    │  ├─image
        │    │  ├─javascript
        │    │  └─style
        │    ├─components (vue公共组件目录)
        │    │  ├─A
        │    │  │ ├─A.vue
        │    │  │
        │    │  └─B
        │    │    ├─B.vue
        │    │
        │    └─views (一个业务模块,每个业务下可能有多个页面)
        │        ├─index
        │        │  ├─home
        │        │     ├─components(vue组件目录)
        │        │     ├─image(图片目录)
        │        │     ├─index.html(页面)
        │        │     ├─index.js(js代码)
        │        │     └─index.less(css、less)
        │        │  ├─404
        │        │     ├─components(vue组件目录)
        │        │     ├─image(图片目录)
        │        │     ├─index.html(页面)
        │        │     ├─index.js(js代码)
        │        │     └─index.less(css、less)
        │        └─...
        ├─webpack-config (webpack配置目录)
        │    ├─base (基础配置)
        │    │
        │    ├─module (模块配置)
        │    │
        │    └─util (工具方法)