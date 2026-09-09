import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Home() {
  return (
    <div className="page">
      <PageTitle>Campus Connect</PageTitle>

      <Card
        title="Welcome to Campus Connect"
        description="A university management system for students and administrators."
      >
        <Button onClick={() => alert("Welcome to Campus Connect!")}>
          Get Started
        </Button>
      </Card>
    </div>
  );
}

export default Home;