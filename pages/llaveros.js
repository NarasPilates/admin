import React from 'react';
import fetch from 'isomorphic-unfetch'

import Link from 'next/link'
import Layout from '../components/AdminLayout'
import Breadcrumb from '../components/Breadcrumb';


class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tags: [] };
    this.handleDeleteTag = this.deleteTag.bind(this);
  }
  
  async componentDidMount(){
    const res = await fetch('http://localhost:8080/api/tags/');
    const data = await res.json()

    this.setState({ tags: data });
  }

  async deleteTag(id, e) {
    await fetch(`http://localhost:8080/api/tags/${id}`, {
      method: 'DELETE',
    });
    
    const res = await fetch('http://localhost:8080/api/tags/');
    const data = await res.json()

    this.setState({ tags: data });
  }

  render() {
    return <Layout>
      <h1 className="page-heading">Llaveros</h1>

      <Breadcrumb pages={[
        {
          name: 'Llaveros'
        }
      ]}/>
      
      <div className="text-right" style={{margin: '0 0 20px'}}>
        <Link href="formulario-llavero">
          <a className="btn btn-primary">Agregar</a>
        </Link>
      </div>

      <div className="the-box full no-border">
        <div className="table-responsive">
          <table className="table table-th-block table-default">
            <thead>
              <tr><th style={{width: '150px'}}>Código</th><th>Estado</th><th style={{width: '200px'}}>Acciones</th></tr>
            </thead>
            <tbody>

            {this.state.tags.map(tag => (
                <tr key={tag._id}>
                  <td>{tag._id}</td>
                  <td>{tag.status}</td>
                  <td>
                    <a href="#fakelink" data-toggle="Descativar" title="" data-original-title="Descativar">
                      <i className="fa fa-power-off icon-rounded icon-xs icon-default"></i>
                    </a>
                    <Link href="/formulario-llavero">
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
    </Layout>
  }
}

export default Tags;