import React from "react";

import {TEST} from "@test/redux/src/index";


export const enum WORKS {
    MAJOR = "major"
}

console.log(WORKS.MAJOR);

type IFoo = {
    type: TEST.MINOR|TEST.MAJOR;
    name: string;
};

const foo: IFoo = {
    type: TEST.MINOR,
    name: "Full Name"
};

class App extends React.Component {
    render(): React.ReactNode {
        console.log(TEST.MINOR);
        return (
            <div>
                Hello {foo.type === TEST.MINOR ? foo.name : "World"}
            </div>
        );
    }
}

export default App;
