import React from 'react';
import { useForm } from 'react-hook-form';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const location = useLocation();
  const history = useHistory();
  const { from } = location.state || { from: { pathname: '/' } };

  const onSubmit = (data) => {
    const userData = { email: data.email };

    fetch('https://limitless-tor-51747.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.length > 0) {
          handleSignIn(data);
        } else {
          alert('You are not authorized');
        }
      });
  };

  const handleSignIn = (data) => {
    console.log(data);
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        storeAuthToken();
      })
      .catch((error) => {
        alert('You are not authorized');
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      })
      .catch((error) => {});
  };

  return (
    <div className="container">
      <h3 className="text-center mt-5">Sign in</h3>
      <div className="d-flex justify-content-center align-items-center my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder="Email"
              ref={register({ required: true })}
            />
          </div>

          <div className="form-group">
            <input
              name="password"
              type="password"
              placeholder="Password"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group">
            <input
              className="btn-primary rounded"
              type="submit"
              value="Sign in"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
