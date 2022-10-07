import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header>
          <div className={styles.logo}>
            <Image src={'/boldo.png'} width={23} height={32} />
            <span className={styles.logoName}>Boldo</span>
          </div>

          <nav>
            <Link href={'#'}>
              <a>Product</a>
            </Link>
            
            <Link href={'#'}>
              <a>Services</a>
            </Link>

            <Link href={'#'}>
              <a>About</a>
            </Link>

            <Link href={'#'}>
              <a className={styles.login}>Login</a>
            </Link>
          </nav>
        </header>
        
        <img className={'ellipse'} src={'/ellipse.svg'} width={650} height={600} />

        <section className={styles.hero}>
          <div className={styles.ctaBlock}>
            <div>
              <h1 className={styles.heroH1}>Save time by building  fast with Boldo Template </h1> 
              <p className={styles.heroParagraph}>
                Funding handshake buyer business-to-business metrics iPad partnership. 
                First mover advantage innovator success deployment non-disclosure.
              </p>
            </div>

            <div>
              <button className={'cta-buy-template'}>Buy template</button>
              <button className={'cta-explore'}>Explore</button>
            </div>
          </div>

          <div className={styles.heroGraphics}>
            <Image src={'/chart1.png'} width={493} height={400} />
            <div className={styles.heroGraphics2}>
              <div className='chart-2-container'>
                <img className='hero-img-dots' src='/dots.png' />
                <img src={'/chart2.png'} width={139} height={106} />
              </div>
              <img src={'/chart3.png'} width={261.96} height={165.34} />
            </div>
          </div>
        </section>

        <section className='logo-wall'>
          <div style={{display: 'flex'}}>
            <img src={'/boldo2.png'} width={30} height={35} /> <h2>Boldo</h2>
          </div>
          <div style={{display: 'flex'}}>
            <img src={'/presto.png'} width={35} height={35}/> <h2>Presto</h2>
          </div>
          <div style={{display: 'flex'}}>
            <img src={'/boldo2.png'} width={30} height={35} /> <h2>Boldo</h2>
          </div>
          <div style={{display: 'flex'}}>
            <img src={'/presto.png'} width={35} height={35}/> <h2>Presto</h2>
          </div>
          <div style={{display: 'flex'}}>
            <img src={'/boldo2.png'} width={30} height={35} /> <h2>Boldo</h2>
          </div>
          <div style={{display: 'flex'}}>
            <img src={'/presto.png'} width={35} height={35}/> <h2>Presto</h2>
          </div>
          <div style={{display: 'flex'}}>
            <img src={'/boldo2.png'} width={30} height={35} /> <h2>Boldo</h2>
          </div>
          <div style={{display: 'flex'}}>
            <img src={'/presto.png'} width={35} height={35}/> <h2>Presto</h2>
          </div>
          <div style={{display: 'flex'}}>
            <img src={'/boldo2.png'} width={30} height={35} /> <h2>Boldo</h2>
          </div>
          <div style={{display: 'flex'}}>
            <img src={'/presto.png'} width={35} height={35}/> <h2>Presto</h2>
          </div>
        </section>
      </main>


      <main className={styles.services}>
        <section className={styles.service_heading}>
          <p style={{fontWeight: '700'}}>Our Service</p>
          <h1 className={styles.service_heading_title}>
            Handshake infographic mass market crowdfunding iteration
          </h1>
        </section>

        <section className={styles.service_row}>
          <div className={styles.service_card}>
            <img src='/service-img1.png' width={300} />
            <h5>Cool feature title</h5>
            <p>Learning curve network effects return on investment.</p>
            <button className={styles.service_card_button}>
              Explore page <span style={{fontSize: '30px', color: 'red'}}>&#8594;</span>
            </button>
          </div>

          <div className={styles.service_card}>
            <img src='/service-img2.png' width={300} />
            <h5>Even cooler feature</h5>
            <p>Learning curve network effects return on investment.</p>
            <button className={styles.service_card_button}>
              Explore page <span style={{fontSize: '30px', color: 'red'}}>&#8594;</span>
            </button>
          </div>

          <div className={styles.service_card}>
            <img src='/service-img3.png' width={300} />
            <h5>Cool feature title</h5>
            <p>Learning curve network effects return on investment.</p>
            <button className={styles.service_card_button}>
              Explore page <span style={{fontSize: '30px', color: 'red'}}>&#8594;</span>
            </button>
          </div>
        </section>

        <section className={styles.service_row2}>
          <div className={styles.service_row2_left}>
            <img src='/man.png' />
            <img className={styles.white_chart} src='/white-chart.png' />
          </div>

          <div className={styles.service_row2_right}>
            <h1>We connect our customers with the best, and help them keep up-and stay open.</h1>
            <p style={{display: 'flex'}}>
              <span className={styles.service_check_bg}>
                <img src='/check.svg' width={25}/>
              </span>
              We connect our customers with the best.
            </p>
            
            <p style={{display: 'flex'}}>
              <span className={styles.service_check_bg}>
                <img src='/check.svg' width={25}/>
              </span>Advisor success customer launch party.
            </p>
            
            <p style={{display: 'flex'}}>
              <span className={styles.service_check_bg}>
                <img src='/check.svg' width={25}/>
              </span>Business-to-consumer long tail.
            </p>

            <button className={styles.service_row2_right_btn}>
              Start now
            </button>

          </div>
        </section>

        <section className={styles.service_row3}>
          <div className={styles.service_row3_left}>
            <h1 style={{lineHeight: '40px'}}>We connect our customers with the best, and help them keep up-and stay open.</h1>

            <div style={{marginTop: '20px'}}>
              <p style={{
                padding: '12px 15px', 
                background: '#0A2640', 
                color: 'white',
                display: 'flex',
                marginBottom: '20px'
              }}>
                <img style={{marginRight: '7px'}} src='/leaf.png' />Advisor success customer launch party.
              </p>

              <p style={{
                padding: '12px 15px',
                display: 'flex',
                boxShadow: '3px 3px 5px rgba(128, 128, 128, 0.37)',
                background: '#ffffff',
                marginBottom: '20px'
              }}>
                <img style={{marginRight: '7px'}} src='/eye.png' />Advisor success customer launch party.
              </p>

              <p style={{
                padding: '12px 15px',
                background: '#ffffff',
                boxShadow: '3px 3px 5px rgba(128, 128, 128, 0.37)',
                display: 'flex',
                marginBottom: '20px'
              }}>
                <img style={{marginRight: '7px'}} src='/sun.png' />Business-to-consumer long tail.
              </p>
            </div>
          </div>

          <div className={styles.service_row3_right}>
            <img src='/woman.png' />
            <img className={styles.white_pie_chart} src='/pie-chart.png' />
          </div>
        </section>
      </main>

      <main className={styles.testimonials}>
        <div style={{
          maxWidth: '1400px', 
          margin: 'auto',
          display: 'grid',
          gridTemplateRows: '30% 70%'
          }}>
          <section className={styles.testimonials_heading}>
            <h1 style={{marginRight: 'auto', fontSize: '48px', lineHeight: '72px', maxWidth: '716px'}}>
              An enterprise template to ramp up your company website
            </h1>

            <div>
              <img className={'arrow'} src={'/left-arrow.svg'} width={60} height={60} />
              <img className={'arrow'} src={'/right-arrow.svg'} width={60} height={60} />
            </div>
          </section>

          <section className={styles.comments}>
            <div className={styles.comments_card}>
              <p style={{maxWidth: '220px'}}>
                “Buyer buzz partner network disruptive non-disclosure agreement business”
              </p>
              <div className={styles.author}>
                <img className={styles.author_img} src='/test1.png'/>
                <span>
                  <p style={{fontWeight: '700'}}>Albus Dumbledore</p>
                  <p>Manager @ Hogwarts</p>
                </span>
              </div>
            </div>

            <div className={styles.comments_card}>
              <p style={{maxWidth: '220px'}}>
                “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”
              </p>
              <div className={styles.author}>
                <img className={styles.author_img} src='/test2.png'/>
                <span>
                  <p style={{fontWeight: '700'}}>Severus Snape</p>
                  <p>Manager @ Slytherin</p>
                </span>
              </div>
            </div>

            <div className={styles.comments_card}>
              <p style={{width: '220px'}}>
                “Release facebook responsive web design business model canvas seed money monetization.”
              </p>
              <div className={styles.author}>
                <img className={styles.author_img} src='/test3.png'/>
                <span>
                  <p style={{fontWeight: '700'}}>Harry Porter</p>
                  <p>Team Leader @ Gryffindor</p>
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <main className={styles.below_testimonials}>
        <div style={{textAlign: 'center'}}>
          <Image src={'/office.png'} width={1100} height={400} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '30px'
        }}>
          <h1 style={{
            maxWidth: '500px',
            lineHeight: '47px'
          }}>
            We connect our customers with the best, and help them keep up-and stay open.
          </h1>

          <div style={{
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <p className={styles.faq}>
              We connect our customers with the best?
              <span className={styles.service_check_bg2}>
                <img src='/chevron-down.svg' width={22}/>
              </span>
            </p>
            <p className={styles.faq}>
              Android research & development rockstar?
              <span className={styles.service_check_bg2}>
                <img src='/chevron-down.svg' width={22}/>
              </span>
            </p>
          </div>
        </div>
      </main>

      <main className={styles.blog}>
        <section className={styles.blog_heading}>
          <p style={{color: 'grey'}}>Our blog</p>
          <h1 className={styles.blog_heading_title}>Value proposition accelerator product management venture</h1>
        </section>

        <section className={styles.blog_cards}>
          <div className={styles.blog_card}>
            <Image src={'/blog1.png'} width={300} height={209} />

            <div>
              <div>
                <p style={{margin: '15px 0'}}>
                  <span style={{color: '#0A2640',fontWeight: '700',marginRight: '13px'}}>Category</span> 
                  <span style={{color: 'grey', opacity: '0.7'}}>October 22, 2022</span>
                </p>

                <p style={{margin: '15px 0'}}>
                  Pitch termsheet backing validation focus release.
                </p>
              </div>

              <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={'/author1.png'} width={32} height={32} />
                <span style={{marginLeft: '10px'}}>Chandler Bing</span>
              </div>
            </div>
          </div>

          <div className={styles.blog_card}>
            <Image src={'/blog2.png'} width={300} height={209} />

            <div>
              <div>
                <p style={{margin: '15px 0'}}>
                  <span style={{color: '#0A2640',fontWeight: '700',marginRight: '13px'}}>Category</span> 
                  <span style={{color: 'grey', opacity: '0.7'}}>October 22, 2022</span>
                </p>

                <p style={{margin: '15px 0'}}>
                  Pitch termsheet backing validation focus release.
                </p>
              </div>

              <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={'/author2.png'} width={32} height={32} />
                <span style={{marginLeft: '10px'}}>Monica Geller</span>
              </div>
            </div>
          </div>

          <div className={styles.blog_card}>
            <Image src={'/blog3.png'} width={300} height={209} />

            <div>
              <div>
                <p style={{margin: '15px 0'}}>
                  <span style={{color: '#0A2640',fontWeight: '700',marginRight: '13px'}}>Category</span> 
                  <span style={{color: 'grey', opacity: '0.7'}}>October 22, 2022</span>
                </p>

                <p style={{margin: '15px 0'}}>
                  Pitch termsheet backing validation focus release.
                </p>
              </div>

              <div style={{display: 'flex', alignItems: 'center'}}>
                <Image src={'/author3.png'} width={32} height={32} />
                <span style={{marginLeft: '10px'}}>Rachel Green</span>
              </div>
            </div>
          </div>
        </section>

        <button className={styles.blog_btn}>Load more</button>
      </main>
    </div>
  )
}
