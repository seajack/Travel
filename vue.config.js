let express = require('express');

const app = express();

let appData = '@/assets/city.json';
let hotCities = appData.hotCities;

let apiRoutes = express.Router();
app.use('/api', apiRoutes);

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'styles': '@/assets/styles',
				'views': '@/views',
			}
		}
	},
	devServer: {
		// port: 1000,
		// open: true,
		// before(app) {
		// 	app.get('/api/city', function (req, res) {
		// 		res.json({code: 0, data: hotCities});
		//
		// 	});
		// }
		/*proxy:{
		 	'/api':{
		 		target: 'http://localhost:8080',
		 		// changeOrigin: true,
		 		// ws:true,
		 		pathRewrite:{
		 			'^/api': './mock'
		 		}
		 	}
		 }*/
	}
}
