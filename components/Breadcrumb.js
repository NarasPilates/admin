import Link from 'next/link'

const Breadcrumb = () => (
  <ol className="breadcrumb default square rsaquo sm">
    <li><a href="index.html"><i className="fa fa-home"></i></a></li>
    <li><a href="#fakelink">Example pages</a></li>
    <li className="active">Blank</li>
  </ol>
)

export default Breadcrumb