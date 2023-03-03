import React, { Component } from 'react'
import "./ContainerHome.css"

export default class ContainerHome extends Component {
  render() {
    return (
      <div className='container'>
        <div className='text_1'>
            <p><b>Bạn tìm được gì ở Vhouse</b></p>
        </div>
        <div className='wrap_product'>
            <div className='wrap_product_1'>
                <p style={{fontSize: '25px', marginBottom: '14px'}}><b>Mua sắm theo bộ phận</b></p>
                <div className='product'>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>ÁNH SÁNG</div>
                    </div>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>ÁNH SÁNG</div>
                    </div>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>ÁNH SÁNG</div>
                    </div>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>ÁNH SÁNG</div>
                    </div>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>ÁNH SÁNG</div>
                    </div>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>ÁNH SÁNG</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='wrap_product'>
            <div className='wrap_product_1'>
                <p style={{fontSize: '25px', marginBottom: '14px'}}><b>Duyệt ý tưởng theo phòng</b></p>
                <div className='product'>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product2.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>PHÒNG ĂN</div>
                    </div>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product2.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>PHÒNG ĂN</div>
                    </div>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product2.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>PHÒNG ĂN</div>
                    </div>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product2.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>PHÒNG ĂN</div>
                    </div>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product2.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>PHÒNG ĂN</div>
                    </div>
                    <div className='product_1'>
                        <div className='img_product'>
                            <img style={{width:'100%', height:'100%'}} src='../img/product2.jpg' alt=''></img>
                        </div>
                        <div className='product_name'>PHÒNG ĂN</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='wrap_footer'> <p>footer</p></div>
      </div>
    )
  }
}
