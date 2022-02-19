const YEAR = new Date().getFullYear()
const CUSDIS_APP_ID = 'bd47ddfd-ea05-4050-a3f4-ef71bd53be22'
export default {
  readMore: '↗',
  darkMode: true,
  cusdis: {
    appId: CUSDIS_APP_ID,
    lang: 'zh-cn'
  },
  navs: [
    {
      url: 'https://imondo.cn',
      name: 'Home'
    }
  ],
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Mondo.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
