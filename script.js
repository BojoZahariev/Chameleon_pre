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

  changeColor() {
    this.setState({
      color: 'green'
    });
  }

  render() {
    return (
      <div>
        <Chameleon style={{ backgroundColor: this.state.color }} name={'Chameleon'} />
        <button className="testButton" onClick={this.changeColor}>
          CLICK
        </button>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
