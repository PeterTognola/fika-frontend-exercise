import React from 'react';
import { Genre } from 'moviedb-promise/dist/types';
import { Card } from 'react-native-paper';
import { ViewProps } from 'react-native';

export interface FilmItemProps extends ViewProps {
  title: string;
  posterPath: string;
  genres: Genre[];
}

export default function FilmItem({ genres, title, posterPath }: FilmItemProps) {
  // Merge genres together.
  const filmGenres = (g: Genre[]): string => {
    if (g && g.length > 1) return g.map(x => x.name).join(', ');

    return 'Unknown';
  };

  return (
    <>
      <Card style={{ marginBottom: 20 }}>
        <Card.Cover
          source={{ uri: `https://image.tmdb.org/t/p/w500/${posterPath}` }}
        />
        <Card.Title title={title} subtitle={filmGenres(genres)} />
      </Card>
    </>
  );
}
