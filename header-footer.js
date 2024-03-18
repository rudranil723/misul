class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <nav id = "header">
                <div class="logo">
                    <img src = "img/logologo2.png" class="logo"alt="Error">
                    <!-- <h1>Logo</h1> -->
                </div>
                <div class="nav-actions">
                    <ul id="navbar">
                        <li><a href="index.html">Home</a></li>
                        <li><a class = "dropdown" href="#">About Us</a>
                            <div class="sub-menu">
                                <ul>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="testimonials.html">Testimonials</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="collections.html">Collections</a></li>
                        <li><a href="menu.html">Menu</a></li>
                        <li class="login-popup">Login</li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </nav>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');
                :root{
                    --color-border : grey;
                    --color-header-background : pink;
                    --color-list-item : #000000;
                    --color-sticky-list-item : #ffffff;
                    --color-sub-menu-li : #1a1a1a;
                    --color-sub-menu-hover-li : #FFFFFF;
                    --color-sub-menu-bg : #fff;
                    --color-sub-menu-hover-bg : #c55772;
                }

                * {
                    margin : 0;
                    padding : 0;
                    box-sizing : border-box;
                    font-family: 'Spartan', sans-serif;
                }

                /* .container
                {
                    position: relative;
                } */
                #header{
                    height: 80px;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width : 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: transparent;
                    padding: 40px 100px;
                    transition: 0.6s;
                    z-index: 100000;
                }

                #header.sticky{
                    padding: 20px 80px;
                    background-color: var(--color-header-background);
                    box-shadow :2px 3px 2px 0px var(--color-border);
                }

                #header.sticky ul li a{
                    color: var(--color-sticky-list-item);
                }


                #header.sticky li a.active::after{
                    content: "";
                    width : 30%;
                    height : 2px;
                    position : absolute;
                    bottom: -4px;
                    left : 20px;
                    background-color: var(--color-sticky-list-item);
                }

                .logo{
                    width: 180px;
                    height: 60px;
                    padding: 0 5px;
                    display: flex;
                    align-items: center;
                }
                #header.sticky .logo{
                    width: 200px;
                    height: 70px;
                    padding: 0 5px;
                    display: flex;
                    align-items: center;
                }

                img.logo{
                    width: 190px;
                    height: 50px;
                }

                #navbar{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #navbar li{
                    list-style: none;
                    padding : 0 20px;
                    position: relative;
                }


                #navbar li a{
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 600;
                    color : var(--color-list-item);
                    transition: 0.3s ease;
                }

                #navbar li a+.sub-menu li a{
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 600;
                    color : var(--color-sub-menu-li);
                    transition: 0.3s ease;
                }

                /* #navbar li a:hover,
                #navbar li a.active{
                    color : #088178;
                    color: rgb(233, 122, 165);
                    color: #FFFFFF;
                } */


                #navbar li a.active::after{
                    content: "";
                    width : 30%;
                    height : 2px;
                    position : absolute;
                    bottom: -4px;
                    left : 20px;
                    background-color: var(--color-list-item);
                }


                #navbar li a:hover::after{
                    content: "";
                    width : 30%;
                    height : 2px;
                    position : absolute;
                    bottom: -4px;
                    left : 20px;
                    background-color: var(--color-list-item);
                }

                #header.sticky #navbar li a:hover::after{
                    background: var(--color-sticky-list-item);
                }


                .sub-menu{
                    display : none;
                }

                #navbar li .sub-menu.active-submenu{
                    display: block;
                    position: absolute;
                    background-color: var(--color-sub-menu-bg);

                    margin-top: 15px;
                    margin-left: 15px;
                    border : 1px solid black;
                    border-radius:8px;
                }

                #navbar li .sub-menu.active-submenu ul{
                    margin : 5px 0px;
                    display : block;
                }

                #navbar li .sub-menu.active-submenu ul li{
                    width : 170px;
                    padding : 15px;
                    /* border-bottom : 1px solid black;
                    border-radius: 1px; */
                    /* background: transparent;*/
                    text-align : left;
                }


                #navbar li .sub-menu.active-submenu li:hover a{
                    color : var(--color-sub-menu-hover-li);
                }
                .sub-menu.active-submenu li:hover{
                background-color: var(--color-sub-menu-hover-bg);
                }
                /* #navbar li .sub-menu li a:hover{
                    color: white;
                } */

                #navbar li .sub-menu.active-submenu li a:hover::after{
                    background-color: white;
                }

                #header.sticky .login-popup{
                    color: var(--color-sticky-list-item);
                }

                .login-popup{
                    font-size: 16px;
                    font-weight: 600;
                    color : var(--color-list-item);
                    transition: 0.3s ease;
                }

                .login-popup:hover{
                    cursor: pointer;
                }

                .login-popup:hover::after{
                    content: "";
                    width : 30%;
                    height : 2px;
                    position : absolute;
                    bottom: -4px;
                    left : 20px;
                    background-color: var(--color-list-item);
                }

                #header.sticky .login-popup:hover::after{
                    background-color: var(--color-sticky-list-item);
                }


            </style>

            <script>
                const header = document.getElementById("header");
                const dropdown = document.querySelector(".dropdown");
                const submenu = document.querySelector(".sub-menu");
                const links = document.querySelectorAll("#navbar li a");


                dropdown.addEventListener('mouseover',()=>{
                    submenu.classList.add('active-submenu');
                });

                dropdown.addEventListener('mouseleave',()=>{
                    setTimeout(() => {
                        if (!submenu.matches(':hover')) {
                            submenu.classList.remove('active-submenu');
                        }
                    }, 200);
                });

                submenu.addEventListener('mouseleave',()=>{
                    submenu.classList.remove('active-submenu');
                });

                window.addEventListener("scroll",()=>{
                    header.classList.toggle("sticky", window.scrollY>0)
                });

                links.forEach(link => {
                    link.addEventListener('click', ()=>{
                        document.querySelector('.active')?.classList.remove('active');
                        link.classList.add('active');
                    });
                });
            </script>
        `;
    }
}

customElements.define('my-header',MyHeader)