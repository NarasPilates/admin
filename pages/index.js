import Layout from '../components/AdminLayout'
import Breadcrumb from '../components/Breadcrumb';

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="page-heading">Dashboard <small>Bienvenido al Admin de Naras Pilates</small></h1>

      <Breadcrumb/>
      
      <p>Bienvenido</p>
    </Layout>
  )
}