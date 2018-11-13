console.log("메인 코드 진행중....");

async function run(){
    try{
        const user=await getUser(1);
        const repos=await getRepos(user.githubID);
        const commits=await getCommits(repos[0]);
        console.log(commits);
    }catch(error){
        console.error(error);
    }
}

run();
console.log("메인 코드 계속 진행중....");



/* funcitons */
function getUser(id){
    const users=[
        { id: 1, githubID: 'hee'},
        { id: 2, githubID: 'kyeom'},
    ]

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const user= users.find(user=>user.id===id);
            if (user) resolve(user);
            else reject(new Error(`can not find user with id: ${id}`));
        },2000);
    })
}

function getRepos(userID){
    console.log(`finding [ ${userID} ]'s all github repo....`);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const num=Math.floor(Math.random()*100);
            if(num % 2 === 1){
                resolve(['TIL','ES6']);
            }else{
                reject(new Error(`${userID}의 repo는 없다.`))
            }
        },1500);
    })
}

function getCommits(repo){
    console.log(`getting all commits in [ ${repo} ]`);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['init repo','finish something']);
        },1500);
    })
}