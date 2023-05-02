
import { useRouteError , Link } from "react-router-dom"

//* This page will render in the errorElement whenever that route throws an error
const ErrorPage = () => {

    //* We'll have access to the error because it's connected to the same Route
    let error = useRouteError() as { message: string }

    return (
        <div className="ErrorPage">
            <h1>Error</h1>
            <h2> {error.message} </h2>

            <Link to={"/"}>Return to Home page</Link>
        </div>
    );
}

export default ErrorPage;