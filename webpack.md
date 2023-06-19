1. core
entry webpack.config.js 定义了一系列的参数来规定打包的入口 mode 出口 等等
loader 帮助webpack理解css ts 执行的顺序是从下到上 
plugin 加强能力 例如打包优化 环境变量的注入

2. 流程
首先定义一些参数 input 和 output
其次配置loader 包括less css ts的 注意 ts的loader需要额外配置babel的参数
语法是 module{rukes:[{test:"匹配的规则", use:"[loader]"}]}
ts的loader也一样 但是要在里面配置babel的bable-loader
旧版本话需要配置图和文件的laoder 但是web5 不配了
原因是 web5新增了 资源模块 可以直接使用这些文件
之前是用raw loader导入为字符串然后url loader把数据的url加到bundle里再用file loader把文件发给目标的目录
## 区别在哪 loader和moduel
然后配plugin 在pluin里传递一个数组 每个元素都是plugin的一个实例

HtmlWebpackPlugin：这是一个用于生成 HTML 文件的插件。它会根据提供的模板创建一个 HTML 文件，并自动将生成的打包文件（例如 JavaScript 和 CSS 文件）添加到 HTML 中。

MiniCssExtractPlugin：这是一个用于提取 CSS 代码到单独文件的插件。它将 CSS 从打包的 JavaScript 文件中提取出来，生成一个独立的 CSS 文件。这有助于优化加载性能，使得浏览器可以并行下载 JavaScript 和 CSS 文件。
=》 css js的下载会阻塞 html的解析 css的解析不会影响html js的解析会影响html css放在js下 js有可能修改css css的下载会影响js的执行 因为js有可能操作css
=》 优化：
1 http20
2 预解析 先分析html要使用的css js然后提前下载
3 CDN加速 这种静态资源可以放在cdn上
4 async defer 异步下载 derfer是全部做完在执行


## 后面这段咋加上去的
## sourcemap
## dev 是怎么实现的