import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ContinuePlayingProvider } from '@/lib/context/ContinuePlayingContext';
import { GradientBackground } from '@/components/effects/GradientBackground';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import HomePage from '@/pages/HomePage';
import GamePage from '@/pages/GamePage';
import CategoryPage from '@/pages/CategoryPage';
import SearchPage from '@/pages/SearchPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import CookiesPage from '@/pages/CookiesPage';
import DmcaPage from '@/pages/DmcaPage';
import TipsPage from '@/pages/TipsPage';
import NotFound from '@/pages/not-found';

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/game/:slug" component={GamePage} />
      <Route path="/category/:slug" component={CategoryPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/cookies" component={CookiesPage} />
      <Route path="/dmca" component={DmcaPage} />
      <Route path="/tips" component={TipsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ContinuePlayingProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <GradientBackground />
        <Header />
        <main className="min-h-screen">
          <Router />
        </main>
        <Footer />
        <CookieBanner />
      </WouterRouter>
    </ContinuePlayingProvider>
  );
}

export default App;
