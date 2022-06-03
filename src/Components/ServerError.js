import SettingsItem from "./SettingsItem";

const ServerError = ({errorText}) =>{
    return (
        <>
            <h2 className='home-error'>{errorText}</h2>
            <span className="error-img" ></span>
        </>
    )
}

export default ServerError;