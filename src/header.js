React.render(    
    React.CreateElement(
        <div class="container">
            <div class="row">
                <div class="col-xs-10 col-sm-2">
                    <div id="logo">
                        <a href="https://www.pinjam.co.id/"> <img src="images/logo.png" alt="Logo Pinjam" /> </a>
                    </div>
                </div>
                <div class="col-xs-2 hidden-sm hidden-md hidden-lg">
                    <a href="" class="mobile-nav">
                        <span class="fa fa-bars"></span>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-10">
                    <div id="main-nav" class="nav">
                        <ul>
                            <li class=""> <a href="https://www.pinjam.co.id/">HOME</a> </li>
                            <li> <a href="https://www.pinjam.co.id/#kenapa" class="smoothscroll">KENAPA PINJAM</a> </li>
                            <li> <a id="my_testimoni" href="https://www.pinjam.co.id/testimoni">TESTIMONI</a> </li>
                        </ul>
                        <ul class="notlogin-nav">
                            <li> <a href="https://www.pinjam.co.id/register" class="acsent">REGISTER</a> <span class="hidden-xs"></span></li>
                            <li>
                                <a href="#menu-holder" class="acsent hidden-xs toggle-menu" data-toggle="collapse" aria-expanded="false" aria-controls="menu-holder">SIGN IN</a>
                                <a href="https://www.pinjam.co.id/signin" class="acsent hidden-sm hidden-md hidden-lg">SIGN IN</a>
                                <div class="body-overlay"></div>
                                <div class="menu-holder collapse" id="menu-holder">
                                    <div class="triangle">
                                    </div>
                                    <div class="menu-container">
                                        <form class="p-form form-register" action="https://www.pinjam.co.id/anggota/dropdown_login" method="POST">
                                            <input type="email" name="login_email" id="login_email" placeholder="Email">
                                            <input type="password" name="login_password" id="login_password" placeholder="Kata Sandi">
                                            <label for="ingat"><input type="checkbox" name="ingat" id="ingat" checked="checked" value="ingat saya"> Ingat Saya</label>
                                            <a href="https://www.pinjam.co.id/resetpwd" class="my_forgot_x">Lupa Password?</a>
                                            <input type="submit" value="MASUK" class="btn-submit">
                                        </form>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                <div>
            </div>
        </div>
    )
    document.getElementById('content')
); 