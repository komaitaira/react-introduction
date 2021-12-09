import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
export const UserCard = (props) => {
    const { user } = props;
    return (
        <Card>
            <img height={160} width={160} src={user.image} alt={user.name} />
            <p>{user.name}</p>
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    );
};

const SDl = styled.dl`
    text-align: left;
    margin-bottom: 0px;
    dt {
        float: left;
        margin-bottom: 0;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
    }
`;
