import { useState } from "react";
import type {SpaceObject} from "./types.ts";
import {ObjectList} from "./ObjectList.tsx";
import "./AstroLog.css";

function App() {
    const [objects, setObjects] = useState<SpaceObject[]>([
        {
            id: 1,
            name: "Mars",
            type: "Planet",
            distance: "225M km",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/1280px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png"
        },
        {
            id: 2,
            name: "Andromeda",
            type: "Galaxy",
            distance: "2.5M light years",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Andromeda_Galaxy_2025.png/1920px-Andromeda_Galaxy_2025.png"
        }
    ]);

    const [selected, setSelected] = useState<SpaceObject | null>(null);

    //Masz tu funkcje by dodac do listy obiekt
    const handleAddObject = (newObj: Omit<SpaceObject, "id">) => {
        const completeObject: SpaceObject = {
            ...newObj,
            id: Date.now()
        };
        setObjects([...objects, completeObject]);
    };

    return (
        <div id="center">
            <h1>🔭 AstroLog Dashboard</h1>

            <div className="astrolog-container">
                <ObjectList objects={objects} onSelect={setSelected} />

                <div className="side-panel">

                    {/* Placeholder dla wiktora*/}
                    <div className="placeholder-card">
                        <h3>Detale ciała niebieskiego</h3>
                        {selected && <p style={{ color: "var(--text-h)" }}>Widzisz detale ciała: {selected.name}</p>}
                    </div>

                    {/* Placeholder dla wiktora*/}
                    <div className="placeholder-card">
                        <h3>Formularz dodawania ciał do listy</h3>
                        <p>Masz funkcje handleAddObject która doda ci obiekt do listy </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;