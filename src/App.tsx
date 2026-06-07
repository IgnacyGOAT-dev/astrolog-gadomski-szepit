import { useState } from 'react';
import ObjectDetails from './ObjectDetails';
import DiscoveryForm from './DiscoveryForm';
import './App.css';

const initialSpaceObjects = [
  { id: 1, name: "Mgławica Krab", type: "Pozostałość po supernowej", distance: "6500 lat świetlnych", imageUrl: "https://images-assets.nasa.gov/image/PIA22416/PIA22416~thumb.jpg" },
  { id: 2, name: "Andromeda (M31)", type: "Galaktyka spiralna", distance: "2.5 mln lat świetlnych", imageUrl: "https://images-assets.nasa.gov/image/hubble-captures-vibrant-core-of-two-star-clusters-in-andromeda_19478446214_o/hubble-captures-vibrant-core-of-two-star-clusters-in-andromeda_19478446214_o~thumb.jpg" },
  { id: 3, name: "Jowisz", type: "Gazowy olbrzym", distance: "43 minuty świetlne", imageUrl: "https://images-assets.nasa.gov/image/PIA02873/PIA02873~thumb.jpg" },
  { id: 4, name: "Sagittarius A*", type: "Supermasywna czarna dziura", distance: "26000 lat świetlnych", imageUrl: "https://images-assets.nasa.gov/image/PIA16607/PIA16607~thumb.jpg" },
  { id: 5, name: "Mars", type: "Planeta skalista", distance: "12 minut świetlnych", imageUrl: "https://images-assets.nasa.gov/image/PIA02405/PIA02405~thumb.jpg" }
];

function App() {
  const [objects, setObjects] = useState(initialSpaceObjects);
  const [selectedObject] = useState(null);

  const handleAddObject = (newObject) => {
    setObjects([...objects, newObject]);
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
            <ObjectDetails selectedObject={selectedObject} />
          </main>
        </div>
      </div>
  );
}

export default App;