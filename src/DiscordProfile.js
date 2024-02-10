import React from 'react';

function DiscordProfile() {
  const discordUsername = "Weatrix";
  const discordProfileImage = "https://cdn.discordapp.com/avatars/1003950576800899083/35a946def880b8e0e24f8dd3f2c09743.png";

  return (
    <div>
      <h1>Discord Profile</h1>
      <div>
        <h2>Username: {discordUsername}</h2>
        <img src={discordProfileImage} alt="Discord Profile" />
      </div>
    </div>
  );
}

export default DiscordProfile;
