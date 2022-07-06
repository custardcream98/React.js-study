# React.js 맛보기!

Front-End의 꽃인 `React.js`를 공부하고 있습니다.

# TIL

## 7/6

### Create-React-App

```
npx create-react-app {App Name}
```

CRA 명령어를 이용해 React App을 만들면 자동으로 다양한 설정이 완료된 React App을 생성해줍니다. 이 때, App Name으로 된 폴더가 새로 생성됩니다.

`./src` 안에 소스 코드들이 들어가는데, App.js와 index.js를 제외한 나머지는 제거해도 무방합니다. (Clean Start)

```
npm start
```

`package.json` 안을 보면

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

이렇게 미리 몇가지 npm script가 설정돼 있습니다. React App을 local server에서 시작하려면 위의 명령어를 입력하면 됩니다.

### CRA의 이점

- 코드가 바뀔 때마다 Hot Reload를 해줍니다.
- `*.module.css`의 형태로 css를 모듈로써 사용할 수 있게 해줍니다.
  - 같은 id로 여러 컴포넌트를 각각 독립적으로 지칭할 수 있게 되며, js 코드 작성시 import해 모듈처럼 사용하므로 아주 편리합니다.
  - 실제로 컴파일 되면 알아서 랜덤한 id를 생성해줍니다.

### prop-types

`prop-types` 패키지를 사용하면 컴포넌트의 prop의 type을 관리하는 데에 도움이 됩니다. (최소한 에러 메세지라도 띄워주게 해줘요)

```javascript
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired, // isRequired 옵션을 줄수도 있습니다
};

export default Button;
```

### useEffect

```javascript
import "./Button";
import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

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
      <Button text="이건 버튼이다 개꿀" onClick={onBtnClick} />
    </div>
  );
}

export default App;
```

React의 각 컴포넌트들은 State가 바뀔 때마다 새로 렌더링됩니다.

API 호출과 같이 특정 상황에서만 실행될 필요가 있는 경우에는 `useEffect`를 사용해 코드의 실행을 제한할 수 있습니다.

### `==` 연산자와 `===` 연산자의 차이점

```javascript
console.log(0 == "0"); // true
console.log(0 === "0"); // false
```

JS는 **엄격한 비교**와 **유형 변환 비교**를 모두 지원합니다. `===`는 변수의 유형까지 고려합니다. 따라서 가능한 `==` 연산자 보다는 `===` 연산자를 사용하는 것이 좋습니다.

다른 자료형의 데이터를 비교하고 싶다면 코드의 가독성을 위해 `===`를 사용하고 type casting을 하도록 합니다.

### `reference type`과 `primitive type`

```javascript
const mango1 = { name: "mango" };
const mango2 = { name: "mango" };
const mango3 = mango1;
console.log(mango1 == mango2); // false
console.log(mango1 === mango2); // false
console.log(mango1 === mango3); // true
```

변수를 선언해 `object` 타입의 값으로 초기화 하면 그 값이 위치한 `reference`(주소값 같은 것)를 저장합니다.

따라서 위의 코드에서는 `mango1`과 `mango2`의 값은 다르며, `mango2`와 `mango2`의 값은 같습니다.

정리하면, **object의 equality는 같은 주소값일때만 true입니다**
