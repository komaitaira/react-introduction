import { Wrap, WrapItem } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
    return (
        <Wrap p={{ base: 4, md: 10 }}>
            <WrapItem>
                <UserCard
                    imageUrl="https://source.unsplash.com/random"
                    userName="田中　太郎"
                    fullName="Taro Tanaka"
                />
            </WrapItem>
        </Wrap>
    );
});
