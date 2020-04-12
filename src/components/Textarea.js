import React, { Component } from 'react'

export class Textarea extends Component {

    state = {
        text: ""
    };
    render() {

        const textArea = document.querySelector("textarea");
        const textRowCount = textArea ? textArea.value.split("\n").length : 0;
        const rows = textRowCount + 1;
        console.log(rows);
        return (
            <div>
                <textarea
                    onBlur={this.onBlur}
                    rows={rows}
                    placeholder={this.placeholder}
                    style={{ minHeight: "6vh", height: "unset" }}
                    onKeyPress={event => this.setState({ text: event.target.value })}
                    autoFocus
                />
            </div>
        );
    }
}

export default Textarea
