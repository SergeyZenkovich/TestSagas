import React, { useEffect, useState } from 'react';
import { FilterComponent } from '../componetns/FilterComponent';
import { Posts } from '../componetns/Posts';
import { useSearchParams } from 'react-router-dom';


export const MainPage: React.FC  = () => {
  const [allUsers, setAllUsers] = useState<UserType[]>([]);
  const [personName, setPersonName] = useState<string[]>([]);
  const [personIds, setPersonsIds] = useState<number[]>([]); 

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getUsers = async () => {
      const usersFromURL = searchParams.getAll('userId').map((el: string)=> Number(el));
      const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
      const choosedUsers = users.filter((el: UserType) => usersFromURL.includes(el.id)).map((el: UserType) => el.name);
      setAllUsers(users);
      setPersonsIds(usersFromURL)
      setPersonName(choosedUsers);
    }
    getUsers();
  }, []);

  return (
    <>
    <FilterComponent personIds={personIds} setPersonsIds={setPersonsIds} personName={personName} setPersonName={setPersonName} allUsers={allUsers}/>
    <Posts personIds={personIds} />
    </>
  );
}
