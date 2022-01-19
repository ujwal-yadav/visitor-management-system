import React from 'react'

export const VisitorItem = ({ data, onDelete }) => {

    return (
        <div>
            <div className="visitor-inner">
                <div className="user-data">
                    <div>
                        Name : <span>{data.name}</span>
                    </div>
                    <div>
                        Mobile No : <span>{data.mobileno}</span>
                    </div>
                    <div>
                        Id : <span>{data.id}</span>
                    </div>
                </div>

                <div className="exit-btn">
                    <button href="" className="button" onClick={()=>{onDelete(data)}}>EXIT</button>
                </div>
            </div>
        </div>

    )
}
