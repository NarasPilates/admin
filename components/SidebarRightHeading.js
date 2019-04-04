import Link from 'next/link'

const SidebarRightHeading = () => (
  <div className="sidebar-right-heading">
    <ul className="nav nav-tabs square nav-justified">
      <li className="active"><a href="#online-user-sidebar" data-toggle="tab"><i className="fa fa-comments"></i></a></li>
      <li><a href="#notification-sidebar" data-toggle="tab"><i className="fa fa-bell"></i></a></li>
      <li><a href="#task-sidebar" data-toggle="tab"><i className="fa fa-tasks"></i></a></li>
      <li><a href="#setting-sidebar" data-toggle="tab"><i className="fa fa-cogs"></i></a></li>
    </ul>
  </div>
)

export default SidebarRightHeading;