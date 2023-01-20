// 1번 문제 정답

const root = ReactDOM.createRoot(document.getElementById("root"));
const array = [1, 2, 3, 4, 5];
const array2 = array.map((value, index) => {
  return <li key={index}>{value}</li>;
});
function ClientList(props) {
  return <ul>{props.clientList}</ul>;
}
root.render(<ClientList clientList={array2} />);

// 2번 문제 정답
const root = ReactDOM.createRoot(document.getElementById("root"));

function ListItem(props) {
  return <li onClick={props.clickEvent}>{props.value}</li>;
}

function TextLists(props) {
  const items = props.items;
  return (
    <ul>
      {items.map((value, index) => {
        return (
          <ListItem
            key={index}
            value={value}
            clickEvent={() => {
              props.clickEvent(index)
            }
          />
        );
      })}
    </ul>
  );
}

class ListControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3],
      value: "",
    };
  }

  handleClick = (index) => {
    const lists = this.state.list;
    lists[index] = lists[index]; * 2
    this.setState({
      list: lists
    });
  };

  render() {
    return (
      <React.Fragment>
        <TextLists
          items={this.state.list}
          clickEvent={this.handleClick}
        />
      </React.Fragment>
    );
  }
}

root.render(<ListControl />);

// 3번 문제 정답
function solution(n) {
  var answer = Math.ceil(n/7);
  
  return answer;
}

// 4번 문제 정답
function solution(slice, n) {
    var answer = Math.ceil(n/slice);
    return answer;
}