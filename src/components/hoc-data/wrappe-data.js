import React, {
  Component
} from 'react';
import Spinner from '../spinner';
import ErrorWrapping from '../error/error-wrapping';

const wrappingDate = (View, getData) => {
  return class extends Component {

    state = {
      data: null
    };

    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }
    render() {
      const {data} = this.state;
      if (!data) {
        return <Spinner/> ;
      }
      return ( <ErrorWrapping>
        <View {...this.props}
        data = { data}/></ErrorWrapping>

      );

    }
  };
};

export default wrappingDate;