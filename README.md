# react-library

React / 마크업 공부를 위한 개인프로젝트 입니다.

프로젝트 실행방법)

1. Node.js설치 --> https://nodejs.org/ko/
2. IDE 설치 --> https://www.jetbrains.com/ko-kr/idea/download/
3. Git 설치 --> https://git-scm.com/download/win
4. Git Clone
5. npm install
6. npm run serve

<hr>

# Coding Standard
<a href="https://docs.google.com/document/d/1h2AMf9uwz0L9bG8QSsT1iBnJlBZ0s2xdpiTSmyuZCVA/edit?usp=sharing">
    Naming 관련
</a>

# React Class Component Guide

기본적으로 prop, state가 바뀌지않았을 때 렌더링하지않도록 대비가 필요.<br>

* prop, state가 바뀌지 않았는대 re-render해야하는 상황은 매우 드물다고 주장함.
* 이를 대비하지않아 부모에서 불필요한 render()가 실행될 때 자식의 render()가 실행되어 자식의 자식도 또다시 re-render가 발생하는 안좋은 상황이 벌어짐.

권장사항
* 컴포넌트 개발 시작할 때 PureComponent로 개발 (tsx파일 템플릿 설정)
* 이후 shouldComponentUpdate 오버라이딩 안할거면 PureComponent유지
* shouldComponentUpdate 오버라이딩 할 때만 Component로 변경.

<hr>

state에는 본인의 render()와, 자식의 render()에서 출력되는 변수만 저장한다.

* 본인의 render()안에 있지않은 변수값은, 화면에 보여질일도 없음.
* 화면에 보여지지 않을 변수를 state에 저장하는것은 불필요한 re-render를 초래함.

근거)<br>
* 부모가 자식에게 넘겨줄 prop을 state가 아닌 field에 저장할 경우, 이 prop을 바꿔도 자식은 다시 렌더링되지 않음.
* render()가 실행되는 조건은 setState(), forceUpdate() 단 두개임.

권장사항)<br>
변수에 저장된 값이 바뀔 여지가 있으면서, 바뀔 때 다시 자식이 렌더링되야하는 경우<br>
부모에서는 해당 prop을 state에 저장하는것이 좋음.
