import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
  const pathName = location.pathname.substring(1);

  return (
    <div class="container-fluid fixed-top">
            <div class="container topbar bg-primary d-none d-lg-block">
                <div class="d-flex justify-content-between">
                    <div class="top-info ps-2">
                        <small class="me-3"><i class="me-2 text-secondary"></i> <Link href="#" class="text-white">3조 프로젝트</Link></small>
                        <small class="me-3"><i class="text-secondary"></i><Link href="#" class="text-white">CarrotCon</Link></small>
                    </div>
        
                </div>
            </div>
            <div class="container px-0">
                <nav class="navbar navbar-light bg-white navbar-expand-xl">
                    <Link className={pathName === 'home' ? "nav-link active" : "nav-link"} to="/"><h1 class="text-primary display-6">CarrotCon</h1></Link>
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div class="navbar-nav mx-auto ">
                            <Link className={pathName === 'home' ? "nav-link active" : "nav-link"} to="/">Home</Link>
                            <Link href="shop.html" class="nav-item nav-link">로그인</Link>
                            <Link className={pathName === 'signup' ? "nav-link active" : "nav-link"} to="/signup">회원가입</Link>
                            <Link href="contact.html" class="nav-item nav-link">상품리스트</Link>
                            <Link href="shop-detail.html" class="nav-item nav-link">내정보</Link>
                            <Link href="shop-detail.html" class="nav-item nav-link">게시판</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  )
}

export default Header