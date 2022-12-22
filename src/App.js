import React, { useState } from "react";
import "./App.css";

import GameForm from "./components/GameForm";
import GameContent from "./components/GameContent";
import { INITIAL_GAME } from "./constants";

function App() {
    const [data, setData] = useState("");
    return (
        <div className="App">
            <GameForm setData={setData} game={INITIAL_GAME} />
            <GameContent data={data} />
        </div>
    );
}

export default App;
