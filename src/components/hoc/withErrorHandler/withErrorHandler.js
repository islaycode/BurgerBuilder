import React,{Component,Fragment} from 'react';
import Modal from '../../UI/Modal/Modal';

export const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error : null
        }
        UNSAFE_componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null})
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error })
            });
        }
        UNSAFE_componentWillUnmount(){
        
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        render(){
            return(
                <Fragment>
                <Modal show={this.state.error}
                modalClosed = {this.errorConfirmedHandler}
                >
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Fragment>
    
            )
        }
}
}

export default withErrorHandler;