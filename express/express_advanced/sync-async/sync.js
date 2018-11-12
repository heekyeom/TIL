console.log("메인 코드 진행중....");

getUser(1,gRepos);

function gRepos(user){
    getRepos(user.githubID,gCommits);
}
function gCommits(repos){
    getCommits(repos[0],displayCommits);
}
function displayCommits(commits){
    console.log(commits);
}

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