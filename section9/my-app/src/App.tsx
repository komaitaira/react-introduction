import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Todo } from "./Todo";
import { TodoType } from "./types/Types";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
    name: "田中",
    // hobbies: ["映画", "ゲーム"],
};
function App() {
    const [todos, setTodos] = useState<Array<TodoType>>([]);
    const onClickFetchData = () => {
        axios
            .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setTodos(res.data);
            });
    };
    return (
        <div className="App">
            <UserProfile user={user} />
            <Text color={"red"} fontSize={"18px"} />
            <button onClick={onClickFetchData}>データ取得</button>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    title={todo.title}
                    userId={todo.userId}
                    completed={todo.completed}
                />
            ))}
        </div>
    );
}

export default App;
