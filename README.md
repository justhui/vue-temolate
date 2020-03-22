
## 中后台管理模板

#### 引入normalize.css进行样式重置

### 配置部分

1. 配置文件别名, vue.config.js中的alias 属性;
2. 路由中添加前置守卫，用于做每次跳转的加载提示，token及权限验证；


### 功能一：动态添加路由导航菜单

文件：@/layouts
      SubMenu为函数式组件

注意：按需引入element-ui，需要配置babel.congfig.js

1. 为方便简化涉及，采用element-ui的navMenu组件做布局设计
2. 通过在routes中定义title及icon来提供数据支持
3. 通过组件递归的方式，实现动态多级

### 功能二：封装一个echart

文件：@/components/common/

1. 引入内置插件lodash 做防抖
2. 引入resize-detector 插件 实现浏览器的宽度监听;
3. 将每一个echart抽出成一个js模块，方便引用;
4. 难点在于：利用vue的生命周期对echart中的定时器以及监听进行销毁；同时利用防抖优化性能；


### 功能三：封装一个axios请求
  @/api/axios

1. 配置基础接口，及请求时间
2. 创建一个axios的实例，将每个请求的接口分开到js模块中；
3. 每次使用通过import {xxx} from xxx 的形式使用；
4. axios中可以进行拦截，对token进行验证，并添加token;
5. 请求错误对应错误码进行提示


### 功能四： 使用mock进行数据接口模拟

1. 创建一个mock文件夹，并在vue.config.js中添加配置 proxy中的else部分
2. 配置mock与真实环境api的切换 （注意，接口名与后端保持一致）
  2.1. 安装插件cross-env,使之在windows环境下生效；
  2.2. 修改pack.json的配置

### 功能五： 配置本地和线上的打包环境




## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```
### ### Compiles and hot-reloads for mock data
```
yarn run mock
```

### Compiles and minifies for production
```
yarn run build
```