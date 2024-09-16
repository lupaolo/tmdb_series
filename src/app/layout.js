// src/app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './globals.css'; // Se você tiver um arquivo global de estilos
import BarraNavegacao from './BarraNavegacao'; // Importando o componente BarraNavegacao

export const metadata = {
    title: 'Minha Aplicação',
    description: 'Descrição da minha aplicação.',
};

const RootLayout = ({ children }) => {
    return (
        <html lang="pt-BR">
            <body>
                <header>
                    <BarraNavegacao /> {/* Incluindo a barra de navegação */}
                </header>
                <main>{children}</main>
                <footer>
                    <p>&copy; 2024 Minha Aplicação</p>
                </footer>
            </body>
        </html>
    );
};

export default RootLayout;
