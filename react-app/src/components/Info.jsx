import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("김민준");
  const [nickName, setNickName] = useState("velopert");

  useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
    return () => {
      console.log("언마운트될 때 실행됩니다.");
    };
  }, []);

  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다!");
  //   console.log({ name, nickName });
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);

  return (
    <>
      <div>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <input onChange={(e) => setNickName(e.target.value)} value={nickName} />
      </div>
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickName}</h1>
    </>
  );
};

export default Info;
