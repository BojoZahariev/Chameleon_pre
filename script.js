class Chameleon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p className="cham" style={this.props.style}>
        {this.props.name}
      </p>
    );
  }
}

const ColorFrame1 = props => {
  return (
    <div>
      <p style={props.style}>Part 1 is: {props.color}</p>
    </div>
  );
};

const ColorFrame2 = props => {
  return (
    <div>
      <p style={props.style}>Part 2 is: {props.color}</p>
    </div>
  );
};

const ColorFrame3 = props => {
  return (
    <div>
      <p style={props.style}>Part 3 is: {props.color}</p>
    </div>
  );
};

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

        <button className="testButton" onClick={this.changeColor}>
          CLICK
        </button>

        <ColorFrame1
          style={{ backgroundColor: 'rgb(' + this.state.colorArray[0] + ',' + '00' + ',' + '00' + ')' }}
          color={this.state.colorArray[0]}
        />
        <ColorFrame2
          style={{ backgroundColor: 'rgb(' + '00' + ',' + this.state.colorArray[1] + ',' + '00' + ')' }}
          color={this.state.colorArray[1]}
        />
        <ColorFrame3
          style={{ backgroundColor: 'rgb(' + '00' + ',' + '00' + ',' + this.state.colorArray[2] + ')' }}
          color={this.state.colorArray[2]}
        />
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
