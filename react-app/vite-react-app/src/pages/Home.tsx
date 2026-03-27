import Hello from "./../components/Hello"
import Counter from "./../components/Counter"


export default function Home() {
  return (
    <div>
<h2>React Next.js Application!</h2>
<Hello message="Welcome to the React Next.js Application!" color="blue" />
<Hello message="This is a reusable component." color="green" />
<Hello />
<Counter count={5} />
    </div>
  );
}
