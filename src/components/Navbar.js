import React from 'react';
import { Menubar } from 'primereact/menubar';
import logo from '../assets/cococlarity.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Navbar = () => {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate('/')
        },
        {
            label: 'Project Scope',
            icon: 'pi pi-book',
            items: [
                {
                    label: 'Literature Survey',
                    icon: 'pi pi-file',
                    command: () => document.getElementById('literature-survey').scrollIntoView({ behavior: 'smooth' })
                },
                {
                    label: 'Research Problem',
                    icon: 'pi pi-pencil',
                    command: () => document.getElementById('research-problem').scrollIntoView({ behavior: 'smooth' })
                },
                {
                    label: 'Methodology',
                    icon: 'pi pi-chart-line',
                    command: () => document.getElementById('methodology').scrollIntoView({ behavior: 'smooth' })
                },
                {
                    label: 'Technologies Used',
                    icon: 'pi pi-cog',
                    command: () => document.getElementById('technologies-used').scrollIntoView({ behavior: 'smooth' })
                }
            ]
        },
        {
            label: 'Team',
            icon: 'pi pi-users',
            command: () => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })
        },
        {
            label: 'Contact Us',
            icon: 'pi pi-envelope',
            command: () => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })
        }
    ];

    const start = <img src={logo} alt="Logo" height="80" className="mr-2" />;

    return (
        <div className="card">
            <Menubar model={items} start={start} />
        </div>
    );
};

export default Navbar;
