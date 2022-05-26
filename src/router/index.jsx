import Layout from '../views/Layout'
import Home from '../views/Hmoe'
import Demo1 from '../views/demo1'
import Demo2 from '../views/demo2'
import Demo3 from '../views/demo3'
import Router1 from '../views/demo3/router1'
import Router2 from '../views/demo3/router2'

const router = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'router1', element: <Demo1 /> },
            { path: 'router2', element: <Demo2 /> },
            {
                path: 'router3',
                element: <Demo3 />,
                children: [
                    { index: true, element: <Router1 /> },
                    { path: "/router3/router2", element: <Router2 /> }
                ]
            }
        ]
    }
]

export default router
