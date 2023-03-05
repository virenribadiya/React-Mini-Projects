import React from "react";
import Entry from "./components/Entry";
import emojipedia from "./emojipedia";

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {emojipedia.map(
                    function (i) {
                        return <Entry
                            emoji={i.emoji}
                            name={i.name}
                            meaning={i.meaning}
                        />;
                    }
                )}
            </dl>


        </div>
    );
}

export default App;