import http from '../http/http.js'

// 全局
export const globalApi = {
  // 测试
  apiTest (params) {
    return http.get('/test', params)
  }
}
