/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import axios from 'axios';
import { productState } from '@recoils/product';

import Pay from '@components/product/Pay';

function ProductDetail() {
  const { id } = useParams();
//   const navigate = useNavigate();
  const product = useRecoilValue(productState);

  const getProductRecoild = useRecoilCallback(({ set }) => async (id) => {
    try {
      const resp = await axios.get('http://localhost:8000/product/checkProduct/'+ id);
      set(productState, resp.data.data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    getProductRecoild(id);
  }, [getProductRecoild, id]);

  return (
    <main id="main">
      <div className="container-fluid py-5 mt-5 ">
        <div className="container py-5">
            <div className="row g-4 mb-5 ">
                <div className="col-lg-8 col-xl-12">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div>
                                <img src={product?.imageName} className="img-fluid rounded border" alt ="사진" style={{width: '70%', height: '70%'}} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="fw-bold mb-3">{product?.name}</h4>
                            <h5 className="fw-bold mb-3">할인가 {product?.sale_price}원</h5>
                            <h5 className="mb-3">{product?.ex_date}까지</h5>   

                            <p className="mb-4">{product.info}</p>

                            <Pay />
                        </div>
                        <div className="col-lg-12">

                            <div className="tab-content mb-5">
                                <div className="tab-pane active" id="nav-about" role="tabpanel"
                                    aria-labelledby="nav-about-tab">
                                    <p>설명란</p>

                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    </main>
  )
}

export default ProductDetail;
