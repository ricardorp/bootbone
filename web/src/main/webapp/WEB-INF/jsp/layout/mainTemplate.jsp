<%@ page pageEncoding="UTF-8" %>

<%@ include file="/WEB-INF/jsp/taglibs.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Ejercicio de aplicacion web - Qindel</title>
	
	<!--BeginCss-->
	<link rel="stylesheet" type="text/css" href="${contextPath}/static/css/bootstrap.css" />
    <style type="text/css">

      /* Sticky footer styles
      -------------------------------------------------- */

      html,
      body {
        height: 100%;
        /* The html and body elements cannot have any padding or margin. */
      }

      /* Wrapper for page content to push down footer */
      #wrap {
        min-height: 100%;
        height: auto !important;
        height: 100%;
        /* Negative indent footer by it's height */
        margin: 0 auto -60px;
      }

      /* Set the fixed height of the footer here */
      #push,
      #footer {
        height: 60px;
      }
      #footer {
        background-color: #f5f5f5;
      }

      /* Lastly, apply responsive CSS fixes as necessary */
      @media (max-width: 767px) {
        #footer {
          margin-left: -20px;
          margin-right: -20px;
          padding-left: 20px;
          padding-right: 20px;
        }
      }



      /* Custom page CSS
      -------------------------------------------------- */
      /* Not required for template or sticky footer method. */

      #wrap > .container {
        padding-top: 60px;
      }
      .container .credit {
        margin: 20px 0;
      }

      code {
        font-size: 80%;
      }

    </style>
   	<!--EndCss-->


	<!-- Variables JSP de uso en scripts -->
	<script type="text/javascript">
		var CONTEXT_PATH = "${contextPath}";
	</script>
	
	<!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="${contextPath}/static/img/qindel.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="${contextPath}/static/img/qindel.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="${contextPath}/static/img/qindel.png">
    <link rel="apple-touch-icon-precomposed" href="${contextPath}/static/img/qindel.png">
    <link rel="shortcut icon" href="${contextPath}/static/img/favicon.png">
</head>

<body>
    <!-- Part 1: Wrap all page content here -->
    <div id="wrap">

      <!-- Fixed navbar -->
      <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
          <div class="container">
            <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="brand" href="#">Ejercicio web</a>
            <div class="nav-collapse collapse">
              <ul id="nav-item-container" class="nav">

              </ul>
            </div><!--/.nav-collapse -->
          </div>
        </div>
      </div>

      <!-- Begin page content -->
      <div class="container">
      	<div id="mensajes">
      	</div>
      	<div id="contenido">
      	</div>
	  </div>
      <div id="push"></div>
    </div>

    <div id="footer">
      <div class="container">
        <p class="muted credit">Basado en <a href="http://twitter.github.com/bootstrap/index.html">bootstrap</a> y 
        	<a href="http://backbonejs.org/">backbone</a>.</p>
      </div>
    </div>

<!-- Librerias -->
<script src="${contextPath}/static/lib/jquery-1.7.1.js"></script>
<script src="${contextPath}/static/lib/underscore.js"></script>
<script src="${contextPath}/static/lib/backbone-0.9.2.js"></script>
<script src="${contextPath}/static/lib/bootstrap.js"></script>
<!-- Carga de Scripts -->
<script src="${contextPath}/static/js/common/views/navBarView.js"></script>
<script src="${contextPath}/static/js/libros/models/libroModel.js"></script>
<script src="${contextPath}/static/js/libros/collections/libroCollection.js"></script>
<script src="${contextPath}/static/js/libros/views/libroModelView.js"></script>
<script src="${contextPath}/static/js/libros/views/libroCollectionView.js"></script>
<script src="${contextPath}/static/js/paises/models/paisModel.js"></script>
<script src="${contextPath}/static/js/paises/collections/paisCollection.js"></script>
<script src="${contextPath}/static/js/paises/views/indexView.js"></script>
<script src="${contextPath}/static/js/paises/views/referenciasView.js"></script>
<script src="${contextPath}/static/js/paises/views/paisModelView.js"></script>
<script src="${contextPath}/static/js/paises/views/paisCollectionView.js"></script>
<script src="${contextPath}/static/js/paises/router.js"></script>

</body>
</html>