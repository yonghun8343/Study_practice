// 1번 문제
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i += 1) {
  console.log(array[i]);
}

// 2번 문제
const array = [1, 2, 3, 4, 5];
for (let i = array.length -1 ; i >= 0; i -= 1) {
  console.log(array[i]);
}

// 3번 문제
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i += 1) {
  for (let j = i + 1; j < array.length; j += 1) {
    console.log(array[i], array[j]);
  }
}

// 4번 문제
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i += 2) {
  for (let j = 01; j < array.length; j += 1) {
    console.log(array[i], array[j]);
  }
}

// 5번 문제
let isTrue = false;
let name;
if (isTrue === flase) {
  name = "거짓";
} else {
  name = "진실";
}

// 아래에 빈칸을 채워 주세요.
name = isTrue === flase ? "거짓" : "진실";

// 6번 문제
const root = ReactDOM.createRoot(document.getElementById("root"));

const obj = {
  lastLogin: "2022-12-06",
  name: "hun",
  phon: "010-1234-1234",
};

function Userinfo(props) {
  return (
    <div className="UserInfo">
      <h1 className="name">{props.name}</h1>
      <h2 className="phon">{props.phon}</h2>
      <h2 className="lastLogin">{props.lastLogin}</h2>
    </div>
  );
}

root.render(
  <Userinfo name={obj.name} phon={obj.phon} lastLogin={obj.lastLogin} />
);

// 7번 문제
const root = ReactDOM.createRoot(document.getElementById("root"));

//const obj = {
//	lastLogin: "2022-12-06",
//	name: "hun",
//	phon: "010-1234-1234"
//}

function Userinfo(props) {
  return (
    <div className="UserInfo">
      <h1 className="name">{props.name}</h1>
      <h2 className="phon">{props.phon}</h2>
      <h2 className="lastLogin">{props.lastLogin}</h2>
    </div>
  );
}

// 여기에 defaultProps를 넣어주세요
Userinfo.defaultProps = {
  lastLogin: "2022-12-06",
  name: "hun",
  phon: "010-1234-1234",
};

root.render(
  <Userinfo name={obj.name} phon={obj.phon} lastLogin={obj.lastLogin} />
);

// 8번 문제
const root = ReactDOM.createRoot(document.getElementById("root"));

function Userinfo(props) {
  return (
    <div className="UserInfo">
      <h1 className="work">{props.author.work}</h1>
      <h2 className="UserInfo-name">{props.author.name}</h2>
    </div>
  );
}

Userinfo.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    work: PropTypes.string,
  }),
};

function Comment(props) {
  return (
    <div className="Comment">
      <Userinfo author={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.object,
  text: PropTypes.number,
  date: PropTypes.string,
};

const comment = {
  author: {
    name: "hun",
    work: "효성직업전문학원",
  },
  text: 5,
  date: new Date().toLocaleDateString(),
};

root.render(
  <Comment author={comment.author} text={comment.text} date={comment.date} />
);

// 9번 문제 정답
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    answer = answer + numbers[i];
  }
  return answer / numbers.length;
}
