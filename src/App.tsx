import PageBackground from './components/layout/PageBackground';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';

export default function App() {
  return (
    <PageBackground>
      <div className="grid min-h-[100dvh] grid-rows-[auto_1fr]">
        <Header />
        <Hero />
      </div>
      <main className="flex flex-1 flex-col">
        <HowItWorks />
      </main>
      <Footer />
    </PageBackground>
  );
}
