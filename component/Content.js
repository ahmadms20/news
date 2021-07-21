import React, { useState, useEffect } from 'react'
import { Card, CardTitle, CardImgOverlay, Container } from 'reactstrap'
import Grid from '@material-ui/core/Grid'
import styles from '../styles/Content.module.css'
import axios from 'axios'


export default function Headline() {

  const [headline, setHeadline] = useState([]);
  const [utama, setUtama] = useState([]);

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=3021dfefac9042bc95d47ffd0c21424d").then(res=>{
      setHeadline(res.data.articles)
      setUtama(res.data.articles[0])
    }).catch(err => {
       window.location.href="/Error"
    })
  });

  const dataError = [
      {urlToImage: '/images/Error.jpg', title: 'Data not available!'},
      {urlToImage: '/images/Error.jpg', title: 'Data not available!'},
      {urlToImage: '/images/Error.jpg', title: 'Data not available!'},
      {urlToImage: '/images/Error.jpg', title: 'Data not available!'},
      {urlToImage: '/images/Error.jpg', title: 'Data not available!'},
      {urlToImage: '/images/Error.jpg', title: 'Data not available!'}
  ]

  const dataError2 = [
    {urlToImage: '/images/Error.jpg', title: 'Data not available!'},
    {urlToImage: '/images/Error.jpg', title: 'Data not available!'},
    {urlToImage: '/images/Error.jpg', title: 'Data not available!'},
    {urlToImage: '/images/Error.jpg', title: 'Data not available!'}
  ]

  return (
    <div style={{marginTop:"20px", marginBottom:"20px"}}>
      {/* Headline */}
      <Container>
        <Grid container spacing={2}>
          {headline[0] != null ? 
            headline.slice(1, 7).map(item=>{
            return (
              <Grid item xs={6} sm={6} md={4} lg={2}>
                <Card style={{border:"none"}}>
                  <a href="#">
                    {item.urlToImage != null ? 
                       <img src={item.urlToImage} width="100%" height="120px" className={styles.zoom}/>:
                       <img src="/images/Error.jpg" width="100%" height="120px" className={styles.zoom}/>}
                  </a>
                  <a href="#" style={{marginTop:"10px"}} className={styles.content}>{item.title}</a>
                </Card>
              </Grid>
              )
            })
          : 
            dataError.map(item=>{
            return (
              <Grid item xs={6} sm={6} md={4} lg={2}>
                <Card style={{border:"none"}}>
                  <a href="#"><img src={item.urlToImage} width="100%" height="120px" className={styles.zoom}/></a>
                  <a href="#" style={{marginTop:"10px"}} className={styles.content}>{item.title}</a>
                </Card>
              </Grid>
              )
            })
          }
        </Grid>
      </Container>
      {/* Headline */}

      {/* Utama */}
      <Container style={{marginTop:"20px"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            {utama.length != 0 ? 
              <Card inverse style={{border:"none"}}>
                {utama.urlToImage != null ? 
                  <img src={utama.urlToImage} width="100%" height="470px" style={{borderRadius:"10px"}}/>:
                  <img src="/images/Error.jpg" width="100%" height="470px" style={{borderRadius:"10px"}}/>}
                <CardImgOverlay>
                  <CardTitle tag="h5" style={{position:"absolute", bottom:"0"}}><a href="#" className={styles.utama}>{utama.title}</a></CardTitle>
                </CardImgOverlay>
              </Card>
            : 
              <Card inverse style={{border:"none"}}>
                <img src="/images/Error.jpg" width="100%" height="470px" style={{borderRadius:"10px"}}/>
                <CardImgOverlay>
                  <CardTitle tag="h5" style={{position:"absolute", bottom:"0"}}><a href="#" className={styles.utama}>Data not available!</a></CardTitle>
                </CardImgOverlay>
              </Card>
            }
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            {headline[0] != null ? 
              headline.slice(8, 14).map(item=>{
                return (
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={3} md={2} lg={4}>
                    <a href="#">
                      {item.urlToImage != null ? 
                        <img src={item.urlToImage} width="100%" height="70px" className={styles.zoom}/>:
                        <img src="/images/Error.jpg" width="100%" height="70px" className={styles.zoom}/>}
                    </a>
                  </Grid>
                  <Grid item xs={8} sm={9} md={10} lg={8}>
                    <a href="#" className={styles.content}>{item.title}</a>
                  </Grid>
                </Grid>
                )
              })
            : 
              dataError.map(item=>{
                return (
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={3} md={2} lg={4}>
                    <a href="#"><img src={item.urlToImage} width="100%" height="70px" className={styles.zoom}/></a>
                  </Grid>
                  <Grid item xs={8} sm={9} md={10} lg={8}>
                    <a href="#" className={styles.content}>{item.title}</a>
                  </Grid>
                </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Container>
      {/* Utama */}

      {/* Lainnya */}
      <Container style={{marginTop:"10px"}}>
        <Grid container spacing={2}>
          {headline[0] != null ? 
            headline.slice(15, 19).map(item=>{
              return (
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={3} md={4} lg={3}>
                    <a href="#">
                      {item.urlToImage != null ? 
                        <img src={item.urlToImage} width="100%" height="70px" className={styles.zoom}/>:
                        <img src="/images/Error.jpg" width="100%" height="70px" className={styles.zoom}/>}
                    </a>
                  </Grid>
                  <Grid item xs={8} sm={9} md={8} lg={9}>
                    <a href="#" style={{fontWeight:"bold", textAlign:"justify"}} className={styles.content}>{item.title}</a>
                  </Grid>
                </Grid>
              </Grid>
              )
            })
          : 
            dataError2.map(item=>{
              return (
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={3} md={4} lg={3}>
                    <a href="#"><img src={item.urlToImage} width="100%" height="70px" className={styles.zoom}/></a>
                  </Grid>
                  <Grid item xs={8} sm={9} md={8} lg={9}>
                    <a href="#" style={{fontWeight:"bold", textAlign:"justify"}} className={styles.content}>{item.title}</a>
                  </Grid>
                </Grid>
              </Grid>
              )
            })
          }
        </Grid>
      </Container>
      {/* Lainnya */}
    </div>
  )
}