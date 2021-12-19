import {
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};
export const UserDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            autoFocus={false}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent pb={6}>
                <ModalHeader>ユーザー詳細</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value="田中太郎" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input value="Tanaka Taro" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>MAIL</FormLabel>
                            <Input value="test@test.com" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input value="03-1111-2222" isReadOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
});
