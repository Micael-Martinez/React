import React from 'react';

class componentDidMountForAPIS extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273 //aca puedo traer los datos de la api despues de 2,5
        });
      }, 1500);
    }
    render() {
      return (
        <div>
            <h1>Active Users: {this.state.activeUsers}</h1>
        </div>
      );
    }
  }

export default componentDidMountForAPIS;