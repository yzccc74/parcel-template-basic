// ESM (브라우저) _ import, export
// commonJS (NodeJS환경) _ require(), module.exports


// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

// export {
// 	plugins: [
// 		autoprefixer
// 	]
// }
// module.exports = {
// 	plugins: [
// 		autoprefixer
// 	]
// }


module.exports = {
	plugins: [
		require('autoprefixer')
	]
}