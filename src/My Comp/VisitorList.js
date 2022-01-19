import React, { useState } from 'react'
import { VisitorItem } from './VisitorItem'

export const VisitorList = ({datas,onDelete}) => {
    return (
        <div>
            {datas.map((data,index) => {
                    return (
                        <VisitorItem data={data} key={index} onDelete={onDelete}/>
                    )
                })
            }
        </div>
    )
}
