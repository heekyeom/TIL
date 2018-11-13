const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://localhost/hello-mongo",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(`Connected to mongoDB`);
  })
  .catch(error => {
    console.error(error.message);
  });

/* Availaable Schema Datatypes
  String, Number, Date, Buffer, Boolean, ObjectID, Array */
/**
 * mongoDB는 자체적으로 필터 기능이 없다. 그냥 종이다. 들어오는 값 다 입력한다.
 * 필터를 해주는 것은 mongoose라는 것이다.
 */
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema); //model의 이름은 Course고 틀(스키마)는 위에 정의한 것으로 하겠다.
const course = new Course({
  name: "실전 dapp 빌드",
  author: "hee",
  tags: ["Ethereum", "Blockchain", "DApp"],
  isPublished: true
});

// course.save()
// .then(result=>console.log(result))
// .catch(error=>console.error(error));

async function createCourse() {
  const course = new Course({
    name: "실전 dapp 빌드",
    author: "hee",
    tags: ["Ethereum", "Blockchain", "DApp"],
    isPublished: true
  });
  try {
    const result = await course.save();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

async function getCourses(){
    const courses = await Course
    //.find({ price : { $lt15, $gt10 }})   price가 10을 초과 15미만하는 것만.
    //.find({ price : { $in [10, 15] }})   price가 10을 초과하는 것만.
    // .find({isPublished: true})     //course 중 isPublished가 true인 것만.
    // .limit(10)              // 10개 까지만 가져옴.
    // .sort({ name: -1 })      //이름을 기준으로 정렬을 하되, -1 즉 역순으로 정렬.
    // .select({ name: 1, tags: 1})
    // .find({ author: /^ne/})     //ne로 시작하는.
    // .find({ author: /hn$/})     //hn으로 끝나는.
    // .find({ autor: /.*on.*/ })   //on이 붙어있는 어떤 문자열들 다
    // .count()  // 몇개가 나왔는지.
    console.log(courses);
}
/**비교 쿼리 연산자
 * $eq : 같은
 * $neq: 같지 않은
 * $gt: 보다 큰
 * $gte: 보다 크거나 같은
 * $lt: 보다 작은
 * $lte: 보자 작거나 같은
 * $in : ~안에 있는지
 * $nin : ~안에 없는지.
 */

 /**논리 쿼리 연산자
  * .and : 
  * Course.find().and({author:'neo'},{isPublished: false}) 
  * .or : 
  * Course.find().or({author:'neo'},{isPublished: false}) 
  */

getCourses();