import AdvertisementSection from "../AdvertisementSection/AdvertisementSection";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";
import Reviews from "../Reviews/Reviews";
import WorkStyle from "../WorkStyle/WorkStyle";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisementSection></AdvertisementSection>
            <Partners></Partners>
            <Reviews></Reviews>
            <WorkStyle></WorkStyle>
        </div>
    );
};

export default Home;