import React from 'react';

import Layout from '../components/AdminLayout';
import Breadcrumb from '../components/Breadcrumb';
import PageTitle from '../components/PageTitle';
import TagsForm from '../components/tags/TagsForm';

class TagsFormPage extends React.Component {
  static getInitialProps({ query }) {
    return { id: query.id || '' };
  }

  render () {
    return <Layout>
      <PageTitle title="Llaveros" />
      <Breadcrumb pages={[
        {
          name: 'Llaveros',
          href: '/tagsPage'
        },
        {
          name: 'Formulario de Llaveros'
        }
      ]}/>
      <TagsForm tagId={this.props.id } />
    </Layout>
  }
}

export default TagsFormPage;