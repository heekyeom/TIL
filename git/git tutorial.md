# git tutorial

## git 1 (18-11-02)

#### 1. 명령어

| command          | description                              | example                                                      |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------ |
| `git config`     | git 사용자 환경 설정.                    | `git config --global user.name "이름"`<br />`git config --global user.email "이메일"` |
| `git init`       | 깃 초기화                                | `git init`                                                   |
| `git add`        | 스테이지에 파일 추가                     | `git add index.html` <br />`git add .`                       |
| `git commit`     |                                          | `git commit -m "commit 설명"`                                |
| `git remote add` | 원격 git repository 주소를 가르키게 하기 | `git remote add origin https://github.com/heekyeom/git-tutorial.git` |
| `git push`       | 원격 repository로 보내기                 | `git push -u origin master`                                  |

#### 2.  Git 설정 하기

1. git을 설치한 후, 사용자 환경을 설정해 주어야 한다. 한 번만 설정하면 되고, 업그레이드 해도 유지된다.
2. 



`git config --global user.name “이름”`   

`git config --global user.email “깃에 등록한 이메일”` 





1. master 가 붙은 디렉토리는 repository고 한다.

2. repository는 디렉토리지만 기능이 더해진 디렉토리. 어떤 기능이냐?! GIT

   #### 



1. 깃 레포 상태 보기 - > `heekyeom:~/workspace/learn-git (master) $ git status`  

   On branch master

   No commits yet

   Untracked files:     //트렉킹 할 수 없는 파일

     (use "git add <file>..." to include in what will be committed)

   ​        index.html

   nothing added to commit but untracked files present (use "git add" to track)

2. 깃 스테이지에 추가하기 -> `heekyeom:~/workspace/learn-git (master) $ git add index.html`

   heekyeom:~/workspace/learn-git (master) $ git status

   On branch master

   No commits yet

   Changes to be committed:

   (use "git rm --cached <file>..." to unstage)  //이것은 지금 현재는 스테이지 되어있는 상태라는 것

   new file:   index.htm

3. 깃 로그 확인하기 -> `heekyeom:~/workspace/learn-git (master) $ git log`

   commit 3402c9848947076d8f9bc4a91169d8f77009cf11 (HEAD -> master)  // 버전(sha) 커밋을 구분

   Author: heekyeom <khk2870@gmail.com>

   Date:   Fri Nov 2 05:22:50 2018 +0000

   ​    First Commit