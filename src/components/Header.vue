<script>

export default {
    name: 'Header',
}
</script>
<template>

    <div class="header">
        <div class="row d-flex justify-content-center">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container ">
                    <div class="row hdcontainer">
                        <div class="col-7 col-md-6 col-lg-3">
                            <a class=" navbar-brand" href="#">
                                <img src="../images/t-1593421703-logo.jpg" alt="logo-space">
                            </a>
                        </div>

                        <div class=" col-md-9 position-absolute button-show">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="col-1 col-md-8 collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="hover-horizontal-line navbar-nav me-auto mb-2 mb-lg-0">
                                <div class="row">
                                    <div class="col-2">
                                        <li class="nav-item">
                                            <a class="nav-link current" aria-current="page" href="#">HOME</a>
                                        </li>
                                    </div>
                                    <div class="col-2">
                                        <li class="nav-item" style="margin-right: 0px;margin-left: 0px;">
                                            <a class="nav-link" href="#aboutus">ABOUT US</a>
                                        </li>
                                    </div>
                                    <div class="col-2">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#porfolio">PORTFOLIO</a>
                                        </li>
                                    </div>
                                    <div class="col-2">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#services">SERVICES</a>
                                        </li>
                                    </div>
                                    <div class="col-2">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Page
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="https://piepme.com/">Piepme</a></li>
                                                <li><a class="dropdown-item" href="#">Piepmark</a></li>
                                                <li><a class="dropdown-item" href="https://www.webinaris.com/">Webinaris</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </div>
                                    <div class="col-2">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#contact">CONTACT</a>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

</template>

<style>
html, body{
    width: 100%;
    font-family: OpenSans;
    font-size: 14px;
    color: black;
    overflow-x: hidden;
    position: relative;
}
h2{
    font-size: 42px;
}
img{
    object-fit: fill;
}

.header a{
    text-transform: uppercase;
}
.navbar a{
    text-decoration: none;
    color: black;
}
.navbar-brand img{
    width: 60px;
}
.button-show button{
    float: right;
    margin-top: 15px;
    margin-right: 30px;
}
.col-lg-3 {
    margin: 10px 0;
}   
.hor-line{
    width: 100%;
    height: 2px;
    color: black;
    border: 1px black solid;
}
.hdcontainer{
    width: 100%;
}
.navbar-toggler button{
    float: right;
}

/* Custom hover menu */

.hover-horizontal-line {
  font-family: 'Raleway', Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}
.hover-horizontal-line * {
  box-sizing: border-box;
}
.hover-horizontal-line li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.5em;
  padding: 0;
}
.hover-horizontal-line a {
  padding: 0.5em 0;
  color: #000;
  position: relative;
  letter-spacing: 1px;
  text-decoration: none;
}
.hover-horizontal-line a:before,
.hover-horizontal-line a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.hover-horizontal-line a:before {
  bottom: 0;
  display: block;
  height: 1px;
  width: 0%;
  content: "";
  background-color: black;
}
.hover-horizontal-line a:after {
  left: 0;
  top: 0;
  padding: 0.5em 0;
  position: absolute;
  content: attr(data-hover);
  color: #ffffff;
  white-space: nowrap;
  max-width: 0%;
  overflow: hidden;
}
.hover-horizontal-line a:hover:before,
.hover-horizontal-line .current a:before {
  opacity: 1;
  width: 80%;
}
.hover-horizontal-line a:hover:after,
.hover-horizontal-line .current a:after {
  max-width: 90%;
}



</style>




