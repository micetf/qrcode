import { useState } from "react";
import EntreeInformations from "./EntreeInformations/index.js";
import ImageQRCode from "./ImageQRCode/index.js";
import OptionsTelechargement from "./OptionsTelechargement/index.js";

function Tool() {
    const [informations, setInformations] = useState({});
    function handleChange(entree) {
        setInformations(entree);
    }
    return (
        <div className="container">
            <div className="card">
                <EntreeInformations onChange={handleChange} />
                <ImageQRCode informations={informations} />
                <OptionsTelechargement />
            </div>
        </div>
    );
}

export default Tool;
