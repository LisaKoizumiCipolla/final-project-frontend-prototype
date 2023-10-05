<template>
    <section class="contact-area" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                        <a href="#"><img src="../assets/hunters tooth and talon_intero.png" alt="logo"></a>
                        <p> Hunter Tooth and Talon are founded for you to take care of the enemies you need to rid of choose one 
                                    of our best hunters </p>
                        <div class="hr"></div>
                        <h6>1120  Hunter Tooth and Talon, IT 179050, Rome.</h6>
                        <h6><a class="phone text-decoration-none" href="">+39 2345 6789 12</a><span>|</span><a class="phone text-decoration-none" href="">+39 2345 6789 12</a></h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-github"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-behance"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer>
        <p>Copyright &copy; 2023 <img src="../assets/navbar-logo.png" alt="logo"> All Rights Reserved.</p>
        </footer>
    </section>
    <!-- =============== 1.9 Contact Area End ====================-->
    <!-- =============== 1.9 Footer Area Start ====================-->

</template>
<script>
export default {
    name:'AppFooter'
}
</script>
<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

            img {
    max-width: 100%;
    //height: auto;
    filter: invert(1);
}
        section {
            padding-top: 60px;
           /* min-height: 100vh;*/
        }
 ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
.contact-area {
    border-bottom: 1px solid #1d1515;
}

.contact-content p {
    font-size: 15px;
    margin: 30px 0 60px;
    position: relative;
}

.contact-content p::after {
    background: $text;
    bottom: -30px;
    content: "";
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    width: 80%;
}

.contact-content h6 {
    color: $text;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
}

.contact-content span {
    color: $text;
    margin: 0 10px;
}

.contact-social {
    margin-top: 30px;
}

.contact-social > ul {
    display: inline-flex;
}

.contact-social ul li a {
    border: 1px solid $text;
    color: $text;
    display: inline-block;
    height: 40px;
    margin: 0 10px;
    padding-top: 7px;
    transition: all 0.4s ease 0s;
    width: 40px;
}

.contact-social ul li a:hover {
    border: 1px solid $primary;
    color: $primary;
    border-radius: 50%;
}

.contact-content img {
    max-width: 210px;
}

section, footer {
    background: #1d1515;
    color: $text;
}

footer p {
    padding: 40px 0;
    text-align: center;
}

footer img {
    width: 24px;
    margin: 0 5px;

}

.phone{
    text-decoration: none;
    color: $text;
        &:hover{
            cursor: pointer;
            color: $primary;
            transition: all 0.4s ease 0s;
        }
    
}
</style>