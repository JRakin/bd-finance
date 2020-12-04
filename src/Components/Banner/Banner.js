import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import './Banner.css';

const Banner = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/sohayota');
  };
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-2 mt-2">
          <Link to="/">
            <img className="w-100" src={Logo} alt="" />
          </Link>
        </div>
        <div className="text-center col-md-10 mt-2">
          <h4 className="text-danger my-3">
            শুধু নামে না, কাজেও মানুষ হওয়াটা জরুরী।
          </h4>
          <p className="text-primary my-3">
            আমাদের চারপাশে ছড়িয়ে আছে অসংখ্য দুস্থ অসহায় মানুষ, যাদের জন্য
            শীতকাল একটি দুঃস্বপ্নের মত। যারা অপেক্ষায় থাকে আমাদের সহায়তা পাবার
            আশায়। আর তাই আমাদের এবারের আয়ােজন বিডি ফাইন্যান্স সহায়তা। আর্থিক
            নয় বরং আপনাদের সমর্থন আর ভালবাসা পেলেই বিডি ফাইন্যান্স টিম ছুটবে
            শীতকালীন প্রয়ােজনীয় সামগ্রী নিয়ে অসহায় মানুষদের কাছে। বিডি
            ফাইন্যান্স এ ডিপােজিটকৃত অর্থের ০.৫ শতাংশ পরিমান অর্থ সহায়তা প্রদান
            করবাে আমরা। অর্থাৎ আপনার জমাকৃত মূলধন পুরােটাই থাকছে সুরক্ষিত আপনার
            পক্ষ থেকে সহায়তা প্রদান করবে বিডি ফাইন্যান্স। এছাড়াও শুধুমাত্র
            সমর্থন করেই এই আয়ােজনের অংশীদার হতে পারবেন আপনি। প্রতিটি সমর্থনের
            বিপরীতে এই আয়ােজনে ২০ টাকা সহায়তা প্রদান করবে বিডি ফাইন্যান্স।
          </p>
          <button onClick={handleClick} className="btn btn-help text-danger">
            সহায়তা করুন
          </button>
          <p className="text-danger my-3">
            *প্রতিটি সমর্থন এর প্রেক্ষিতে বিডি ফাইন্যান্স এর পক্ষ থেকে ২০ টাকা
            সহায়তা করা হবে
          </p>
          <div className="d-flex justify-content-between px-5 mx-5">
            <span className="extra-info bg-primary">
              মোট অর্থায়নঃ ৫,৪৩,৪০০ টাকা
            </span>
            <span className="extra-info bg-primary">সমর্থনকারীঃ ৩৪৫৩</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
