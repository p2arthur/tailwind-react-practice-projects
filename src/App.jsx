import SubscribePage from "./pages/SubscribePage";
import PricingPage from "./pages/PricingPage";

import NavigationBar from "./components/NavigationBar";

import Route from "./components/Route";

function App() {
  return (
    <div>
      <div className="fixed z-20">
        <NavigationBar />
      </div>
      <div>
        <Route path="/pricing">
          <PricingPage />
        </Route>
        <Route path="/subscribe">
          <SubscribePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
