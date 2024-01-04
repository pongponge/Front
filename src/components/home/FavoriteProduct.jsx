import React from 'react'
import { Link } from 'react-router-dom'

function favoriteProduct() {
  return (
    <>
      <div class="container-fluid py-5">
    <div class="container py-5" style={{ marginTop: '50px' }} >
      <div class="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <h5 class="display-5">인기 기프티콘</h5>
        <p>좋아요 순위에 따른 이번 주 인기 기프티콘입니다.</p>
      </div>
      <div class="row g-4">
        <div class="col-lg-6 col-xl-4">
          <div class="p-4 rounded bg-light">
            <div class="row align-items-center">
              <div class="col-6">
              <img src="/img/피자(1).png" className="img-fluid rounded-circle w-100" alt="피자" 
              style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '100%' }} />

              </div>
              <div class="col-6">
                <Link href="#" class="h5">도미노피자</Link>
                <h4 class="mb-3">25,000 Point</h4>
                <Link href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i
                    class="fa fa-shopping-bag me-2 text-primary"></i> 구매 하러가기</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-4">
          <div class="p-4 rounded bg-light">
            <div class="row align-items-center">
              <div class="col-6">
                <img src="img/치킨(1).png" class="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div class="col-6">
                <Link href="#" class="h5">BHC 치킨</Link>
                <h4 class="mb-3">18,000 Point</h4>
                <Link href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i
                    class="fa fa-shopping-bag me-2 text-primary"></i> 구매 하러가기</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-4">
          <div class="p-4 rounded bg-light">
            <div class="row align-items-center">
              <div class="col-6">
                <img src="img/커피(1).png" class="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div class="col-6">
                <Link href="#" class="h5">파스쿠찌 커피</Link>

                <h4 class="mb-3">5,000 Point</h4>
                <Link href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i
                    class="fa fa-shopping-bag me-2 text-primary"></i> 구매 하러가기</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-4">
          <div class="p-4 rounded bg-light">
            <div class="row align-items-center">
              <div class="col-6">
                <img src="img/best-product-4.jpg" class="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div class="col-6">
                <Link href="#" class="h5">Organic Tomato</Link>
                <div class="d-flex my-3">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4 class="mb-3">3.12 $</h4>
                <Link href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i
                    class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-4">
          <div class="p-4 rounded bg-light">
            <div class="row align-items-center">
              <div class="col-6">
                <img src="img/best-product-5.jpg" class="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div class="col-6">
                <Link href="#" class="h5">Organic Tomato</Link>
                <div class="d-flex my-3">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4 class="mb-3">3.12 $</h4>
                <Link href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i
                    class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-4">
          <div class="p-4 rounded bg-light">
            <div class="row align-items-center">
              <div class="col-6">
                <img src="img/best-product-6.jpg" class="img-fluid rounded-circle w-100" alt="" />
              </div>
              <div class="col-6">
                <Link href="#" class="h5">Organic Tomato</Link>
                <div class="d-flex my-3">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4 class="mb-3">3.12 $</h4>
                <Link href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i
                    class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
    </>
   
  )
}

export default favoriteProduct;