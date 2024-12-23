import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Rows from './components/Rows';
import all_requests from './request';

function App() {
  return (
    <div className="App">
      
    <Navbar/>
    <Banner/>
    <Rows joner={"NETFLIX ORIGINALS"} fetchUrl={all_requests.fetchNetflixOriginals}/>
    <Rows joner={"Trending Now"} fetchUrl={all_requests.fetchTrending}/>
    <Rows joner={"Top Rated"} fetchUrl={all_requests.fetchTopRated}/>
    <Rows joner={"Action Movies"} fetchUrl={all_requests.fetchActionMovies}/>
    <Rows joner={"Comedy Movies"} fetchUrl={all_requests.fetchComedyMovies}/>
    <Rows joner={"Horror Movies"} fetchUrl={all_requests.fetchHorrorMovies}/>
    <Rows joner={"Romance Movies"} fetchUrl={all_requests.fetchRomanceMovies}/>
    <Rows joner={"Documentaries"} fetchUrl={all_requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
