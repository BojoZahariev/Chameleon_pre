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
    <div className="blocks" style={props.style} onClick={props.onClick}>
      <p>Part 1 is: {props.color}</p>
    </div>
  );
};

const ColorFrame2 = props => {
  return (
    <div className="blocks" style={props.style} onClick={props.onClick}>
      <p>Part 2 is: {props.color}</p>
    </div>
  );
};

const ColorFrame3 = props => {
  return (
    <div className="blocks" style={props.style} onClick={props.onClick}>
      <p>Part 3 is: {props.color}</p>
    </div>
  );
};

/*
class ColorMixer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="colorBar">
        <ColorFrame1 color={'jjjj'} />
      </div>
    );
  }
}
*/

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      colorArray: [],
      clickedBlocks: []
    };

    this.changeColor = this.changeColor.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  colorRGB = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    console.log('ding');
    let rgbArray = [r, g, b];
    return rgbArray;
  };

  changeColor() {
    let currentRGB = this.colorRGB();

    this.setState({
      color: 'rgb(' + currentRGB[0] + ',' + currentRGB[1] + ',' + currentRGB[2] + ')',
      colorArray: currentRGB
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
    console.log('TCL: Container -> render -> this.state.clickedBlocks', this.state.clickedBlocks);
    console.log('TCL: Container -> render -> this.state.colorArray', this.state.colorArray);

    function arraysEqual(a1, a2) {
      return JSON.stringify(a1) == JSON.stringify(a2);
    }
    const message = <p>Success</p>;

    const block1 = (
      <ColorFrame1
        onClick={() => this.sayHello(this.state.colorArray[0])}
        style={{ backgroundColor: 'rgb(' + this.state.colorArray[0] + ',' + '00' + ',' + '00' + ')' }}
        color={this.state.colorArray[0]}
      />
    );

    return (
      <div>
        <Chameleon style={{ backgroundColor: this.state.color }} name={this.state.color} />

        <div className="blocksDiv">
          <ColorFrame1
            onClick={() => this.sayHello(this.state.colorArray[0])}
            style={{ backgroundColor: 'rgb(' + this.state.colorArray[0] + ',' + '00' + ',' + '00' + ')' }}
            color={this.state.colorArray[0]}
          />
          <ColorFrame2
            onClick={() => this.sayHello(this.state.colorArray[1])}
            style={{ backgroundColor: 'rgb(' + '00' + ',' + this.state.colorArray[1] + ',' + '00' + ')' }}
            color={this.state.colorArray[1]}
          />
          <ColorFrame3
            onClick={() => this.sayHello(this.state.colorArray[2])}
            style={{ backgroundColor: 'rgb(' + '00' + ',' + '00' + ',' + this.state.colorArray[2] + ')' }}
            color={this.state.colorArray[2]}
          />
        </div>
        <button className="testButton" onClick={this.changeColor}>
          START
        </button>

        <div className="colorBar">
          <p style={{ backgroundColor: 'rgb(' + this.state.clickedBlocks[0] + ',' + '00' + ',' + '00' + ')' }}>{this.state.clickedBlocks[0]}</p>
          <p style={{ backgroundColor: 'rgb(' + '00' + ',' + this.state.clickedBlocks[1] + ',' + '00' + ')' }}>{this.state.clickedBlocks[1]}</p>
          <p style={{ backgroundColor: 'rgb(' + '00' + ',' + '00' + ',' + this.state.clickedBlocks[2] + ')' }}>{this.state.clickedBlocks[2]}</p>
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
