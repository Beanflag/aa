import React, { Component } from 'react'

export default class Drag extends Component {
    state={
        left:0,
        top:0
    }
    render() {
        let {left,top} = this.state
        return (
            <div className="dreg" style={{left,top}} onMouseDown={this.mousedown}></div>
        )
    }
    mousedown = (e) => {
        this.x = e.clientX - e.target.offsetLeft;
        this.y = e.clientY - e.target.offsetTop;

        document.addEventListener("mousemove",this.mousemove,false)
    }
    mousemove = (e) => {
        this.setState({
            left:e.clientX - this.x,
            top:e.clientY - this.y
        })
    }
}
