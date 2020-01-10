import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from 'react-navigation-hooks';
import NewsMappedList from '../NewsMappedList';

jest.mock('react-navigation-hooks');
jest.mock('../useFetchStockNews');

const sampleNews = [
  {
    id: '123',
    datetime: new Date('2019').getMilliseconds(),
    headline: 'headline',
    url: 'http://test.test',
    image: 'http://test.test/test.jpg',
  },
  {
    id: '321',
    datetime: new Date('2019').getMilliseconds(),
    headline: 'headline',
    url: 'http://test.test',
    image: 'http://test.test/test.jpg',
  },
];

describe('<NewsMappedList />', () => {
  beforeEach(() => {
    useNavigation.mockReturnValue({
      push: jest.fn(),
      navigate: jest.fn(),
    });
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('Should render properly and match the snapshot', () => {
    const tree = renderer.create(
      <NewsMappedList news={sampleNews} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});