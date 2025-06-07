const base = {
    get() {
        return {
            url : "http://localhost:8080/xinguankangyuanzc/",
            name: "xinguankangyuanzc",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xinguankangyuanzc/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "新冠抗原自测平台小程序"
        } 
    }
}
export default base
