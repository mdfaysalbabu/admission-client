import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CollegeUse = () => {
    const {data:collegeAll=[],isLoading}=useQuery({
        queryKey:["colleges"],
        queryFn:async()=>{
            const res=await fetch("http://localhost:5000/colleges")
            return res.json()
        }
    })
    return [collegeAll,isLoading];
};

export default CollegeUse;