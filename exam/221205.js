// 1번 문제 정답
const confition = true;
let name;
if (confition === true) {
  name = "트루";
} else {
  name = "팔스";
}

const name2 = confition === true ? "트루" : "팔스";
const name2 = !confition ? "팔스" : "트루";

// 2번 문제 정답
const param = 2;
let confition = (v1) => {
  return v1 % 2;
};
let name;
if (confition(param) === 0) {
  name = "짝수";
} else {
  name = "홀수";
}

let name2 = confition(param) === 0 ? "짝수" : "홀수";

// 3번 문제 정답
const param = 2;
let confition = (v1) => {
  return v1 % 2;
};
let name;
if (confition(param) === 0) {
  if (param >= 10) {
    name = "10보다 큰 짝수";
  } else {
    name = "10보다 작은 짝수";
  }
} else {
  name = "홀수";
}

let name2 =
  confition(param) === 0
    ? param >= 10
      ? "10보다 큰 짝수"
      : "10보다 작은 짝수"
    : "홀수";

// 4번 문제 정답
const req = {
  body: {
    page: 0,
    count: 0,
  },
};

let page = !req.body.page ? 0 : req.body.page;
let count = !req.body.count ? 0 : req.body.count;

var { page = !page ? 0 : page, count = !count ? 5 : count } = req.body;

// 5번 문제 정답
<div id="profile" class="wrap-left-profile">
  <span>PROFILE</span>
</div>;

const Span = () => {
  return <span>PROFILE</span>;
};

const Profile = () => (
  <div id="profile" className="wrap-left-profile">
    <Span />
  </div>
);

// 6번 문제 정답
<div id="following">
  <span class="count" id="following-count"></span>
  <span>팔로잉</span>
</div>;

const Span1 = () => {
  return <span className="count" id="following-count"></span>;
};

const Span2 = () => {
  return <span>팔로잉</span>;
};

const Following = () => (
  <div id="following">
    <Span1 />
    <Span2 />
  </div>
);

// 7번 문제 정답
<div class="wrap-left-search">
  <img src="./images/search.png" />
  <input type="text" id="search" placeholder="Search" />
</div>;

const Img = () => {
  return <img src="./images/search.png" />;
};

const Input = () => {
  return <input type="text" id="search" placeholder="Search" />;
};

const Div = () => {
  return (
    <div class="wrap-left-search">
      <Img />
      <Input />
    </div>
  );
};

// 8번 문제 정답
function solution(n, t) {
  var answer = n;
  for (let i = 0; i < t; i += 1) {
    answer = answer * 2;
  }
  return answer;
}

// function solution(n, t) {
//   while (t-- > 0) n *= 2;
//   return n;
// }

// 9번 문제 정답
function solution(my_string) {
  return Array.from(new Set(my_string.split(""))).join("");
}

function solution(my_string) {
  var answer = "";
  const arr1 = [];
  const arr2 = my_string.split("");
  for (let i = 0; i < arr2.length; i += 1) {
    let check = false;
    for (let j = 0; j < arr1.length; j += 1) {
      if (arr2[i] === arr1[j]) {
        check = true;
      }
    }
    if (check === false) {
      arr1.push(arr2[i]);
    }
  }
  answer = arr1.join("");
  return answer;
}

function solution(my_string) {
  var answer = "";
  const arr2 = my_string.split("");
  for (let i = arr2.length; i >= 0; i -= 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (arr2[i] === arr2[j]) {
        arr2.splice(i, 1);
      }
    }
  }
  answer = arr2.join("");
  return answer;
}

function solution(my_string) {
  var answer = "";
  const obj = {
    answer: "",
  };
  const arr2 = my_string.split("");
  for (let i = 0; i < arr2.length; i += 1) {
    if (obj[arr2[i]] === undefined) {
      obj[arr2[i]] = true;
      obj.answer += arr2[i];
    }
  }
  answer = obj.answer;
  return answer;
}
