
import axios from 'axios';
//import { saveUser,addCoverPhoto,updateUserDeatails,findUserbyEmail } from '../../apiCall/users';
import { saveUser,addCoverPhoto,updateUserDeatails,findUserbyEmail } from '../users';





jest.mock('axios');

describe('saveUser', () => {
    it('should make a PUT request to update user data', async () => {
      // Arrange
      const user = {
        displayName: 'John Doe',
        email: 'johndoe@example.com',
        photoURL: 'https://example.com/johndoe.jpg',
      };
      const countryName = 'USA';
      const phone = '+1 123-456-7890';
      const gender = 'Male';
  
      const expectedUserData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: 'user',
        countryName,
        phone,
        gender,
        coverPhoto: '',
      };
  
      axios.put.mockResolvedValueOnce({ data: 'Mocked response' });
  
      // Act
      await saveUser(user, countryName, phone, gender);
  
      // Assert
      expect(axios.put).toHaveBeenCalledWith(
        `https://tripsure-server-sayemsaadat0.vercel.app/users/${user?.email}`,
        expectedUserData
      );
    });
  });
  

//   this test will be pass irfan 