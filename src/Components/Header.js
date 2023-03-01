import React from 'react'

export default function Header() {
    return (
    <>
        <div className='header__row1'>
            <div className='header__logo col-2'>
                <img src='./Assets/images/logo.jpg'/>
            </div>

            <div className='header__reSearch col-8'>
                <input placeholder='Mời nhập tên sách...'/>
                <button>Tìm sách</button>
            </div>

            <div className='header__login col-2'>
                <i class="fa-solid fa-user"></i>
            </div>

            <div className='header__menu_mobile col-2'>

            </div>
        </div>
    </>
    )
}
