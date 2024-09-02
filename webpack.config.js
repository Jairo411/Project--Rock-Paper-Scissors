const path = require('path');

module.exports={
    entry: './src/main-script.js',
    output:{
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
    },

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
        },
        ],
    },
};

