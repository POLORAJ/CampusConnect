import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Dashboard() {
  return (
    <div className="page">
      <PageTitle>Dashboard</PageTitle>

      <Card
        title="Student Dashboard"
        description="Manage your academic information and activities."
      >
        <Button>View Details</Button>
      </Card>
    </div>
  );
}

export default Dashboard;