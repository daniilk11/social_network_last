import React from 'react';

class ProfileStatus extends React.Component {



    state = {  // local state
        editMode: false,
        status: this.props.status,
    }


    activateEditMode = () => {
        this.setState({  //async func
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({  //async func
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {  // вызываеться самим реактом, после каждого обновления- изменения (ввода символа, например)
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('componentDidUpdate')
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode} >{this.props.status || "---"}</span>
                    </div>}

                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autofocus={true} onBlur={this.deactivateEditMode} value={this.state.status} ></input>
                    </div>}

            </div >
        )

    }
}


export default ProfileStatus;