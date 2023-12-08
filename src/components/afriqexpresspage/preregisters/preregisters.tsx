import { useEffect, useState } from "react";
import { Preregister, getPreregisters, transformAvatarToUrl } from "../../../services/api";
import "./preregisters.css";

const Preregisters = () => {
    const [preregisters, setPreregisters] = useState<Partial<Preregister>[]>([]);

    useEffect(() => {
        getPreregisters().then((preregisters) => {
            if (preregisters) setPreregisters(preregisters);
        });
    }, []);

    const hasPreregisters = preregisters.length > 0;

    return hasPreregisters ? (
        <div className="preregisters">
            <h2>Preregistered companies</h2>
            <ul className="preregisters__list">
                {preregisters.map((preregister) => {
                    return (
                        <li className="preregisters__item" key={preregister.id}>
                            {preregister.avatar ? (
                                <img src={transformAvatarToUrl(preregister.avatar)} alt="Avatar" />
                            ) : (
                                <figure />
                            )}
                            <h3>{preregister.companyName}</h3>
                        </li>
                    );
                })}
            </ul>
        </div>
    ) : null;
};

export default Preregisters;
