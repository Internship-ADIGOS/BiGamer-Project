import { React, useState } from "react"


const Payments = () => {
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')
const [amount, setAmount] = useState('')


//function handlepay
const handlePay = (e) =>{
    e.preventDefault();
    if(name === '' || phone === '' || amount === ''){
        alert("Please input the details")
    }else{
        var options = {
            key: "rzp_test_y4lyFNJHzXTVHI",
            key_secret: "YiB5nNajXXUgMhFf9HUgdovB",
            amount: amount * 100,
            currency: "INR",
            name: name,
            description: "For Testing purpose",
            handler: function(response){
              alert(response.razorpay_payment_id)
            },
            prefill:{
               name:name,
               email:email,
               phone:phone,
            },
            notes:{
                address:"Razorpay Corporation Office"
            },
            theme:{
                color: '#3399cc'
            }
        };

        var pay = new window.Razorpay(options);
        pay.open()  
    }
}

  return (
    <div>
        <form className="account-form">
        <h2>Welcome to the Razorpay Intergration!</h2>
        <div className="form-group">
        <input type="text" name='name' placeholder="Enter name" value={name} onChange={(e)=>setName( e.target.value )}/>
        </div>
        <div className="form-group">
        <input type="text" name='email' placeholder="Enter email" value={email} onChange={(e)=>setEmail( e.target.value )}/>
        </div>
        <div className="form-group">
        <input type="text" name='phone' placeholder="Enter the phone number" value={phone} onChange={(e)=>setPhone( e.target.value )}/>
        </div>
        <div className="form-group" value={amount} onChange={(e)=>setAmount( e.target.value)}>
        <input type="text" name='amount' placeholder="Enter the amount"/>
        </div>
    
        <button type="submit" className="d-block default-button" onClick={handlePay}><span>Submit Now</span></button>
        </form>
    </div>
  )
}

export default Payments