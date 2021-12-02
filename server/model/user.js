const mongoose = require('mongoose')
const Schema =mongoose.Schema
const bcrypt = require('bcryptjs');

//ユーザー登録時の項目のデータ型と制約の設定箇所
const UserSchema =new Schema({
       // ユーザー名に関する指定箇所
       username:{
           type:String,
           required:true,
           max:[60,'ユーザー名は60文字までです'],
       },
       //Eメールに関する指定箇所
       email:{
           type:String,
           required:true,
           lowercase:true,
           unique:true,
           max:[60,'Eメールは最大60文字までです'],
       },
       //パスワードに関する指定箇所
       password:{
        type:String,
        required:true,
        min:[6,'パスワードは６文字以上に設定してください'],
        max:[60,'ユーザー名は60文字までです'],

       },

})

UserSchema.methods.hasSamePassword = function(inputPassword){
    const user =this
    return bcrypt.compareSync(inputPassword,user.password)
}

UserSchema.pre('save',function(next){
    const user =this
    const saltRounds =10

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
        user.password=hash
        next()

    });
});

})


module.exports=mongoose.model('User',UserSchema)
