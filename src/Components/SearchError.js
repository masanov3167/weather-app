const SearchError = ({h2,p}) =>{
    return(
        <>
            <div class="empty-icon-container">
                <div class="animation-container">
                    <div class="bounce"></div>
                    <div class="pebble1"></div>
                    <div class="pebble2"></div>
                    <div class="pebble3"></div>
                </div>

                <div>
                    <h2>{h2}</h2>
                    <p>{p}</p>
                </div>

            </div>
        </>
    )
}

export default SearchError;