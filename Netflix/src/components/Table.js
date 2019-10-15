import React, {Component, PropTypes} from 'react';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.indexes = [];
        this.state = {visitedIndexs: []};
    }

    action(id,title) {
        if(title === "Add"){
            this.props.actions.addTitle(id, this.props.type);
        }else{
            this.props.actions.deleteRow(id, this.props.type);
        }
    }




    onMouseEnterHandler(i){
        this.indexes.push(i);
        this.setState({
            visitedIndexs: this.indexes
        });
    }

    render() {
        const that = this;
        let tableRow;
        return (
            <div>
                <table className="table data-table">
                    <tbody>
                        <tr className="table-row">
                        {this.props.data.length==0?<td>No Titles in this List</td> : null}
                        {this.props.data.length>0?
                        this.props.data.map((row, i) => {
                            return (
                                    <td>{row.title}
                                    <img className="img-responsive" src={row.img} onMouseEnter={this.onMouseEnterHandler.bind(this, i)}/>
                                    {(this.state.visitedIndexs.indexOf(i) !== -1) ? <button className="btn btn-default removeBtn" onClick={that.action.bind(this, row.id,this.props.butonTitle)} >{this.props.butonTitle}</button> : null }
                                    </td>
                                    )
                                }) : null}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}