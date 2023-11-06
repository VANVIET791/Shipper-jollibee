import styles from './LoginPage.module.css'
import { Input, Button } from 'antd';
const LoginPage = () => {
  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent:'center', background:'#ccc', height:'100vh'}}>
      <div style={{width:'700px', height:'445px', borderRadius:'6px', background:'#df1010'}}>
        <div className={styles.WapperLoginLeft}>
          <div className={styles.Wapper}>
          <div className={styles.WapperLoginLogo}>
          <img src="https://jollibee.com.vn/static/version1698938216/frontend/Jollibee/default/vi_VN/images/logo.png" title="Logo Jollibee" alt="Logo Jollibee" width="100" height="100"/>
          </div>
          <div style={{textAlign: 'center', marginBottom:'20px'}}>
            <b>VUI LÒNG ĐĂNG NHẬP</b>
          </div>
        <div className={styles.WapperLoginInput}>
          <Input style={{fontSize:'18px'}} placeholder="Email/Số Điện Thoại" />
          <div style={{marginTop:'20px',}}>
          <Input style={{fontSize:'18px'}} placeholder="Mật Khẩu" />
          </div>
          <div className={styles.WapperLoginButton}>
        <Button  type="primary" >ĐĂNG NHẬP</Button>
        </div>
          </div>
        </div>
          </div>
        </div>
        
    </div>
    
  )
}

export default LoginPage