import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

function Nav() {
    const [routePath, setRoutePath] = React.useState('')
    const router = useRouter()
    React.useEffect(function() {
      setRoutePath(router.pathname)
    })
    return (
        <header
        className="header-bar d-flex d-lg-block align-items-center"
        data-aos="fade-left"
      >
        <div className="site-logo">
        <Link href="/" >
          <a >Nexgal</a>
          </Link>
        </div>
        <div
          className="d-inline-block d-xl-none ml-md-0 ml-auto py-3"
          style={{position: 'relative', top: '3px'}}
        >
            <Link href="/" >
            <a
            
            className="site-menu-toggle js-menu-toggle text-white"
            ><span className="icon-menu h3"></span>Menu</a>
            </Link>
         
        </div>
        <div className="main-menu">
          <ul className="js-clone-nav">
              {/* active */}
            <li className={ routePath == '/' ? 'active': '' }>
                <Link  href="/" >
                <a>Home</a>
                </Link>
                
                
                </li>
            <li className={ routePath == '/photos' ? 'active': '' }> <Link  href="/photos" >
                Photos
                </Link></li>
            <li className={ routePath == '/bio' ? 'active': '' }> <Link  href="/bio" >
                <a>Bio</a>
                </Link></li>
            <li className={ routePath == '/blog' ? 'active': '' }> <Link  href="/blog" >
                <a>blog</a>
                </Link></li>
            <li className={ routePath == '/contact' ? 'active': '' }> <Link  href="/contact" >
                <a>Contact</a>
                </Link></li>
          </ul>
          <ul className="social js-clone-nav">
            <li>
              <a href="index.html#"><span className="icon-facebook"></span></a>
            </li>
            <li>
              <a href="index.html#"><span className="icon-twitter"></span></a>
            </li>
            <li>
              <a href="index.html#"><span className="icon-instagram"></span></a>
            </li>
          </ul>
        </div>
      </header>
    )
}






export default Nav
