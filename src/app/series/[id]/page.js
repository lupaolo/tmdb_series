// src/app/series/[id]/page.js
'use client'; // Indica que este é um componente do lado do cliente

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col, Badge, Button } from 'react-bootstrap';
import styles from './SerieDetalhes.module.css'; // Importando um arquivo CSS module para estilos personalizados

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Substitua pelo sua chave API

export default function SerieDetalhes({ params }) {
    const [serie, setSerie] = useState(null);
    const { id } = params;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?language=pt-BR&api_key=${API_KEY}`);
                setSerie(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes da série:', error);
            }
        }

        fetchData();
    }, [id]);

    if (!serie) return <div>Carregando...</div>;

    return (
        <Container className={styles.container}>
            <Row>
                <Col md={4}>
                    <Card className={styles.card}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} />
                        <Card.Body>
                            <Card.Title>{serie.name}</Card.Title>
                            <Card.Text>
                                <Badge bg="primary">{serie.first_air_date}</Badge>
                                <Badge bg="success" className="ms-2">{serie.vote_average} ⭐</Badge>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card className={styles.detailsCard}>
                        <Card.Body>
                            <Card.Title>{serie.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Temporadas: {serie.number_of_seasons} | Episódios: {serie.number_of_episodes}
                            </Card.Subtitle>
                            <Card.Text>
                                <strong>Sinopse:</strong><br />
                                {serie.overview}
                            </Card.Text>
                            <Card.Text>
                                <strong>Gêneros:</strong> {serie.genres.map(genre => genre.name).join(', ')}
                            </Card.Text>
                            <Button variant="primary" href="/">Voltar à lista</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
