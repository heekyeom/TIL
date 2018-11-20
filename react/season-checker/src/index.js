import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import SeasonError from './SeasonError';


// const App=()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         error=>console.log(error)
//     )
//     return (
//         <div>
//             <SeasonDisplay/>
//         </div>
//     )
// }
class App extends React.Component{    // class based는 정리가 편함. class는 state를 사용할 수 있음.
    state={    //class 만 사용할 수 있음.
        lat: null,  //아직은 알 수 없다. 들어는 온다..
        lon: null,
        errorMessage: '',
    };
    // constructor(props){   //constructor 에는 초기화만 있는게 좋다..
    //     super(props);
    //     this.state={
    //         lat: null,  //아직은 알 수 없다. 들어는 온다..
    //         lon: null,
    //         errorMessage: '',
    //     };
    //     window.navigator.geolocation.getCurrentPosition(
    //         position =>{
    //             console.log(position)
    //             this.setState({lat: position.coords.latitude});
    //         },
    //         error=>{
    //             console.log(error)
    //             this.setState({errorMessage:error.message});
    //         }
    //     ); 
    // }
    renderContent(){
        //사용자 거부.
        if(this.state.errorMessage && !this.state.lat){
            return (<SeasonError message={"위치 정보 동의를 거부하였습니다."}/>)
        }
        //사용자 허가.
        if(!this.state.errorMessage && this.state.lat){
            return (<SeasonDisplay latitude={ this.state.lat } />)
        }
        return( <Spinner message="위치 정보 동의를 기다리고 있습니다."/> )
    }

    render(){
        return (
            <div style={{border: 'solid red 10px'}}>
                {this.renderContent()}
            </div>
        )
    }

    componentDidMount(){
        console.log('컴포넌트 납시오..');
        window.navigator.geolocation.getCurrentPosition(
            position =>{
                console.log(position)
                this.setState({lat: position.coords.latitude});
            },
            error=>{
                console.log(error)
                this.setState({errorMessage:error.message});
            }
        ); 
        
    }
    componentDidUpdate(){
        console.log('컴포넌트 업데이트.. 그리고 RE-Render');
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));