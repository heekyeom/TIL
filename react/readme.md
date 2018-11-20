리엑트는 컴포넌트의 집합.



1. 브라우저js 파일 불러옴..
2. <App/> 컴포넌트 생성.
3. Geolocation API가 위치정보 받기 시작.
4. React App이 JSX 리턴하여 HTML 렌더링
5. .........
6. 사용자 위치정보 GET
7. state 객체를 this.setState()로 업뎃
8. React가 component의 state 업뎃을 눈치챔
9. React가 해당 Comp의 render()를 실행.
10. render() 가 바뀐 state를 담은 JSX 리턴
11. React가 바뀐 JSX 렌더

lat: O/ ErrorMessage: X =>lat 보여줌.

lat: X/ ErrorMessage: O =>errorMessage 보여줌.

lat: null/ errorMessage:'' => loading... 보여줌.







라이프 사이클

1. constructor (필수)

2. render(필수)

   화면에 내용 나타남

3. componentDidMount (define, 화면에 나타나자 마자 바로 호출됨 1time)

   update를 기다리는 중.

4. update 가 일어나면, render() 가 되고!

5. componentDidUpdate (define, 업데이트가 일어나면 호출됨 - n time)

   화면에서 사라질때까지 기다리는중.

6. componentWillUnmount (define)