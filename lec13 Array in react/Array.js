import React,{Fragment,Component} from 'react';

export default class card extends Component {
    render() {
        return (
            <Fragment>
                <div className="cards">
                    <div className="card">
                        <img src={this.props.imgsrc} alt="MyPic" className="card_img"/>
                        <div className="card_info">
                            <span className="card_category">{this.props.catname}</span>
                            <h3 className="card_title">{this.props.name}</h3>
                            <a target="_blank" href={this.props.linkk}>
                                <button>Watch Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


// app.js file code
// import React,{Fragment } from 'react';
// import Propss from './component/Array in react/Array';
// import Data from './component/Array in react/javascrip code';


// export default function app() {
//     return (
//         <>
//             <h1>List of Top 5 netfix series </h1>

//             {Data.map(function(value){
//                 return(
//                     <Propss imgsrc={value.imgsrc}
//                     catname={value.catname}
//                     name={value.name}
//                     linkk={value.linkk}/>
//                 )
//             })}
//         </>
//     )
// }