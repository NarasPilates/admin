import React from 'react';
import Router from 'next/router';
import APIRestClient from '../../lib/apiRestClient';

class TagsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: {
        _id: '',
        status: 'disabled'
      },
      mode: 'add'
    }

    this.handleCode = this.handleCode.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    const { tagId } = this.props;
    
    if(tagId) {
      this.setState({ mode: 'edit' });

      APIRestClient.get(`tags/${tagId}`)
      .then(res => {
        const tag = res.data;
        this.setState({ tag });
      })
    }
  }

  handleCode({ target }) {
    const { tag } = this.state;
    tag._id = target.value.toUpperCase();
    this.setState({tag});
  }

  handleState({ target }) {
    const { tag } = this.state;
    tag.status = target.checked ? 'enabled' : 'disabled';
    this.setState({tag});
  }

  handleSubmit(event) {
    event.preventDefault();

    const {tag} = this.state;

    if(this.state.mode == 'add') {
      APIRestClient.post(`tags/`, { ...tag })
      .then(() => {
        this.goToList();
      })
    } else {
      APIRestClient.put(`tags/${tag._id}`, { ...tag })
      .then(() => {
        this.goToList();
      })
    }
  }

  goToList () {
    Router.push('/tagsPage')
  }
  render() {
    const { tag } = this.state;
    const isChecked = tag.status == 'enabled';
    const inputProps = {};
    if(this.state.mode == 'edit'){
      inputProps.readOnly = 'true'
    }
    
    return (
      <div>
        <div className="the-box">
          <h4 className="small-title">DATOS DEL LLAVERO</h4>

          <form onSubmit = {event => {
              event.preventDefault()
            }}
          >
            <div className="form-group">
              <label>Código</label>
              <input type="text" value= {tag._id} onChange = {this.handleCode} className="form-control rounded" style={{width: '250px'}} {...inputProps} />
            </div>

            <div className="form-group">
              <label>Estado</label>
              <div className="checkbox">
                <label className="">
                  <input type="checkbox" checked={isChecked} className="i-grey-flat" onChange={this.handleState}/>
                  Activo
                </label>
              </div>
            </div>
          </form>
        </div>
      
        <button type="submit" className="btn btn-rounded-lg btn-primary" onClick = {this.handleSubmit}>Guardar</button>  
      </div>      
    )
  }
}

export default TagsForm;