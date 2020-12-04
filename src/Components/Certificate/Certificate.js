import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FacebookIcon, FacebookShareButton } from 'react-share';
import Logo from '../../images/Logo.png';
import './Certificate.css';

const Certificate = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://limitless-tor-51747.herokuapp.com/getUserById/' + id)
      .then((res) => res.json())
      .then((data) => {
        setUser(data[0]);
      });
  }, [id]);

  console.log(user);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 mt-5">
          <Link to="/">
            <img className="w-100" src={Logo} alt="" />
          </Link>
        </div>
        <div className="col-md-8 text-center mt-5 d-flex justify-content-center align-items-center">
          <div>
            <div className="certificate px-5 py-4">
              <div>
                <p
                  className="w-50 mx-auto"
                  style={{ borderBottom: '1px solid black' }}
                >
                  {user.name}
                </p>
                <div>
                  <h5 className="text-danger">
                    শুধু নামে না, কাজেও মানুষ হওয়াটা জরুরী।
                  </h5>
                  <p className="text-primary">
                    আমাদের চারপাশে ছড়িয়ে আছে অসংখ্য দুস্থ অসহায় মানুষ, যাদের
                    জন্য শীতকাল একটি দুঃস্বপ্নের মত। যারা অপেক্ষায় থাকে আমাদের
                    সহায়তা পাবার আশায়। আর তাই আমাদের এবারের আয়ােজন বিডি
                    ফাইন্যান্স সহায়তা। আর্থিক নয় বরং আপনাদের সমর্থন আর ভালবাসা
                    পেলেই বিডি ফাইন্যান্স টিম ছুটবে শীতকালীন প্রয়ােজনীয়
                    সামগ্রী নিয়ে অসহায় মানুষদের কাছে।
                  </p>
                  <div>
                    <h6 className="text-primary mb-0 mt-5">মোঃ কায়সার হামিদ</h6>
                    <small>ব্যবস্থাপনা পরিচালক ও সিইও</small> <br />
                    <small>বিডি ফাইন্যান্স</small>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="m-3 text-primary">শেয়ার করুন</p>
              <FacebookShareButton
                url={window.location.href}
                quote=""
                hashtag="#bd-finance"
              >
                <FacebookIcon logofillcolor="white" size={32} round={true} />
              </FacebookShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
