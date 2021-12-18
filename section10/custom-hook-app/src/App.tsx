import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { userProfile } from "./types/userProfile";

const user = {
    id: 1,
    name: "サンプル",
    email: "aaa@aaa.com",
    address: "青森県",
};
function App() {
    const [userProfiles, setUserProfiles] = useState<Array<userProfile>>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const onClickFetchUser = () => {
        setLoading(true);
        setError(false);
        axios
            .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                const data = res.data.map((user) => ({
                    id: user.id,
                    name: `${user.name}(${user.username})`,
                    email: user.email,
                    address: `${user.address.city}${user.address.suite}${user.address.street}`,
                }));
                setUserProfiles(data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <div className="App">
			<button onClick={onClickFetchUser}>データ取得</button>
			<br />
			{error ? (
				<p style={{color: "red"}}>データの取得に失敗しました</p>
			) : loading ? (
				<p>Loading...</p>
			) : (
				<>
					{userProfiles?.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</>
			)}
        </div>
    );
}

export default App;
