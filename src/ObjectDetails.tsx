import React from 'react';

function ObjectDetails({ selectedObject }) {

    if (!selectedObject) {
        return (
            <div className="object-details-empty">
                <h3>🔭 Panel Obserwacyjny</h3>
                <p>Wskaż cel z katalogu po lewej stronie, aby rozpocząć analizę danych.</p>
            </div>
        );
    }


    return (
        <div className="object-details">
            <h2>🌌 {selectedObject.name}</h2>
            <img
                src={selectedObject.imageUrl || "https://via.placeholder.com/300x200?text=Brak+Zdjecia"}
                alt={selectedObject.name}
                style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '15px' }}
            />
            <div className="info-group">
                <p><strong>Typ obiektu:</strong> {selectedObject.type}</p>
                <p><strong>Odległość od Ziemi:</strong> {selectedObject.distance}</p>
            </div>
        </div>
    );
}

export default ObjectDetails;