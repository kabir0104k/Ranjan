import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";

if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
}

function App() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;
