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
      <div className="blocks" style={{ backgroundColor: 'rgb(' + this.props.colorCode[0] + ',' + '00' + ',' + '00' + ')' }}>
        <p>Part 1 is: {this.props.colorCode[0]}</p>
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
      <div className="blocks" style={{ backgroundColor: 'rgb(' + '00' + ',' + this.props.colorCode[1] + ',' + '00' + ')' }}>
        <p>Part 2 is: {this.props.colorCode[1]}</p>
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
      <div className="blocks" style={{ backgroundColor: 'rgb(' + '00' + ',' + '00' + ',' + this.props.colorCode[2] + ')' }}>
        <p>Part 3 is: {this.props.colorCode[2]}</p>
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
        <ColorFrame1 colorCode={this.props.colorCode} />
        <ColorFrame2 colorCode={this.props.colorCode} />
        <ColorFrame3 colorCode={this.props.colorCode} />
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
        {/*
        <ColorFrame1 style={{ backgroundColor: 'rgb(' + this.state.colorArray[0] + ',' + '00' + ',' + '00' + ')' }} color={this.state.colorArray[0]} />
        
        
        <ColorFrame2 style={{ backgroundColor: 'rgb(' + '00' + ',' + this.state.colorArray[1] + ',' + '00' + ')' }} color={this.state.colorArray[1]} />
        <ColorFrame3 style={{ backgroundColor: 'rgb(' + '00' + ',' + '00' + ',' + this.state.colorArray[2] + ')' }} color={this.state.colorArray[2]} />
        */}
        <ColorFrame1 colorCode={this.state.colorArray} />
        <ColorFrame2 colorCode={this.state.colorArray} />
        <ColorFrame3 colorCode={this.state.colorArray} />

        <button className="testButton" onClick={this.changeColor}>
          START
        </button>

        <ColorMixer colorCode={this.state.colorArray} />
        {/*
        {this.state.color !== 'red' && <div className="colorBar"></div>}
        */}
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
