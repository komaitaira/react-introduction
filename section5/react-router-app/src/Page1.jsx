import { Link } from "react-router-dom";
export const Page1 = () => {
    const array = [...Array(100).keys()];
    return (
        <div>
            <h1>Page1ページです。</h1>
            <Link to={{ pathname: "/page1/detailA", state: array }}>
                DetailA
            </Link>
            <br />
            <Link to="/page1/detailB">DetailB</Link>
        </div>
    );
};
