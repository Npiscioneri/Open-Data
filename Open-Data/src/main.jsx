import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card title="Card Title" content="This is a brief content for the card." />
    <Card title="Second Card" content="This is the content for the second card." />
    <Card title="Third Card" content="This is the content for the third card." />
  </StrictMode>,
)
