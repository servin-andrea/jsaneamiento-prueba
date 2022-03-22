import DesktopNavBar from './navbar/desktopNavBar'
import DesktopMenu from './menu/desktopMenu'
import MobileMenu from './menu/mobileMenu'
import MobileNavBar from './navbar/mobileNavBar.jsx'
import { useState } from 'react'

const AdminLayout = ({children}) => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleShowMenuChange = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <>
            <div className="position-absolute h-100 w-100">
                <div className='nav-bar'>
                    <div className='nav-bar__desktop'>
                        <DesktopNavBar />
                    </div>
                    <div className='nav-bar__mobile'>
                        <MobileNavBar onShowMenuChange={handleShowMenuChange}/>
                    </div>
                </div>
                <div className='body'>
                    <div className='menu__desktop'>
                        <DesktopMenu />
                    </div>
                    <div className={showMobileMenu? 'fake_background d-block' : 'fake_background'} onClick={() => handleShowMenuChange()}/>
                    <div className={showMobileMenu? 'menu__mobile start-0' : 'menu__mobile'}>
                        <MobileMenu isMenuOpen={showMobileMenu} onShowMenuChange={handleShowMenuChange}/>
                    </div>
                    <div className='content'>
                        { children }
                    </div>
                </div>
            </div>
            <style jsx>{`
                .nav-bar {
                    background: #8BF;
                    position: relative;
                    height: 3em;
                    z-index: 30;
                }
                    .nav-bar__mobile {
                        display: none;
                        width: 100%;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0 0.5em;
                    }
                .body {
                    display: flex;
                    position: relative;
                    height: calc(100% - 3em);
                }         
                    .fake_background {
                        display: none;
                        position: absolute;
                        height: 100vh;
                        width: 100vw;
                        background: rgba(180, 180, 180, .5);
                        z-index: 10;
                    }
                    .menu__mobile {
                        display: none;
                        position: absolute;
                        background: #8BF;
                        height: 100vh;
                        width: 80vw;
                        left: -100vw;
                        z-index: 20;
                        transition: all .7s;
                    }       
                    .menu__desktop {
                        background: #fff;
                        height: 100%;
                        width: 20%;
                    }
                    .content {
                        background: #eee;
                        height: 100%;
                        flex-grow: 1;
                    }
                @media only screen and (max-width: 767px) {
                    .menu__desktop {
                        display: none;
                    }
                    .menu__mobile {
                        display: block;
                    }
                    .nav-bar__desktop {
                        display: none;
                    }
                    .nav-bar__mobile {
                        display: flex;
                    }
                }
            `}</style>
        </>
    )

}

export default AdminLayout