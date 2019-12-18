class Chameleon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cham" style={this.props.style}>
        <p></p>
      </div>
    );
  }
}

const ColorFrame1 = props => {
  if (props.clicked) {
    return (
      <div className="blocks">
        <p>Clicked</p>
      </div>
    );
  } else {
    return (
      <div className="blocks" onClick={props.onClick}>
        <p>{props.color}</p>
      </div>
    );
  }
};

const ColorFrame2 = props => {
  if (props.clicked) {
    return (
      <div className="blocks">
        <p>Clicked</p>
      </div>
    );
  } else {
    return (
      <div className="blocks" onClick={props.onClick}>
        <p>{props.color}</p>
      </div>
    );
  }
};

const ColorFrame3 = props => {
  if (props.clicked) {
    return (
      <div className="blocks">
        <p>Clicked</p>
      </div>
    );
  } else {
    return (
      <div className="blocks" onClick={props.onClick}>
        <p>{props.color}</p>
      </div>
    );
  }
};

const Message = props => {
  return (
    <div>
      <p>{props.mess}</p>
    </div>
  );
};

const ActionButton = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      colorArray: [],
      shuffledColorArray: [],
      clickedBlocks: [],
      block1Clicked: false
    };

    this.changeColor = this.changeColor.bind(this);
    this.clickControl = this.clickControl.bind(this);
    this.shuffleColors = this.shuffleColors.bind(this);
  }

  colorRGB = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let rgbArray = [r, g, b];
    return rgbArray;
  };

  shuffleColors(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  }

  changeColor() {
    let currentRGB = this.colorRGB();
    let ff = [...currentRGB];
    let test = this.shuffleColors(ff);

    this.setState({
      color: 'rgb(' + currentRGB[0] + ',' + currentRGB[1] + ',' + currentRGB[2] + ')',
      colorArray: currentRGB,
      shuffledColorArray: test,
      clickedBlocks: [],
      block1Clicked: false,
      block2Clicked: false,
      block3Clicked: false
    });

    console.log(this.state.clickedBlocks);
  }

  clickControl(name, block) {
    if (this.state.clickedBlocks.length < 3) {
      if (block === 1) {
        this.setState({
          block1Clicked: true
        });
      } else if (block === 2) {
        this.setState({
          block2Clicked: true
        });
      } else if (block === 3) {
        this.setState({
          block3Clicked: true
        });
      }

      this.setState({
        clickedBlocks: this.state.clickedBlocks.concat(name)
      });
    }
  }

  render() {
    const arraysEqual = (a1, a2) => {
      return JSON.stringify(a1) == JSON.stringify(a2);
    };

    return (
      <div>
        <div className="blocksDiv">
          <ColorFrame1
            onClick={() => this.clickControl(this.state.shuffledColorArray[0], 1)}
            color={this.state.shuffledColorArray[0]}
            clicked={this.state.block1Clicked}
          />
          <ColorFrame2
            onClick={() => this.clickControl(this.state.shuffledColorArray[1], 2)}
            color={this.state.shuffledColorArray[1]}
            clicked={this.state.block2Clicked}
          />
          <ColorFrame3
            onClick={() => this.clickControl(this.state.shuffledColorArray[2], 3)}
            color={this.state.shuffledColorArray[2]}
            clicked={this.state.block3Clicked}
          />
        </div>

        <div className="field" style={{ backgroundColor: this.state.color }}>
          {this.state.color}

          <Chameleon
            style={{
              backgroundColor: 'rgb(' + this.state.clickedBlocks[0] + ',' + this.state.clickedBlocks[1] + ',' + this.state.clickedBlocks[2] + ')'
            }}
          />
        </div>

        {arraysEqual(this.state.colorArray, this.state.clickedBlocks) && this.state.clickedBlocks.length > 0 ? (
          <Message mess={'Well Done'} />
        ) : this.state.clickedBlocks.length >= 3 ? (
          <Message mess={'Wrong color'} />
        ) : (
          <Message mess={'Save me'} />
        )}

        {this.state.clickedBlocks.length < 3 ? (
          <ActionButton onClick={this.changeColor} text={'Start'} />
        ) : arraysEqual(this.state.colorArray, this.state.clickedBlocks) ? (
          <ActionButton onClick={this.changeColor} text={'Next Round'} />
        ) : (
          <ActionButton onClick={this.changeColor} text={'Try Again'} />
        )}

        <div className="colorBar">
          <p className="colorBarBlocks">{this.state.clickedBlocks[0]}</p>
          <p className="colorBarBlocks">{this.state.clickedBlocks[1]}</p>
          <p className="colorBarBlocks">{this.state.clickedBlocks[2]}</p>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
