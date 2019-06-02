import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => {
    return(
        <div>
            <h1>This is the Info</h1>
            <p>There is the Details :{props.id}</p>
        </div>
    )
}

const admin = (WrapComp) => {
    return (props) => (
         <div>
           {props.ifWork && <p> This is private line</p>}
            <WrapComp {...props}/>
        </div>
    )
}

const Auto = (Wraped) => {
    return (props) =>(
        <div>
            {props.ifWork && <p>look At Me I'M beuteful lol</p>}
            <Wraped {...props}/>
        </div>
    )
}
const AutoTow = Auto(Info)
const CheckAdmin = admin(Info);

//ReactDOM.render(<CheckAdmin ifWork={false} id={'here what i want you see'}/>, document.getElementById('app'));
ReactDOM.render(<AutoTow ifWork={true} id={'here what i want you see'}/>, document.getElementById('app'));