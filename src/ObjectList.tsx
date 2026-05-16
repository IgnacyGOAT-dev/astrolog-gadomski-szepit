import type {SpaceObject} from "./types.ts";

interface ObjectListProps {
    objects: SpaceObject[];
    onSelect: (obj: SpaceObject) => void;
}

export function ObjectList({ objects, onSelect }: ObjectListProps) {
    return (
        <div className="catalog-sidebar">
            <h2>🌌 AstroLog Catalog</h2>
            <div className="catalog-list">
                {objects.map((obj) => (
                    <button
                        key={obj.id}
                        onClick={() => onSelect(obj)}
                        className="catalog-item"
                        type="button"
                    >
                        <img src={obj.image} alt={obj.name} className="catalog-thumb" />
                        <span className="catalog-name">{obj.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}