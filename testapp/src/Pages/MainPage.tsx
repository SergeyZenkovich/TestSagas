import React, { useEffect, useState } from 'react';
import { FilterComponent } from '../componetns/FilterComponent';
import { Posts } from '../componetns/Posts';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { startLoadingUsersAction } from '../redux/reducers/users/usersActions';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';


export const MainPage: React.FC = () => {
  const [personName, setPersonName] = useState<string[]>([]);
  const [personIds, setPersonsIds] = useState<number[]>([]);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const {users, isLoadingUsers} = useSelector((state: RootState) => state.users);

  useEffect(() => {
    const getUsers = async () => {
      dispatch(startLoadingUsersAction());
    }
    getUsers();
  }, []);

  useEffect(() => {
    const usersFromURL = searchParams.getAll('userId').map((el: string) => Number(el));
    const choosedUsers = users.filter((el: UserType) => usersFromURL.includes(el.id)).map((el: UserType) => el.name);
    setPersonsIds(usersFromURL)
    setPersonName(choosedUsers);
  }, [users])

  return (
    <>{isLoadingUsers ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box> :
      <div>
        <FilterComponent personIds={personIds} setPersonsIds={setPersonsIds} personName={personName} setPersonName={setPersonName} allUsers={users} />
        <Posts personIds={personIds} />
      </div>
    }

    </>
  );
}
