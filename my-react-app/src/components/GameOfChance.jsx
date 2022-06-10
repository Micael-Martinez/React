import React, {useState} from 'react';


// const Results = ({fiftyFifty, stateOfComponent}) => {
//     const [value, updateValue] = useState(stateOfComponent)

//     setInterval(() => {
//         updateValue(value + 1)
//     }, 000)

//     return(
//         <div>
//             <h2>{value}</h2>
//         </div>
//     )
// }

class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h1>{this.props.fiftyFifty ? "You Win!" : "You lose!"}</h1>;
    }
  }

  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1,
      };
    //   this.handleClick = this.handleClick.bind(this);
    }
    // handleClick() {
    //         this.setState({
    //             counter: this.state.counter + 1
    //           })
    // }

    render() {
      const expression = Math.random() >= .5 ? true : false;

      return (
        <div>
          <button onClick={() => {
              if(expression) {
                  this.setState({
                      counter: 0
                  })
              } else {
                  this.setState({
                      counter: this.state.counter + 1
                  })
              }
          }}>Play Again</button>

          <Results fiftyFifty={expression} />
          {(expression) ? <p>Merecidisimo!</p> : <p>Turn: {this.state.counter}</p>}

        </div>
      );
    }
  }

  export default GameOfChance;



// const GameOfChance = () => {
//     const [count, setCount] = useState(0)


//     const expression = (Math.random() >= .5) ? true : false;

//     return (

//         <div>
//             <button onClick={() => {
//                         if(expression) {
//                             setCount(0)
//                             console.log('Ejecuto true')
//                         } else {
//                             setCount(count + 1)
//                             console.log('ejecuto false')
//                         }
//             }}>Play Again!</button>

//             {(expression) ? <p>Felicidades, haz ganado!</p> : <p>Turn: {count}</p>}
//         </div>
//     )
// }

