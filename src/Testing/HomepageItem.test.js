import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/store';
import HomepageItem from '../Components/Homepage/HomepageItem';

test('Check any changes to the component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <HomepageItem />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <HomepageItem />
    </Provider>,
  );
  const container = getByTestId('homepageitem');
  expect(container).toBeInTheDocument();
});
