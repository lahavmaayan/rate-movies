import { connect } from 'react-redux';
import ObjectiveMovieView from './ObjectiveMovieView';
import { setMovie as setMovieAction } from './actions';

const mapStateToProps = state => {
    return {
        movie: state.objectiveMovie.movie
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setMovie: movie => dispatch(setMovieAction(movie))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ObjectiveMovieView);
