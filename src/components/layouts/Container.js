//  CSS Styles
import styles from "./Container.module.css";

//  Content JSX
function Container(props) {
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    );
};

export default Container;