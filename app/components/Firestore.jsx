"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

async function getMyData() {
  const querySnapshot = await getDocs(collection(db, "programming"));

  const data = [];

  querySnapshot.forEach((file) => {
    data.push({ id: file.id, ...file.data() });
  });
  console.log(data);
  return data;
}

const Firestore = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getMyData();
      setUserData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>Hello world</p>
      {userData &&
        userData.map((ele) => {
          return <div key={ele.id}>{ele.title}</div>;
        })}
    </div>
  );
};

export default Firestore;
