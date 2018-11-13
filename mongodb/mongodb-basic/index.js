const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/hello-mongo',{useNewUrlParser : true})
.then(()=>{ console.log(`Connected to mongoDB`)})
.catch((error)=>{ console.error(error.message)});

/* Availaable Schema Datatypes
  String, Number, Date, Buffer, Boolean, ObjectID, Array */
  /**
   * mongoDB는 자체적으로 필터 기능이 없다. 그냥 종이다. 들어오는 값 다 입력한다.
   * 필터를 해주는 것은 mongoose라는 것이다.
   */
const courseSchema=new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
})

const Course=mongoose.model('Course', courseSchema); //model의 이름은 Course고 틀(스키마)는 위에 정의한 것으로 하겠다.
const course=new Course({
    name:'실전 dapp 빌드',
    author: 'hee',
    tags: ['Ethereum','Blockchain','DApp'],
    isPublished: true
})

course.save()
.then(result=>console.log(result))
.catch(error=>console.error(error));

