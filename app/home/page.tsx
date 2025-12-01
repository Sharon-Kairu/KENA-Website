import Hero from "../components/hero/hero";
import Homecontent from "../components/homecontent/Homecontent";
import Reviews from "../components/reviews/Reviews";

export default function RootPage() {
  return (
    <div id='home'>
        <Hero/>
        <Homecontent/>
        <Reviews/> 
    </div>
  )
}

