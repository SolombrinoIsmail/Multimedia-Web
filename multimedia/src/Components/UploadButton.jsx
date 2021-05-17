import React, {Component} from "react";

export default class FileUploadButton extends Component {
    handleFileUpload = event => {
        console.log(event.target.files[0].name);
    };

    render() {
        return (
            <div className="Library">
                <input
                    ref="fileInput"
                    onChange={this.handleFileUpload}
                    type="file"
                    style={{display: "none"}}
                    // multiple={false}
                />
                <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
            </div>

        );
    }
}
