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

class ColorFrame1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }
  render() {
    return (
      <div className="blocks" style={this.props.style}>
        <p>Part 1 is: {this.props.color}</p>
      </div>
    );
  }
}

class ColorFrame2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="blocks" style={this.props.style}>
        <p>Part 2 is: {this.props.color}</p>
      </div>
    );
  }
}

class ColorFrame3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="blocks" style={this.props.style}>
        <p>Part 3 is: {this.props.color}</p>
      </div>
    );
  }
}

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

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      colorArray: []
    };

    this.changeColor = this.changeColor.bind(this);
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
      //color: 'green'
      color: 'rgb(' + currentRGB[0] + ',' + currentRGB[1] + ',' + currentRGB[2] + ')',
      colorArray: currentRGB
    });
  }

  render() {
    return (
      <div>
        <Chameleon style={{ backgroundColor: this.state.color }} name={this.state.color} />
        <ColorFrame1 style={{ backgroundColor: 'rgb(' + this.state.colorArray[0] + ',' + '00' + ',' + '00' + ')' }} color={this.state.colorArray[0]} />
        <ColorFrame2 style={{ backgroundColor: 'rgb(' + '00' + ',' + this.state.colorArray[1] + ',' + '00' + ')' }} color={this.state.colorArray[1]} />
        <ColorFrame3 style={{ backgroundColor: 'rgb(' + '00' + ',' + '00' + ',' + this.state.colorArray[2] + ')' }} color={this.state.colorArray[2]} />
        <button className="testButton" onClick={this.changeColor}>
          START
        </button>

        <ColorMixer />
        {/*
        {this.state.color !== 'red' && <div className="colorBar"></div>}
        */}
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
