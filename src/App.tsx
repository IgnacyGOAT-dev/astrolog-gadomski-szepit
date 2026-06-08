import { useState } from "react";
import type { SpaceObject } from "./types.ts";
import { ObjectList } from "./ObjectList.tsx";
import { ObjectDetails } from "./ObjectDetails.tsx";
import DiscoveryForm from "./DiscoveryForm.tsx";
import "./AstroLog.css";

const initialSpaceObjects: SpaceObject[] = [
    {
        id: 1,
        name: "Merkury",
        type: "Planeta skalista",
        distance: "77 mln km",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg"
    },
    {
        id: 2,
        name: "Wenus",
        type: "Planeta skalista",
        distance: "41 mln km",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Venus_2_Approach_Image.jpg"
    },
    {
        id: 3,
        name: "Ziemia",
        type: "Planeta skalista",
        distance: "0 km",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Meteosat-12-fci-march-equinox-2025-noon.jpg/1280px-Meteosat-12-fci-march-equinox-2025-noon.jpg"
    },
    {
        id: 4,
        name: "Mars",
        type: "Planeta skalista",
        distance: "78 mln km",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/1280px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png"
    },
    {
        id: 5,
        name: "Jowisz",
        type: "Gazowy olbrzym",
        distance: "628 mln km",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter_OPAL_2024.png"
    },
    {
        id: 6,
        name: "Saturn",
        type: "Gazowy olbrzym",
        distance: "1.2 mld km",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1920px-Saturn_during_Equinox.jpg"
    }
];

function App() {
    const [objects, setObjects] = useState<SpaceObject[]>(initialSpaceObjects);
    const [selectedObject, setSelectedObject] = useState<SpaceObject | null>(null);

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
                <div className="catalog-sidebar">
                    <ObjectList objects={objects} onSelect={setSelectedObject} />
                </div>

                <div className="side-panel">
                    <ObjectDetails selected={selectedObject} />
                    <DiscoveryForm onAddObject={handleAddObject} />
                </div>
            </div>
        </div>
    );
}

export default App;