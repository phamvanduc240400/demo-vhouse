import React, { Component } from 'react'
import './PageHeader.css';

export default class PageHeader extends Component {
  render() {
    let inputcss={
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        border: '1px solid #ddd',
        padding: '0 0.75em',
        fontSize: '.97em',
        boxShadow: 'inset 0 1px 2px rgb(0 0 0 / 10%)',
        transition: 'color .3s,border .3s,background .3s,opacity .3s',
    }
    let all_one={
      fontSize: '30px',
      fontWeight: '500'
    }
    let button_mail={
      width: '100%',
      height: '100%',
      backgroundColor: '#037e26',
      color:'#fff',
      border: 'none',
      marginTop: '10px'
    }
    return (
      <>
      <div className='header1'>
        <div className='header1_1'>
            <div className='logo'><img style={{width:'110px', height:'32px'}} src='../img/logo.png' alt=''></img></div>
            <div className='search'>
                <div className='search_flex'>
                    <input style={inputcss} type={'search'} placeholder="tìm kiếm ảnh, sản phẩm, ưu điểm..."></input>
                    <img style={{width:'8%',height:'100%'}} src='../img/icon_search.JPG' alt=''></img>
                </div>
                <img src='../img/cart.JPG' alt=''></img>
            </div>
        </div>
        <div className='wrap_header2'>
          <ul className='header2'>
            <li className='shopping'>
              <a style={{display: 'flex',alignItems:'center',color:'#000'}} href='@'> <img style={{width:'30px',height:'30px'}} src='../icon/icon1.png' alt=''></img><p style={{margin:'0px 5px',}}>MUA SẮP NỘI THẤT</p></a>
              <ul className='wrap_menu_drop'>
                <li >
                  <div className='content_menu_1'>
                    <div className='menu_1'>
                      <p><b>Phòng tắm</b></p>
                      <p>Bồn cầu</p>
                      <p>Bồn tắm nằm</p>
                      <p>Bàn trang điểm phòng tắm</p>
                      <p>Gương phòng tắm</p>
                      <p>Đồ dùng phòng tắm</p>
                    </div>
                    <div className='menu_2'>
                      <p><b>Bến và bàn ăn</b></p>
                      <p>Bồn cầu</p>
                      <p>Bồn tắm nằm</p>
                      <p>Bàn trang điểm phòng tắm</p>
                      <p>Gương phòng tắm</p>
                      <p>Đồ dùng phòng tắm</p>
                    </div>
                    <div className='menu_3'>
                      <p><b>Làm việc và học tập</b></p>
                      <p>Bồn cầu</p>
                      <p>Bồn tắm nằm</p>
                      <p>Bàn trang điểm phòng tắm</p>
                      <p>Gương phòng tắm</p>
                      <p>Đồ dùng phòng tắm</p>
                    </div>
                    <div className='menu_4'>
                      <p><b>Ngoài trời</b></p>
                      <p>Bồn cầu</p>
                      <p>Bồn tắm nằm</p>
                      <p>Bàn trang điểm phòng tắm</p>
                      <p>Gương phòng tắm</p>
                      <p>Đồ dùng phòng tắm</p>
                    </div>
                  </div>
                  <div className='content_menu_2'>
                    <div className='menu_1'>
                      <p><b>Phòng ngủ</b></p>
                      <p>Bồn cầu</p>
                      <p>Bồn tắm nằm</p>
                      <p>Bàn trang điểm phòng tắm</p>
                      <p>Gương phòng tắm</p>
                      <p>Đồ dùng phòng tắm</p>
                    </div>
                    <div className='menu_2'>
                      <p><b>Phòng khách</b></p>
                      <p>Bồn cầu</p>
                      <p>Bồn tắm nằm</p>
                      <p>Bàn trang điểm phòng tắm</p>
                      <p>Gương phòng tắm</p>
                      <p>Đồ dùng phòng tắm</p>
                    </div>
                    <div className='menu_3'>
                      <p><b>Ánh sáng</b></p>
                      <p>Bồn cầu</p>
                      <p>Bồn tắm nằm</p>
                      <p>Bàn trang điểm phòng tắm</p>
                      <p>Gương phòng tắm</p>
                      <p>Đồ dùng phòng tắm</p>
                    </div>
                    <div className='menu_4'>
                      <p><b>Khác</b></p>
                      <p>Bồn cầu</p>
                      <p>Bồn tắm nằm</p>
                      <p>Bàn trang điểm phòng tắm</p>
                      <p>Gương phòng tắm</p>
                      <p>Đồ dùng phòng tắm</p>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className='design'>
              <a style={{display: 'flex',alignItems:'center',color:'#000'}} href='@'> <img style={{width:'30px',height:'30px'}} src='../icon/icon2.png' alt=''></img><p style={{margin:'0px 5px',}}>Ý TƯỞNG THIẾT KẾ</p></a>
               <ul className='wrap_menu_drop_2'>
                <li >
                  <div className='content_menu_1'>
                    
                  <p><b>NHẬP NỘI DUNG - THÔNG TIN</b></p>
                  </div>
                  
                </li>
              </ul>
            </li>
            <li className='ideal'>
              <a style={{display: 'flex',alignItems:'center',color:'#000'}} href='@'> <img style={{width:'30px',height:'30px'}} src='../icon/icon3.png' alt=''></img><p style={{margin:'0px 5px',}}>THAM GIA CÙNG NHÀ THIẾT KẾ</p></a>
               <ul className='wrap_menu_drop_3'>
                <li >
                  <div className='content_menu_1'>
                    
                  <p><b>NHẬP NỘI DUNG - THÔNG TIN</b></p>
                  </div>
                  
                </li>
              </ul>
            </li>
          </ul>
          
        </div>
      </div>
      
      <div className='wrap_banner'>
          <div className='wrap_content_banner'>
            <div className='content_banner'>
              <div className='content'>
                <div className='content_1'>
                  <p style={all_one}>Tất cả ở một nơi</p>
                  <p>Khám phá sản phẩm, tìm cảm hứng và cùng các</p>
                  <p>nhà thiết kế biến ước mơ bạn thành hiện thưc</p>
                </div>
                <div className='content_2'>
                  <div className='input_email'>
                    <input style={inputcss} type={'search'} placeholder="Your Email (required)"></input>
                  </div>
                  <div className='button_email'>
                    <button style={button_mail}>Đăng ký với email</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
