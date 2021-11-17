import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "./Header";

afterEach(cleanup);

test("should render Header component with title", () => {
  const value = false;
  const title = "Jokes List";

  render(<Header value={value} title={title} />);
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent(title);
});

test("component matches snapshot", () => {
  const value = false;
  const title = "Jokes List";
  const tree = renderer.create(<Header value={value} title={title} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="header-container"
      data-testid="header"
    >
      <div>
        <h1>
          Jokes List
        </h1>
      </div>
      <div>
        <div
          className="switch-container"
          data-testid="switch"
        >
          <svg
            fill="none"
            height="1em"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            style={
              Object {
                "color": undefined,
              }
            }
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
            />
          </svg>
          <label
            className="switch"
          >
            <input
              defaultChecked={false}
              type="checkbox"
            />
            <span
              className="slider round"
            />
          </label>
        </div>
      </div>
    </div>
  `);
});
