import React  from 'react'
import Nav from '../components/Nav'

function Layout( {children }) {
    return (
        <React.Fragment>
            <div className="site-wrap">
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <Nav/>
            <main className="main-content">
                <div className="container-fluid photos">
                    {children }
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center py-5">
                            <p>
                            Copyright &copy;
                            
                            All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </main>
           
          </div>
            
        </React.Fragment>
    )
}



export default Layout
