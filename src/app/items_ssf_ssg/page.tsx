// import api from "../common/Api";

// export async function getStaticProps() {
//   const res = await api.get('files');
//   const files = res?.data?.data || [];

//   return {
//     props: { files },
//   };
// }


export default function Home({files =[]}) {  
  return (
    <>
      {/* <div className="item-container centercontent fillparent">
        <div style={{ width: '100%', height: '50px', fontSize: 14 }}><a href="https://www.tutorialspoint.com/nextjs/nextjs_data_fetching.htm">Server-side Fetching : Static Site Generation</a></div>
        {files.map((file: any) => <div key={file._id}>{file.name}</div>)}
      </div> */}
    </>
  );
}