import axios from 'axios';
import { useQuery} from 'react-query';
import './App.css';

function App() {
  const queryData = useQuery({
    queryKey: ['firstQuery'],  //it should be unique for all queries
    queryFn: async () => {
      const response = await axios.get('https://dummyjson.com/products')
      return response
    },
    // enabled: false
    staleTime: 1000
  })

  let { data, isLoading, isError } = queryData
  if (isLoading) return <h1>Loading....</h1>
  if (isError) return <h1>'Some Thing Went Wrong !!'</h1>

  console.log(data?.data?.products, 'data');

  return (
    <div className="App">
      <header className="App-header">
        React-Query
      </header>
      {data?.data?.products.map((product) => {
        return <div key={product.id}>
          {product?.title}
        </div>
      })}
    </div>
  );
}

export default App;
