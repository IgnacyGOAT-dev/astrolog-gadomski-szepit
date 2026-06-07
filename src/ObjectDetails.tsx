
import type { SpaceObject } from "./types.ts";

interface ObjectDetailsProps {
    selected: SpaceObject | null;
}

export function ObjectDetails({ selected }: ObjectDetailsProps) {
    if (!selected) {
        return (
            <div className="placeholder-card details-empty">
                <h3>🌌 Panel Obserwacyjny</h3>
                <p style={{ opacity: 0.7 }}>Wskaż cel z katalogu, aby wyświetlić szczegółowe analizy.</p>
            </div>
        );
    }

    return (
        <div className="placeholder-card details-active">
            <h3>🌌 Szczegóły: {selected.name}</h3>
            <div className="details-content">
                <img
                    src={selected.image || "https://via.placeholder.com/300x150?text=Brak+Zdjecia"}
                    alt={selected.name}
                    className="details-image"
                />
                <div className="details-info">
                    <p><strong>Typ:</strong> <span className="highlight">{selected.type}</span></p>
                    <p><strong>Odległość:</strong> <span className="highlight">{selected.distance}</span></p>
                </div>
            </div>
        </div>
    );
}