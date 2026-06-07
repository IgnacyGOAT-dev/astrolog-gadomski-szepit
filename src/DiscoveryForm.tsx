import React, { useState } from 'react';

function DiscoveryForm({ onAddObject }) {
    // Lokalne stany dla kontrolowanych inputów
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [distance, setDistance] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prosta walidacja, czy podstawowe pola są uzupełnione
        if (!name || !type || !distance) {
            alert("Proszę uzupełnić nazwę, typ oraz odległość obiektu!");
            return;
        }

        // Tworzenie nowego obiektu (generujemy unikalne id na podstawie czasu)
        const newObject = {
            id: Date.now(),
            name,
            type,
            distance,
            imageUrl: imageUrl || "https://via.placeholder.com/150?text=Astro"
        };

        onAddObject(newObject);
        setName('');
        setType('');
        setDistance('');
        setImageUrl('');
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
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="https://link-do-obrazka.pl/foto.jpg"
                    />
                </div>

                <button type="submit">Dodaj do Katalogu 🌌</button>
            </form>
        </div>
    );
}

export default DiscoveryForm;