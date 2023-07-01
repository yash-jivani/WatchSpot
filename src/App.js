import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchVideos from "./components/SearchVideos";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <MainContainer />,
            },
            {
                path: "/watch",
                element: <WatchPage />,
            },
            {
                path: "/results/:q",
                element: <SearchVideos />,
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <div>
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    );
}

export default App;

/*
 * Header
 * Body
 *    - Sidebar
 *       - MenuItems
 *    - MainContainer
 *       - BtnList
 *       - VideoContainer
 *          - VideoCard
 */
