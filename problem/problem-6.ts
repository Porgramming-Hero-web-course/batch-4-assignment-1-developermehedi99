{

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
  }


  const recentProfile: Profile = {
    name: "Mehedi",
    age: 24,
    email: "rana@gmail.com",
  };

  const updates = {
    age: 110,
    email: "nextLevelDeveloper@gmail.com",
  };

  const updatedProfile = updateProfile(recentProfile, updates);
  console.log(updatedProfile);
}
