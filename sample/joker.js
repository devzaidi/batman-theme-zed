/*
  Gotham city..
*/

class Criminal {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.punchLines = props.punchLines;
  }
}

const joker = new Criminal({
  name: "Joker",
  age: 44,
  punchLines: ["If I weren't crazy, I'd be insane!"],
});
