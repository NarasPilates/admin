import Layout from '../components/AdminLayout'
import Breadcrumb from '../components/Breadcrumb';


export default function Dashboard() {
  return (
    <Layout>
      <h1 className="page-heading">Llaveros</h1>

      <Breadcrumb/>

      <div className="the-box">
        <h4 className="small-title">DATOS DEL LLAVERO</h4>
        <div className="form-group">
          <label>Código</label>
          <input type="text" className="form-control rounded" placeholder="Código" style={{width: '250px'}}/>
        </div>
        <label>Estado</label>
        <div className="form-group">
          <div className="checkbox">
            <label className="">
              <input type="checkbox" className="i-grey-flat" style={{position: 'absolute', top: '-20%', left: '-20%', display: 'none', width: '140%', height: '140%', margin: '0px', padding: '0px', background: 'rgb(255, 255, 255)', border: '0px', opacity: '0'}}/>
              Activo
            </label>
          </div>
        </div>
      </div>
      
      <button type="submit" className="btn btn-rounded-lg btn-primary">Guardar</button>  
    </Layout>
  )
}