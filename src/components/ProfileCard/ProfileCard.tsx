import { ProfileCardImage, ProfileCardParagraph, ProfileCardTitleH3, ProfileCardWrapper } from "./styles";
import { User } from "./types";



function ProfileCard() {
  const userData : User = {
    avatar:
      "https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740",
    userName: "John Doe",
    profession: "Web Developer",
    hobbies: ["Reading", "Traveling", "Photography"],
  };

  return (
    <ProfileCardWrapper>
      <ProfileCardImage src={userData.avatar} />
      <ProfileCardTitleH3>{userData.userName}</ProfileCardTitleH3>
      <ProfileCardParagraph>
        <span className="property-name">Profession:</span> {userData.profession}
      </ProfileCardParagraph>
      <ProfileCardParagraph>
        <span className="property-name">Hobby:</span> {userData.hobbies[0]}
      </ProfileCardParagraph>
    </ProfileCardWrapper>
  );
}

export default ProfileCard;
