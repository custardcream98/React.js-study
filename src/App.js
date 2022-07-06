import './Button'
import Button from './Button';
import styles from './App.module.css'
import { useState, useEffect } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onKeywordChange = (event) => setKeyword(event.target.value);
    const onBtnClick = () => setCounter((current) => current + 1);

    console.log("매번 렌더링 될 때마다 실행");

    useEffect(() => {
        console.log("처음 렌더링 될 때 한번만 실행");
    }, []);

    useEffect(() => {
        if (counter !== 0) {
            console.log("counter 눌렸을 때 실행");
        }
    }, [counter]);

    useEffect(() => {
        if (keyword !== "") {
            console.log("keyword 입력 됐을 때 실행");
        }
    }, [keyword]);

    return (
        <div>
            <input type="text" value={keyword} onChange={onKeywordChange}></input>
            <h1 className={styles.title}>Hello World</h1>
            <h2>{counter}</h2>
            <Button text='이건 버튼이다 개꿀' onClick={onBtnClick} />
        </div>
    );
}

export default App;
