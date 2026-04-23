import NavBar from './components/shared/NavBar'
import SearchBar from './components/shared/SearchBar'
import CardGrid from './components/results/CardGrid';
import SkeletonGrid from './components/results/SkeletonGrid';
import ErrorMessage from './components/results/ErrorMessage';
import Footer from './components/shared/Footer';
import { useState } from 'react'
import { useProductSearch } from './hooks/useProductSearch';

function App() {

  const [productSearch, setProductSearch] = useState('');

  const { data, isLoading, isError } = useProductSearch(productSearch);

  return (
    <>
      <NavBar />
      <SearchBar setProductSearch={setProductSearch} productSearch={productSearch} />
      <div className="min-h-[60vh]">
        {isLoading ? (
          <SkeletonGrid />
        ) : isError ? (
          <ErrorMessage />
        ) : (
          <CardGrid products={data ?? []} />
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
