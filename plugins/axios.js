import Vue from 'vue'
import axios from 'axios'
import { post, fetch, patch, put } from './http'

//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;


