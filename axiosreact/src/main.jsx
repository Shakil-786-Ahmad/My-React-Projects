import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AxiosDemo from './AxiosDemo.jsx'
import SidsApi from './SidsApi.jsx'
import AllChannels from './AllChannels.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AxiosDemo /> */}
    <SidsApi />
    <AllChannels />
  </React.StrictMode>,
)
