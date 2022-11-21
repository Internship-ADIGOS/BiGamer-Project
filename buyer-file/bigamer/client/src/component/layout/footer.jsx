import { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "../section/rating";
import SocialMedia from '../section/socialmedia';

const postTitle = "Top jackpot games";
const newsTitle = "Our Newsletter";
const desc = "Upropriate brand economca sound technolog after covalent technology enable prospective wastng markets whereas propriate and brand economca sound technolog";
const newsdesc = "Bigamer esports organization supported by community leaders";

let FooterItemList = [
    {
        imgUrl: 'assets/images/footer/01.jpg',
        imgAlt: 'Footer Blog Post',
        title: 'free Poker Game',
        proName: 'Poker',
        proPrice: '$230',
    },
    {
        imgUrl: 'assets/images/footer/02.jpg',
        imgAlt: 'Footer Blog Post',
        title: 'CLUB Poker Game',
        proName: 'Poker',
        proPrice: '$230',
    },
    {
        imgUrl: 'assets/images/footer/03.jpg',
        imgAlt: 'Footer Blog Post',
        title: 'ROYAL Poker Game',
        proName: 'Poker',
        proPrice: '$300',
    },
]

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsName: '',
            newsEmail: '',
        };
    }
    render() { 
        return (
            <footer className="footer-section">
                
                <div className="footer-middle padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/footer/bg.jpg)"}}>
                    <div className="container">
                        <div className="row padding-lg-top">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title mb-4">
                                            <img src="assets/images/logo/logo.png" alt="logo" />
                                        </div>
                                        <div className="fm-item-content">
                                            <p className="mb-4">{desc}</p>
                                            <ul className="match-social-list d-flex flex-wrap align-items-center">
                                                <SocialMedia />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item-3 mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>{newsTitle}</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <p>{newsdesc}</p>
                                            <form>
                                                <div className="form-group mb-4">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="item01"
                                                        className="form-control"
                                                        value={this.state.newsName}
                                                        onChange={(e)=>{this.setState({newsName: e.target.value});}}
                                                        placeholder="Your Name *"
                                                    />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <input
                                                        type="email"
                                                        name="name"
                                                        id="item02"
                                                        className="form-control"
                                                        value={this.state.newsEmail}
                                                        onChange={(e)=>{this.setState({newsEmail: e.target.value});}}
                                                        placeholder="Your Email *"
                                                    />
                                                </div>
                                                <button type="submit" className="default-button"><span>Send Massage <i className="icofont-circled-right"></i></span></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-content text-center">
                                    <p>&copy;2022 | CockBoxing.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;