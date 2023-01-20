// 1번 문제 정답
class Study {
  constructor(name) {
    this.name = name; // 여기
  }

  speak() {
    console.log(`${this.name}을 공부하고 있습니다.`);
  }
}

class Coding {
  constructor(name, today) {
    super(name); // 여기
    this.today = today; // 여기
  }

  speak() {
    console.log(`${this.today}은 ${this.name}를 공부 하고 있습니다.`);
  }
}

const coding = new Coding("React", "오늘");
coding.speak();
// 출력 결과를 입력 해 주세요
// 늘은 React를 공부 하고 있습니다.

// 2번 문제 정답
const root = document.getElementById("root");

class H1 extends React.Component {
  constructor(props) {
    super(props); // 빈칸
  }

  render() {
    return <h1>여기는 {this.props.where /* 빈칸 */}!!!</h1>;
  }
}

const Container = () => {
  return (
    <React.Fragment>
      <H1 where="대한민국" /* 빈칸 */ />
    </React.Fragment>
  );
};
ReactDOM.render(<Container />, root);

// 3번 문제 정답
const root = document.getElementById("root");

function H1(props) {
  return <h1>여기는 {props.where /* 빈칸 */}!!!</h1>;
}

const Container = () => {
  return (
    <React.Fragment>
      <H1 where="대한민국" /* 빈칸 */ />
    </React.Fragment>
  );
};

ReactDOM.render(<Container />, root);

// 4번 문제 정답
const root = document.getElementById("root");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  add = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <span>클릭: {this.state.counter}</span>
        <button style={{ color: "red" }} onClick={this.add}>
          클릭
        </button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, root);

// 5번 문제 정답
componentDidMount() {
  console.log("페이지 로딩이 완료되었습니다.");
}

// 6번 문제 정답
function solution(n) {
  var answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
      answer++
    }
  }
  return answer;
}