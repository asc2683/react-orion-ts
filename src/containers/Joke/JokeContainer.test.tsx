import { render, screen, cleanup } from '@testing-library/react';
import { mount, shallow, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import axios from "axios";
import { act } from "react-dom/test-utils";
import JokeContainer from './JokeContainer';

configure({ adapter: new Adapter() });

jest.mock('axios');

const resp = {
  data: [
      {"id":241,"type":"general","setup":"What do you get when you cross a bee and a sheep?","punchline":"A bah-humbug."},
      {"id":23,"type":"programming","setup":"Why do programmers always mix up Halloween and Christmas?"}
  ]
}

const data = resp.data;

afterEach(() => {
  cleanup();
});

describe('async data load', () => {
  let wrapper;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with loading spinner", () => {
    wrapper = shallow(<JokeContainer />);
    expect(wrapper.find("div").last().text()).toBe("<FaSpinner />");
  });

  test('loads data', async () => {
    // mock axios promise
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(resp));
      wrapper = mount(<JokeContainer />);
    })

    wrapper.update();
    await expect(axios.get).toHaveBeenCalledWith("/10");
    await expect(axios.get).toHaveBeenCalledTimes(1);
  })
})

test('should render JokeContainer component', () => {
  render(<JokeContainer />);
  const jokeContainerElement = screen.getByTestId('jokeContainer');
  expect(jokeContainerElement).toBeInTheDocument();
})
