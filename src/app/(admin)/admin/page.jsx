'use client'
import useSWR from 'swr';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function page() {

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher);

    console.log(data);

    return (
        <>
            <h1 className="text-4xl font-black">Panel de Administración</h1>
            <p className="text-2xl my-10">Administra las ordenes</p>
        </>
    )
}


