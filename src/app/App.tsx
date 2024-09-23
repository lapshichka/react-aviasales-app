import { useTheme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <MainPage />
    </div>
  );
};

export default App;
