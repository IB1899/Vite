import { NavLink } from "react-router-dom"
import { FC } from "react";

export const Page: FC = () => {

    return (
        <div className="Page">

            <h1> This is the main Page </h1>

            <nav>
                <NavLink to={"p1"}>Page1</NavLink>
                <NavLink to={"p2"}>Page2</NavLink>
            </nav>
        </div>
    );
}

export const Page1: FC = () => {

    return (
        <div className="Page1">

            <h1> This is Page One </h1>
        </div>
    );
}


export const Page2: FC = () => {

    return (
        <div className="Page2">

            <h1> This is Page two </h1>
        </div>
    );
}
