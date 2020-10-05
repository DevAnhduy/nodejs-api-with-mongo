import React from 'react';

const Favorite_Block = props => {
    return(
        <li className="list-group-item">
            <div className="users-list-body">
                <div>
                    <h5>{props.name}</h5>
                    <p>Test</p>
                </div>
                <div className="users-list-action">
                    <div className="action-toggle">
                        <div className="dropdown">
                            <a data-toggle="dropdown"><i className="mdi mdi-dots-horizontal"></i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item">Trò chuyện</a>
                                <a className="dropdown-item">Xóa yêu thích</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

const Favorite_Main = props => {
    return(
        <div id="favorites" className="left-sidebar">
            <div className="left-sidebar-header">
                <form>
                    <h4 className="mb-4">Yêu thích</h4>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn" type="button">
                                <i className="ti-search"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control" placeholder="Tìm kiếm yêu thích .." />
                    </div>
                </form>
            </div>
            <div className="left-sidebar-content ps">
                <ul className="list-group list-group-flush users-list">
                    <Favorite_Block avatar="https://st.depositphotos.com/1796420/4113/v/950/depositphotos_41138921-stock-illustration-vector-icon-of-orange-javascript.jpg" name="Javascript" address="Test" />
                    <Favorite_Block avatar="https://www.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png" name="NodeJS" address="ZXCZXC" />
                    <Favorite_Block avatar="https://www.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png" name="Github" address="Test123" />
                </ul>
            </div>
        </div>
    )
}

export { Favorite_Block, Favorite_Main };