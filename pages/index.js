import Layout from '../components/AdminLayout'
import Breadcrumb from '../components/Breadcrumb';
import PageTitle from '../components/PageTitle'

export default function Dashboard() {
  return (
    <Layout>
      <PageTitle>
        Dashboard <small>Bienvenido al Admin de Naras Pilates</small>
      </PageTitle>

      <Breadcrumb/>
      
      <p>Bienvenido</p>
    </Layout>
  )
}