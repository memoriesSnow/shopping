import http from './http';
// 专门写details组件的请求接口
export const listObj = {
    getList:() => http.get('/allData'),
}