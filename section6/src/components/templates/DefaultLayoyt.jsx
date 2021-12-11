import { Header } from "../atoms/layouts/Header";
import { Footer } from "../atoms/layouts/Footer";

export const DefaultLayout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
