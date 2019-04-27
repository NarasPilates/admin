import React from 'react';

import Layout from '../components/AdminLayout';
import Breadcrumb from '../components/Breadcrumb';
import PageTitle from '../components/PageTitle';
import StudentsForm from '../components/students/StudentsForm';

class StudentsFormPage extends React.Component {
  static getInitialProps({ query }) {
    return { id: query.id || '' };
  }

  render () {
    return <Layout>
      <PageTitle title="Alumnos" />
      <Breadcrumb pages={[
        {
          name: 'Alumnos',
          href: '/studentsPage',
          as: '/students'
        },
        {
          name: 'Formulario de Alumnos'
        }
      ]}/>
      <StudentsForm userId={this.props.id } />
    </Layout>
  }
}

export default StudentsFormPage;