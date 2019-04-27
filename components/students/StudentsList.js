import React from 'react';
import APIRestClient from '../../lib/apiRestClient';

import Link from 'next/link'

class StudentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
    this.handleDeleteStudent = this.deleteStudent.bind(this);
  }
  
  componentDidMount(){
    APIRestClient.get(`users/`, {
      params: {
        role: 'student'
      }
    })
    .then(res => {
      const students = res.data;
      this.setState({ students });
    })
  }

  deleteStudent(id) {
    APIRestClient.delete(`users/${id}`)
    .then(() => {
      APIRestClient.get(`users/`, {
        params: {
          role: 'student'
        }
      })
      .then(res => {
        const students = res.data;
        this.setState({ students });
      })
    })
  }

  render() {
    const { students } = this.state;

    return (
      <div>
        <div className="text-right" style={{margin: '0 0 20px'}}>
          <Link href="studentsFormPage" as="/students/add">
            <a className="btn btn-primary">Agregar</a>
          </Link>
        </div>

        <div className="the-box full no-border">
          <div className="table-responsive">
            <table className="table table-th-block table-default table-items">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Celular</th>
                  <th>Email</th>
                  <th>Tag</th>
                  <th style={{width: '200px'}}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {students.length > 0 && students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.lastname}</td>
                    <td>{student.cellphone}</td>
                    <td>{student.email}</td>
                    <td>{student.tag && student.tag._id || 'Sin asignar'}</td>
                    <td className="actions">                      
                      <Link href={{ pathname: '/studentsFormPage', query: { id: student._id } }} as={`/students/edit/${student._id}`}>
                        <a data-toggle="Editar" title="" data-original-title="Editar">
                          <i className="fa fa-pencil-alt icon-rounded icon-xs icon-default"></i>
                        </a>
                      </Link>
                      <a onClick={this.handleDeleteStudent.bind(this, student._id)} data-toggle="Eliminar" title="" data-original-title="Eliminar">
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

export default StudentsList;