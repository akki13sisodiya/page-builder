import ISRPage from '../ISRPage';
// import Page from '../Page';

// export default Page;

const pageJsonData = {
  "name": "Hero fold",
  "lg":  "grid gap-y-8 gap-x-16 grid-cols-4",
  "md": "grid gap-y-8 gap-x-16 grid-cols-4",
  "sm": "grid gap-y-8 gap-x-16 grid-cols-4",
  "body": [
    {
      "uid": "gJZoSLkfZA",
      "component": "box",
      "title": "Header",
      "lg": "row-span-1 col-span-full",
      "md": "row-span-1 col-span-full",
      "sm": "row-span-1 col-span-full",
      "style": {}
    },
    {
      "uid": "gJZoSLkfB",
      "component": "box",
      "title": "Box 1",
      "lg": "row-span-1 col-span-1",
      "md": "row-span-1 col-span-1",
      "sm": "row-span-1 col-span-1",
      "style": {}
    },
    {
      "uid": "gJZoSLkfZC",
      "component": "box",
      "title": "Box 2",
      "lg": "row-span-1 col-span-1",
      "md": "row-span-1 col-span-1",
      "sm": "row-span-1 col-span-1",
      "style": {}
    },
    {
      "uid": "gJZoSLkfZD",
      "component": "box",
      "title": "Box 3",
      "lg": "row-span-1 col-span-1",
      "md": "row-span-1 col-span-1",
      "sm": "row-span-1 col-span-1",
      "style": {}
    },
    {
      "uid": "gJZoSLkfZE",
      "component": "box",
      "title": "Sidebar",
      "lg": "row-span-3 col-span-1",
      "md": "row-span-3 col-span-1",
      "sm": "row-span-3 col-span-1",
      "style": {}
    },
    {
      "uid": "gJZoSLkfZF",
      "component": "boxWithProps",
      "title": "Main Content",
      "lg": "row-span-2 col-span-3",
      "md": "row-span-2 col-span-3",
      "sm": "row-span-2 col-span-3",
      "apiDetails": {
        "endpoint": "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
        "method": "GET"
      },
      "apiProps": [
        "date",
        "time",
        "timeZone",
        "milliSeconds"
      ],
      "style": {}
    },
    {
      "uid": "gJZoSLkfZG",
      "component": "boxWithProps",
      "title": "Footer",
      "lg": "row-span-1 col-span-full",
      "md": "row-span-1 col-span-full",
      "sm": "row-span-1 col-span-full",
      "apiDetails": {
        "endpoint": "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
        "method": "GET"
      },
      "apiProps": [
        "date",
        "time",
        "timeZone",
        "milliSeconds"
      ],
      "style": {}
    }
  ]
}

export default ISRPage;

export async function getStaticProps() {
   // Some API call to get page json data
    const jsonData:any[] = pageJsonData.body;
    let i = 0;
    for (const data of jsonData) {
      if(data.apiDetails){
        const props: any = {};
        const res: any = await fetch(data.apiDetails.endpoint);
        const response = await res.json();
        console.log('API respone', response);
        data.apiProps.map((keyName: any) => {
          props[keyName] = response[keyName];
        })
        jsonData[i].props = props;
      }
      i++;
    }
    console.log('json updated data', jsonData);

    // const res = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam');
    // const data = await res.json();
    return { props: { data: {jsonData, container: pageJsonData, name: 'ISR'} }, revalidate: 60 };
  }