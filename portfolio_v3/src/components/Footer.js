import "./Footer.css"
const Footer = () => {

    return(
        <footer>
            <div>
                <div id="footer-tags">
                    <a href="https://www.linkedin.com/in/edward-yuabov/" target="_blank" rel="noopener noreferrer">
                        <img class="footer-linkedin"
                            src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-6xtrjbtc.png" />
                    </a>
                    <a href="https://github.com/EddieYuabov" target="_blank" rel="noopener noreferrer">
                        <img class="footer-github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                    </a>
                </div>
                <p id="text-footer">©2024 Edward Yuabov</p>
            </div>
        </footer>
    )
}
export default Footer