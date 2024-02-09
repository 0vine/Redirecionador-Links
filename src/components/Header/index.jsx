import imgfoto from "../../assets/Foto.jpg"
import "../Header/Header.scss"


export const Header = () => {
    return (
        <section className="section-header">
            <header className="header-container">
                <img src={imgfoto} alt="Imagem person" />
                <h3>@Vinicius Moreira</h3>
            </header>
        </section>

    )
}