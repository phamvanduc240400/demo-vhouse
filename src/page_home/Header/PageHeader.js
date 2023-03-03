import React, { Component } from 'react'
import './PageHeader.css';

export default class PageHeader extends Component {
  render() {
    let inputcss={
        width: '90%',
        height: '100%',
        boxSizing: 'border-box',
        border: '1px solid #ddd',
        padding: '0 0.75em',
        fontSize: '.97em',
        boxShadow: 'inset 0 1px 2px rgb(0 0 0 / 10%)',
        transition: 'color .3s,border .3s,background .3s,opacity .3s',
    }
    return (
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
      </div>
    )
  }
}
