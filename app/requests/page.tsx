"use client";

import { useAxiosDelete } from '@/hooks/useAxiosDelete';
import { useAxiosGet } from '@/hooks/useAxiosGet';
import { useAxiosGetById } from '@/hooks/useAxiosGetById';
import { useAxiosPut } from '@/hooks/useAxiosPut';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Request = () => {

    useAxiosGet('https://rickandmortyapi.com/api/character');
    useAxiosGetById('https://rickandmortyapi.com/api/character', 2);
    useAxiosPut('https://rickandmortyapi.com/api/character/', {
        "name": "Rick Sanchez",
        "status": "Alive",
    });
    useAxiosDelete('https://rickandmortyapi.com/api/character/');
    
    return (
        <div>Check the console</div>
    )
}

export default Request;