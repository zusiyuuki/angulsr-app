const Product = require('./model/product')

class FakeDb {
    constructor(){
        this.products =[
            {
                coverimage:'./assets/img/phone-cover.jpg',
                name:'Phone XL',
                price:799,
                description:'Phone XL商品説明欄',
                heding1:'サンプルテキスト１',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                hedingtext1:'Phone XLのサイズは pheneシリーズの中で最も大きいダイナミックな画面',
                hedingtext2:'高画質な４ｋ画質であなたのその手に美しい世界をお見せします',
                hedingtext3:'あなたの毎日を止めない大容量のバッテリー'
            },
                
            {
                coverimage:'./assets/img/phone-cover.jpg',
                name:'Phone Mini',
                price:699,
                description:'Phone Mini商品説明欄',
                heding1:'サンプルテキスト１',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                hedingtext1:'Phone Miniは最小サイズのphoneシリーズで、あたなにコンパクトで手軽なデジタルの世界を実現します。',
                hedingtext2:'小さく頑丈なガラスのオリジナルフレームで、頑丈さを',
                hedingtext3:'あなたの毎日を止めない大容量のバッテリー',
               
            },
        
            {
                coverimage:'./assets/img/phone-cover.jpg',
                name:'Phone Standard',
                price:299,
                description:'Phone Standard商品説明欄',
                heding1:'サンプルテキスト１',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                hedingtext1:'Phone XLのサイズは pheneシリーズの中で最も大きいダイナミックな画面',
                hedingtext2:'高画質な４ｋ画質であなたのその手に美しい世界をお見せします',
                hedingtext3:'あなたの毎日を止めない大容量のバッテリー'
                
            },
        
            {
                coverimage:'./assets/img/phone-cover.jpg',
                name:'Phone Special',
                price:999,
                description:'Phone Special商品説明欄',
                heding1:'サンプルテキスト１',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                hedingtext1:'Phone XLのサイズは pheneシリーズの中で最も大きいダイナミックな画面',
                hedingtext2:'高画質な４ｋ画質であなたのその手に美しい世界をお見せします',
                hedingtext3:'あなたの毎日を止めない大容量のバッテリー'
        
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
