import React, {
    Component
} from 'react';
import Spinner from '../spinner';
import ErrorWrapping from '../error/error-wrapping';
import Error404 from '../error/error-404'
import {
    ItemViev
} from '../item-detalls'

class WrappingDetalls extends Component {
            componentDidMount() {
                setTimeout(this.updateItem(), 4000);
            }
            componentDidUpdate(prevProps) {
                if (this.props.idItem !== prevProps.idItem) {
                    this.setState({
                        loading: true
                    });

                    setTimeout(this.updateItem(), 4000);
                }
            }
            constructor() {
                super();
                this.state = {
                    item: null,
                    image: null,
                    loading: true,
                    error: false
                };
                this.onItemLoaded = (item) => {
                    const {imageUrl} = this.props;
                    this.setState({
                        item,
                        image: imageUrl(item),
                        loading: false,
                        error: false
                    });
                };

                this.onError = (err) => {
                    this.setState({
                        loading: false,
                        error: true
                    });
                };
                this.updateItem = () => {
                    const { idItem, getItems} = this.props;
                      if (!idItem) {
                        return;
                    }
                    getItems(idItem)
                        .then(this.onItemLoaded)
                        .catch(this.onError);
                };
            }

            render() {
                const {item, error, loading, image} = this.state;
                const checkData = !(loading || error);
              
                  const errorMess = error ? <Error404/> : null;
                  const spinner = loading ? <Spinner/> : null;
                  const content = checkData ? <ItemViev  item={item} 
                  imageUrl={image}
                  bodyItem = {this.props.children}/> : null;
              
                  return(
                      <ErrorWrapping>
                        <div className="card item-detalls">
                        {errorMess}
                        {spinner}
                        {content}
                        </div>
                     </ErrorWrapping>
                 )};
            
        };
        export default WrappingDetalls;