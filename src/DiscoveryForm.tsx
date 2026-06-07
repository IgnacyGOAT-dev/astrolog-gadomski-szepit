import { useState } from 'react';
import type { SpaceObject } from "./types.ts";
interface DiscoveryFormProps {
    onAddObject: (newObj: Omit<SpaceObject, "id">) => void;
}
export function DiscoveryForm({ onAddObject }: DiscoveryFormProps) {
        const [name, setName] = useState('');
        const [type, setType] = useState('');
        const [distance, setDistance] = useState('');
        const [image, setImage] = useState("");

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();


            if (!name || !type || !distance) {
                alert("Proszę uzupełnić nazwę, typ oraz odległość obiektu!");
                return;
            }


            const newObject = {
                id: Date.now(),
                name,
                type,
                distance,
                image: image || "https://via.placeholder.com/150?text=Astro"
            };

            onAddObject(newObject);
            setName('');
            setType('');
            setDistance('');
            setImage('');
        };

        return (
            <div className="discovery-form-container">
                <h3>🚀 Rejestr Odkryć (Zgłoś anomalię)</h3>
                <form onSubmit={handleSubmit} className="discovery-form">
                    <div className="form-group">
                        <label>Nazwa obiektu:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="np. Kepler-22b"
                        />
                    </div>

                    <div className="form-group">
                        <label>Typ obiektu:</label>
                        <input
                            type="text"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            placeholder="np. Egzoplaneta, Supernowa"
                        />
                    </div>

                    <div className="form-group">
                        <label>Odległość od Ziemi:</label>
                        <input
                            type="text"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                            placeholder="np. 620 lat świetlnych"
                        />
                    </div>

                    <div className="form-group">
                        <label>Link do zdjęcia (URL):</label>
                        <input
                            type="url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="https://link-do-obrazka.pl/foto.jpg"
                        />
                    </div>

                    <button type="submit">Dodaj do Katalogu 🌌</button>
                </form>
            </div>
        );
    }



export default DiscoveryForm;