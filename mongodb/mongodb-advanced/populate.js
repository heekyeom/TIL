const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/relation',{useNewUrlParser:true})
.then(()=>{ console.log('Connected to MongoDB')})
.catch(error=>{console.error(error.message)});


const Author=mongoose.model('Author',new mongoose.Schema({
    name:{
        type: String,
        minlength: 2,
        required: true
    },
    github: String,
}));

const Course=mongoose.model('Course',new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}));

async function createAuthor(name, github){
    const author=new Author({
        name,
        github
    })
    try{
        const result=await author.save();
        console.log(result);
    }catch(err){
        console.error(err.message);
    }
}

async function createCourse(name, author){
    const course=new Course({
        name,
        author
    })
    try {
        const result = await course.save();
        console.log(result);
    } catch (err) {
        console.error(err.message);
    }
}

// createAuthor('heek','github@heek');
// const id=mongoose.Types.ObjectId('5beba117b6b1e821fcef622f')
// createCourse('MongoDB and Mongoose','5beba117b6b1e821fcef622f');

async function listCourses(){
    const courses=await Course
    .find()
    .populate('author')      //다른 컬렉션의 도큐먼트까지 조인처럼 보여줌.
    .select('name');
    console.log(courses);
}

// listCourses();