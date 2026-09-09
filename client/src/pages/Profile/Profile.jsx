import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";

function Profile() {
  return (
    <div className="page">
      <PageTitle>Profile</PageTitle>

      <Card
        title="Student Profile"
        description="View and manage your profile information."
      />
    </div>
  );
}

export default Profile;