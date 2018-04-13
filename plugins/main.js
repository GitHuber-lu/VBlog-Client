import Vue from 'vue'
import axios from 'axios'
import { post, fetch, patch, put } from './http'

// UEditor
if (process.browser) {
    require('../static/UE/ueditor.config.js');
    require('../static/UE/ueditor.all.min.js');
    require('../static/UE/lang/zh-cn/zh-cn.js');
    require('../static/UE/ueditor.parse.min.js');
    // require('../static/UE/third-party/codemirror/codemirror.js');
    // require('../static/UE/third-party/zeroclipboard/ZeroClipboard.js');
}

//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;


