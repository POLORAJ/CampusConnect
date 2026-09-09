import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Login() {
  return (
    <div className="page">
      <PageTitle>Login</PageTitle>

      <Card
        title="Welcome Back"
        description="Login to your Campus Connect account."
      >
        <Button>Login</Button>
      </Card>
    </div>
  );
}

export default Login;