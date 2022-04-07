import React from 'react'

export default function EachWorkHistory({ data }) {
  return (
    <div className="art-timeline-item">
      <div className="art-timeline-mark-light"></div>
      <div className="art-timeline-mark"></div>

      <div className="art-a art-timeline-content">
        <div className="art-card-header">
          <div className="art-left-side">
            <h5>{data?.title}</h5>
            <div className="art-el-suptitle mb-15">{data.role}</div>
          </div>
          <div className="art-right-side">
            <span className="art-date">{data?.date}</span>
          </div>
        </div>
        <p>
          {data?.description}
        </p>
      </div>
    </div>
  );
}
