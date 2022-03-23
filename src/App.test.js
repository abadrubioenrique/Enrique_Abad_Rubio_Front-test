import { render, fireEvent, screen} from '@testing-library/react';
import App from './App';
import Cardcomponent from './components/cardComponent';
import Dashboardcomponent from './components/dashboardComponent';
import Headercomponent from './components/headerComponent';

describe('React - Testeamos los componentes',()=>{
  test('El componente header se renderiza correctamente', () => {
    const view= render(<Headercomponent/>);
    expect(view).toBeDefined();
  })
  test('El componente card se renderiza correctamente', () => {
    const view= render(<Cardcomponent/>);
    expect(view).toBeDefined();
  })
  test('El componente dashboard se renderiza correctamente', () => {
    const view= render(<Dashboardcomponent/>);
    expect(view).toBeDefined();
  })
})

describe('React - Hacemos un test de integración',()=>{
  test('Renderizamos la app', ()=>{
    const view = render(<App/>)
    expect(view).toBeDefined();
  })
  test('Cuando hacemos click en el botón de like se lanza el evento', ()=>{
    const funcionMock = jest.fn();
    render(<Cardcomponent liked={funcionMock}/>)
    const like = screen.getByTestId("like");
    fireEvent.click(like);
    expect(funcionMock).toHaveBeenCalledTimes(1);
  })
})

