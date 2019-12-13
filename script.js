class Chameleon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p style={this.props.style}>{this.props.name}</p>;
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
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
      color: 'rgb(' + currentRGB[0] + ',' + currentRGB[1] + ',' + currentRGB[2] + ')'
    });
  }

  render() {
    return (
      <div>
        <Chameleon style={{ backgroundColor: this.state.color }} name={this.state.color} />
        <button className="testButton" onClick={this.changeColor}>
          CLICK
        </button>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
