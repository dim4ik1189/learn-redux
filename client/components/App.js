import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main'

const mapStateToProps = (state) => (
    {
        posts: state.posts,
        comments: state.comments
    }
);

const mapDispatchToProps = (dispatch) => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Main);