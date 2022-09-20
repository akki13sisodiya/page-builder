import { useRouter } from 'next/router';


interface MyComponentProps {
    data: any;
  }

export default function Page(props: MyComponentProps) {
    
    const { isFallback } = useRouter();
    if (isFallback) {
        return <></>;
    }

    console.log('dscvdsavdsvdav', props);

    return <div style={{ padding: '40px'}}>
        <h1>{props.data.name}</h1>
        <h3>{props.data.date} : {props.data.time} {props.data.timeZone}</h3>
    </div>
}