import Navigation from "../components/Navigation";
import Logo from "../components/Logo.js"
import Countries from "../components/Countries.js"
const Home = () => {
  return (
    <div className='home'>
      <Navigation />
      <Logo />
      <Countries />
    </div>
  )
};

export default Home;