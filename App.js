import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';

class App extends React.Component {
  state = {loaded: false};
  async componentDidMount() {
    this.Navigation = (await import('./src/navigation')).default;

    await this.setState({loaded: true});
  }
  Navigation = () => null;

  render() {
    if (!this.state.loaded) {
      return null;
    }
    return (
      <Provider store={store}>
        <this.Navigation />
      </Provider>
    );
  }
}

export default App;
