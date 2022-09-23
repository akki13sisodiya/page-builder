interface MyComponentProps {
    data: any
}

const childClassPrefix = `txt-22 wt-500 white-0 bg-red-4 round-8 p-8 flex-center`;


const Box = (data: any) => {
    const props = data.props;
return <div className={`${childClassPrefix} lg:${props.lg} md:${props.md} sm:${props.sm}`}>{props.title}</div>
}

const BoxWithProps = (data: any) => {
    const props = data.props;
   return <div className={`${childClassPrefix} lg:${props.lg} md:${props.md} sm:${props.sm}`}>{props.props.date} : {props.props.time} {props.props.milliSeconds} {props.props.timeZone}</div>
}

const getComponentToRender = (jsonData: any) => {
    return jsonData?.map((data:any) => {
        switch(data.component) {
            case 'box':
                return <Box props={data} key={data.uid} />             
            case 'boxWithProps':
                return <BoxWithProps props={data} key={data.uid} />             
            default:
              // code block
          }
    });
}

export default function ISRPage(props: MyComponentProps) {
    const { jsonData, container } = props.data;
    const parentClassPrefix = `box-border mx-auto w-5/6 mt-24 minh-500 bg-neutral-7 p-8 round-12`;

    const revalidate = () => {
        fetch('/api/revalidate');
    }

    return (
        <>
            <div className={`${parentClassPrefix} lg:${container.lg} md:${container.md} sm:${container.sm} `}>
                {getComponentToRender(jsonData)}
            </div>
            <button onClick={revalidate} className="flex-center mx-auto mt-40 h-40 w-240 cursor-pointer">Revalidate</button>
        </>
    )
};