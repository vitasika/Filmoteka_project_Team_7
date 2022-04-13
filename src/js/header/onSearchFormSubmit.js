let searchQueryValue = '';

export default function onSearchFormSubmit(e) {
  e.preventDefault();

  searchQueryValue = e.target.elements.searchQuery.value.trim();

  if (searchQueryValue === '') return;

  // fetch()
}
