/**
 * ES6的一个导出方式
 * 其他js文件中导入，使用： import request from '/service/network.js'
 * import 方法名 from '文件名'
 */
export default function request(options){
	return new Promise(
		(resolve,reject)=>{
			wx.request({
				url: options.url,
				method: options.method || 'get',
				data: options.data || {},
				sucess: resolve,
				fail: reject
				// success:function(res){
				// 	console.log("request-----res",res);
				// 	resolve(res);
				// },
				// fail:function(err){
				// 	console.log("request-----err",err);
				// 	reject(err);
				// }
			})
		}
	)
}