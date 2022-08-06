import  { BreakpointProvider } from 'react-socks';
import Hero from "../hero/Hero" 
import MainSection from '../sections/MainSection';

const Home = () => {

    return (
        <>
          <BreakpointProvider>
            <Hero />
            <MainSection />
          </BreakpointProvider>
        </>
    )
}
export default Home;