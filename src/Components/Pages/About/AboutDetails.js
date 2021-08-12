import './About.css'


const AboutDetails = () => {
    return (
        <div>
        <div class="container my-5" id="abouttextstyle">
   <div class="row">
     <div class="col-md-6 p-4 p-sm-5 order-2 order-sm-1">
       <small class="text-uppercase" ></small>
       <h1 class="h2 mb-4" style={{fontWeight: 600}}>Our mission and your mission should you choose to accept it...</h1>
    <p class="text-secondary" style={{lineHeight: 2}}>Catering to the individualistic needs of each student</p><br/><p>We are passionate about what we do and strive for excellence every single day.</p> 
     </div>
     <div class="col-md-6 p-0 text-center order-1 order-sm-2">
        <img src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="w-100 img-fluid" alt=""/></div>
        </div>
 </div>
 </div>
    );
}

export default AboutDetails;