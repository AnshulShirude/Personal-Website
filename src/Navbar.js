export default function Navbar() {
    const path = window.location.pathname
    return <nav className="nav"> 
        <a href="/" className="site-title">Anshul</a>
        <ul>
            <CustomLink href="/aboutme">About Me</CustomLink>
            <CustomLink href="/clubs">Clubs</CustomLink>
            <CustomLink href="/projects">Projects</CustomLink>
            <CustomLink href="/experience">Experience</CustomLink>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" :  ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}