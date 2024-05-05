// components
import { useState } from "react";
// components
import Button from "../button/Button";
import { JdViewMoreModal } from "../modals";
// styles
import "./Card.css";

const Card = (props) => {
  const { data } = props;

  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  // handlers
  const handleApply = (e) => {
    e.preventDefault();
    console.log("Applied");
  };

  return (
    <div className="CardContainer">
      <section className="CardHeader">
        <div className="PostedOnDate">⏳ Posted 3 days ago</div>
        <div
          className="MatchScoreContainer"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div>
            <span>75%</span>
          </div>
        </div>
      </section>
      <section className="Details">
        <section className="Metadata">
          <div className="MetadataHeader">
            <img src={data?.logoUrl} alt={data?.companyName} />
            <div>
              <h4>{data?.companyName}</h4>
              <p>
                <span>{data?.jobRole}</span>
              </p>
              <p>{data?.location}</p>
            </div>
          </div>
          <div className="EstimatedSalary">
            {`Estimated Salary: ${data?.salaryCurrencyCode} ${
              data?.minJdSalary ?? 0
            } - ${data?.maxJdSalary ?? 0} LPA `}
            <span>✅</span>
          </div>
        </section>
        <section className="CompanyDescription">
          <h3>About Company:</h3>
          <div style={{ position: "relative" }}>
            <p>{data?.jobDetailsFromCompany}</p>
            <div className="ShowMoreBtn">
              <span onClick={openModal}>View job</span>
            </div>
          </div>
        </section>

        <section className="Experience">
          <h4>Minimum Experience</h4>
          <p>{Number(data?.minExp)} years</p>
        </section>
      </section>
      <Button
        leftIcon={"⚡️"}
        text={"Easy Apply"}
        className={""}
        variant="default"
        onClickHandler={handleApply}
      />
      <Button
        leftIcon={"⚡️"}
        text={"Unlock referral asks"}
        className={""}
        variant="secondary"
        // onClickHandler={handleApply}
      />
      <JdViewMoreModal
        open={open}
        handleClose={closeModal}
        data={data?.jobDetailsFromCompany}
      />
    </div>
  );
};

export default Card;
