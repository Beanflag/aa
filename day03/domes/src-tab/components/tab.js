import React, { Component } from 'react'

export default class Tab extends Component {
    state={
        ind:0
    }
    changes(index){
        this.setState({
            ind:index
        })
    }
    render() {
        let lists = this.props.data
        let {ind} = this.state
        return (
            <div>
                <div className="nav">
                    <ul>
                        {lists.map((item,index) => <li key={index} onClick={this.changes.bind(this,index)}>{item.title}</li>)}
                    </ul>
                </div>
                <div className="consts">
                     <dl>
                        <dt>
                            <img src={lists[ind].imgs}/>
                        </dt>
                        <dd>
                            <ol>
                                {lists[ind].tit.map((ite,ind) => <li key={ind}>{ite}</li>)}
                            </ol>
                        </dd>
                    </dl>
                </div>
            </div>
        )
    }
}
