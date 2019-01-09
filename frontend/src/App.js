import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppView from './AppView';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps() {
    return {};
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AppView)
);
