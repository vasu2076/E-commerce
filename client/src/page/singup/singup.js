import { useContext, useEffect } from "react"
import { mycontext } from "../../App"
import Logo from '../../assets/image/logo.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Googleimg from "../../assets/image/google.png"

const Singup =() =>{

    const context = useContext(mycontext)

    useEffect(()=>{
        context.setisheaderfootrshow(false)
    },[])

    return(
        <>
        <section className="section signinpage signuppage">
        <div class="shape-bottom"> <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8"> <path class="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path> </svg></div>
        <div className="container">
            <div className="box card p-3 shadow border-0">
                <div className="text-center">
                    <img src={Logo}/>
                </div>
                <form className="mt-3">
                <h2 className="mb-3">Sing up</h2>

                <div className="row">
                    <div className="col-md-6">    
                    <div className="form-group">
                     <TextField  label="Name" variant="standard" required className="w-100"/>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                     <TextField  label="Phone No" variant="standard" required className="w-100"/>
                    </div>
                    </div>
                </div>
                     <div className="form-group">
                             <TextField id="standard-basic" label="Email" type="email" variant="standard" required className="w-100"/>
                    </div>
                    
                    <div className="form-group">
                         <TextField id="standard-basic" label="Password" type="password" variant="standard" required className="w-100"/>
                    </div>

                    <a className="border-effect cursor txt">Froget Password?</a>

                    <div className="d-flex align-items-center mt-2 mb-3">
                    <Button className="btn-blue col btn-lg btn-big ">Sing Up</Button>
                   <Link to="/"><Button className="ml-2 btn-lg btn-big col" variant="outlined" onClick={()=> context.setisheaderfootrshow(true)}>Cancel</Button></Link> 
                    </div>
                    <p className="txt">Not Registered? <Link to="/sigin" className="border-effect">Sign In</Link></p>
                    <h5 className="mt-3 mb-2 text-center font-weight-bold">Or Continue With Social Account</h5>
                  <Button className="google"><img src={Googleimg} className="w-100" alt="img"/></Button>
              
                </form>
            </div>
        </div>
        </section>
        </>
    )
}
export default Singup