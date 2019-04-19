import Link from 'next/link'

const SidebarRight = () => (
  <div className="sidebar-right right-sidebar-nicescroller">
    <div className="tab-content">
      <div className="tab-pane fade in active" id="online-user-sidebar">
        <ul className="sidebar-menu online-user">
          <li className="static">ONLINE USERS</li>
          <li>
            <a href="#fakelink">
              <span className="user-status success"></span>
              <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
              <i className="fa fa-mobile-phone device-status"></i>
              Thomas White 
              <span className="small-caps">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
            </a>
          </li>
          <li>
            <a href="#fakelink">
              <span className="user-status success"></span>
              <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
              Doina Slaivici
              <span className="small-caps">Duis autem vel eum iriure dolor in hendrerit in </span>
            </a>
          </li>
          <li>
           <a href="#fakelink">
              <span className="user-status success"></span>
              <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
              <i className="fa fa-android device-status"></i>
              Harry Nichols
              <span className="small-caps">I think so</span>
            </a>
          </li>
          <li>
            <a href="#fakelink">
              <span className="user-status success"></span>
              <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
              <i className="fa fa-mobile-phone device-status"></i>
              Mihaela Cihac
              <span className="small-caps">Yes, I'll be waiting</span>
            </a>
          </li>
          <li>
            <a href="#fakelink">
              <span className="user-status success"></span>
              <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
              <i className="fa fa-apple device-status"></i>
              Harold Chavez
              <span className="small-caps">Thank you!</span>
            </a>
          </li>
        
        <li className="static">IDLE USERS</li>
        <li><a href="#fakelink">
          <span className="user-status warning"></span>
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <i className="fa fa-windows device-status"></i>
          Elizabeth Owens
          <span className="small-caps">2 hours</span>
        </a></li>
        <li><a href="#fakelink">
          <span className="user-status warning"></span>
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <i className="fa fa-apple device-status"></i>
          Frank Oliver
          <span className="small-caps">4 hours</span>
        </a></li>
        <li><a href="#fakelink">
          <span className="user-status warning"></span>
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          Mya Weastell
          <span className="small-caps">15 minutes</span>
        </a></li>
        <li><a href="#fakelink">
          <span className="user-status warning"></span>
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <i className="fa fa-mobile-phone device-status"></i>
          Carl Rodriguez
          <span className="small-caps">20 hours</span>
        </a></li>
        <li><a href="#fakelink">
          <span className="user-status warning"></span>
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <i className="fa fa-mobile-phone device-status"></i>
          Nikita Carter
          <span className="small-caps">2 minutes</span>
        </a></li>
        
        <li className="static">OFFLINE USERS</li>
        <li><a href="#fakelink">
          <span className="user-status danger"></span>
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          Craig Dixon
          <span className="small-caps">Last seen 2 hours ago</span>
        </a></li>
        <li><a href="#fakelink">
          <span className="user-status danger"></span>
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          Mikayla King
          <span className="small-caps">Last seen yesterday</span>
        </a></li>
        <li><a href="#fakelink">
          <span className="user-status danger"></span>
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          Richard Dixon
          <span className="small-caps">Last seen Feb 20, 2014 05:45:50</span>
        </a></li>
        <li><a href="#fakelink">
          <span className="user-status danger"></span>
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          Brenda Fuller
          <span className="small-caps">Last seen Feb 15, 2014 11:35:50</span>
        </a></li>
        <li><a href="#fakelink">
          <span className="user-status danger"></span>
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          Ryan Ortega
          <span className="small-caps">Last seen Jan 20, 2014 03:45:50</span>
        </a></li>
      </ul>
      </div>
      <div className="tab-pane fade" id="notification-sidebar">
      <ul className="sidebar-menu sidebar-notification">
        <li className="static">TODAY</li>
        <li><a href="#fakelink" data-toggle="tooltip" title="Karen Wallace" data-placement="left">
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <span className="activity">Posted something on your profile page</span>
          <span className="small-caps">17 seconds ago</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="Phillip Lucas" data-placement="left">
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <span className="activity">Uploaded a photo</span>
          <span className="small-caps">2 hours ago</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="Sandra Myers" data-placement="left">
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <span className="activity">Commented on your post</span>
          <span className="small-caps">5 hours ago</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="Charles Guerrero" data-placement="left">
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <span className="activity">Send you a message</span>
          <span className="small-caps">17 hours ago</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="Maria Simpson" data-placement="left">
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <span className="activity">Change her avatar</span>
          <span className="small-caps">20 hours ago</span>
        </a></li>
        
        <li className="static">YESTERDAY</li>
        <li><a href="#fakelink" data-toggle="tooltip" title="Jason Crawford" data-placement="left">
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <span className="activity">Posted something on your profile page</span>
          <span className="small-caps">Yesterday 10:45:12</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="Cynthia Mendez" data-placement="left">
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <span className="activity">Uploaded a photo</span>
          <span className="small-caps">Yesterday 08:00:05</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="Peter Ramirez" data-placement="left">
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <span className="activity">Commented on your post</span>
          <span className="small-caps">Yesterday 07:49:08</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="Jessica Gutierrez" data-placement="left">
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <span className="activity">Send you a message</span>
          <span className="small-caps">Yesterday 07:35:19</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="Ryan Ortega" data-placement="left">
          <img src="/static/img/avatar/avatar.jpg" className="ava-sidebar img-circle" alt="Avatar"/>
          <span className="activity">Change her avatar</span>
          <span className="small-caps">Yesterday 06:00:00</span>
        </a></li>
        
        <li className="static text-center"><button className="btn btn-primary btn-sm">See all notifications</button></li>
      </ul>
      </div>
      <div className="tab-pane fade" id="task-sidebar">
      <ul className="sidebar-menu sidebar-task">
        <li className="static">UNCOMPLETED</li>
        <li><a href="#fakelink" data-toggle="tooltip" title="in progress" data-placement="left">
          <i className="fa fa-clock-o icon-task-sidebar progress"></i>
          Creating documentation
          <span className="small-caps">Deadline : Next week</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="uncompleted" data-placement="left">
          <i className="fa fa-exclamation-circle icon-task-sidebar uncompleted"></i>
          Eating sand
          <span className="small-caps">Deadline : 2 hours ago</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="uncompleted" data-placement="left">
          <i className="fa fa-exclamation-circle icon-task-sidebar uncompleted"></i>
          Sending payment
          <span className="small-caps">Deadline : 2 seconds ago</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="in progress" data-placement="left">
          <i className="fa fa-clock-o icon-task-sidebar progress"></i>
          Uploading new version
          <span className="small-caps">Deadline : Tomorrow</span>
        </a></li>
        
        <li className="static">COMPLETED</li>
        <li><a href="#fakelink" data-toggle="tooltip" title="completed" data-placement="left">
          <i className="fa fa-check-circle-o icon-task-sidebar completed"></i>
          Drinking coffee
          <span className="small-caps">Completed : 10 hours ago</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="completed" data-placement="left">
          <i className="fa fa-check-circle-o icon-task-sidebar completed"></i>
          Walking to nowhere
          <span className="small-caps">Completed : Yesterday</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="completed" data-placement="left">
          <i className="fa fa-check-circle-o icon-task-sidebar completed"></i>
          Sleeping under bridge
          <span className="small-caps">Completed : Feb 10 2014</span>
        </a></li>
        <li><a href="#fakelink" data-toggle="tooltip" title="completed" data-placement="left">
          <i className="fa fa-check-circle-o icon-task-sidebar completed"></i>
          Buying some cigarettes
          <span className="small-caps">Completed : Jan 15 2014</span>
        </a></li>
        
        <li className="static text-center"><button className="btn btn-success btn-sm">See all tasks</button></li>
      </ul>
      </div>
      <div className="tab-pane fade" id="setting-sidebar">
      <ul className="sidebar-menu">
        <li className="static">ACCOUNT SETTING</li>
        <li className="text-content">
          <div className="switch">
            <div className="onoffswitch blank">
              <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="onlinestatus"/>
              <label className="onoffswitch-label" htmlFor="onlinestatus">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
          Online status
        </li>
        <li className="text-content">
          <div className="switch">
            <div className="onoffswitch blank">
              <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="offlinecontact" defaultChecked/>
              <label className="onoffswitch-label" htmlFor="offlinecontact">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
          Show offline contact
        </li>
        <li className="text-content">
          <div className="switch">
            <div className="onoffswitch blank">
              <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="invisiblemode"/>
              <label className="onoffswitch-label" htmlFor="invisiblemode">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
          Invisible mode
        </li>
        <li className="text-content">
          <div className="switch">
            <div className="onoffswitch blank">
              <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="personalstatus" defaultChecked/>
              <label className="onoffswitch-label" htmlFor="personalstatus">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
          Show my personal status
        </li>
        <li className="text-content">
          <div className="switch">
            <div className="onoffswitch blank">
              <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="deviceicon"/>
              <label className="onoffswitch-label" htmlFor="deviceicon">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
          Show my device icon
        </li>
        <li className="text-content">
          <div className="switch">
            <div className="onoffswitch blank">
              <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="logmessages"/>
              <label className="onoffswitch-label" htmlFor="logmessages">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
          Log all message
        </li>
      </ul>
      </div>
    </div>
  </div>
)

export default SidebarRight;