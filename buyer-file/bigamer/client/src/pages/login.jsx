import * as React from 'react'
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import axios from 'axios';
import PageHeader from "../component/layout/pageheader";
import SocialMedia from "../component/section/socialmedia";
import { ThemeProvider } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const title = "Login";
class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPass: '',
        };
        // this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = { user: null, error: null, show: true, status: false };


    handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://api.cockboxing.com/v2/login-api.php", {

            email: this.state.userName,
            password: this.state.userPass

        }).then((res) => {
            if (res.data.status == 1) {
                let user = res.data.user;
                localStorage.setItem("token", JSON.stringify(res.data.token))
                this.setState({ user })
                this.setState({status: true})
            } else {
                let error = res.data.error;
                this.setState({ error })
               
            }
        })
    }

    // handleLogout = (e) =>{
    //     localStorage.removeItem('token')
    //     this.setState({status : false})
    // }
    // handleDismiss() {
    //     this.setState({ show: false });
    // }

    handleShow() {
        this.setState({ show: true });
    }
    

    render() {
        let { user, error } = this.state;
        let isToken = localStorage.getItem('token');
        let {show} = this.state;
        let {status} = this.state
        
        if (isToken) {
            return <Navigate to="/" replace={true} />
        } else {
            return (
                <Fragment>
                    <Header />
                    <div className="login-section padding-top padding-bottom">
                        <div className=" container" style={{ marginTop: "10%" }}>
                            <div className="account-wrapper">
                                {error && !show && <div style={{marginLeft: "23px"}} class="alert alert-warning alert-dismissible" role="alert">
                                    <strong>Invalid Credentials! Please Try again</strong>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleShow}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    
                                </div>}
                                <h3 className="title">{title}</h3>
                                {status && (
                                    <Navigate to="/" replace={true} />
                                )}

                                <form className="account-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="username"
                                            id="item01"
                                            value={this.state.userName}
                                            onChange={(e) => { this.setState({ userName: e.target.value }); }}
                                            placeholder="User Name *"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            id="item02"
                                            value={this.state.userPass}
                                            onChange={(e) => { this.setState({ userPass: e.target.value }); }}
                                            placeholder="Password *"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                            <div className="checkgroup">
                                                <input type="checkbox" name="remember" id="remember" />
                                                <label htmlFor="remember">Remember Me</label>
                                            </div>
                                            <a href="#">Forget Password?</a>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="d-block default-button"><span>Submit Now</span></button>
                                    </div>
                                </form>
                                <div className="account-bottom">
                                    <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/signup"> Sign Up</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </Fragment>
            );
        }
    }
}

export default LogIn;