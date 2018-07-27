import React from "react";

import {TEST, Song} from "./codeThatIsPreCompiled/index.js";

const foo: Song = {
    key: TEST.MAJOR
};

class App extends React.Component {
    render(): React.ReactNode {
        if (foo.key === TEST.MAJOR) {
            return <div>MAJOR SONG!</div>;
        }
        return (
            <div>
                MINOR {foo.attributeOnlyOnMinorKey}
            </div>
        );
    }
}

export default App;
