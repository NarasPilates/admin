import Link from 'next/link'
import Layout from '../components/AdminLayout'
import Breadcrumb from '../components/Breadcrumb';

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="page-heading">Llaveros</h1>

      <Breadcrumb/>
      
      <div className="the-box full no-border">
        <div className="table-responsive">
          <table className="table table-th-block table-primary">
            <thead>
              <tr><th style={{width: '150px'}}>Código</th><th>Estado</th><th style={{width: '200px'}}>Acciones</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>492BB979</td>
                <td>Activo</td>
                <td>
                  <a href="#fakelink" data-toggle="Descativar" title="" data-original-title="Descativar">
                    <i className="fa fa-power-off icon-rounded icon-xs icon-default"></i>
                  </a>
                  <Link href="/editar-llavero">
                    <a data-toggle="Editar" title="" data-original-title="Editar">
                      <i className="fa fa-pencil-alt icon-rounded icon-xs icon-default"></i>
                    </a>
                  </Link>
                  <a href="#fakelink" data-toggle="Eliminar" title="" data-original-title="Eliminar">
                    <i className="fa fa-trash-alt icon-rounded icon-xs icon-default"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>1234567A</td>
                <td>Inactivo</td>
                <td>
                  <a href="#fakelink" data-toggle="Activar" title="" data-original-title="Activar">
                    <i className="fa fa-power-off icon-rounded icon-xs icon-default"></i>
                  </a>
                  <Link href="/editar-llavero">
                    <a data-toggle="Editar" title="" data-original-title="Editar">
                      <i className="fa fa-pencil-alt icon-rounded icon-xs icon-default"></i>
                    </a>
                  </Link>
                  <a href="#fakelink" data-toggle="Eliminar" title="" data-original-title="Eliminar">
                    <i className="fa fa-trash-alt icon-rounded icon-xs icon-default"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}