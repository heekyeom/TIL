const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/relation2',{useNewUrlParser:true})
.then(()=>{ console.log('Connected to MongoDB')})
.catch(error=>{console.error(error.message)});

const authorSchema=new mongoose.Schema({
    name:{
        type: String,
    }
});
const courseSchema=new mongoose.Schema({
    name: {
        type: String
    },
    author:authorSchema  // 다 대 1,   [authorSchema] 다 대 다  
});
const Author=mongoose.model('Author',authorSchema);
const Course=mongoose.model('Course',courseSchema);

async function createCourse(name, author){
    const course=new Course({name, author});
    try {
        const result=await course.save();
        console.log(result);
    } catch (error) {
        console.error(error.message);
        
    }
}

async function listCourses(){
    try {
        const result=await Course.find();
        console.log(result);
    } catch (error) {
        console.error(error.message)   
    }
}

createCourse('hyperledger',new Author({name:'heek'}))
// listCourses();