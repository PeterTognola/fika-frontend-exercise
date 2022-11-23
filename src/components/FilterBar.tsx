import { Button } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MovieDb, MovieResultsResponse } from 'moviedb-promise';
import { useTypedSelector } from '../utils';
import {
  searchFilmPending,
  searchFilmSuccess,
  selectFilmsSearchQuery,
  toggleAdultContent,
} from '../store/filmSlice';

interface FilterBarProps {
  client: MovieDb;
}

export default function FilterBar({ client }: FilterBarProps) {
  const dispatch = useDispatch();

  const [includeAdultContent, setIncludeAdultContent] = useState(false);
  const searchQuery = useTypedSelector(selectFilmsSearchQuery);

  useEffect(() => {
    const fetch = async () => {
      dispatch(toggleAdultContent(includeAdultContent));
      dispatch(searchFilmPending({}));

      let result: MovieResultsResponse;

      if (searchQuery) {
        result = await client.searchMovie({
          query: searchQuery,
          include_adult: includeAdultContent,
        });
      } else {
        // Discover and initial discover
        // is handled here. Nothing fancy,
        // will just fire off at the beginning.
        result = await client.discoverMovie({
          include_adult: includeAdultContent,
        });
      }

      dispatch(searchFilmSuccess({ films: result.results || [] }));
    };

    fetch().then();
  }, [client, dispatch, includeAdultContent, searchQuery]);

  return (
    <ScrollView style={styles.filterContainer} horizontal>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => setIncludeAdultContent(!includeAdultContent)}
      >
        {includeAdultContent ? 'Hide Adult Content' : 'Show Adult Content'}
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexWrap: 'wrap',
    flexGrow: 0,
    padding: 20,
  },
});
