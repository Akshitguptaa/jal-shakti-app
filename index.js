import { registerRootComponent } from 'expo';
import "./global.css";
import AppNavigation from "./app/navigation/appNavigation"

export default function App() {
  return (
    <AppNavigation/>
  );
}

registerRootComponent(App);