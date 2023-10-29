import spinner from "../assets/spinner.png";
import "../styles/Spinner.scss";

export const Spinner = ({spinnerInfo}: {spinnerInfo: string}) => {
    return (
        <>
        <h2>{spinnerInfo}</h2>
        <img src={spinner} className="spinner" alt="spinner" />
        </>
    )
}