import Link from 'next/link'
import Image from 'next/image'

const TelegramIcon = () => (
  <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 4.5L2.5 11.5L11.5 14.5M21.5 4.5L15.5 21.5L11.5 14.5M21.5 4.5L11.5 14.5" />
  </svg>
)

const DiscordIcon = () => (
  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
  </svg>
)

const WebsiteIcon = () => (
  <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const DocsIcon = () => (
  <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

export default function Home() {
  return (
    <main className="content">
      <div className="profile-container">
        <div className="header">
          <h1 className="title">Luksoverse</h1>
          <p className="subtitle">Your Gateway to the LUKSO Ecosystem</p>
        </div>

        <div className="columns-container">
          <div className="column">
            <h2 className="column-title">Luksoverse</h2>
            <div className="social-links">
              <a href="https://profile.link/luksoverse@9700" className="social-link up">
                <span className="icon">👤</span>
                Universal Profile
              </a>

              <a href="https://docs.luksoverse.io" className="social-link docs">
                <span className="icon"><DocsIcon /></span>
                Community Docs
              </a>
              
              <a href="https://twitter.com/luksoverse_io" className="social-link twitter">
                <span className="icon">𝕏</span>
                Twitter
              </a>
              
              <a href="https://t.me/luksoverse" className="social-link telegram">
                <span className="icon"><TelegramIcon /></span>
                Community
              </a>
              
              <a href="https://t.me/luksoversetrading" className="social-link telegram">
                <span className="icon"><TelegramIcon /></span>
                Trading
              </a>

              <a href="https://discord.gg/xzyHcXxvVs" className="social-link discord">
                <span className="icon"><DiscordIcon /></span>
                Discord
              </a>
            </div>
          </div>

          <div className="column">
            <h2 className="column-title">LUKSO</h2>
            <div className="social-links">
              <a href="https://lukso.network" className="social-link website">
                <span className="icon"><WebsiteIcon /></span>
                Website
              </a>

              <a href="https://docs.lukso.tech" className="social-link docs">
                <span className="icon"><DocsIcon /></span>
                Documentation
              </a>

              <a href="https://twitter.com/lukso_io" className="social-link twitter">
                <span className="icon">𝕏</span>
                Twitter
              </a>

              <a href="https://t.me/LUKSO" className="social-link telegram">
                <span className="icon"><TelegramIcon /></span>
                Official Channel
              </a>
              
              <a href="https://t.me/LUKSO_News" className="social-link telegram">
                <span className="icon"><TelegramIcon /></span>
                Announcements
              </a>

              <a href="https://discord.gg/lukso" className="social-link discord">
                <span className="icon"><DiscordIcon /></span>
                Discord
              </a>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>Join us in building the future of blockchain</p>
        </footer>
      </div>
    </main>
  )
}
