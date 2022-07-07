import { useState } from 'react';

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((priv) => [toDo, ...priv]);
        setToDo("");

        console.log(toDos);
    };

    return (
        <div>
            <h1>{toDos.length}개의 할 일이 있다네</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="무엇인가? 할 일이 무엇이냔 말이야" />
                <button>할 일 추가하기</button>
            </form>
        </div>
    )
}

export default App;
