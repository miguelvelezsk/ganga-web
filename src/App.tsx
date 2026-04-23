import NavBar from './components/shared/NavBar'
import SearchBar from './components/shared/SearchBar'
import CardGrid from './components/results/CardGrid';
import SkeletonGrid from './components/results/SkeletonGrid';
import ErrorMessage from './components/results/ErrorMessage';
import { useState } from 'react'
import { useProductSearch } from './hooks/useProductSearch';

function App() {

  const [productSearch, setProductSearch] = useState('');

  const { data, isLoading, isError } = useProductSearch(productSearch);

  return (
    <>
      <NavBar />
      <SearchBar setProductSearch={setProductSearch} productSearch={productSearch} />
      {isLoading ? (
        <SkeletonGrid />
      ) : isError ? (
        <ErrorMessage />
      ) : (
        <CardGrid products={data ?? []} />
      )}
    </>
  )
}

export default App
