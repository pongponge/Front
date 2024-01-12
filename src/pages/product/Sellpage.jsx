import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@recoils/users';

function SellPage() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const localstorage = window.localStorage;

  useEffect(() => {
    if (!localstorage.user && user.email === '') {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  });
  
  const [originalPrice, setOriginalPrice] = useState(0); 
  const [discountRate, setDiscountRate] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);

  const finalPrice = originalPrice - (originalPrice * discountRate / 100);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handlePriceChange = (e) => {
    setOriginalPrice(parseFloat(e.target.value) || 0);
  };

  const handleDiscountChange = (e) => {
    setDiscountRate(parseFloat(e.target.value) || 0);
  };

    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        defaultValues: {
          sale_price: finalPrice,
        },
        mode: 'onBlur'    
      });

      useEffect(() => {
        setValue('sale_price', finalPrice);
      }, [finalPrice, setValue]);


      const submitEvent = useCallback(async (data) => {
        try {
          const formData = new FormData();

          const files = document.querySelector('input[name="profile"]').files;
          formData.append('data', JSON.stringify(data));

          formData.append('profile', files[0]);

          const resp = await axios({
            method: 'POST',
            url: 'http://localhost:8000/product/addProduct',
            headers: { "Content-type": "multipart/form-data" },
            data: formData
          })
          console.log(resp);
          if (resp.data.status === 500) {
            console.error('상품추가에 실패하였습니다.', resp.data);
            setError('barcode', {
              type: 'manual',
              message: resp.data.message,
            });
    } else {
      navigate('/product');
    }
  } catch (error) {
    console.error(error)
  }
      }, [navigate, setError]);
      const errorEvent = (error) => console.error(error)
  return (
    <>

      <form className="row" style={{ marginTop: '50px' }} onSubmit={handleSubmit(submitEvent, errorEvent)}>
      <div className="container-fluid py-5 mt-5 d-flex justify-content-center">
        <div className="border p-4" style={{ maxWidth: '800px' }}>
          <div className="row g-4">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div style={{ height: '300px', overflow: 'hidden' }}>

                  <img
                    src={previewImage ? previewImage : "img/sale.png"}
                    className="img-fluid mt-3"
                    alt="Product"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />

              </div>

              <form className="mt-3" style={{ width: '100%' }}>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <label htmlFor="profile" className="btn btn-light border p-4" style={{ marginLeft: '32px', width: '83%', border: 'none' }}>
                      상품 이미지 등록
                      <input
                        type="file"
                        id="profile"
                        name="profile"
                        className="form-control-file"
                        style={{ display: 'none' }}
                        accept="image/*"
                        {...register('profile')}
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="jumbotron">
                <div className="container">
                  <h3 className="display-5">할인 상품 등록</h3>
                </div>
              </div>
              <div className="container " style={{ border: 'none' }}>
                <form name="newProduct" className="form-horizontal">
                  <div className="form-group row ">
                    <label htmlFor="name" className="col-sm-4 col-form-label">상품명</label>
                    <div className="col-sm-8  mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        {...register('name', {
                          required: { value: true, message: '제품명을 입력하시오.' },
                        })}
                      /><span style={{ color: 'orange' }}>{errors.name?.message}</span>
                    </div>

                    <label htmlFor="price" className="col-sm-4 col-form-label">정가</label>
                    <div className="col-sm-8 mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        {...register('cost_price', {
                          required: { value: true, message: '정가를 입력하시오.'},
                      })}  value={originalPrice} onChange={handlePriceChange}
                      />
                      <span style={{color: 'orange'}}>{errors.price?.message}</span>
                    </div>
                    <label htmlFor="sale" className="col-sm-4 col-form-label">할인율<span style={{ color: 'orange' }}>{errors.sale?.message}</span></label>
                    <div className="col-sm-8 mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="sale" 
                        name="sale"
                        {...register('sale', {
                          required: { value: true, message: '할인율을 입력하시오.' },
                      })} value={discountRate} onChange={handleDiscountChange}
                      />
                    </div>
                    <label htmlFor='barcode' className="col-sm-4 col-form-label">바코드 번호</label>
                    <div className="col-sm-8 mb-2">
                      <input
                        type="text" 
                        className="form-control" 
                        id="barcode" 
                        name='barcode' 
                        {...register('barcode', {
                          required: { value: true, message: '바코드 번호를 입력하시오.' },
                      })}
                      />
                      <span style={{color: 'orange'}}>{errors.barcode?.message}</span>
                    </div>
                    <label htmlFor='date' className="col-sm-4 col-form-label">유효기간</label>
                    <div className="col-sm-8 mb-2">
                      <input
                       type="date" 
                       className="form-control" 
                       id="date" 
                       name='date'
                       {...register('ex_date', {
                        required: { value: true, message: '유효기간을 입력하시오.' },
                    })}
                      />
                      <span style={{color: 'orange'}}>{errors.ex_date?.message}</span>
                    </div>
                    <label htmlFor="info" className="col-sm-4 col-form-label">설명<span style={{ color: 'orange' }}>{errors.info?.message}</span></label>
                    <div className="col-sm-8 mb-2">
                      <textarea
                        className="form-control" 
                        id="info" 
                        name="info"
                        placeholder="상품설명, 할인이유, 주의사항 등"
                        {...register('info', {
                        })}
                      ></textarea>
                    </div>

                    
                  </div>
                  <label className=" col-form-label">판매가격: {finalPrice} 원<span style={{ color: 'black' }}></span></label>
                    <div className="col-sm-8">
                      <input
                       type="hidden" 
                       className="form-control"
                       {...register('sale_price', { value: finalPrice })}
                      />
                    </div>

                    <label className="col-form-label">닉네임: {user.nickname}<span style={{ color: 'black' }}></span></label>
                    <div className="col-sm-8">
                      <input
                       type="hidden" 
                       {...register('user_id', { value: user.id })}
                      />
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                  <button
                    type="submit"
                    className="btn border-secondary py-3 px-4 text-uppercase text-primary"
                    style={{  marginLeft: '20px', marginBottom:'40px', width: '20%'}}>
                    상품 등록하기
                  </button>
                </div>
            </form>
                    
          </>


  );
}

export default SellPage;