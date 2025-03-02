import React from "react";
import "../App.css"

function Main() {
  return (
  
  <>
  {/* !!!!!slider or carousel!!!! */}
    <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
  <video className="h-full w-full object-cover" autoPlay muted loop>
  <source src="https://cdn.pixabay.com/video/2020/06/01/40781-426939561_tiny.mp4" type="video/mp4" />
   </video>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <video className="h-full w-full object-cover" autoPlay muted loop>
  <source src="https://videos.pexels.com/video-files/3735731/3735731-hd_1920_1080_25fps.mp4" type="video/mp4" />
  Your browser does not support the video tag.
  </video>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <video className="h-full w-full object-cover" autoPlay muted loop>
  <source src="https://cdn.pixabay.com/video/2020/06/01/40781-426939561_tiny.mp4" type="video/mp4" />
  Your browser does not support the video tag.
  </video>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <video className="h-full w-full object-cover" autoPlay muted loop>
  <source src="https://cdn.pixabay.com/video/2016/09/21/5460-183788609_medium.mp4" type="video/mp4" />
  Your browser does not support the video tag.
  </video>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  </div>
   {/* !!!subtag or hero!!! */}
   <><div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://plus.unsplash.com/premium_photo-1682309704250-6bac0f499665?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Give the gift of life <br/> <span className="text-red-700">Donate Blood Today!</span></h1>
       <p className="mb-5">
      "🧠🧠A single drop of blood can make a huge difference🧠🧠"<br/>
      "A blood donor is equal to a lifesaver"<br/> 
      "Be a hero, donate blood, and give someone a chance to live"<br/> 
      "Your one-hour commitment to blood donation can save up to three lives" <br/>
      "A timely donation of blood can save a life" <br/>
      </p>
      <h1 className="mb-5 text-5xl font-semibold text-black italic">Be A Superhero<br/> <span className="text-pink-700">Register As A Donor</span></h1>
     <a href="#forminbutton"><button  className="btn btn-primary">Registration Emergency Blood Donation</button> </a> 
    </div>
  </div>
  </div></> 
 {/* carousel carousel-center */}
 <>
<h1 className="formbood bg-neutral text-white">Blood Donation Pictures</h1>
<div className="carousel carousel-center bg-neutral box  space-x-4 p-4 " data-interval="100">
  <div className="carousel-item">
    <img
      src="https://m.photos.timesofindia.com/thumb.cms?msid=6318328&width=500&resizemode=4"
      className="rounded-box img11" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCBhBtH27a5dfAiudiYNdo5p7f4kV23JY0w&s"
      className="rounded-box img11" />
  </div>
  <div className="carousel-item">
    <img
      src="https://c8.alamy.com/comp/GAE5B4/danny-john-jules-attends-a-photocall-at-west-end-donor-centre-to-highlight-GAE5B4.jpg"
      className="rounded-box img11" />
  </div>
  <div className="carousel-item">
    <img
      src="https://www.thesun.co.uk/wp-content/uploads/2017/11/nintchdbpict0003685444641.jpg?strip=all&w=599"
      className="rounded-box img11" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJrnj9ArfGv5aILOovAyrRyQT4Ma8ArboKA&s"
      className="rounded-box img11" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZERlnTrdZQTqJohnFpgpVfQ__ZyBcJQt6Q&s"
      className="rounded-box img11" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUIEBtudUV2f9CrQ2yjjQ91Fn1L0Hsn1Mbg&s"
      className="rounded-box img11" />
  </div>
</div>

 </>
 <div className=" radial bg-neutral grid grid-cols-2  bg-neutral ">
 <div className=" radii  radial-progress text-yellow-400 rounded-box size-20 mb-8" style={{ "--value": 70 }} role="progressbar">
2 Million <p className="loading loading-ring loading-xs"></p>
</div>
<p><h1 className=" inline text-amber-400  "> India has a shortage of 2 Million Blood Units <br/> <span className="text-white inline">There is a requirement of 15 million units of blood annually. However, we are only able to collect 13 million units. <span className="text-red-500">We just need 2% of India’s youth to donate regularly</span> to address the complete demand.</span></h1></p>
 </div>
  
  </>
  
  )
}

export default Main ;
