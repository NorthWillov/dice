import React from 'react';
import Die from './Die';

class RollDice extends React.Component {
  static defaultProps = {
    faces: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props) {
    super(props);
    this.state = {
      firstFace: 'one',
      secondFace: 'two',
      rolling: false
    }
  }

  roll = () => {
    const { faces } = this.props;
    const randFace = faces[Math.floor(Math.random() * faces.length)];
    const randFace2 = faces[Math.floor(Math.random() * faces.length)];
    this.setState({
      firstFace: randFace,
      secondFace: randFace2,
      rolling: true
    });
    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.firstFace} rolling={this.state.rolling}/>
          <Die face={this.state.secondFace} rolling={this.state.rolling}/>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;