class Chameleon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cham" style={this.props.style}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

const ColorFrame1 = props => {
  return (
    <div className="blocks" onClick={props.onClick}>
      <p>{props.color}</p>
    </div>
  );
};

const ColorFrame2 = props => {
  return (
    <div className="blocks" onClick={props.onClick}>
      <p>{props.color}</p>
    </div>
  );
};

const ColorFrame3 = props => {
  return (
    <div className="blocks" onClick={props.onClick}>
      <p>{props.color}</p>
    </div>
  );
};

const ColorFrame4 = props => {
  return (
    <div className="blocks" style={props.style} onClick={props.onClick}>
      <p>{props.color}</p>
    </div>
  );
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      colorArray: [],
      shuffledColorArray: [],
      clickedBlocks: []
    };

    this.changeColor = this.changeColor.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  colorRGB = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let rgbArray = [r, g, b];
    return rgbArray;
  };

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  }

  changeColor() {
    let currentRGB = this.colorRGB();
    let ff = [...currentRGB];
    let test = this.shuffle(ff);
    console.log('TCL: Container -> changeColor -> test', test);
    this.setState({
      color: 'rgb(' + currentRGB[0] + ',' + currentRGB[1] + ',' + currentRGB[2] + ')',
      colorArray: currentRGB,
      shuffledColorArray: test
    });
  }

  sayHello(name) {
    if (this.state.clickedBlocks.length <= 2) {
      this.setState({
        clickedBlocks: this.state.clickedBlocks.concat(name)
      });
    }
  }

  render() {
    const message = <p>Success</p>;

    function arraysEqual(a1, a2) {
      return JSON.stringify(a1) == JSON.stringify(a2);
    }

    return (
      <div>
        <Chameleon style={{ backgroundColor: this.state.color }} name={this.state.color} />

        <div className="blocksDiv">
          <ColorFrame1 onClick={() => this.sayHello(this.state.shuffledColorArray[0])} color={this.state.shuffledColorArray[0]} />
          <ColorFrame2 onClick={() => this.sayHello(this.state.shuffledColorArray[1])} color={this.state.shuffledColorArray[1]} />
          <ColorFrame3 onClick={() => this.sayHello(this.state.shuffledColorArray[2])} color={this.state.shuffledColorArray[2]} />
        </div>

        <button className="testButton" onClick={this.changeColor}>
          START
        </button>

        <div
          className="colorBar"
          style={{ backgroundColor: 'rgb(' + this.state.clickedBlocks[0] + ',' + this.state.clickedBlocks[1] + ',' + this.state.clickedBlocks[2] + ')' }}>
          <p>{this.state.clickedBlocks[0]}</p>
          <p>{this.state.clickedBlocks[1]}</p>
          <p>{this.state.clickedBlocks[2]}</p>
        </div>

        <div style={{ backgroundColor: 'rgb(' + this.state.clickedBlocks[0] + ',' + this.state.clickedBlocks[1] + ',' + this.state.clickedBlocks[2] + ')' }}>
          combined : rgb{this.state.clickedBlocks[0]},{this.state.clickedBlocks[1]},{this.state.clickedBlocks[2]}
        </div>
        {arraysEqual(this.state.colorArray, this.state.clickedBlocks) && this.state.clickedBlocks.length > 0 ? message : <p>nope</p>}
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
