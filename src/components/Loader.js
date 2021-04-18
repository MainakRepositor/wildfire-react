import spinner from './spinner.gif'

export const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Fetching Results</h1>
        </div>
    )
}

export default Loader