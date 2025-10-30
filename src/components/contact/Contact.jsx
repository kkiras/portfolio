import Form from "./Form"
import SocialLink from "./SocialLink"
export default function Contact() {
    const links = [
        {id: 'github', href: 'https://github.com/kkiras'},
        {id: 'gmail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kkiras.xd@gmail.com'},
        {id: 'upwork', href: 'https://www.upwork.com/freelancers/~0124ef56b2424faeb9?mp_source=share'},
        {id: 'discord', href: 'https://discord.com/users/1328078858376712295'},
    ]
    return (
        <div id="section-contact" style={bg}>
            <h1 style={h1}>
                Contact
            </h1>

            <Form />

            <div style={container}>
                <p style={{margin: 0}}>Thanh Vinh Tran</p>
                <p style={{margin: 0}}>kkiras.xd@gmail.com</p>
                <p style={{margin: 0}}>Ho Chi Minh city, Vietnam</p>
                <p style={{margin: 0}}>+84 903 546 xxx</p>
            </div>

            <div style={socialContainer}>
                {links.map(link => (
                    <SocialLink key={link.id} id={link.id} href={link.href} />
                ))}
            </div>
        </div>
    )
}

const h1 = {
    color: 'white',
    fontSize: '232px',
    letterSpacing: '8px',
    position: 'absolute',
    margin: '0px',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -5%)',

}

const bg = {
    width: '100%',
    height: '100%',
    background: `linear-gradient(
      to bottom,
      /* Top blend: seam -> sub */
      var(--bg-seam) 0,
      var(--bg-sub) var(--section-blend),
      /* Middle: keep sub color */
      var(--bg-sub) calc(100% - var(--section-blend)),
      /* Bottom blend: sub -> main to match Skills */
      var(--bg-main) 100%
    )`,
    position: 'relative'
}

const container = {
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: 'translate(0%, -50%)',
    background: 'transparent',
    color: 'color-mix(in srgb, var(--fg-sub) 70%, transparent)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
}

const socialContainer = {
    position: 'absolute',
    bottom: '0%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    display: 'flex',
    gap: '18px',
}