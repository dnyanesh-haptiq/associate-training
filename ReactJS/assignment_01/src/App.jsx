import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout.jsx'
import Indexpage from './pages/Indexpage.jsx';
import Productpage from './pages/Productpage.jsx';
import Cartpage from './pages/Cartpage.jsx';
import Wishlistpage from './pages/Wishlistpage.jsx';

import { getProductById, getProducts } from './actions/products.js';
import Searchpage from './pages/Searchpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Indexpage />,
        loader: getProducts
      },
      {
        path: "/search",
        element: <Searchpage />
      },
      {
        path: "/product/:productId",
        element: <Productpage />,
        loader: async ({ params }) => getProductById(params?.productId)
      },
      {
        path: "/cart",
        element: <Cartpage />
      },
      {
        path: "/wishlist",
        element: <Wishlistpage />
      }
    ]
  },
  // {
  //   path: '/auth',
  //   element: <AuthLayout />,
  //   children: []
  // }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;