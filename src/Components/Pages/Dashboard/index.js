import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faAddressCard, faHotel, faPaperPlane, faMap, faHistory, faUserCircle, faWallet, faBell, faSignOutAlt, faEye, faShoppingBag, faSync,faAngleDown } from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {
    return (
      <section id="dashboard_main_arae" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="dashboard_sidebar">
                <div className="dashboard_sidebar_user">
                  <img src="Dashboard-Page/dashboard-user.png" alt="img" />
                  <h3>Sherlyn Chopra</h3>
                  <p><a href="/">+00 123 456 789</a></p>
                  <p><a href="/">sherlyn@domain.com</a></p>
                </div>
                <div className="dashboard_menu_area">
                  <ul>
                    <li><a href="/" className="active"><FontAwesomeIcon icon={faTachometerAlt} />Dashboard</a></li>
                    <li className="dashboard_dropdown_button" id="dashboard_dropdowns">
                      <FontAwesomeIcon icon={faAddressCard} />My bookings
                      <span> <FontAwesomeIcon icon={faAngleDown} /></span>
                      <div className="booing_sidebar_dashboard" id="show_dropdown_item" style={{ display: 'none' }}>
                        <ul>
                          <li><a href="/"><FontAwesomeIcon icon={faHotel} />Hotel booking</a></li>
                          <li><a href="/"><FontAwesomeIcon icon={faPaperPlane} />Flight booking</a></li>
                          <li>
                            <a href="/">
                              <FontAwesomeIcon icon={faMap} />Tour booking
                            </a>
                          </li>
                          <li><a href="/"><FontAwesomeIcon icon={faHistory} />Booking history</a></li>
                        </ul>
                      </div>
                    </li>
                    <li><a href="/"><FontAwesomeIcon icon={faUserCircle} />My profile</a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faWallet} />Wallet</a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faBell} />Notifications</a></li>
                    <li>
                      <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <FontAwesomeIcon icon={faSignOutAlt} />Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="dashboard_main_top">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="dashboard_top_boxed">
                      <div className="dashboard_top_icon">
                        <FontAwesomeIcon icon={faShoppingBag} />
                      </div>
                      <div className="dashboard_top_text">
                        <h3>Total bookings</h3>
                        <h1>231</h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="dashboard_top_boxed">
                      <div className="dashboard_top_icon">
                        <FontAwesomeIcon icon={faSync} />
                      </div>
                      <div className="dashboard_top_text">
                        <h3>Pending bookings</h3>
                        <h1>23</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard_common_table">
                <h3>My bookings</h3>
                <div className="table-responsive-lg table_common_area">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Sl no.</th>
                        <th>Booking ID</th>
                        <th>Booking type</th>
                        <th>Booking amount</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01.</td>
                        <td>#JK589V80</td>
                        <td>Hotel</td>
                        <td>$754.00</td>
                        <td className="complete">Completed</td>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                      </tr>
                      <tr>
                        <td>02.</td>
                        <td>#JK589V80</td>
                        <td>Hotel</td>
                        <td>$754.00</td>
                        <td className="complete">Completed</td>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                      </tr>
                      <tr>
                        <td>03.</td>
                        <td>#JK589V80</td>
                        <td>Hotel</td>
                        <td>$754.00</td>
                        <td className="complete">Completed</td>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                      </tr>
                      <tr>
                        <td>04.</td>
                        <td>#JK589V80</td>
                        <td>Hotel</td>
                        <td>$754.00</td>
                        <td className="complete">Completed</td>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                      </tr>
                      <tr>
                        <td>05.</td>
                        <td>#JK589V80</td>
                        <td>Hotel</td>
                        <td>$754.00</td>
                        <td className="canceled">Canceled</td>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                      </tr>
                      <tr>
                        <td>06.</td>
                        <td>#JK589V80</td>
                        <td>Hotel</td>
                        <td>$754.00</td>
                        <td className="complete">Completed</td>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="pagination_area">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="/" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Dashboard;
  