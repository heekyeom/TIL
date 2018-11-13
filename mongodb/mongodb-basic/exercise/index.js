const mongoose=require('mongoose');
mongoose
.connect(
    'mongodb://localhost/exercise-basic',
    {useNewUrlParser: true}
)
.then(()=>{
    console.log(`Connected to mongoDB`);
})
.catch(error => console.error(error))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price:Number
});

const Course = mongoose.model("Course", courseSchema);

// 1. publish 된 course 들 중에서 backend 코스인 것들을,
// 2. 이름 오름차순으로 정렬하고,
// 3. name 과 author 만을,
// 4. 출력해보자구!
async function  getEx1() {
    const result=await Course
    .find({isPublished: true})
    .find({tags:'backend'})
    .sort({name: 1})
    .select({name:1 ,author:1});
    console.log(result);
}

// 1. publish 된 course 들 중에서 backend 와 frontend 모두를,
// 2. price 내림차순으로,
// 3. name 과 price 만,
// 4. 출력해보자구!
async function  getEx2() {
    const result=await Course
    .find({isPublished: true})
    .or([{tags:'backend'},{tags:'frontend'}])
    .sort({price: -1}) //.sort('-price')
    .select({name:1 ,price:1}); //.select('name price')

    console.log(result);
}
// 1. 모든 course 들 중에서
// 2. price 15 이상이거나,
// 3. name 에 대소문자 구분없이 'js' 가 들어간 강의들을,
// 4. 출력해보자구!
async function  getEx3() {
    const result=await Course
    .find()
    .or({ price: { $gte: 15 } }, { name: /js/i });
    console.log(result);
}

getEx1();
getEx2();
getEx3();