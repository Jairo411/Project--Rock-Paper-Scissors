const path = require('path');

module.exports={
    mode: 'development',
    entry: './src/main-script.js',
    output:{
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
    },

    devtool: 'inline-source-map',


    devServer:{
        static:{
            directory: path.join(__dirname,'dist'),
        },
        compress:true,
        port:9000,
    },
    module:{
        rules:[
        {
            test: /\.png/,
            type: 'asset/resource',
        },
        {
            test:/\.css$/i,
            use:['style-loader', 'css-loader'], 
        }
        ],
    },
};

