const Product = require('./model/product')

//音性コンテンツのデータベース
class FakeDb {
    constructor(){
        this.products =[
            //宇宙の音のデータベース箇所
            {
                coverimage:'./assets/img/spase.jpg',
                coverimage1:'./assets/img/spase.jpg',
                coverimage2:'./assets/img/u2.jpg',
                coverimage3:'./assets/img/u3.jpg',
                name:'宇宙の音',
                price:699,
                description:'宇宙の中であなたの思考に休息を',
                heding1:'宇宙の音',
                heding2:'水と宇宙の音',
                heding3:'銀河の音',
                hedingtext1:'音はあなたの睡眠をより良い物にし、思考を高めてくれるかもしれません。',
                hedingtext2:'睡眠を改善して休息をあたえまししょう。',
                hedingtext3:'睡眠を改善することで生産性やストレスの改善にも繋がります。',
                sound:'./assets/sound/utilyuu.mp3',
                sound2:'./assets/sound/u4.mp3',
                sound3:'./assets/sound/u3.mp3',
                soundtext:'この音は瞑想にも使うことができる宇宙の音です。音によるリラックスは、体にも大き影響を与えます。',
                soundtext2:'水と宇宙の音で心を落ち着けましょう。水は古来より人類の反映を支えてきた自然の１つです。川や海など水辺で反映してきた人間にとって水は生きていけるという安心感を与えてくれる音の一つでもあります。',
                soundtext3:'銀河の音で、夕方な時間を過ごしませんか？浮遊感のある音楽はあなたの睡眠にも良い影響を与えるでしょう',
            },
            //自然の音のデータベース箇所
            {
                coverimage:'./assets/img/antoine-barres.jpg',
                coverimage1:'./assets/img/bird.jpg',
                coverimage2:'./assets/img/reinn.jpg',
                coverimage3:'./assets/img/blaze.jpg',
                name:'自然の音',
                price:299,
                description:'自然の音で心を癒す',
                heding1:'鳥のさえずり',
                heding2:'雨の音',
                heding3:'薪の音',
                hedingtext1:'音はあなたの睡眠をより良い物にし、思考を高めてくれるかもしれません。',
                hedingtext2:'睡眠を改善して休息をあたえまししょう。',
                hedingtext3:'睡眠を改善することで生産性やストレスの改善にも繋がります。',
                sound:'./assets/sound/bird.mp3',
                sound2:'./assets/sound/reinn.mp3',
                sound3:'./assets/sound/blaze.mp3',
                soundtext:'鳥のさえずり、それは自然が生み出す優雅な音楽。近年の研究では、ネガティブな感情を抑えポジティブな考えを高める効果のあるとして注目される音でもあります。',
                soundtext2:'雨の音それは自然が与えてくれる恵の音。水は古来より人類の反映を支えてきた自然の１つです。川や海など水辺で反映してきた人間にとって水は生きていけるという安心感を与えてくれる音の一つでもあります。',
                soundtext3:'薪の音は恐怖を和らげる効果のある特殊な音です。人間は他の動物の脅威から逃れる力として火を利用してきました。薪の音をきくことで、火が恐怖から守ってくれるという心地よい感覚を得られるでしょう',
            },
            
            //楽器の音のデータベース箇所
            {
                coverimage:'./assets/img/piano.jpg',
                coverimage1:'./assets/img/piano.jpg',
                coverimage2:'./assets/img/ziyazu.jpg',
                coverimage3:'./assets/img/orugouru.jpg',
                name:'楽器と演奏',
                price:999,
                description:'楽器で癒しの空間を作る',
                heding1:'ピアノの音',
                heding2:'ジャズの音',
                heding3:'オルゴールの音',
                hedingtext1:'音はあなたの睡眠をより良い物にし、思考を高めてくれるかもしれません。',
                hedingtext2:'睡眠を改善して休息をあたえまししょう。',
                hedingtext3:'睡眠を改善することで生産性やストレスの改善にも繋がります。',
                sound:'./assets/sound/piano1.mp3',
                sound2:'./assets/sound/ziyazu.mp3',
                sound3:'./assets/sound/orugouru.mp3',
                soundtext:'ピアノの音は脳の発育にも良いとされる音。音を聞き分けることで、リスニングの能力も上がる効果のあるとされてます',
                soundtext2:'ジャズは創造的な思考の高まる音楽とされています。自由な弾き方を体現するジャズの音楽は創造性を高めて、あなたに素敵なアイデアを思いつかせてくれるかもしれませんよ。',
                soundtext3:'オルゴールの音は心のケアにも利用される音。オルゴール療法といい医療の現場でも実際に使われています。心を癒し安らぎを感じましょう',
        
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
