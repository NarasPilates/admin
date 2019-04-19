import React from 'react';
import APIRestClient from '../../lib/apiRestClient';

import Link from 'next/link'

class TagsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tags: [] };
    this.handleDeleteTag = this.deleteTag.bind(this);
  }
  
  componentDidMount(){
    APIRestClient.get(`tags/`)
    .then(res => {
      const tags = res.data;
      this.setState({ tags });
    })
  }

  deleteTag(id) {
    APIRestClient.delete(`tags/${id}`)
    .then(() => {
      APIRestClient.get(`tags/`)
      .then(res => {
        const tags = res.data;
        this.setState({ tags });
      })
    })
  }

  render() {
    const { tags } = this.state;

    return (
      <div>
        <div className="text-right" style={{margin: '0 0 20px'}}>
          <Link href="tagsFormPage" as="/tags/add">
            <a className="btn btn-primary">Agregar</a>
          </Link>
        </div>

        <div className="the-box full no-border">
          <div className="table-responsive">
            <table className="table table-th-block table-default table-items">
              <thead>
                <tr>
                  <th style={{width: '150px'}}>Código</th>
                  <th>Estado</th>
                  <th style={{width: '200px'}}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tags.map(tag => (
                  <tr key={tag._id}>
                    <td>{tag._id}</td>
                    <td>{tag.status == 'enabled' ? 'Activo' : 'Inactivo'}</td>
                    <td className="actions">
                      {/* <a href="#fakelink" data-toggle="Descativar" title="" data-original-title="Descativar">
                        <i className="fa fa-power-off icon-rounded icon-xs icon-default"></i>
                      </a> */}
                      <Link href={{ pathname: '/tagsFormPage', query: { id: tag._id } }} as={`/tags/edit/${tag._id}`}>
                        <a data-toggle="Editar" title="" data-original-title="Editar">
                          <i className="fa fa-pencil-alt icon-rounded icon-xs icon-default"></i>
                        </a>
                      </Link>
                      <a onClick={this.handleDeleteTag.bind(this, tag._id)} data-toggle="Eliminar" title="" data-original-title="Eliminar">
                        <i className="fa fa-trash-alt icon-rounded icon-xs icon-default"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>      
    )
  }
}

export default TagsList;