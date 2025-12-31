import ExploreJobs from '@/components/home/ExploreJobs'
import HeroSlider from '@/components/home/Hero'
import HomejobsList from '@/components/HomejobsList'


const Home = () => {
    return (
        <div>
            <HeroSlider />
            <ExploreJobs />
            <HomejobsList />
        </div>
    )
}

export default Home