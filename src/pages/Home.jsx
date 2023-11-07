import { Head, Info } from './Pages.styled';

export default function Home() {
  return (
    <div>
      <Head>
        Welcome
        <span role="img" aria-label="Greeting icon"></span>
      </Head>
      <Info>
        Our application allows you to conveniently search and rent cars. We
        offer a wide selection of cars of various makes and models to suit your
        needs and budget.
      </Info>
    </div>
  );
}
