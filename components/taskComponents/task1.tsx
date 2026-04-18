type task1Props = {
  user?: {
    name: string;
    age: number;
  };
  children?: React.ReactNode;
};

function task1(props: task1Props) {
  return (
    <div>
      <h2>Task_1 : Create a component which accepts object(User) as props</h2>
      <p>Name: {props.user?.name}</p>
      <p>Age: {props.user?.age}</p>
      {props.children}      {/* we need to render the children props here to display the content passed from Task_3 component in App.tsx. In other words if we don't render the children here too, then we will not see that data that we have passed from Task_3 component in App.tsx. */}
    </div>
  );
}

export default task1;
