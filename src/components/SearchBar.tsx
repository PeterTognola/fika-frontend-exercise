import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
} from 'react-native';
import { MovieDb } from 'moviedb-promise';
import { useDispatch } from 'react-redux';
import {
  searchFilmPending,
  searchFilmSuccess,
  selectFilmsIncludeAdultContent,
} from '../store/filmSlice';
import { useTypedSelector } from '../utils';

interface SearchBarProps {
  client: MovieDb;
}

export default function SearchBar({ client }: SearchBarProps) {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const includeAdultContent = useTypedSelector(selectFilmsIncludeAdultContent);

  useEffect(() => {
    const fetch = async () => {
      dispatch(searchFilmPending({ query: searchQuery }));

      const result = await client.searchMovie({
        query: searchQuery,
        include_adult: includeAdultContent,
      });

      dispatch(searchFilmSuccess({ films: result.results || [] }));
    };

    fetch().then();
  }, [dispatch, includeAdultContent, searchQuery, client]);

  return (
    <>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChange={(s: NativeSyntheticEvent<TextInputChangeEventData>) =>
          setSearchQuery(s.nativeEvent.text)
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    margin: 20,
    marginBottom: 0,
  },
});
