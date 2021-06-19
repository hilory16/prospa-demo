// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './pages/Signup';

configure({adapter: new Adapter()});
const app = shallow(<App/>)

test('renders correctly', () =>{
    expect(app).toMatchSnapshot();
});

