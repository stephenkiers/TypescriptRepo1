import React from "react";

//import {TEST} from "@test/redux/src";
import {TEST, Song} from "@test/redux/dist";

const foo: Song = {
    key: TEST.MINOR
};

class App extends React.Component {
    render(): React.ReactNode {
        console.log(TEST.MINOR);
        if (foo.key !== TEST.MAJOR) {
            return null;
        }
        return (
            <div>
                Hello {foo.attributeOnlyOnMinorKey}
            </div>
        );
    }
}

export default App;
