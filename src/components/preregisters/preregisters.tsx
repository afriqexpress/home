import { useEffect, useState } from "react";
import {
  Preregister,
  getPreregisters,
  transformAvatarToUrl,
} from "../../services/api";
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
            <h2>Preregistered Companies</h2>
            <ul className="preregisters__list">
                {preregisters.slice(0, 10).map((preregister) => {
                    return (
                        <li className="preregisters__item" key={preregister.id}>
                            {preregister.avatar ? (
                                <img src={transformAvatarToUrl(preregister.avatar)} alt="Avatar" />
                            ) : (
                                <figure className="formavatar__preview--empty" />
                            )}
                            <h3>{preregister.companyName}</h3>
                        </li>
                    );
                })}
                {preregisters.length > 10 && <li className="preregisters__item">and many more</li>}
            </ul>
        </div>
    ) : null;
};

export default Preregisters;
