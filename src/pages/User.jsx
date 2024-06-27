import React from "react";
import axios from 'axios';
import config from '../config.json';
import sarchInTheTable from "../hooks/SarchInTable"; // Import the search function
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUsers, faUser, faHome, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

/**
 * Retrieves all the users from the API.
 *
 * @return {Promise<Array>} An array of user objects.
 */
async function getAllUsers() {
  try {
    const url = `${config.baseURL}/user`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

/**
 * Deletes a user from the API.
 *
 * @param {number} id - The ID of the user to delete.
 * @return {Promise<void>} - A promise that resolves when the user is deleted.
 * @throws {Error} - If an error occurs during the deletion process.
 */
async function deleteUser(id) {
  try {
    const url = `${config.baseURL}/user/${id}`;
    const response = await axios.delete(url);
    if (response.status === 200) {
      console.log('User deleted successfully');
    } else {
      console.log('User not deleted');
      throw new Error('User not deleted');
    }
  } catch (error) {
    console.error(error.message);
  }
}

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [searchStr, setSearchStr] = React.useState('');
  const [filteredUsers, setFilteredUsers] = React.useState([]);

  React.useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.users);
      setFilteredUsers(res.users); // Initialize filtered users with all users
    });
  }, []);

  React.useEffect(() => {
    setFilteredUsers(sarchInTheTable(searchStr, users));
  }, [searchStr, users]);

  const handleSearchChange = (e) => {
    setSearchStr(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h2>RETISS</h2>
        </div>
        <div className="logo-title">
          <h2>Users</h2>
        </div>
        <div className="profile-icon">
          <img src="https://via.placeholder.com/40" alt="Profile" />
        </div>
      </div>

      <div className="sidebar">
        <nav className="sidebar-nav">
          <a href="#">
            <FontAwesomeIcon icon={faUsers} />
            Users
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faUser} />
            Roles
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faHome} />
            Sites
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faBell} />
            Alerts <span className="badge">9</span>
          </a>
        </nav>
      </div>

      <div className="content">
        <div className="card">
          <header className="card-header">
            <h3>Manage All Users In One Place.</h3>
            <button className="add-user-btn">
              + Add User
            </button>
          </header>
          <div className="card-body">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search" 
                className="search-input" 
                value={searchStr} 
                onChange={handleSearchChange} 
              />
              <select className="role-select">
                <option value="" disabled selected>Role</option>
                <option value="Manager">Manager</option>
                <option value="Welder">Welder</option>
                <option value="Electrician">Electrician</option>
                <option value="Worker">Worker</option>
                <option value="Plumber">Plumber</option>
                <option value="Handyman">Handyman</option>
                <option value="Painter">Painter</option>
              </select>
            </div>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Username</th>
                  <th>Reporting To</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}<br />{user.phone}</td>
                    <td>{user.username}</td>
                    <td>{user.manager?.name}</td>
                    <td>{user.roles.name}</td>
                    <td className="actions">
                      <FontAwesomeIcon icon={faEdit} className="icon edit" />
                      <FontAwesomeIcon icon={faTrash} className="icon delete" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button className="pagination-btn">Previous</button>
              <button className="pagination-btn">Next</button>
              <p>Page 1 of 10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
