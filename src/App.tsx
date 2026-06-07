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
import { useState } from 'react';
import {ObjectDetails} from './ObjectDetails';
import DiscoveryForm from './DiscoveryForm';

import './App.css';
import type {SpaceObject} from "./types.ts";

const initialSpaceObjects = [
  { id: 1, name: "Mgławica Krab", type: "Pozostałość po supernowej", distance: "6500 lat świetlnych", image: "https://images-assets.nasa.gov/image/PIA22416/PIA22416~thumb.jpg" },
  { id: 2, name: "Andromeda (M31)", type: "Galaktyka spiralna", distance: "2.5 mln lat świetlnych", image: "https://images-assets.nasa.gov/image/hubble-captures-vibrant-core-of-two-star-clusters-in-andromeda_19478446214_o/hubble-captures-vibrant-core-of-two-star-clusters-in-andromeda_19478446214_o~thumb.jpg" },
  { id: 3, name: "Jowisz", type: "Gazowy olbrzym", distance: "43 minuty świetlne", image: "https://images-assets.nasa.gov/image/PIA02873/PIA02873~thumb.jpg" },
  { id: 4, name: "Sagittarius A*", type: "Supermasywna czarna dziura", distance: "26000 lat świetlnych", image: "https://images-assets.nasa.gov/image/PIA16607/PIA16607~thumb.jpg" },
  { id: 5, name: "Mars", type: "Planeta skalista", distance: "12 minut świetlnych", image: "https://images-assets.nasa.gov/image/PIA02405/PIA02405~thumb.jpg" }
];

function App() {
  const [objects, setObjects] = useState(initialSpaceObjects);
  const [selectedObject] = useState(null);

    const handleAddObject = (newObject: Omit<SpaceObject, "id">): void => {
        const completeObject: SpaceObject = {
            ...newObject,
            id: Date.now() // Tutaj generujemy ID dla nowego obiektu
        };
        setObjects([...objects, completeObject]);
    };
  return (
      <div className="app-container">
        <header className="app-header">
          <h1>🌌 AstroLog - Panel Obserwatorium Astronomicznego</h1>
        </header>

        <div className="app-content">
          <aside className="sidebar">

            <DiscoveryForm onAddObject={handleAddObject} />
          </aside>

          <main className="main-panel">
              <ObjectDetails selected={selectedObject} />
          </main>
        </div>
      </div>
  );
}

export default App;