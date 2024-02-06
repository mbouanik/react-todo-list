import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("should render", () => {
  render(<TodoList />);
});

it("should snapshot ", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment).toMatchSnapshot();
});

it("should add an item", () => {
  const { queryByText, getByTestId } = render(<TodoList />);
  expect(queryByText("X")).not.toBeInTheDocument();
  const btn = queryByText("add Item");
  const item = getByTestId("item");
  fireEvent.change(item, { target: { value: "buy milk" } });
  fireEvent.click(btn);
  expect(queryByText("buy milk")).toBeInTheDocument();
  const deleteBtn = queryByText("X");
  fireEvent.click(deleteBtn);
  expect(queryByText("buy milk")).not.toBeInTheDocument();
});
