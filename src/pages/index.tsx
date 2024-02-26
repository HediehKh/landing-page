import Spline from '@splinetool/react-spline';
import Introduction from './components/introduction';
import Features from './components/features';
import Header from './components/header';
import Footer from './components/footer'; 
import Newsletter from './components/newsletter';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={`flex flex-col items-center justify-between`}>
        <div className={`w-full bg-white py-8 md:py-16 lg:py-20`}>
          <div className={`container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0`}>
            <Introduction />
            <div className={`hidden md:block w-full md:w-1/2 lg:pt-5`}>
              <Spline scene="https://prod.spline.design/XRBL55plSKfATBsW/scene.splinecode" />
            </div>
          </div>
        </div>
        <div className={`w-full py-12 md:py-16 lg:py-20`}>
          <div className={`container mx-auto`}>
            <h2 className={`text-3xl font-bold text-center text-gray-800 mb-8`}>Features</h2>
            <Features />
          </div>
        </div>
        <div className={`w-full bg-white py-12 md:py-16 lg:py-20`}>
          <div className={`container mx-auto`}>
            <h2 className={`text-3xl font-bold text-center text-gray-800 mb-8`}>Join Our Amplify Newsletter </h2>
            <Newsletter />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
