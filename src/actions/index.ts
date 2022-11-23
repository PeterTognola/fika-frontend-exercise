export const SEARCH_RESULTS = 'SEARCH_RESULTS';

export function searchResults(results: any) {
  return {
    type: SEARCH_RESULTS,
    results,
  };
}
