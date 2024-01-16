import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Layout/>,
      errorElement: <Error/>,
      children:[
        {index:true,element:<Home/>},
        {path:'/about',element:<About/>}
      ]
    }
  ]
)


function App() {
  return (
    <div className="App">
        <RouterProvider router={router}>

        </RouterProvider>
    </div>
  );
}

export default App;
