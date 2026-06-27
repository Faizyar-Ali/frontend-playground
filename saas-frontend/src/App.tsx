import Card from './component/card.jsx'
import jobOpenings from './data.jsx'


function App(){
  return(
    <div className="parent">
      {jobOpenings.map((elem,index) => (
        <div key={index}>
        <Card
          company={elem.company}
          logo_url={elem.logo_url}
          postedAgo={elem.postedAgo}
          title={elem.title}
          jobType={elem.JobType}
          salary={elem.salary}
          location={elem.location}
        />
        </div>
      ))}
    </div>
  );
}

export default App