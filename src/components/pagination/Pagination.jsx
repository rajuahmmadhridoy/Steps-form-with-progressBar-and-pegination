
import React, { useEffect, useState,useContext } from 'react';
import { UserContext } from '../../App';
// import ProgressBar from 'react-bootstrap/ProgressBar';
const Pagination = ({total,onPaginationChange,progressBarFun,progressBar,per}) => {
    const [showPerPage,setShowPerPage] = useContext(UserContext)
    const [count, setCount] = useState(1);
    const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total / showPerPage));
    // const n = numberOfButtons - 1;
    // const per = 100 / n;
    // const [progressBar,setProgressBar] = useState(per)
    // console.log(progressBar,numberOfButtons,per,'progressBar');
    useEffect(() => {
        const value = showPerPage * count;
        onPaginationChange(value - showPerPage, value);
    }, [count]);
    const onBtnClick = (type) => {
        if (type === 'prev') {
            if (count === 1) {
                setCount(1);
            } else {
                setCount(count - 1);
                progressBarFun(progressBar - per)
            }
        } else if (type === 'next') {
            if (numberOfButtons === count) {
                setCount(count);
            } else {
                setCount(count + 1);
                progressBarFun(progressBar + per)
            }
        }
    };
    return (
        <div>
             <div>
          {/* <ProgressBar  now={progressBar}  /> */}
          </div>
             <ul className="pagination">
                    <li onClick={() => onBtnClick('prev')} className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                        </a>
                    </li>

                    <li onClick={() => onBtnClick('next')} className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            {
                              total === count + 1 ?  <span aria-hidden="true">Submit</span> : <span aria-hidden="true">Next</span>
                            }
                        </a>
                    </li>
                </ul>
        </div>
    );
};

export default Pagination;