import { Component } from "react";
import Iframe from "./Iframe";
const subtitle = "our LATEST VIDEOS";
const title = "check our live streaming";
const link = 'https://player.castr.com/live_9539ebf05a2e11edaa1dbba0db7dad64'

let VideoListContentTop = [
{
imgUrl: 'assets/images/video/01.jpg',
imgAlt: 'Video Thum',
videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
title: '2021 LVP SuperLiga Orange Summer',
btnText: 'watch now',
},
]

let VideoListContentBottom = [
{
imgUrl: 'assets/images/video/03.jpg',
imgAlt: 'Video Thum',
videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
title: 'IEM SEASON XVI – SUMMER',
btnText: 'watch now',
},
{
imgUrl: 'assets/images/video/04.jpg',
imgAlt: 'Video Thum',
videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
title: 'IEM SEASON XVI – SUMMER',
btnText: 'watch now',
},
{
imgUrl: 'assets/images/video/05.jpg',
imgAlt: 'Video Thum',
videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
title: 'IEM SEASON XVI – SUMMER',
btnText: 'watch now',
},
]

class VideoSection extends Component {
render() { 
return (
<div className="video-section padding-top padding-bottom bg-attachment" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
<div className="container">
<br/>
<div className="section-wrapper">
<div className="row g-4">
<div className="col-12">
    <div className="video-top" style={{marginTop:"50px"}}>
        <div className="row g-4 justify-content-center">
            {VideoListContentTop.map((val, i) => (
                <div className="col-lg-12 col-12" key={i}>
                    <div className="video-item">
                        <div className="video-inner position-relative">
                            <div className="video-thumb position-relative video-overlay">
                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                <div className="video-icon">
                                    <Iframe src={link}/>
                                    <i className="icofont-play-alt-1"></i>
                                    <span className="pluse"></span>
                                </div>
                            </div>
                            <div className="video-content abs-video-content">
                            <a href={val.videoLink}  target="_blank">{val.btnText}<i className="icofont-play-alt-1"></i></a>
                                <h3>{val.title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

</div>
</div>
</div>
</div>
);
}
}

export default VideoSection;