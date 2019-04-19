const PageTitle = (props) => <h1 className="page-heading">{props.children ? props.children : props.title}</h1>

export default PageTitle;