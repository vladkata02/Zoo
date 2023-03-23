import React from "react";

export const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img src="https://efgcr95ic65.exactdn.com/wp-content/uploads/2020/09/tiger-in-zoo-trail-scaled.jpg?strip=all&lossy=1&ssl=1"
            style={{ height: "700px", width: "1287px" }} className="img-fluid" alt="Zoo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src="https://www.oregonzoo.org/sites/default/files/2020/05/01/H_ring-tailed-lemur.jpg" className="img-thumbnail" alt="Thumbnail 1" />
          </div>
          <div className="col-md-4">
            <img src="https://nationalzoo.si.edu/sites/default/files/animals/giantpanda-010.jpg" className="img-thumbnail" alt="Thumbnail 2" />
          </div>
          <div className="col-md-4">
            <img src="https://cms.londonzoo.org/sites/default/files/styles/responsive/public/1440/729/1/2022-11/Asim-at-London-Zoo.jpg?itok=sxChnnU-" className="img-thumbnail homeSmallPictures" alt="Thumbnail 3" />
          </div>
        </div>
      </div>
    </div>
  );
};