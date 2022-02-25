import qrcode from "qr.js";
import { useEffect, useRef } from "react";

function ImageQRCode({ informations }) {
    const { protocole, donnees = "" } = informations;
    const informationsACoder = protocole === "" ? donnees : protocole + donnees;

    const canvas = useRef(null);

    const { modules } = qrcode(informationsACoder, { errorCorrectLevel: 2 });
    useEffect(() => {
        const cellSize = Math.floor(512 / modules.length);
        const marge = 5;
        const width = cellSize * modules.length + 2 * marge;
        canvas.current.width = width;
        canvas.current.height = width;
        const ctx = canvas.current.getContext("2d");
        modules.forEach((row, r) =>
            row.forEach((cell, c) => {
                ctx.fillStyle = cell ? "red" : "yellow";
                ctx.fillRect(
                    marge + c * cellSize,
                    marge + r * cellSize,
                    cellSize,
                    cellSize
                );
            })
        );
        ctx.fillStyle = "white";
        ctx.fillRect(width / 2 - 100, width / 2 - 20, 200, 40);
        ctx.font = "28px Arial Bold";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "black";
        ctx.fillText("C'est pas sorcier", width / 2, width / 2, 180);
    }, [canvas, informations]);
    return (
        <div className="card-body d-flex justify-content-center">
            <canvas
                ref={canvas}
                className="my-2 border border-2 border-dark"
                value={informationsACoder}
            />
        </div>
    );
}

export default ImageQRCode;
