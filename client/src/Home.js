import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
        };
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Form submitted");
        } else {
            alert("Form has errors.");
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div className="home">
                <h1><span>FE</span> Credit</h1>
                <h5>vay tiêu dùng tín chấp </h5>
                <form
                    name="contactform"
                    className="contactform"
                    onSubmit={this.contactSubmit.bind(this)}
                >
                    <div className="col-md-6">
                        <fieldset>
                            <h2>Đăng Nhập</h2>
                            <label className="center"> Email </label>
                            <input
                                className="center"
                                ref="Email"
                                type="text"
                                size="30"
                                placeholder="tam.pham@fecredit.com.vn"
                                onChange={this.handleChange.bind(this, "Email")}
                                value={this.state.fields["Email"]}
                            />
                            <span style={{ color: "red" }}>{this.state.errors["Email"]}</span>
                            <br />
                            <label className="center"> Mật Khẩu </label>
                            <input
                                className="center"
                                refs="pwd"
                                type="text"
                                size="30"
                                placeholder="*****"
                                onChange={this.handleChange.bind(this, "pwd")}
                                value={this.state.fields["pwd"]}
                            />
                            <span style={{ color: "red" }}>{this.state.errors["pwd"]}</span>
                            <br />
                            <div className="center-btn">
                                <button><Link to="/hoso">Đăng Nhập </Link></button>
                            </div>
                        </fieldset>
                    </div>
                </form>
                <small>2021 @ FE Credit</small>
            </div>
        );
    }
}

export default Home;
