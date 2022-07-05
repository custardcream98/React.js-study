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
