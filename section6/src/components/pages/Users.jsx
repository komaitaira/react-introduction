import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `太郎-${val}`,
        image: "https://source.unsplash.com/G8cB8hY3yvU",
        email: "test@example.com",
        phone: "03-1111-2222",
        company: {
            name: "テスト株式会社",
        },
        website: "https://google.com",
    };
});

// const user = {
//     // id: val,
//     name: `太郎`,
//     image: "https://source.unsplash.com/G8cB8hY3yvU",
//     email: "test@example.com",
//     phone: "03-1111-2222",
//     company: {
//         name: "テスト株式会社",
//     },
//     website: "https://google.com",
// };

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;
