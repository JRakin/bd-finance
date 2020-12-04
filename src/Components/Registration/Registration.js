import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../images/Logo.png';

const Registration = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    fetch('https://limitless-tor-51747.herokuapp.com/addUser', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        handlePush(data.email);
      });
  };

  const handlePush = (email) => {
    fetch('https://limitless-tor-51747.herokuapp.com/' + email)
      .then((res) => res.json())
      .then((data) => {
        history.push('/certificate/' + data[0]._id);
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-2 mt-2">
          <Link to="/">
            <img className="w-100" src={Logo} alt="" />
          </Link>
        </div>
        <div className="col-md-10 mt-2 p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="text-primary" htmlFor="name">
                নাম <span className="text-danger">* </span>
              </label>{' '}
              <br />
              <input
                className="w-50"
                name="name"
                type="text"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="text-primary">
                ফোন নাম্বার
                <span className="text-danger">* </span>
              </label>{' '}
              <br />
              <input
                className="w-50"
                name="phone"
                type="phone"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-primary">
                ইমেইল
                <span className="text-danger">* </span>
              </label>{' '}
              <br />
              <input
                className="w-50"
                name="email"
                type="email"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address" className="text-primary">
                ঠিকানা
              </label>{' '}
              <br />
              <input
                className="w-50"
                name="address"
                type="text"
                ref={register}
              />
            </div>
            <div className="form-group">
              <label htmlFor="occupation" className="text-primary">
                পেশা <span className="text-danger">*</span>
              </label>{' '}
              <br />
              <select
                style={{ padding: '1px 2px', fontSize: '16px' }}
                className="w-50"
                name="occupation"
                ref={register}
              >
                <option value="student">Student</option>
                <option value="job">Job</option>
                <option value="housewife">Housewife</option>
                <option value="business">Business</option>
                <option value="retired">Retired</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <input
                style={{
                  outline: 'none',
                  borderTop: 'none',
                  borderBottom: 'none',
                  cursor: 'pointer',
                }}
                className="btn-help my-3"
                type="submit"
                value="সাইন ইন করুন"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
