import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import TextCom from '../components/TextCom';

export default function LandingPage() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const cookies = new Cookies();
  const cookie = cookies.get('jwt');

  const handleCreateCVClick = () => {
    if (!cookie) {
      setShowLoginPopup(true);
    } else {
      // User is logged in, handle navigation accordingly
    }
  };

  return (
    <>
      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col  ">
            <h2 className="text-2xl font-bold mb-4">Login Required</h2>
            <p className="text-gray-600 mb-4">Please login to continue.</p>
            <Link to="/login" className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-700 text-center">
              Login
            </Link>
          </div>
        </div>
      )}

      {/* Landing Page Content */}
      <section className="relative bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
            backgroundImage: "url('https://cdn.discordapp.com/attachments/1138848747665768499/1202924542360821820/landingImage.png?ex=65cf39c8&is=65bcc4c8&hm=1b99058f59c8fe4c22ed916af1636f203ce951db40ac67e195b70f7de3516fe5&')",
          }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-70 bg-black"></span>
          </div>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-8/12 px- ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Craft your polished professional resume  with our  CV maker
                  </h1>
                  <p className="mt-4 text-lg text-slate-500">
                    "Create a standout resume tailored to your strengths and experiences in just a few clicks. Download your personalized resume within 15 minutes and make a lasting impression in your job search journey. Start building your future today!"
                  </p>

                  <button onClick={handleCreateCVClick} className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow my-3">
                    <div className="absolute inset-0 w-3 bg-slate-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
                    <span className="relative text-black group-hover:text-white">
                      <span>Create CV</span>
                    </span>
                  </button>

                </div>
              </div>
            </div>
          </div>

          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

          <section className="pb-10 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                        <i className="fas fa-award"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Quick and easy CV maker</h6>
                      <p className="mt-1 mb- text-blueGray-500 ">
                      Easily create a professional resume with our  online CV maker. Simply input your personal details, fill in your resume content, and select the perfect layout from our collection . Download your polished resume to kickstart your job application
                      </p>
                    </div>
                  </div>
                </div>
                
                
                <div className="w-full md:w-4/12 px-4 text-center" >
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                        <i className="fas fa-retweet"></i>
                      </div>
                      <h6 className="text-xl font-semibold">More likely to land a job</h6>
                      <p className="mt-1 mb- text-blueGray-500">
                      A polished and professional resume sets you apart from other applicants, increasing your chances of securing an interview invitation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                        <i className="fas fa-fingerprint"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Highly customizable</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      Every applicant and every job is different, so we’ve created templates that can be easily adapted to your needs. Change the color scheme, add a photo, or adjust the line spacing in just a few clicks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    
          </section>
          <TextCom/>
          </section>
          <Footer/>
        
          
</>
  );
}