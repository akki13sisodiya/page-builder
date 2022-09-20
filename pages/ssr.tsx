import Page from '../Page';

export default Page;

export async function getServerSideProps() {
  const res = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam');
  const data = await res.json();
  return { props: { data: { ...data, name: 'server' } } };
}