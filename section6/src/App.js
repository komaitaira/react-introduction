import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./index.css";

const user = {
    name: "太郎",
    image: "https://source.unsplash.com/G8cB8hY3yvU",
    email: "test@example.com",
    phone: "03-1111-2222",
    company: {
        name: "テスト株式会社",
    },
    website: "https://google.com",
};
export const App = () => {
    return (
        <div className="App">
            <PrimaryButton>テスト</PrimaryButton>
            <SecondaryButton>検索</SecondaryButton>
            <br />
            <SearchInput />
            <UserCard user={user} />
        </div>
    );
};
