import React from "react";

class AdminForm extends React.Component {
    render() {
        return(
            <div>
                <div className="columns is-centered">
                    <div className="column is-half">
                        <div className="field">
                            <label className="label">Service</label>
                            <div className="control has-icons-left name-input">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Service Title"
                                    value={this.props.input.title}
                                    onChange={(event)=> {
                                        this.props.handleChange("title", event);
                                    }} />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-address-card"></i>
                                        </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Price</label>
                            <div className="control has-icons-left price-input">
                                <input 
                                    className="input" 
                                    type="number" 
                                    placeholder="Price"
                                    value={this.props.input.price}
                                    onChange={(event)=> {
                                        this.props.handleChange("price", event);
                                    }} />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-usd"></i>
                                        </span>
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button onClick={()=> {
                                    this.props.handleClick(this.props.input)
                                }} className="button is-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminForm;