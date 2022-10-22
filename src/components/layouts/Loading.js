//  Load Image
import loading from "../../img/loading.svg"

//  CSS Style
import style from "./Loading.module.css"

//  Loading JSX
function Loading() {
    return(
        <div className={style.loader_container}>
            <img src={loading} alt="Loading" className={style.loader_loader} />
        </div>
    );
};

export default Loading;