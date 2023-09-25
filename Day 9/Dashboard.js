import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; 
import { logoutUser } from './authActions';
import '../Assets/css/dashboard.css'; // Import your dashboard CSS for styling

function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user); // Get user data from Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch a logout action
    dispatch(logoutUser());
    // Redirect to the login page (you can use react-router-dom for this)
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">AMITY</div>
        <ul>
          <li><a href="/profile">Profile Details</a></li>
          <li><a href="/application">Products</a></li>
          <li><a href="/academic"> Order Details</a></li>
          <li><a href="/application">Payment Details</a></li>
        </ul>
      </div>
      <div className="content">
        <header>
          <div className="top-nav">
            <div className="welcome">Welcome, {user.username}</div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </header>
        <main>
          {/* Your dashboard content goes here */}
          <h1>Welcome to Your Ecommerce Dashboard</h1>
          {/* <p>This is where you can manage your information.</p> */}
        </main>
{/* <div className="container">
  <div className="row">
    <div className="col-md-4">
      <a className="datcard my-3" href="/AuburnAnswers/Admin/ManageCategory">
        <span style={{color: 'white'}} className="h4">Manage Categories</span>
        <p>Click here to go to the manage categories page.</p>
        <div className="go-corner">
        </div>
      </a>
    </div>
    <div className="col-md-4">
      <a className="datcard my-3" href="/AuburnAnswers/Admin/ManageCategory">
        <span style={{color: 'white'}} className="h4">See Reports</span>
        <p>View and download reports for all of your data.</p>
        <div className="go-corner">
        </div>
      </a>
    </div>
    <div className="col-md-4">
      <a className="datcard my-3" href="/AuburnAnswers/Admin/ManageCategory">
        <span style={{color: 'white'}} className="h4">Add Users</span>
        <p>Control who sees what.</p>
        <div className="go-corner">
        </div>
      </a>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 col-lg-4">
      <div className="wrimagecard wrimagecard-topimage">
        <div className="wrimagecard-topimage_header">
          <i className="fas fa-users cardIcon" />
        </div>
        <div className="wrimagecard-topimage_title h-140">
          <h2 className="h4 text-center">
            Big Event Staff
          </h2>
          <p>Contains the list of staff members for The Big Event.</p>
        </div>
        <div className="card-action-bar">
          <a className="float-lg-none link">View Staff</a>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="wrimagecard wrimagecard-topimage">
        <div className="wrimagecard-topimage_header">
          <i className="fas fa-desktop cardIcon" />
        </div>
        <div className="wrimagecard-topimage_title h-140">
          <h2 className="h4 text-center">
            Dashboard
          </h2>
          <p>View Event status and communicate with team members.</p>
        </div>
        <div className="card-action-bar">
          <a className="float-right link">View Dashboard</a>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4">
      <div className="wrimagecard wrimagecard-topimage">
        <div className="wrimagecard-topimage_header">
          <i className="far fa-envelope cardIcon" />
        </div>
        <div className="wrimagecard-topimage_title h-140">
          <h2 className="h4 text-center">
            Email Hub
          </h2>
          <p>Edit email templates sent by the application.</p>
        </div>
        <div className="card-action-bar">
          <a className="float-right link">View Templates</a>
        </div>
      </div>
    </div>
  </div>
  <div style={{marginBottom: '3em'}} className="app">
    <ul className="list" style={{display: 'contents'}}>
      <li style={{display: 'block'}}>
        <a href="/DevHome/DevPage/6" target="_blank" className="card tile text-dark">
          <div className="card-header topper" />
          <div style={{display: 'flex'}} className="card-body flex-column">
            <strong className="display-4 Title">JavaScript</strong>
            <span className="fab fa-js-square fa-3x mb-auto mt-auto" />
          </div>
        </a>
      </li>
      <li style={{display: 'block'}}>
        <a href="/DevHome/DevPage/7" target="_blank" className="card tile text-dark">
          <div className="card-header topper" />
          <div style={{display: 'flex'}} className="card-body flex-column">
            <strong className="display-4 Title">CSS</strong>
            <span className="fab fa-css3-alt fa-3x mb-auto mt-auto" />
          </div>
        </a>
      </li>
      <li style={{display: 'block'}}>
        <a href="/DevHome/DevPage/9" target="_blank" className="card tile text-dark">
          <div className="card-header topper" />
          <div style={{display: 'flex'}} className="card-body flex-column">
            <strong className="display-4 Title">SQL</strong>
            <span className="fas fa-database mb-auto fa-3x mt-auto" />
          </div>
        </a>
      </li>
      <li style={{display: 'block'}}>
        <a href="/DevHome/DevPage/11" target="_blank" className="card tile text-dark">
          <div className="card-header topper" />
          <div style={{display: 'flex'}} className="card-body flex-column">
            <strong className="display-4 Title">Teams</strong>
            <span className="fas fa-user-friends mb-auto fa-3x mt-auto" />
          </div>
        </a>
      </li>
      <li style={{display: 'block'}}>
        <a href="/DevHome/DevPage/12" target="_blank" className="card tile text-dark">
          <div className="card-header topper" />
          <div style={{display: 'flex'}} className="card-body flex-column">
            <strong className="display-4 Title">Jira</strong>
            <span className="fab fa-jira mb-auto fa-3x mt-auto" />
          </div>
        </a>
      </li>
    </ul>
  </div>
</div> */}


{/* cards */}

<div class="cards-list">
  
<div class="card 1">
  <div class="card_image"> <img src="https://moz.com/images/blog/image3_2022-08-16-095812_mjby.jpg?w=888&auto=compress%2Cformat&fit=crop&dm=1660643892&s=80758e40c0e54bb66d31411c058f6af4" /> </div>
  <div class="card_title title-white">
    {/* <p>Card Title</p> */}
  </div>
</div>

  <div class="card 2">
  <div class="card_image">
    <img src="https://www.amcharts.com/wp-content/uploads/2013/12/demo_7394_none-7-1024x690.png" />
    </div>
  <div class="card_title title-white">
    {/* <p>Card Title</p> */}
  </div>
</div>

<div class="card 3">
  <div class="card_image">
    <img src="https://i.gifer.com/zUR.gif" />
  </div>
  <div class="card_title">
    {/* <p>Card Title</p> */}
  </div>
</div>
  
  <div class="card 4">
  <div class="card_image">
    <img src="https://media.istockphoto.com/id/493066330/vector/3d-pie-chart-graph-3d-graph-vector-illustration.jpg?s=612x612&w=0&k=20&c=_kjEvxdFftSn34JpzztdsdebZD-pljoUnydD-lIkDmI=" />
    </div>
  <div class="card_title title-black">
    {/* <p>Card Title</p> */}
  </div>
  </div>

  <div class="card 5">
  <div class="card_image">
    <img src="https://help.postscript.io/hc/article_attachments/13660129146267" />
    </div>
  <div class="card_title title-black">
    {/* <p>Card Title</p> */}
  </div>
  </div>

</div>

{/* Analytic table */}

<div class="analytic-table">
            <table>
                <tr>
                    <th>ORDER DETAILS</th>
                    <th>PRICE</th>
                    <th>ORDER DATE</th>
                    <th>DELIVERY ON</th>
                    <th>PAYMENT</th>
                    
                </tr>

                <tr>
                    <td>Item 1</td>
                    <td rowspan="1">$40</td>
                    <td rowspan="1">23/08/23</td>
                    <td rowspan="1">25/08/23</td>
                    <td rowspan="1">UPI</td>
                </tr>
                <tr>
                    <td>Item 2</td>
                    <td rowspan>$20</td>
                    <td rowspan="1">15/03/23</td>
                    <td rowspan="1">18/03/23</td>
                    <td rowspan="1">CARD</td>
                </tr>
                <tr>
                    <td>Item 3</td>
                    <td rowspan="3">$20</td>
                    <td rowspan="1">15/03/23</td>
                    <td rowspan="1">18/03/23</td>
                    <td rowspan="1">CARD</td>
                </tr>
            </table>
        </div>


{/* form */}

<form class="form1">
  <span class="title1">Subscribe to our newsletter.</span>
  <p class="description">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
  <div>
    <input placeholder="Enter your email" type="email" name="email" id="email-address"/>
    <button type="submit">Subscribe</button>
  </div>
</form>
      </div>
    </div>
  );
}

export default Dashboard;