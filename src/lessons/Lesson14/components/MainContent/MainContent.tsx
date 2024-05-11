import { createContext, useState } from 'react';
import Section from '../Section/Section';
import {
  MainContentComponent,
  MainTitle
} from './styles';
import { UserData } from './types';

export const MainContext = createContext({
  firstName: '',
  lastName: '',
  age: 0
})

function MainContent() {
  const [userData, setUserData] = useState<UserData>({
    firstName: 'Gomer',
    lastName: 'Simpson',
    age: 45 
  })
  return (
    <MainContext.Provider value={userData}>
      <MainContentComponent>
        <MainTitle>Main block</MainTitle>
        {/* //пример с props drilling */}
        {/* <Section userData={userData} /> */}
        <Section />
      </MainContentComponent>
    </MainContext.Provider>
  )
}

export default MainContent;
 