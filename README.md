环境：
	node.js
	
文件说明：
	1、package.json  //npm 依赖
	2、webpack.config.js  //development模式下的webpack配置文件
	3、webpack.production.config.js   //production模式下的webpack配置文件
	4、.babelrc  //配置模块的解析类型
	
打包命令：
	npm start	//等同于 webpack
	npm run server 	//热编译
	npm run build 	//生产环境下打包
	
步骤1：
	npm install  （下载所需要的包）

步骤2：
	根据自己的项目目录结构，修改webpack.config.json内入口文件（entry），出口文件（path），nodejs服务器位置的目录（contentBase）
	
	
注意(package.json):
	如果是linux，build需要配置为"build": "NODE_ENV=production webpack --config ./webpack.production.config.js --progress"
	如果是window，build需要配置为"build": "set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress"


