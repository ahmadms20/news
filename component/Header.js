import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Menu Nav
const nav = [
  {nama: 'News', link: '/'}, {nama: 'Bisnis', link: '/Bisnis'}, {nama: 'Politik', link: '/Politik'}, {nama: 'Sport', link: '/Sport'}, {nama: 'Seleb', link: '/Seleb'}, {nama: 'Travel', link: '/Travel'}, {nama: 'Lifestyle', link: '/Lifestyle'},
  {nama: 'Techno', link: '/Techno'}, {nama: 'Otomotif', link: '/Otomotif'}, {nama: 'Health', link: '/Health'}, {nama: 'Education', link: '/Education'}, {nama: 'Food', link: '/Food'}, {nama: 'Videos', link: '/Videos'}, {nama: 'Photos', link: '/Photos'}
]
// Menu Nav

export default function Header(props) {
  const router = useRouter()
  return (
    <div>
      {/* Navbar */}
      <Navbar light expand="md" style={{backgroundColor:"white", borderBottom:"1px solid #21409a"}}>
        <Container>
          <NavbarBrand>
            <a><Image src="/images/Logo.png" width={130} height={45} /></a>
          </NavbarBrand>
          <Nav>
            <p style={{fontSize:"20px", fontWeight:"bold", marginTop:"15px"}}>{props.judul}</p>
          </Nav>
        </Container>
      </Navbar>
      {/* Navbar */}
       
      {/* Iklan */}
      <div className="container" style={{display: "flex", justifyContent: "center", marginTop:"20px"}}>
        <Image src="/images/Iklan.png" width={900} height={100}/>
      </div>
      {/* Iklan */}

      {/* Nav */}
      <Container>
        <Nav style={{backgroundColor:"#21409a", marginTop:"20px"}}>
          {nav.map((item, index)=>{
            return (
            <NavItem>
                {router.pathname === item.link ? 
                <NavLink style={{color:"white"}} className={styles.nav} style={{borderBottom:"2px solid #ff6969"}}>
                  <Link key={index} href={item.link}>
                    <a style={{color:"#ff6969"}}>{item.nama}</a> 
                  </Link>
                </NavLink>
                  : 
                <NavLink style={{color:"white"}} className={styles.nav}>
                  <Link key={index} href={item.link}>
                    <a style={{color:"white"}}>{item.nama}</a>
                  </Link>
                </NavLink>
                }
       
            </NavItem>
            )
          })}
        </Nav>
      </Container>
      {/* Nav */}
    </div>
  )
}