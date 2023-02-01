import React from "react";
import Numberline from "../components/Numberline";

function EmploymentHistory() {
  return (
    <div className="flex w-full text-primary-text p-4 bg-secondary-400" style={{ minHeight: 'calc(100vh - 132px)' }}>
      <Numberline number={26} />
      <div className="flex flex-col employent-code text-sm">
        <p>
          <span style={{ color: "rgb(197, 134, 192)" }}>export</span>
          <span style={{ color: "rgb(86, 156, 214)" }}> const</span>
          <span style={{ color: "rgb(79, 193, 255)" }}> EmploymentHistory </span>
          = [
        </p>
        <p className="indent-3">{`{`}</p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>id: </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>1</span>,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>company_name: </span>
          <span style={{ color: "rgb(206, 145, 120)" }}>"TrustArc"</span>,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>position: </span>
          <span style={{ color: "rgb(206, 145, 120)" }}>
            "Quality Assurance Intern"
          </span>
          ,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>date: </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>Jul </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>2019</span> -
          <span style={{ color: "rgb(181, 206, 168)" }}> Jun</span>
          <span style={{ color: "rgb(181, 206, 168)" }}> 2020</span>,
        </p>
        <p className="indent-3">{`},`}</p>
        <p className="indent-3">{`{`}</p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>id: </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>2</span>,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>company_name: </span>
          <span style={{ color: "rgb(206, 145, 120)" }}>
            "Timeriver Design"
          </span>
          ,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>position: </span>
          <span style={{ color: "rgb(206, 145, 120)" }}>
            "Graphic Designer"
          </span>
          ,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>date: </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>Nov </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>2020 </span>-
          <span style={{ color: "rgb(181, 206, 168)" }}> Aug</span>
          <span style={{ color: "rgb(181, 206, 168)" }}> 2021</span>,
        </p>
        <p className="indent-3">{`},`}</p>
        <p className="indent-3">{`{`}</p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>id: </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>3</span>,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>company_name: </span>
          <span style={{ color: "rgb(206, 145, 120)" }}>"Proweaver"</span>,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>position: </span>
          <span style={{ color: "rgb(206, 145, 120)" }}>
            " Outsource Web Designer"
          </span>
          ,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>date: </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>Aug </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>2020 </span>-
          <span style={{ color: "rgb(181, 206, 168)" }}> Nov</span>
          <span style={{ color: "rgb(181, 206, 168)" }}> 2020</span>,
        </p>
        <p className="indent-3">{`},`}</p>
        <p className="indent-3">{`{`}</p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>id: </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>4</span>,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>company_name: </span>
          <span style={{ color: "rgb(206, 145, 120)" }}>"DNA Micro"</span>,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>position: </span>
          <span style={{ color: "rgb(206, 145, 120)" }}>"UI Developer"</span>,
        </p>
        <p className="indent-6">
          <span style={{ color: "rgb(156, 220, 254)" }}>date: </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>Aug </span>
          <span style={{ color: "rgb(181, 206, 168)" }}>2021 </span>-
          <span style={{ color: "rgb(181, 206, 168)" }}> Feb</span>
          <span style={{ color: "rgb(181, 206, 168)" }}> 2023</span>,
        </p>
        <p className="indent-3">{`},`}</p>
        <p>]</p>
      </div>
    </div>
  );
}

export default EmploymentHistory;
