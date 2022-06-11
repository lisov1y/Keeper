
export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p>Mikhail Stupnikov {year}</p>
        </footer>
    );
}