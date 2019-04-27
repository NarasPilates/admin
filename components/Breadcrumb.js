import React from 'react';
import Link from 'next/link'


const PageWithLink = ({page}) => {
  return (
      <li>
        <Link href={page.href} as={page.as || ''}><a>{page.name}</a></Link>  
      </li>
  );
}

const PageWithoutLink = ({page}) => {
  return (
    <li className="active">{page.name}</li>
  );
}

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <ol className="breadcrumb default square rsaquo sm">
      <li>
        <Link href="/index">
          <a><i className="fa fa-home"></i></a> 
        </Link>
      </li>
      {this.props.pages && this.props.pages.map(page => {
        if (page.href) {
          return <PageWithLink page={{...page}} key={page.name}/>
        } else {
          return <PageWithoutLink page={{...page}} key={page.name}/>
        }
      })}
    </ol>
  }
}

export default Breadcrumb