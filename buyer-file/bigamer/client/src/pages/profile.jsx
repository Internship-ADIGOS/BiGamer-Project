import { React, useState, useEffect } from 'react'
import '../assets/css/profile.css'
import axios from 'axios'


function Profile() {
    
    const [userData, setUserData] = useState([])
    //function for fetching the user details 
    const fetchUser = (e) => {
        const str = localStorage.getItem("token");
        const withoutQuotes = str.replaceAll('"', '');
        // if(authToken){
        //     authToken = authToken.replace(/^"(.*)"$/, '$1');
        //     return authToken
        // }
        axios.get("https://api.cockboxing.com/v2/dashboard-api.php", {
            headers: {
                "auth": withoutQuotes
            }
        }).then((res)=>{
           console.log(res.data.user[0].wallet)
           setUserData(res.data.user[0])   
        })

    }
    useEffect(() => {
        fetchUser();
    }, [])

    

 return (
<>
<div className='pcontainer'
    style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "2rem" }}>
    <div className='pbox '
        style={{
            height: "44rem", width: "60rem", border: " 10px solid #232a5c",
            display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "5rem",
            backgroundImage: "url(../assets/images/cta/bg.jpg)",
            fontSize: "1rem",
            wordSpacing: "0.4rem"
        }}>

        <div className='firstsection' style={{ display: "flex", marginLeft: "-3rem", marginBottom: "1.5rem" }}>

            <img src='../assets/images/logo/logo.png' style={{ height: "8rem", width: "8rem", marginRight: "1rem" }} />
            <div className='info'>
                <div className='name' style={{marginLeft: "15px"}}>
                    {userData.name}
                </div>
                <div className='phone'>
                    <i class="fa-solid fa-mobile"></i>  
                    {userData.phone}
                </div>
                <div className='ref'>
                    <i class="fa-solid fa-user"></i>   Invite Code : {userData.invite_code}  <button type="button" class="btn btn-primary btn-sm">Copy</button>

                </div>
            </div>
        </div>
        
        <div className='secondsection' style={{ backgroundColor: "#ff0052", height: "4rem", width: "55rem", display: "flex", justifyContent: "space-around", marginLeft: "-3rem" }}>
            <div className='coins' style={{ width: "9%" }}>₹{userData.wallet} Coins</div>
            <div className='diamond' style={{ width: "10%" }}>₹0.00 Diamonds</div>
            <div className='downline' style={{ width: "10%" }}>0 Downlines</div>

        </div>

        <div className='thirdsection' style={{ width: "55rem", marginLeft: "-3rem", backgroundColor: "white", marginBottom: "2rem" }}>
            <div className='list' style={{ height: "2rem", display: "flex", borderBottom: "1.7px solid black", borderRadius: "1px", paddingLeft: "1rem", color: "black", margin: "0.1rem", alignItems: "center", marginBottom: "0.3rem" }}><i class=" fa-regular fa-bell fa-fw "></i>  Notification</div>
            <div className='list' style={{ height: "2rem", display: "flex", borderBottom: "1.7px solid black", borderRadius: "1px", paddingLeft: "1rem", color: "black", margin: "0.1rem", alignItems: "center", marginBottom: "0.2rem" }}><i class="fa-regular fa-clipboard fa-fw"></i>Play Record</div>
            <div className='list' style={{ height: "2rem", display: "flex", borderBottom: "1.7px solid black", borderRadius: "1px", paddingLeft: "1rem", color: "black", alignItems: "center", margin: "0.1rem", marginBottom: "0.2rem" }}><i class="fa-regular fa-clipboard fa-fw"></i>Recharge Record</div>
            <div className='list' style={{ height: "2rem", display: "flex", borderBottom: "0px solid black", borderRadius: "1px", paddingLeft: "1rem", color: "black", alignItems: "center", margin: "0.1rem", marginBottom: "0.2rem" }}><i class="fa-regular fa-clipboard fa-fw"></i>Withdraw Record</div>

        </div>

        <div className='secondsection' style={{ backgroundColor: "#ff0052", height: "4rem", width: "55rem", display: "flex", justifyContent: "space-around", marginLeft: "-3rem" }}>
            <div className='coins' style={{ width: "9%" }}>₹0.00 Coins</div>
            <div className='diamond' style={{ width: "10%" }}>₹0.00 Diamonds</div>
            <div className='downline' style={{ width: "10%" }}>0 Downlines</div>

        </div>

        <div className='fourthsection' style={{ width: "55rem", color: "black", marginLeft: "-3rem" }}>
            <div className='list' style={{ height: "2rem", display: "flex", borderBottom: "1.7px solid black", borderRadius: "1px", paddingLeft: "1rem", alignItems: "center", margin: "0.1rem", marginBottom: "0.3rem" }}><i class="fa-regular fa-envelope-open fa-fw"></i>Suggestions</div>
            <div className='list' style={{ height: "2rem", display: "flex", borderBottom: " 1.7px solid black", borderRadius: "1px", paddingLeft: "1rem", alignItems: "center", margin: "0.1rem", marginBottom: "0.3rem" }}><i class="fa-regular fa-comment fa-fw"></i>Service</div>
            <div className='list' style={{ height: "2rem", display: "flex", borderBottom: "1.7px solid black", borderRadius: "1px", paddingLeft: "1rem", alignItems: "center", margin: "0.1rem", marginBottom: "0.3rem" }}><i class="fa-regular fa-heart fa-fw"></i>Ad Space</div>
            <div className='list' style={{ height: "2rem", display: "flex", borderBottom: "0px solid black ", borderRadius: "1px", paddingLeft: "1rem", alignItems: "center", margin: "0.1rem", marginBottom: "0.3rem" }}><i class="fa-solid fa-share-nodes fa-fw"></i>Share</div>
        </div>
    </div>
</div>

</>
)
}
export default Profile