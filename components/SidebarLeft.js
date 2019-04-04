import Link from 'next/link'

const SidebarLeft = () => (
  <div className="sidebar-left sidebar-nicescroller dark-color light-color">
    <ul className="sidebar-menu">
      <li>
        <a href="index.html">
          <i className="fa fa-tachometer-alt icon-sidebar"></i>Dashboard
        </a>
      </li>
      <li>
        <a href="#fakelink">
          <i className="fa fa-user-graduate icon-sidebar"></i>
          <i className="fa fa-angle-right chevron-icon-sidebar"></i>
          Alumnos
          </a>
        <ul className="submenu">
          <li><a href="layout-profile-left.html">Alumnos</a></li>
          <li><a href="cobros.html">Cobros</a></li>
        </ul>
      </li>
      
      <li>
        <a href="#fakelink">
          <i className="fa fa-users icon-sidebar"></i>
          <i className="fa fa-angle-right chevron-icon-sidebar"></i>
          Profesores
          </a>
        <ul className="submenu">
          <li><a href="layout-profile-left.html">Profesores</a></li>
          <li><a href="cobros.html">Pagos</a></li>
        </ul>
      </li>

      <li>
          <a href="#fakelink">
            <i className="fa fa-cogs icon-sidebar"></i>
            <i className="fa fa-angle-right chevron-icon-sidebar"></i>
            Configuración
            </a>
          <ul className="submenu">
            <li><a href="planes.html">Planes</a></li>
            <li><a href="llaveros.html">Llaveros</a></li>
          </ul>
        </li>
    </ul>
  </div>
)

export default SidebarLeft