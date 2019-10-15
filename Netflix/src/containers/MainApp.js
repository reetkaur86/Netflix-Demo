import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/actions';
import Table from '../components/Table';
@connect(state => ({
    myListData: state.data.myListData,
}))
export default class MainApp extends Component {
    static propTypes = {
        myListData: PropTypes.array,
        dispatch: PropTypes.func.isRequired
    }
    render() {
        const actions = bindActionCreators(action, this.props.dispatch);
        return (
            <div>
                <div className="container-fluid">
                    {this.props.myListData.map((obj) => {
                       return (
                                <div className="container">
                                    <h4>My List</h4>
                                <Table data={obj.mylist} actions={actions} type={"mylist"} butonTitle="Remove"/>
                                    <h4 className="recomendation">Recommendations List</h4>
                                <Table data={obj.recommendations} actions={actions} type={"recommendations"}  butonTitle="Add"/>
                                </div>
                         );
                    })}
                    <div>
                        {this.props.myListData.map((obj) => {
                            return (
                                <div className="container">
                                    <h4>My List Titles</h4>
                                <ul>
                                {obj.mylist.map((val) => {
                                   return(<li>{val.title}</li>)
                                })}
                                </ul>
                                </div>)
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}
