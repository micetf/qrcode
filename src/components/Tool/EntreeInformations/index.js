import { useEffect, useRef } from "react";

function EntreeInformations({ onChange }) {
    const protocole = useRef(null);
    const donnees = useRef(null);

    function setInformations() {
        onChange({
            protocole: protocole.current.value,
            donnees: donnees.current.value,
        });
    }
    function handleChange(e) {
        e.preventDefault();
        setInformations();
    }
    useEffect(() => {
        setInformations();
    }, [protocole, donnees]);
    return (
        <div className="card-header bg-secondary">
            <div className="row">
                <div className="col-2">
                    <select
                        className="form-control bg-info"
                        defaultValue="https://"
                        onChange={handleChange}
                        ref={protocole}
                    >
                        <option value="http://">http://</option>
                        <option value="https://">https://</option>
                        <option value="">Texte</option>
                    </select>
                </div>
                <div className="col-10">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Saisissez une url ou du texte."
                        onChange={handleChange}
                        ref={donnees}
                        defaultValue="micetf.fr"
                    />
                </div>
            </div>
        </div>
    );
}

export default EntreeInformations;
