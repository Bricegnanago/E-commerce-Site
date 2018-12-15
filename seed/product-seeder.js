var mongoose = require('mongoose')
var Product = require('../models/product')

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true })
var products = [
        new Product({
            imagePath : 'http://image.jeuxvideo.com/images-sm/pc/g/o/gothpc0f.jpg',
            title : 'Gothic Video Game',
            description : 'La guerre fait rage dans le royaume de Myrtana. Les hordes orques ont envahi le territoire humain et le roi de cette terre a besoin de beaucoup de minerais pour forger assez d\'armes afin que son armée puisse faire face à cette menace.',
            price : 1050
        }),
        new Product({
            imagePath : 'https://images-na.ssl-images-amazon.com/images/I/51po2bu7VnL.jpg',
            title : 'The God Of War',
            description : 'Le Dieu de la guerre a changé… il n\'est plus le Kratos que vous connaissiez. Une route inconnue et hostile vous attend dans cette nouvelle réadaptation ébouriffante de l\'histoire culte.',
            price :   149
        }),
        new Product({
            imagePath : 'https://cms.qz.com/wp-content/uploads/2017/11/lord-of-the-rings-e1510686480965.jpg?quality=75&strip=all&w=410&h=231',
            title : 'The Lord of Rings',
            description : 'Dans Le Seigneur des Anneaux : Le Jeu de Cartes, les joueurs dirigent un groupe d\'aventuriers essayant d\'accomplir des quêtes périlleuses dans la Terre du Milieu...',
            price :   69
        }),
        new Product({
            imagePath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkv81dv7bEM-luzLTbvqWdH-ttfMIPsFa4n6A2JKWO07SIvztx',
            title : 'Spinter Cell',
            description : 'The best-selling Tom Clancy\'s Splinter Cell saga takes on an entirely new direction. In the highly anticipated sequel to the 2005 game of the year, Tom Clancy\'s Splinter Cell Double Agent, play as a double agent spy for the first time ever. Take on dual roles of covert operative and ruthless terrorist, where your choices of whom to betray and whom to protect actually affect the outcome of your game. Experience the relentless tension and gut-wrenching dilemmas of life as a double agent.',
            price :   29.99
        }),
        
        new Product({
            imagePath : 'https://f.allegroimg.com/s512/0315c3/dfbda97c45b4b4ba1d77d3ac772f',
            title : 'Game Of Thrones',
            description : 'Vivez une aventure exceptionnelle dans l\'un des univers les plus aboutis et passionnants de la littérature médievale-fantastique. Game of Thrones est un grand jeu de rôle qui vous entrainera au cœur d’une intrigue captivante, où votre destin sera guidé par la vengeance, l’allégeance et l’honneur.',
            price :   29
        }),
        new Product({
            imagePath : 'http://image.jeuxvideo.com/medias-sm/148164/1481635179-3375-jaquette-avant.jpg',
            title : 'Hitman',
            description : 'Le monde est votre arme Il n\'y a que dans HITMAN(Tm) que vous pouvez utiliser tous les éléments de votre environnement pour exécuter l\'assassinat parfait : discrétion, sabotage et plein d\'autres stratégies sont à votre disposition pour transformer votre créativité en une arme mortelle.',
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