import HeroBanner from "./components/Home/HeroBanner"
import SupportNav from "./components/shared/SupportNav"
import BannerLg from "./components/Home/BannerLg"
import BannerSm from "./components/Home/BannerSm"
import BannerSplit from "./components/Home/BannerSplit"
import About from "./components/shared/About"

export default function Home() {
  return (
    <div>
        <HeroBanner/>
        <SupportNav />
        <section>
            <BannerLg />
            <BannerSm />
            <BannerSplit />
        </section>
        <About />
    </div>
  )
   
}
