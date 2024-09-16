'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import styles from '../styles/populares.module.css'

const PopularSeriesPage = () => {
    const [tvSeries, setTvSeries] = useState([]);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const getPopularSeries = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/tv/airing_today?language=pt-BR', {
                params: {
                    language: 'pt-BR',
                    api_key: apiKey,
                },
            });
            setTvSeries(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Ocorreu um erro:', error);
        }
    };

    useEffect(() => {
        getPopularSeries();
    }, []);

    const router = useRouter();

    const handleViewDetails = (id) => {
        router.push(`/series/${id}`);
    };

    return (
        <Container>
            <h1 className="my-4">Séries Na TV hoje</h1>
            <div className={styles.cardContainer}>
                {tvSeries.map((series) => (
                    <Card key={series.id} className={styles.card}>
                        <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                            alt={series.name}
                            className={styles.cardImage}
                        />
                        <Card.Body className={styles.cardBody}>
                            <Card.Title className={styles.cardTitle}>{series.name}</Card.Title>
                            <Card.Text className={styles.cardText}>
                                <strong>Lançamento:</strong> {series.first_air_date}
                            </Card.Text>
                            <Card.Text className={styles.cardText}>
                                <strong>Nota:</strong> {series.vote_average}
                            </Card.Text>
                            <Button
                                variant="primary"
                                className={styles.button} // Aplicar a classe do botão
                                onClick={() => handleViewDetails(series.id)}
                            >
                                Ver Detalhes
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default PopularSeriesPage;