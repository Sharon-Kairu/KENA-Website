import Hero from "../components/hero/hero";
import Homecontent from "../components/homecontent/Homecontent";
import Reviews from "../components/reviews/Reviews";

export default function RootPage() {
  return (
    <div id='home className="pt-18'>
        <Hero/>
        <Homecontent/>
        <Reviews/> 
    </div>
  )
}

