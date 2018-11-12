//계산용으로 사용하는 것은 적합하지 않다.
//데이터를 넣고 읽는데 적합.

console.log("메인 코드 진행중....");

// setTimeout(() => {
//   console.log("reading data from db");
// }, 2000);
getUser(1,user=>{
    console.log(user);
    getRepos(user.githubID,repos=>{
        console.log(repos);
        getCommits(repos[0],commits=>{
            console.log(commits)
        })
    });
});


console.log("메인 코드 계속 진행중....");

function getUser(id, callback){
    const users=[
        { id: 1, githubID: 'hee'},
        { id: 2, githubID: 'kyeom'},
    ]
    setTimeout(()=>{
        console.log('reading data from db');
        const user= users.find(user=>user.id===id);
        callback(user);
    },2000)
}

function getRepos(userID, callback){
    console.log(`finding [ ${userID} ]'s all github repo....`);
    setTimeout(()=>{
        callback(['TIL','ES6','Express-demo']);
    },1500);
}

function getCommits(repo,callback){
    console.log(`getting all commits in [ ${repo} ]`);
    setTimeout(()=>{
        callback(['init repo','finish something']);
    },2000);
}