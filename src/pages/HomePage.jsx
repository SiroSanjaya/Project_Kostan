import Recommendation from "../components/Recommendation";
import Header from "../components/Header";
import SearchBar from '../components/SearchBar';
import Testimonials from "../components/Testimonials";
import Collaboration from "../components/Collaboration";
import Facilities from "../components/Facilities";

export default function HomePage() {
    return (
        <div>
            <Header />
            <div className="bg-white py-24 sm:py-32">
            <div>
      <header className="bg-gray-800 text-white text-center py-6">
        <h1 className="text-3xl font-bold">Find Your Perfect Kost</h1>
      </header>
      <SearchBar />
      {/* Other content of HomePage */}
    </div>
    <Facilities/>
                    <Recommendation />
                    <Testimonials/>
                    <Collaboration/>
                </div>
              
       
            </div>
      
    );
}
