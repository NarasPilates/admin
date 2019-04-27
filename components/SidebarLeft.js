import Link from 'next/link'

const SidebarLeft = () => (
  <div className="sidebar-left sidebar-nicescroller dark-color light-color">
    <ul className="sidebar-menu">
      <li>
        <Link href="/">
          <a><i className="fa fa-tachometer-alt icon-sidebar"></i>Dashboard</a>
        </Link>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-user-graduate icon-sidebar"></i>
          <i className="fa fa-angle-right chevron-icon-sidebar"></i>
          Alumnos
        </a>
        <ul className="submenu">
          <li><Link href="/studentsPage" as="students"><a>Alumnos</a></Link></li>
          <li><Link href="/cobros"><a>Cobros</a></Link></li>
        </ul>
      </li>
      
      <li>
        <a href="#">
          <i className="fa fa-users icon-sidebar"></i>
          <i className="fa fa-angle-right chevron-icon-sidebar"></i>
          Profesores
          </a>
        <ul className="submenu">
          <li><Link href="/profesores"><a>Profesores</a></Link></li>
          <li><Link href="/cobros"><a>Pagos</a></Link></li>
        </ul>
      </li>

      <li>
          <a href="#">
            <i className="fa fa-cogs icon-sidebar"></i>
            <i className="fa fa-angle-right chevron-icon-sidebar"></i>
            Configuración
          </a>
          <ul className="submenu">
            <li><Link href="/planes"><a>Planes</a></Link></li>
            <li><Link href="/tagsPage" as="tags"><a>Llaveros</a></Link></li>
          </ul>
        </li>
    </ul>
  </div>
)

export default SidebarLeft