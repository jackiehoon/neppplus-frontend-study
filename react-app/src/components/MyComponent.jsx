const MyComponent = ({ name, children }) => {
  return (
    <div>
      {name}의 새롭고 멋진 컴포넌트
      {children}
    </div>
  );
};

export default MyComponent;
