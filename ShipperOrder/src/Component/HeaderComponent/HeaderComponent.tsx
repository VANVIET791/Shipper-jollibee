import { Row, Col, } from "antd"
import styles from './HeaderComponent.module.css'
import Search from "antd/es/input/Search"
import { UserOutlined, CaretDownOutlined, } from '@ant-design/icons';
const HeaderComponent = () => {
    return (
        <div>
            <Row className={styles.WapperHeader}>
                <Col span={6}><img src="https://jollibee.com.vn/static/version1698938216/frontend/Jollibee/default/vi_VN/images/logo.png" title="Logo Jollibee" alt="Logo Jollibee" width="100" height="100" /></Col>
                <Col span={12}>
                    <div className={styles.WapperHeaderSearch}>
                    <Search
                        placeholder="Nhập Mã Đơn Hàng"
                        allowClear
                        enterButton="Search"
                        size="large"
                    //   onSearch={onSearch}
                    />
                    </div>
                </Col>
                <Col span={6} >
                    <div className={styles.WapperAccout}>
                        <div>
                            <UserOutlined style={{fontSize: '30px'}}/>
                        </div>
                        <div >
                            <span style={{fontSize: '20px'}}>Đăng Nhập</span>
                            <div>
                                <span style={{fontSize: '20px'}}>Tài Khoản</span>
                                <CaretDownOutlined />
                            </div>
                        </div>
                        </div>
                        {/* <div>
                        <ShoppingCartOutlined />
                        </div> */}
                </Col>
                
            </Row>
        </div>
    )
}

export default HeaderComponent