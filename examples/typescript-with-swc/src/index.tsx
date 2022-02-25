import { render } from 'react-dom';
import App from 'src/App';

export function bootstrap() {
  render(<App />, document.getElementById('app'));
}
