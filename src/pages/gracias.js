import { Link } from 'gatsby'
import React from 'react'
import {SEO} from "../components"
import {Button, Purchase} from "../styles/components"


export default function gracias() {
    return (
        <div>
            <SEO title="Compra exitosa" />
            <Purchase>
                <h2>Compra exitosa</h2>
                <p>Espero que disfrutes tu nuevo outfit, usalo cuando quieras y para lo que quieras</p>
                <small>Te sugerimos usarla cuando estes codeando</small>
                <small>Hayppy coding!!!</small>
                <span role='img' aria-label='emoji'>❤️</span>
                <Link to='/'>
                    <Button>Volver al catalogo</Button>
                </Link>
            </Purchase>
            
        </div>
    )
}
