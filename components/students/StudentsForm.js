import React from 'react';
import Router from 'next/router';
import APIRestClient from '../../lib/apiRestClient';

class StudentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        name: '',
        lastname: '',
        email:'',
        cellphone:'',
        phone: '',
        birthday: '',
        socialMedia: {
          instagram:'',
          facebook: ''
        }
      },
      mode: 'add',
    }

    this.handleName = this.handleName.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCellphone = this.handleCellphone.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
    this.handleInstagram = this.handleInstagram.bind(this);
    this.handleFacebook = this.handleFacebook.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    const { userId } = this.props;
    
    if(userId) {
      this.setState({ mode: 'edit' });

      APIRestClient.get(`users/${userId}`)
      .then(res => {
        const student = res.data;
        this.setState({ student });
      })
    }
  }

  handleName({ target }) {
    const { student } = this.state;
    student.name = target.value;
    this.setState({ student });
  }

  handleLastname({ target }) {
    const { student } = this.state;
    student.lastname = target.value;
    this.setState({ student });
  }

  handleEmail({ target }) {
    const { student } = this.state;
    student.email = target.value;
    this.setState({ student });
  }

  handleCellphone({ target }) {
    const { student } = this.state;
    student.cellphone = target.value;
    this.setState({ student });
  }
  
  handlePhone({ target }) {
    const { student } = this.state;
    student.phone = target.value;
    this.setState({ student });
  }

  handleBirthday({ target }) {
    const { student } = this.state;
    student.birthday = target.value;
    this.setState({ student });
  }

  handleInstagram({ target }) {
    const { student } = this.state;
    
    if(!student.socialMedia){
      student.socialMedia = {};
    }

    student.socialMedia.instagram = target.value;
    this.setState({ student });
  }

  handleFacebook({ target }) {
    const { student } = this.state;
    
    if(!student.socialMedia){
      student.socialMedia = {};
    }

    student.socialMedia.facebook = target.value;
    this.setState({ student });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { student } = this.state;

    if(this.state.mode == 'add') {
      APIRestClient.post(`users/`, { role: 'student', ...student })
      .then(() => {
        this.goToList();
      })
    } else {
      APIRestClient.put(`users/${student._id}`, { ...student })
      .then(() => {
        this.goToList();
      })
    }
  }

  goToList () {
    Router.push('/studentsPage')
  }

  render() {
    const { student } = this.state;
    
    return (
      <div>
        <div className="the-box">
          <h4 className="small-title">DATOS DEL ALUMNO</h4>

          <form onSubmit = {event => {
              event.preventDefault()
            }}
          >
            <div className="form-group">
              <div className="row">
                <div className="col-lg-6">
                  <label>Nombre</label>
                  <input type="text" value= {student.name} className="form-control rounded" onChange = {this.handleName}/>
                </div>
                <div className="col-lg-6">
                  <label>Apellido</label>
                  <input type="text" value= {student.lastname} className="form-control rounded" onChange = {this.handleLastname}/>    
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-lg-4">
                  <label>Email</label>
                  <input type="text" value= {student.email} className="form-control rounded" onChange = {this.handleEmail}/>
                </div>
                <div className="col-lg-4">
                  <label>Celular</label>
                  <input type="text" value= {student.cellphone} className="form-control rounded" onChange = {this.handleCellphone}/>
                </div>
                <div className="col-lg-4">
                  <label>Teléfono Fijo</label>
                  <input type="text" value= {student.phone} className="form-control rounded" onChange = {this.handlePhone}/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-lg-4">
                  <label>Cumpleaños</label>
                  <input type="text" value= {student.birthday} className="form-control rounded" onChange = {this.handleBirthday}/>
                </div>
                <div className="col-lg-4">
                  <label>Instagram</label>
                  <input type="text" value= {student.socialMedia && student.socialMedia.instagram} className="form-control rounded" onChange = {this.handleInstagram}/>
                </div>
                <div className="col-lg-4">
                  <label>Facebook</label>
                  <input type="text" value= {student.socialMedia && student.socialMedia.facebook} className="form-control rounded" onChange = {this.handleFacebook}/>
                </div>
              </div>
            </div>
          </form>
        </div>
      
        <button type="submit" className="btn btn-rounded-lg btn-primary" onClick = {this.handleSubmit}>Guardar</button>  
      </div>      
    )
  }
}

export default StudentsForm;