import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss';
import { MainPage } from 'pages/MainPage';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <MainPage />
    </div>
  );
};

export default App;
