/* React 공식 아이콘, 스타일 */
//import logo from './logo.svg';
import './App.css';

/* 버전 변경되었음 */
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 화면 import
import Basic from './elements/Basic';

/* 
 * [ 르뉴 - react의 다수 페이지 제작법엔 여러방식이 있으니 찾아볼 것 ]
 * Link : <a> 태그와 같이 Switch와 연결 
 * Switch : endpoint 연장
 * exact : 이 path와 정확히 일치해야 보여줌, '/'의 경우 이 설정을 하지 않으면 타 화면에서도 포함됨
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to='/'>Home</Link>

          <Routes>
            <Route exact path='/' element={<Basic />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
