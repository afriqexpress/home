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
        <section className="preregisters">
            <h2>Preregistered Companies</h2>
            <p className="preregisters__text">These companies are interested like you.</p>
            <ul className="preregisters__list">
                {preregisters.slice(0, 10).map((preregister) => {
                    return (
                        <li className="preregisters__item" key={preregister.id}>
                            {preregister.avatar ? (
                                <img className="preregisters__item__logo" src={transformAvatarToUrl(preregister.avatar)} alt="Avatar" />
                            ) : (
                                <figure className="preregisters__item__logo preregisters__item__logo--empty" />
                            )}
                            <h3 className="preregisters__item__name">{preregister.companyName}</h3>
                        </li>
                    );
                })}
                {preregisters.length > 10 && <li className="preregisters__item">and many more</li>}
            </ul>
        </section>
    ) : null;
};

export default Preregisters;
