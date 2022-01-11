
import React from 'react';


class Item extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            clickes: 0
        }
    }
    clicked() {
        {this.setState({clickes: this.state.clickes + 1})}
    }
  render() {
    return(
        <div>
            <h1 onClick={() => this.clicked()}>
                Hello {this.props.name}
            </h1>
            <h2>
                {this.state.clickes}
            </h2>
        </div>

    )
  }
}

export default Item