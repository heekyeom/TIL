import axios from 'axios';

const agent=axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID ad333f13e9689824bc3ed07632fb459ebba8a6237e6ba93ba867842c03cc9fef'
    },
});

export default agent;