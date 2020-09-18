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


//  app.js file code
// import React,{Fragment } from 'react';
// import Propss from './component/props/card';

// export default function app() {
//     return (
//         <>
//             <Propss imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
//             catname="A Netflix Orignal Series"
//             name="Dark" 
//             linkk="https://www.netflix.com/in/title/80990668?source=35"/>

//             <Propss imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
//             catname="A Netflix Orignal Series"
//             name="Extra Curricular" 
//             linkk="https://www.netflix.com/in/title/80990668?source=35"/>
            
//             <Propss imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
//             catname="A Netflix Orignal Series"
//             name="Stranger Things" 
//             linkk="https://www.netflix.com/in/title/80990668?source=35"/>
//         </>
//     )
// }
