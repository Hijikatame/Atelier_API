import Nav from "./layout/Nav";
import Footer from "./layout/Footer";

export default function Layout({children}) {
    return (
        <>
            <Nav />
                <main>
                    {children}
                </main>   
            <Footer />
        </>
    );
}