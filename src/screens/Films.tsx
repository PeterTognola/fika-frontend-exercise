import React, { useEffect, useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator, Divider, Paragraph } from 'react-native-paper';
import { MovieDb } from 'moviedb-promise';
import { useDispatch } from 'react-redux';
import FilmItem, { FilmItemProps } from '../components/FilmItem';
import SearchBar from '../components/SearchBar';
import {
  fetchFilmGenres,
  selectFilmGenres,
  selectFilms,
  selectFilmsIsLoading,
} from '../store/filmSlice';
import { useTypedSelector } from '../utils';
import FilterBar from '../components/FilterBar';
import { FILM_API_KEY, GENERIC_ERROR } from '../constants';

export const Films = () => {
  const dispatch = useDispatch();
  const films = useTypedSelector(selectFilms);
  const genres = useTypedSelector(selectFilmGenres);
  const isLoading = useTypedSelector(selectFilmsIsLoading);

  // todo ioc
  const client = useMemo(() => new MovieDb(FILM_API_KEY), []);

  // Dispatch genres initially.
  useEffect(() => {
    const fetch = async () => {
      dispatch(fetchFilmGenres());
      const result = await client.genreMovieList();

      if (result.genres) dispatch(fetchFilmGenres({ genres: result.genres }));
      else
        dispatch(
          fetchFilmGenres({
            message: GENERIC_ERROR,
          }),
        );
    };

    fetch().then();
  }, [dispatch, client]);

  return (
    <>
      <SearchBar client={client} />
      <FilterBar client={client} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Divider />
      {isLoading && <ActivityIndicator style={styles.activityIndicator} />}
      {!isLoading && films.length > 0 ? (
        <FlatList
          style={styles.filmListContainer}
          data={films.map(
            x =>
              ({
                prop: {
                  title: x.title,
                  posterPath: x.poster_path,
                  genres: [],
                },
                genreIds: x.genre_ids,
              } as { prop: FilmItemProps; genreIds: number[] }),
          )}
          renderItem={d => (
            <FilmItem
              {...d.item.prop}
              genres={genres.filter(x => d.item.genreIds.includes(x.id || -1))}
            />
          )}
        />
      ) : (
        <Paragraph style={styles.notFoundText}>No films found!</Paragraph>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  filmListContainer: {
    flex: 1,
    padding: 20,
  },
  activityIndicator: {
    margin: 20,
  },
  notFoundText: {
    padding: 20,
    paddingTop: 0,
    textAlign: 'center',
  },
});
