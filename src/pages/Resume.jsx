import resumepdf from '../assets/Resume2024.pdf'

function Resume() {

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = resumepdf;
    link.download = "NatanielCarrasquilloResume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <h1>My Resume</h1>
      <div>
        <button 
          id='downloadButton' 
          onClick={handleDownload}
          value='download'
        >
        Download Resume Pdf
        </button>
      </div>
      <h1>Skills and Proficiencies</h1>
      <h3>Web development and coding:</h3>
      <ul>
        <li>HTML, JavaScript and CSS</li>
        <li>MongoDB, Express, React, and Node (MERN) stack</li>
        <li>GraphQL</li>
        <li>Python</li>
        <li>.NET framework</li>
        <li>C# and C++</li>
      </ul>
      <h3>Engineering simulation and CAD software:</h3>
      <ul>
        <li>MATLAB</li>
        <li>LabView</li>
        <li>AutoDesk AutoCAD, Inventor, and Revit</li>
        <li>SolidWorks</li>
      </ul>
    </div>
  );
}

export default Resume