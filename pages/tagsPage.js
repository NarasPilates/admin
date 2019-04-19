import React from 'react';
import Layout from '../components/AdminLayout'
import Breadcrumb from '../components/Breadcrumb';
import PageTitle from '../components/PageTitle'
import TagsList from '../components/tags/TagsList'

class TagsPage extends React.Component {
  render() {
    return <Layout>
      <PageTitle title="Llaveros" />
      <Breadcrumb pages={[{ name: 'Llaveros' }]}/>
      <TagsList />
    </Layout>
  }
}

export default TagsPage;