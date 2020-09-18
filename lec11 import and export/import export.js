var time = new Date();
var result='';
time= time.getHours();
  if(time>= 1 && time <12){
    result="Good Morning";
  }else if(time>= 12 && time <19){
    result="Good Afternoon";
  }else{
    result="Good Evening";
  }

  var name="Usman javed";

  function fun(){
    var fname = "Usman bin javed";
    return (fname);
  }
  export default result;
  export {name, fun};






// App.js File code
//   import React,{Fragment } from 'react';
// // import ImpExp,{name,fun} from './component/import and export/import export';
// import * as Impexp from './component/import and export/import export';

// export default function app() {
//     return (
//         <>
//             {/* <ol>
//                 <li>Name</li>
//                 <li>{ImpExp}</li>
//                 <li>{name}</li>
//                 <li>{fun()}</li>
//             </ol> */}

//             <ol>
//                 <li>Name</li>
//                 <li>{Impexp.default}</li>
//                 <li>{Impexp.name}</li>
//                 <li>{Impexp.fun()}</li>
//             </ol>
//         </>
//     )
// }
