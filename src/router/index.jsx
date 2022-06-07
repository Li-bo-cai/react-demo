import { lazy, Suspense } from 'react'
import Home from '../views/Hmoe'
import Router1 from '../views/demo3/router1'
import Router2 from '../views/demo3/router2'
import Login from '../views/Login/Login'
const Demo1 = lazy(() => import('../views/demo1'))
const Demo2 = lazy(() => import('../views/demo2'))
const Demo3 = lazy(() => import('../views/demo3'))
const Demo4 = lazy(() => import('../views/demo4'))
const Demo5 = lazy(() => import('../views/demo5'))
const Demo6 = lazy(() => import('../views/demo6'))

const lazyLoad = (children) => {
    return <Suspense fallback={<>loading</>}>
        {children}
    </Suspense>
}

const router = [
    {
        path: '/',
        element: <Home />,
        children: [
            { path: 'router1', element: lazyLoad(<Demo1 />) },
            { path: 'router2', element: lazyLoad(<Demo2 />) },
            {
                path: 'router3',
                element: lazyLoad(<Demo3 />),
                children: [
                    { index: true, element: <Router1 /> },
                    { path: "/router3/router2", element: <Router2 /> }
                ]
            },
            { path: 'router4', element: lazyLoad(<Demo4 />) },
            { path: 'router5', element: lazyLoad(<Demo5 />) },
            { path: 'router6', element: lazyLoad(<Demo6 />) }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default router
