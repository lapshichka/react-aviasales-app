import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss';
import { MainPage } from 'pages/MainPage';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        тема
      </button>
      <MainPage />
      <p>lflflflflfl</p>
      <p>ggggggg</p>
    </div>
  );
};

export default App;
