import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import Table from './Table'
import HrShape from "../component/layout/hrshape";
import AboutSection from "../component/section/about";
import BannerSection from "../component/section/banner";
import BlogSection from "../component/section/blog";
import CollectionSection from "../component/section/collection";
import CtaSection from "../component/section/cta";
import MatchSection from "../component/section/match";
import PlayerSection from "../component/section/player";
import ProductSection from "../component/section/product";
import SponsorSection from "../component/section/sponsor";
import TestimonialSection from "../component/section/testimonial";
import Iframe from "../component/section/Iframe";
import Navigation from '../component/section/Navigation'
import axios from 'axios'

const isToken = localStorage.getItem('token');

class HomePage extends Component {
//    constructor(props){
//     super(props);
//     this.state = {
//         wallet: 0
//     }

//     this.handleRender = this.handleRender.bind(this)
//    }
state = { wallet: null}

    handleRender = (e) => {
        e.preventDefault();

        const withoutQuotes = isToken.replaceAll('"', '');

        axios.post("https://api.cockboxing.com/v2/dashboard-api.php", {

            headers: {
                "auth": withoutQuotes
            }

        }).then((res) => {
            let wallet = res.data.user[0].wallet
            this.setState({wallet})
            console.log({wallet})
        })
    }

    render() { 
        let {wallet} = this.state
        return (
            <Fragment>
                <Header isToken={isToken}/>
                { wallet > 50 && (
                <Iframe  isToken={isToken} source={'https://player.castr.com/live_9539ebf05a2e11edaa1dbba0db7dad64'}/>
                )}
                <Table isToken={isToken} />
                {/* <ControlledCarousel /> */}
                <BannerSection />
                <CollectionSection />
                <AboutSection imgUrl={'assets/images/about/01.png'} />
                <MatchSection />
                <PlayerSection />
                <CtaSection imgUrl={'assets/images/cta/01.png'} />
                <HrShape />
                <SponsorSection />
                <BlogSection />
                <TestimonialSection />
                <Footer />
                <Navigation />
            </Fragment>
        );
    }
}
 
export default HomePage;