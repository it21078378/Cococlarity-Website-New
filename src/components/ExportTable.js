import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const ExportTable = () => {
    const [productionData, setProductionData] = useState(null);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    useEffect(() => {
        setProductionData([
            { rank: 1, country: 'Philippines', metricTons: '1,302,991.00', cagr: '+2.8 %' },
            { rank: 2, country: 'Indonesia', metricTons: '835,267.00', cagr: '-1.7 %' },
            { rank: 3, country: 'India', metricTons: '297,031.00', cagr: '-5.6 %' },
            { rank: 4, country: 'Vietnam', metricTons: '170,879.00', cagr: '+1.9 %' },
            { rank: 5, country: 'Mexico', metricTons: '130,484.00', cagr: '+0.6 %' },
            { rank: 6, country: 'Bangladesh', metricTons: '63,936.00', cagr: '+5.3 %' },
            { rank: 7, country: 'Sri Lanka', metricTons: '55,797.00', cagr: '+4.3 %' },
            { rank: 8, country: 'Malaysia', metricTons: '40,396.00', cagr: '-7.1 %' },
            { rank: 9, country: 'Mozambique', metricTons: '30,539.00', cagr: '+10.4 %' },
            { rank: 10, country: 'Thailand', metricTons: '27,256.00', cagr: '-1.4 %' },
            { rank: 11, country: 'Papua New Guinea', metricTons: '24,259.00', cagr: '+2.4 %' },
            { rank: 12, country: 'Ivory Coast', metricTons: '16,985.00', cagr: '+0.7 %' },
            { rank: 13, country: 'Solomon Islands', metricTons: '14,293.00', cagr: '+2.4 %' },
            { rank: 14, country: 'Nigeria', metricTons: '13,160.00', cagr: '+1.9 %' },
            { rank: 15, country: 'Tanzania', metricTons: '12,589.00', cagr: '-0.0 %' },
            { rank: 16, country: 'Jamaica', metricTons: '11,467.00', cagr: '+4.7 %' },
            { rank: 17, country: 'Brazil', metricTons: '11,433.00', cagr: '+41.7 %' },
            { rank: 18, country: 'French Polynesia', metricTons: '9,835.00', cagr: '+6.3 %' },
            { rank: 19, country: 'Venezuela', metricTons: '9,142.00', cagr: '+2.5 %' },
            { rank: 20, country: 'Cambodia', metricTons: '8,043.00', cagr: '+2.0 %' },
            { rank: 21, country: 'Dominican Republic', metricTons: '7,296.00', cagr: '-0.0 %' },
            { rank: 22, country: 'Ghana', metricTons: '7,276.00', cagr: '+8.4 %' },
            { rank: 23, country: 'Tonga', metricTons: '6,893.00', cagr: '+2.0 %' },
            { rank: 24, country: 'Madagascar', metricTons: '6,429.00', cagr: '-0.5 %' },
            { rank: 25, country: 'Comoros', metricTons: '6,160.00', cagr: '+2.7 %' },
            { rank: 26, country: 'Vanuatu', metricTons: '5,296.00', cagr: '-11.9 %' },
            { rank: 27, country: 'Samoa', metricTons: '5,074.00', cagr: '-0.1 %' },
            { rank: 28, country: 'Guinea-Bissau', metricTons: '4,998.00', cagr: '-2.5 %' },
            { rank: 29, country: 'Pakistan', metricTons: '4,501.00', cagr: '-13.3 %' },
            { rank: 30, country: 'Kiribati', metricTons: '3,384.00', cagr: '-4.9 %' },
            { rank: 31, country: 'Kenya', metricTons: '3,303.00', cagr: '-4.9 %' },
            { rank: 32, country: 'Guyana', metricTons: '3,269.00', cagr: '+18.1 %' },
            { rank: 33, country: 'Fiji', metricTons: '3,128.00', cagr: '-4.8 %' },
            { rank: 34, country: 'Federated States of Micronesia', metricTons: '2,898.00', cagr: '+1.8 %' },
            { rank: 35, country: 'Belgium', metricTons: '2,484.00', cagr: 'NA' },
            { rank: 36, country: 'El Salvador', metricTons: '2,170.00', cagr: '+11.1 %' },
            { rank: 37, country: 'Togo', metricTons: '1,642.00', cagr: '+0.5 %' },
            { rank: 38, country: 'Benin', metricTons: '1,552.00', cagr: '-0.1 %' },
            { rank: 39, country: 'Suriname', metricTons: '1,548.00', cagr: '+3.9 %' },
            { rank: 40, country: 'Ecuador', metricTons: '1,443.00', cagr: '-5.0 %' },
            { rank: 41, country: 'Guinea', metricTons: '1,284.00', cagr: '-1.9 %' },
            { rank: 42, country: 'Guam', metricTons: '1,210.00', cagr: 'NA' },
            { rank: 43, country: 'Trinidad and Tobago', metricTons: '944.00', cagr: '-5.1 %' },
            { rank: 44, country: 'East Timor', metricTons: '852.00', cagr: '-2.3 %' },
            { rank: 45, country: 'Australia', metricTons: '794.00', cagr: '+96.7 %' },
            { rank: 46, country: 'Cameroon', metricTons: '707.00', cagr: '+1.2 %' },
            { rank: 47, country: 'Honduras', metricTons: '652.00', cagr: '-4.0 %' },
            { rank: 48, country: 'Dominica', metricTons: '650.00', cagr: '-1.6 %' },
            { rank: 49, country: 'Puerto Rico', metricTons: '607.00', cagr: '+7.6 %' },
            { rank: 50, country: 'Italy', metricTons: '396.00', cagr: '-4.9 %' },
            { rank: 51, country: 'China', metricTons: '369.00', cagr: '-2.0 %' },
            { rank: 52, country: 'Grenada', metricTons: '348.00', cagr: '-1.9 %' },
            { rank: 53, country: 'Sao Tome and Principe', metricTons: '318.00', cagr: '-1.3 %' },
            { rank: 54, country: 'Poland', metricTons: '289.00', cagr: 'NA' },
            { rank: 55, country: 'Costa Rica', metricTons: '213.00', cagr: '+10.7 %' },
            { rank: 56, country: 'Wallis and Futuna', metricTons: '164.00', cagr: 'NA' },
            { rank: 57, country: 'Saint Lucia', metricTons: '156.00', cagr: '-18.9 %' },
            { rank: 58, country: 'New Caledonia', metricTons: '96.00', cagr: '-5.6 %' },
            { rank: 59, country: 'France', metricTons: '89.00', cagr: '+0.0 %' },
            { rank: 60, country: 'South Korea', metricTons: '73.00', cagr: '-32.9 %' },
            { rank: 61, country: 'American Samoa', metricTons: '72.00', cagr: 'NA' },
            { rank: 62, country: 'Nicaragua', metricTons: '65.00', cagr: '+0.3 %' },
            { rank: 63, country: 'Portugal', metricTons: '61.00', cagr: 'NA' },
            { rank: 64, country: 'Denmark', metricTons: '47.00', cagr: '+0.9 %' },
            { rank: 65, country: 'Tokelau', metricTons: '31.00', cagr: '+1.3 %' },
            { rank: 66, country: 'Iraq', metricTons: '27.00', cagr: 'NA' },
            { rank: 67, country: 'Panama', metricTons: '19.00', cagr: '-2.0 %' },
            { rank: 68, country: 'Tuvalu', metricTons: '19.00', cagr: 'NA' },
            { rank: 69, country: 'Ireland', metricTons: '10.00', cagr: '+38.0 %' },
            { rank: 70, country: 'Maldives', metricTons: '10.00', cagr: '-47.9 %' },
            { rank: 71, country: 'Mauritius', metricTons: '4.00', cagr: '-42.2 %' },
            { rank: 72, country: 'Colombia', metricTons: '2.00', cagr: '-57.5 %' },
            { rank: 73, country: 'Seychelles', metricTons: '0.00', cagr: '-100.0 %' }
        ]);
        initFilters();
    }, []);

    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: 'contains' },
            country: { operator: 'AND', constraints: [{ value: null, matchMode: 'startsWith' }] },
            production: { operator: 'AND', constraints: [{ value: null, matchMode: 'equals' }] }
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={productionData} paginator showGridlines rows={10} loading={loading} dataKey="rank" 
                    filters={filters} globalFilterFields={['country', 'production']} header={header}
                    emptyMessage="No data found." onFilter={(e) => setFilters(e.filters)}>
                <Column field="rank" header="Rank" filter filterPlaceholder="Search by rank" style={{ minWidth: '5rem' }} />
                <Column field="country" header="Country" filter filterPlaceholder="Search by country" style={{ minWidth: '12rem' }} />
                <Column field="metricTons" header="2019 Production (Metric Tons)" filter filterPlaceholder="Search by production" style={{ minWidth: '15rem' }} />
                <Column field="cagr" header="CAGR" filter filterPlaceholder="Search by CAGR" style={{ minWidth: '15rem' }} />
            </DataTable>
        </div>
    );
}
export default ExportTable;
