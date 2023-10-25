import { Preregister, transformAvatarToUrl } from "../../../services/api";
import styles from "./list.module.css";

interface Props {
    preregistersCollection: Partial<Preregister>[]
}

const List = ({ preregistersCollection }: Props) => {
    return(
        <div className={styles.listSection}>
            <h2>Preregistered companies</h2>
            <ul className={styles.list}>
                {preregistersCollection.map(preregister => {
                    return(
                        <li className={styles.listItem} key={preregister.id}>
                            { preregister.avatar ? <img src={transformAvatarToUrl(preregister.avatar)} /> : <figure />}
                            <h3>{preregister.companyName}</h3>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;