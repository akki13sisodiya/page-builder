import Page from '../Page';

export default Page;

export async function getStaticProps() {
    const res = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam');
    const data = await res.json();
    console.log('dscdscdscsdcdscds', data);
    return { props: { data: {...data, name: 'ISR'} }, revalidate: 60 };
  }