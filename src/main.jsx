import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import appRouter from './appRouter'
import ThemeProvider from './components/utills/ThemeContext';
import { Provider } from 'react-redux'
import store from './components/store/store'


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ThemeProvider>
            <RouterProvider router={appRouter} />
        </ThemeProvider>
    </Provider>

)
