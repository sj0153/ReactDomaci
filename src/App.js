import Header from './Header'
import Footer from './Footer'
import './style/App.css';


 function App({children}) {
    return (
        <div>
            <Header />
            
            {children}

            <Footer />
        </div>
    )
}

export default App;