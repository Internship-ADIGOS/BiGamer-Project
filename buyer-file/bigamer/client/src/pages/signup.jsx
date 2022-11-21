import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import axios from 'axios'


const title = "Register Now";

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            regFName: '',
            regLName: '',
            regEmail: '',
            regPhone: '',
            regPassword: '',
            regConPassword: '',
            invited_by: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }
   
    handleSubmit = (e)=>{
      e.preventDefault()  
      const headers = {
        'Content-Type': 'application/json; charst=UTF-8',
        "access-control-allow-origin":"https://api.cockfight.com",
        "access-control-allow-credentials": true
      }

       const data = {
        name: this.state.regFName,
        email: this.state.regEmail,
        phone: this.state.regPhone,
        password: this.state.regPassword,
        invited_by: this.state.invited_by,
        wallet: 0
      }

      axios.post("https://api.cockboxing.com/v2/create-user-api.php", data

    //   headers: headers,
   ).then(response => {
    console.log("Registeration response", response);
    const ans = response.data;
    this.setState({ans})
   }).catch(error => {
    console.log("Registeration error", error)
   })
}


    render() { 
        return (
            <Fragment>
                <Header />
            
        
                <div className="login-section padding-top padding-bottom">
                    <div className=" container"  style={{marginTop: "10%"}}>
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={this.state.regFName}
                                        onChange={(e)=>{this.setState({regFName: e.target.value});}}
                                        placeholder="First Name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item02"
                                        value={this.state.regLName}
                                        onChange={(e)=>{this.setState({regLName: e.target.value});}}
                                        placeholder="Last Name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="email"
                                        id="item03"
                                        value={this.state.regEmail}
                                        onChange={(e)=>{this.setState({regEmail: e.target.value});}}
                                        placeholder="Your email *" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="phone"
                                        id="item04"
                                        value={this.state.regPhone}
                                        onChange={(e)=>{this.setState({regPhone: e.target.value});}}
                                        placeholder="Your phone number *" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        name="password"
                                        id="item05"
                                        value={this.state.regPassword}
                                        onChange={(e)=>{this.setState({regPassword: e.target.value});}}
                                        placeholder="Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password"
                                        name="conpassword"
                                        id="item06"
                                        value={this.state.regConPassword}
                                        onChange={(e)=>{this.setState({regConPassword: e.target.value});}}
                                        placeholder="Confirm Password *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="invite_code"
                                        name="invited_by"
                                        id="item07"
                                        value={this.state.invited_by}
                                        onChange={(e)=>{this.setState({invited_by: e.target.value});}}
                                        placeholder="Invite code"
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="d-block default-button" onClick={this.onSignupClick} ><span>Get Started Now</span></button>
                                </div>
                            </form>
                            <div className="account-bottom">
                                <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
                <Footer />
            </Fragment>
        );
    }
}
 
export default SignUp;