import "./Links.scss"


export const Link = ({ link }) => {
    return (
        <section className="section-link">
            <ul className="ul-list">
                {link.map(link => {
                    return (
                        <li key={link.id} className="link-objetic">
                            <a href={link.site} target="_blank">{link.name}</a>
                            <img src={link.Logo} alt="Logo imagem" />
                        </li>
                    )
                })}
            </ul>
        </section>

    )
}