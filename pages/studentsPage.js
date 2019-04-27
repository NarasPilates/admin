import React from 'react';
import Layout from '../components/AdminLayout'
import Breadcrumb from '../components/Breadcrumb';
import PageTitle from '../components/PageTitle'
import StudentsList from '../components/students/StudentsList'

class StudentsPage extends React.Component {
  render() {
    return <Layout>
      <PageTitle title="Alumnos" />
      <Breadcrumb pages={[{ name: 'Alumnos' }]}/>
      <StudentsList />
    </Layout>
  }
}

export default StudentsPage;