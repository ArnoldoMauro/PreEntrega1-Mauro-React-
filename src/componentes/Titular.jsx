function Titular() {
    function getUsername () {
        return "Arnoldo Mauro";
    }

    let usuario = getUsername ();

    const styleSaludo = {
        marginTop: "50px",
        fontSize: "30px",
    } 
    return <div style = {styleSaludo}>Bienvenidos al sitio ecommerce de {usuario} !</div>
}

export default Titular;