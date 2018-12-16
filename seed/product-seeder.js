var mongoose = require('mongoose')
var Product = require('../models/product')

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true })
var products = [
        new Product({
            imagePath : 'http://image.jeuxvideo.com/images-sm/pc/g/o/gothpc0f.jpg',
            title : 'Gothic Video Game',
            description : 'La guerre fait rage dans le royaume de Myrtana.',
            price : 1050
        }),
        new Product({
            imagePath : 'https://images-na.ssl-images-amazon.com/images/I/51po2bu7VnL.jpg',
            title : 'The God Of War',
            description : 'Le Dieu de la guerre a changé…',
            price :   149
        }),
        new Product({
            imagePath : 'https://cms.qz.com/wp-content/uploads/2017/11/lord-of-the-rings-e1510686480965.jpg?quality=75&strip=all&w=410&h=231',
            title : 'The Lord of Rings',
            description : 'Dans Le Seigneur des Anneaux : Le Jeu de Cartes,...',
            price :   69
        }),
        new Product({
            imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkv81dv7bEM-luzLTbvqWdH-ttfMIPsFa4n6A2JKWO07SIvztx',
            title : 'Spinter Cell',
            description : 'The best-selling Tom Clancy\'s Splinter Cell saga takes...',
            price :   29.99
        }),
        
        new Product({
            imagePath : 'https://f.allegroimg.com/s512/0315c3/dfbda97c45b4b4ba1d77d3ac772f',
            title : 'Game Of Thrones',
            description : 'Vivez une aventure exceptionnelle dans l\'un des univers...',
            price :   29
        }),
        new Product({
            imagePath : 'http://image.jeuxvideo.com/medias-sm/148164/1481635179-3375-jaquette-avant.jpg',
            title : 'Hitman',
            description : 'Le monde est votre arme Il n\'y a que dans HITMAN(Tm) .',
            price :   51
        })
    ];

    var done = 0;
    for(var i = 0 ; i < products.length ; i++){
        products[i].save((err , result) => {
            if (err) throw err;
            if(done === products.length)
                exit();
        })
    }

    function exit(){
        mongoose.disconnect();
    }