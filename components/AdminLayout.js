
import Head from 'next/head';
import TopNavBar from './TopNavBar';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import SidebarRightHeading from './SidebarRightHeading';
import Breadcrumb from './Breadcrumb';

const Layout = props => (
  <div>
    <Head>
      <meta name="description" content="Sentir, Responsive admin and dashboard UI kits template"/>
      <meta name="keywords" content="admin,bootstrap,template,responsive admin,dashboard template,web apps template"/>
      <meta name="author" content="Ari Rusmanto, Isoh Design Studio, Warung Themes"/>
      <title>Admin - Naras Pilates</title>
      
      <link href="/static/css/bootstrap.min.css" rel="stylesheet"/>
      
      <link href="/static/plugins/weather-icon/css/weather-icons.min.css" rel="stylesheet"/>
      <link href="/static/plugins/prettify/prettify.min.css" rel="stylesheet"/>
      <link href="/static/plugins/magnific-popup/magnific-popup.min.css" rel="stylesheet"/>
      <link href="/static/plugins/owl-carousel/owl.carousel.min.css" rel="stylesheet"/>
      <link href="/static/plugins/owl-carousel/owl.theme.min.css" rel="stylesheet"/>
      <link href="/static/plugins/owl-carousel/owl.transitions.min.css" rel="stylesheet"/>
      <link href="/static/plugins/chosen/chosen.min.css" rel="stylesheet"/>
      <link href="/static/plugins/icheck/skins/all.css" rel="stylesheet"/>
      <link href="/static/plugins/datepicker/datepicker.min.css" rel="stylesheet"/>
      <link href="/static/plugins/timepicker/bootstrap-timepicker.min.css" rel="stylesheet"/>
      <link href="/static/plugins/validator/bootstrapValidator.min.css" rel="stylesheet"/>
      <link href="/static/plugins/summernote/summernote.min.css" rel="stylesheet"/>
      <link href="/static/plugins/markdown/bootstrap-markdown.min.css" rel="stylesheet"/>
      <link href="/static/plugins/datatable/css/bootstrap.datatable.min.css" rel="stylesheet"/>
      <link href="/static/plugins/morris-chart/morris.min.css" rel="stylesheet"/>
      <link href="/static/plugins/c3-chart/c3.min.css" rel="stylesheet"/>
      <link href="/static/plugins/slider/slider.min.css" rel="stylesheet"/>
      <link href="/static/plugins/salvattore/salvattore.css" rel="stylesheet"/>
      <link href="/static/plugins/toastr/toastr.css" rel="stylesheet"/>
      <link href="/static/plugins/fullcalendar/fullcalendar/fullcalendar.css" rel="stylesheet"/>
      <link href="/static/plugins/fullcalendar/fullcalendar/fullcalendar.print.css" rel="stylesheet" media="print"/>
      
      <link href="/static/plugins/font-awesome/css/all.min.css" rel="stylesheet"/>
      <link href="/static/css/style.css" rel="stylesheet"/>
      <link href="/static/css/style-responsive.css" rel="stylesheet"/>

      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    </Head>
  

    <div className="wrapper">
      
      <TopNavBar/>
      
      <SidebarLeft/>
      <SidebarRightHeading/>
      <SidebarRight/>
      
      <div className="page-content">
        <div className="container-fluid">
          <h1 className="page-heading">Blank page <small>Sub heading here</small></h1>

          <Breadcrumb/>

          {props.children}        
        </div>
        
        {/* <!-- BEGIN FOOTER -->
        <footer>
          &copy; 2014 <a href="#fakelink">Your company</a><br />
          Design by <a href="http://isohdesign.com" target="_blank">ids</a>. Purchase this item at <a href="http://goo.gl/wSCjxD" target="_blank">Themeforest</a>
        </footer>
        <!-- END FOOTER --> */}
      </div>
    </div>

    {/* BACK TO TOP BUTTON */}
    <div id="back-top">
      <a href="#top"><i className="fa fa-chevron-up"></i></a>
    </div>
    
    <div id="root" style={{display:'none'}}></div>
    
    {/* MAIN JAVASRCIPT (REQUIRED ALL PAGE) */}
    <script src="/static/js/jquery.min.js"></script>
    <script src="/static/js/bootstrap.min.js"></script>
    <script src="/static/plugins/retina/retina.min.js"></script>
    <script src="/static/plugins/nicescroll/jquery.nicescroll.js"></script>
    <script src="/static/plugins/slimscroll/jquery.slimscroll.min.js"></script>
    <script src="/static/plugins/backstretch/jquery.backstretch.min.js"></script>

    {/* PLUGINS */}
    <script src="/static/plugins/skycons/skycons.js"></script>
    <script src="/static/plugins/prettify/prettify.js"></script>
    <script src="/static/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>
    <script src="/static/plugins/owl-carousel/owl.carousel.min.js"></script>
    <script src="/static/plugins/chosen/chosen.jquery.min.js"></script>
    <script src="/static/plugins/icheck/icheck.min.js"></script>
    <script src="/static/plugins/datepicker/bootstrap-datepicker.js"></script>
    <script src="/static/plugins/timepicker/bootstrap-timepicker.js"></script>
    <script src="/static/plugins/mask/jquery.mask.min.js"></script>
    <script src="/static/plugins/validator/bootstrapValidator.min.js"></script>
    <script src="/static/plugins/datatable/js/jquery.dataTables.min.js"></script>
    <script src="/static/plugins/datatable/js/bootstrap.datatable.js"></script>
    <script src="/static/plugins/summernote/summernote.min.js"></script>
    <script src="/static/plugins/markdown/markdown.js"></script>
    <script src="/static/plugins/markdown/to-markdown.js"></script>
    <script src="/static/plugins/markdown/bootstrap-markdown.js"></script>
    <script src="/static/plugins/slider/bootstrap-slider.js"></script>
    
    <script src="/static/plugins/toastr/toastr.js"></script>
    
    {/* FULL CALENDAR JS */}
    <script src="/static/plugins/fullcalendar/lib/jquery-ui.custom.min.js"></script>
    <script src="/static/plugins/fullcalendar/fullcalendar/fullcalendar.min.js"></script>
    <script src="/static/js/full-calendar.js"></script>
    
    {/* EASY PIE CHART JS */}
    <script src="/static/plugins/easypie-chart/easypiechart.min.js"></script>
    <script src="/static/plugins/easypie-chart/jquery.easypiechart.min.js"></script>
    
    {/* KNOB JS */}
    {/* <!--[if IE]> */}
    <script type="text/javascript" src="/static/plugins/jquery-knob/excanvas.js"></script>
    {/* <![endif]--> */}
    <script src="/static/plugins/jquery-knob/jquery.knob.js"></script>
    <script src="/static/plugins/jquery-knob/knob.js"></script>

    {/* <!-- FLOT CHART JS --> */}
    <script src="/static/plugins/flot-chart/jquery.flot.js"></script>
    <script src="/static/plugins/flot-chart/jquery.flot.tooltip.js"></script>
    <script src="/static/plugins/flot-chart/jquery.flot.resize.js"></script>
    <script src="/static/plugins/flot-chart/jquery.flot.selection.js"></script>
    <script src="/static/plugins/flot-chart/jquery.flot.stack.js"></script>
    <script src="/static/plugins/flot-chart/jquery.flot.time.js"></script>

    {/* <!-- MORRIS JS --> */}
    <script src="/static/plugins/morris-chart/raphael.min.js"></script>
    <script src="/static/plugins/morris-chart/morris.min.js"></script>
    
    {/* <!-- C3 JS --> */}
    <script src="/static/plugins/c3-chart/d3.v3.min.js" charSet="utf-8"></script>
    <script src="/static/plugins/c3-chart/c3.min.js"></script>
    
    {/* <!-- MAIN APPS JS --> */}
    <script src="/static/js/apps.js"></script>
  </div>
)

export default Layout