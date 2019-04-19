import Link from 'next/link'

const TopNavBar = () => (
  <div className="top-navbar primary-color">
    <div className="top-navbar-inner">

      <div className="logo-brand primary-color">
        <a href="index.html"><img src="/static/img/logo.png" alt="Naras Pilates logo"/></a>
      </div>
      
      <div className="top-nav-content">
        
        {/* button sidebar left toggle */}
        <div className="btn-collapse-sidebar-left">
          <i className="fa fa-bars"></i>
        </div>
        
        {/* button sidebar right toggle */}
        <div className="btn-collapse-sidebar-right">
          <i className="fa fa-bullhorn"></i>
        </div>
        
        {/* button nav toggle */}
        <div className="btn-collapse-nav" data-toggle="collapse" data-target="#main-fixed-nav">
          <i className="fa fa-plus icon-plus"></i>
        </div>
        
        {/* user session nav */}
        <ul className="nav-user navbar-right">
          <li className="dropdown">
            <a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
              <img src="/static/img/avatar/avatar.jpg" className="avatar img-circle" alt="Avatar"/>
              Hi, <strong>Paris Hawker</strong>
            </a>
            <ul className="dropdown-menu square primary margin-list-rounded with-triangle">
              <li><a href="#fakelink">Account setting</a></li>
              <li><a href="#fakelink">Payment setting</a></li>
              <li><a href="#fakelink">Change password</a></li>
              <li><a href="#fakelink">My public profile</a></li>
              <li className="divider"></li>
              <li><a href="lock-screen.html">Lock screen</a></li>
              <li><a href="login.html">Log out</a></li>
            </ul>
          </li>
        </ul>
        
        {/* Collapse menu nav */}
        <div className="collapse navbar-collapse" id="main-fixed-nav">
          {/* nav search form */}
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Buscar"/>
            </div>
          </form>
          
          <ul className="nav navbar-nav navbar-left">
								{/* <!-- Begin nav notification --> */}
								<li className="dropdown">
									<a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
										<span className="badge badge-danger icon-count">7</span>
										<i className="fa fa-bell"></i>
									</a>
									<ul className="dropdown-menu square with-triangle">
										<li>
											<div className="nav-dropdown-heading">
											Notifications
											</div>
											<div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '350px'}}><div className="nav-dropdown-content scroll-nav-dropdown" style={{overflow: 'hidden', width: 'auto', height: '350px'}}>
												<ul>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<strong>Thomas White</strong> posted on your profile page
														<span className="small-caps">17 seconds ago</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<strong>Doina Slaivici</strong> uploaded photo
														<span className="small-caps">10 minutes ago</span>
													</a></li>
													<li><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<strong>Harry Nichols</strong> commented on your post
														<span className="small-caps">40 minutes ago</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<strong>Mihaela Cihac</strong> send you a message
														<span className="small-caps">2 hours ago</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<strong>Harold Chavez</strong> change his avatar
														<span className="small-caps">Yesterday</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<strong>Elizabeth Owens</strong> posted on your profile page
														<span className="small-caps">Yesterday</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<strong>Frank Oliver</strong> commented on your post
														<span className="small-caps">A week ago</span>
													</a></li>
													<li><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<strong>Mya Weastell</strong> send you a message
														<span className="small-caps">April 15, 2014</span>
													</a></li>
													<li><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<strong>Carl Rodriguez</strong> joined your weekend party
														<span className="small-caps">April 01, 2014</span>
													</a></li>
												</ul>
											</div><div className="slimScrollBar" style={{background: 'rgb(0, 0, 0)', width: '4px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: '1px'}}></div><div className="slimScrollRail" style={{width: '4px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.3', zIndex: '90', right: '1px'}}></div></div>
											<button className="btn btn-primary btn-square btn-block">See all notifications</button>
										</li>
									</ul>
								</li>
								
								{/* <!-- Begin nav task --> */}
								<li className="dropdown">
									<a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
										<span className="badge badge-warning icon-count">3</span>
										<i className="fa fa-tasks"></i>
									</a>
									<ul className="dropdown-menu square margin-list-rounded with-triangle">
										<li>
											<div className="nav-dropdown-heading">
											Tasks
											</div>
											<div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '350px'}}><div className="nav-dropdown-content scroll-nav-dropdown" style={{overflow: 'hidden', width: 'auto', height: '350px'}}>
												<ul>
													<li className="unread"><a href="#fakelink">
														<i className="fa fa-check-circle-o absolute-left-content icon-task completed"></i>
														Creating documentation
														<span className="small-caps">Completed : Yesterday</span>
													</a></li>
													<li><a href="#fakelink">
														<i className="fa fa-clock-o absolute-left-content icon-task progress"></i>
														Eating sands
														<span className="small-caps">Deadline : Tomorrow</span>
													</a></li>
													<li><a href="#fakelink">
														<i className="fa fa-clock-o absolute-left-content icon-task progress"></i>
														Sending payment
														<span className="small-caps">Deadline : Next week</span>
													</a></li>
													<li><a href="#fakelink">
														<i className="fa fa-exclamation-circle absolute-left-content icon-task uncompleted"></i>
														Uploading new version
														<span className="small-caps">Deadline: 2 seconds ago</span>
													</a></li>
													<li><a href="#fakelink">
														<i className="fa fa-exclamation-circle absolute-left-content icon-task uncompleted"></i>
														Drinking coffee
														<span className="small-caps">Deadline : 2 hours ago</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<i className="fa fa-check-circle-o absolute-left-content icon-task completed"></i>
														Walking to nowhere
														<span className="small-caps">Completed : over a year ago</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<i className="fa fa-check-circle-o absolute-left-content icon-task completed"></i>
														Sleeping under bridge
														<span className="small-caps">Completed : Dec 31, 2013</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<i className="fa fa-check-circle-o absolute-left-content icon-task completed"></i>
														Buying some cigarettes
														<span className="small-caps">Completed : 2 days ago</span>
													</a></li>
												</ul>
											</div><div className="slimScrollBar" style={{background: 'rgb(0, 0, 0)', width: '4px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: '1px'}}></div><div className="slimScrollRail" style={{width: '4px', height: '100%', position: 'absolute', top: '0px', display: 'none', bordeRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.3', zIndex: '90', right: '1px'}}></div></div>
											<button className="btn btn-primary btn-square btn-block">See all notifications</button>
										</li>
									</ul>
								</li>
								
								{/* <!-- Begin nav message --> */}
								<li className="dropdown">
									<a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
										<span className="badge badge-success icon-count">9</span>
										<i className="fa fa-envelope"></i>
									</a>
									<ul className="dropdown-menu square margin-list-rounded with-triangle">
										<li>
											<div className="nav-dropdown-heading">
											Messages
											</div>
											<div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '350px'}}><div className="nav-dropdown-content scroll-nav-dropdown" style={{overflow: 'hidden', width: 'auto', height: '350px'}}>
												<ul>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														Lorem ipsum dolor sit amet, consectetuer adipiscing elit
														<span className="small-caps">17 seconds ago</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat
														<span className="small-caps">10 minutes ago</span>
													</a></li>
													<li><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														I think so
														<span className="small-caps">40 minutes ago</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														Yes, I'll be waiting
														<span className="small-caps">2 hours ago</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														Thank you!
														<span className="small-caps">Yesterday</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														No problem! I will never remember that
														<span className="small-caps">Yesterday</span>
													</a></li>
													<li className="unread"><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														Tak gepuk ndasmu sisan lho dab!
														<span className="small-caps">A week ago</span>
													</a></li>
													<li><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														Sorry bro, aku or atau sing jenenge ngono kui
														<span className="small-caps">April 15, 2014</span>
													</a></li>
													<li><a href="#fakelink">
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														Will you send me an invitation for your weeding party?
														<span className="small-caps">April 01, 2014</span>
													</a></li>
												</ul>
											</div><div className="slimScrollBar" style={{background: 'rgb(0, 0, 0)', width: '4px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: '1px'}}></div><div className="slimScrollRail" style={{width: '4px', height: '100%', position: 'absolute', top: '0px', display: 'none', bordeRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.3', zIndex: '90', right: '1px'}}></div></div>
											<button className="btn btn-primary btn-square btn-block">See all message</button>
										</li>
									</ul>
								</li>

								{/* <!-- Begin nav friend requuest --> */}
								<li className="dropdown">
									<a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
										<span className="badge badge-info icon-count">2</span>
										<i className="fa fa-users"></i>
									</a>
									<ul className="dropdown-menu square margin-list-rounded with-triangle">
										<li>
											<div className="nav-dropdown-heading">
											Friend requests
											</div>
											<div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '350px'}}><div className="nav-dropdown-content static-list scroll-nav-dropdown" style={{overflow: 'hidden', width: 'auto', height: '350px'}}>
												<ul>
													<li>
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<div className="row">
															<div className="col-xs-6">
																<strong>Craig Dixon</strong>
																<span className="small-caps">2 murtual friends</span>
															</div>
															<div className="col-xs-6 text-right btn-action">
																<button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
															</div>
														</div>
													</li>
													<li>
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<div className="row">
															<div className="col-xs-6">
																<strong>Mikayla King</strong>
																<span className="small-caps">20 murtual friends</span>
															</div>
															<div className="col-xs-6 text-right btn-action">
																<button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
															</div>
														</div>
													</li>
													<li>
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<div className="row">
															<div className="col-xs-6">
																<strong>Richard Dixon</strong>
																<span className="small-caps">1 murtual friend</span>
															</div>
															<div className="col-xs-6 text-right btn-action">
																<button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
															</div>
														</div>
													</li>
													<li>
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<div className="row">
															<div className="col-xs-6">
																<strong>Brenda Fuller</strong>
																<span className="small-caps">8 murtual friends</span>
															</div>
															<div className="col-xs-6 text-right btn-action">
																<button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
															</div>
														</div>
													</li>
													<li>
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<div className="row">
															<div className="col-xs-6">
																<strong>Ryan Ortega</strong>
																<span className="small-caps">122 murtual friends</span>
															</div>
															<div className="col-xs-6 text-right btn-action">
																<button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
															</div>
														</div>
													</li>
													<li>
														<img src="/static/img/avatar/avatar.jpg" className="absolute-left-content img-circle" alt="Avatar"/>
														<div className="row">
															<div className="col-xs-6">
																<strong>Jessica Gutierrez</strong>
																<span className="small-caps">45 murtual friends</span>
															</div>
															<div className="col-xs-6 text-right btn-action">
																<button className="btn btn-success btn-xs">Accept</button><button className="btn btn-danger btn-xs">Ignore</button>
															</div>
														</div>
													</li>
												</ul>
											</div><div className="slimScrollBar" style={{background: 'rgb(0, 0, 0)', width: '4px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: '1px'}}></div><div className="slimScrollRail" style={{width: '4px', height: '100%', position: 'absolute', top: '0px', display: 'none', bordeRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.3', zIndex: '90', right: '1px'}}></div></div>
											<button className="btn btn-primary btn-square btn-block">See all request</button>
										</li>
									</ul>
								</li>
								
							</ul>
        </div>
        
      </div>
    </div>
  </div>
)

export default TopNavBar








