const Product = require('./model/product')

class FakeDb {
    constructor(){
        this.products =[
            
            {
                coverimage:'./assets/img/spase.jpg',
                coverimage1:'./assets/img/spase.jpg',
                coverimage2:'./assets/img/u2.jpg',
                coverimage3:'./assets/img/u3.jpg',
                name:'宇宙の音',
                price:699,
                description:'宇宙の中であなたの思考に休息を',
                heding1:'サンプルテキスト１',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                hedingtext1:'Phone Miniは最小サイズのphoneシリーズで、あたなにコンパクトで手軽なデジタルの世界を実現します。',
                hedingtext2:'小さく頑丈なガラスのオリジナルフレームで、頑丈さを',
                hedingtext3:'あなたの毎日を止めない大容量のバッテリー',
                sound:'./assets/sound/utilyuu.mp3',
                sound2:'./assets/sound/u4.mp3',
                sound3:'./assets/sound/u3.mp3',
               
            },
        
            {
                coverimage:'./assets/img/antoine-barres.jpg',
                coverimage1:'./assets/img/bird.jpg',
                coverimage2:'./assets/img/reinn.jpg',
                coverimage3:'./assets/img/blaze.jpg',
                name:'自然の音',
                price:299,
                description:'自然の音で心を癒す',
                heding1:'サンプルテキスト１',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                hedingtext1:'Phone XLのサイズは pheneシリーズの中で最も大きいダイナミックな画面',
                hedingtext2:'高画質な４ｋ画質であなたのその手に美しい世界をお見せします',
                hedingtext3:'あなたの毎日を止めない大容量のバッテリー',
                sound:'./assets/sound/bird.mp3',
                sound2:'./assets/sound/reinn.mp3',
                sound3:'./assets/sound/blaze.mp3',
            },
        
            {
                coverimage:'./assets/img/piano.jpg',
                coverimage1:'./assets/img/piano.jpg',
                coverimage2:'./assets/img/ziyazu.jpg',
                coverimage3:'./assets/img/orugouru.jpg',
                name:'楽器と演奏',
                price:999,
                description:'楽器で癒しの空間を作る',
                heding1:'サンプルテキスト１',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                hedingtext1:'Phone XLのサイズは pheneシリーズの中で最も大きいダイナミックな画面',
                hedingtext2:'高画質な４ｋ画質であなたのその手に美しい世界をお見せします',
                hedingtext3:'あなたの毎日を止めない大容量のバッテリー',
                sound:'./assets/sound/piano1.mp3',
                sound2:'./assets/sound/ziyazu.mp3',
                sound3:'./assets/sound/orugouru.mp3',
        
            },

        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }
    
    async cleanDb(){
        await Product.deleteMany({})
    }

    pushProductsToDb(){
        this.products.forEach(
            (product)=>{
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

}

module.exports =FakeDb
