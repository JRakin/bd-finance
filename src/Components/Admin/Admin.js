import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Admin.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';

const Admin = () => {
  const [users, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const history = useHistory();

  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  const currentPageData = users
    .slice(offset, offset + PER_PAGE)
    .map((list) => renderTableData(list));
  const pageCount = Math.ceil(users.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        sessionStorage.removeItem('token');
        history.push('/');
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetch('https://limitless-tor-51747.herokuapp.com/getAllUser')
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-2">
          <button onClick={handleSignOut} className="btn-danger rounded">
            Sign out
          </button>
        </div>
        <div className="col-md-10">
          <table className="table text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Occupation</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData}
              <tr>
                <td>
                  <ReactPaginate
                    previousLabel={'← Previous'}
                    nextLabel={'Next →'}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    previousLinkClassName={'pagination__link'}
                    nextLinkClassName={'pagination__link'}
                    disabledClassName={'pagination__link--disabled'}
                    activeClassName={'pagination__link--active'}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function renderTableData(list) {
  const { _id, name, email, phone, occupation } = list;
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{occupation}</td>
    </tr>
  );
}

export default Admin;
