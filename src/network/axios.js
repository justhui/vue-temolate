import axios from "axios";

export default function http(option) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: "", //设置请求的根地址
      timeout: 5000
    });

    // 1.1配置请求拦截
    instance.interceptors.request.use(
      config => {
        // 1.1.1.添加一个loading组件, 可以使用element-ui中的loading组件,或者第三方的插件，如NProgress
        // Loading.service(options); //options为配置参数
        // NProgress.start();

        // 1.1.2.为每一次请求添加token，从sessionStorage中获取
        // config.headers.Authorization = window.sessionStorage.getItem('token')
        // 在最后必须 return config
        return config;
      },
      err => {
        return err;
      }
    );

    // 配置响应拦截
    instance.interceptors.response.use(
      response => {
        return response.data;
      },
      err => {
        console.log(err);
        // 此处可以添加一个函数，与后端预定好错误code码，针对错误进行相应的文字提示
        /**
         * 错误码较多时，可以抽离成一个函数
         */
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = "请求错误";
              break;
            case 401:
              err.message = "未授权的访问";
              break;
          }
        }
        return err;
      }
    );

    // 2.传入对象进行网络请求
    instance(option)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
