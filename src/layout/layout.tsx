import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";

export function Layout(){
    return(
        <main>
            <section className="flex flex-row ">
                <Nav />
                <article className="flex-1 bg-gray-100">
                    <Outlet />
                </article>
            </section>
        </main>
    )
}