import { useLocation } from "react-router";
export const Page1DetailA = () => {
    console.log(useLocation())
    return (
        <div>
            <h1>Page1DetailAページです。</h1>
        </div>
    );
};
