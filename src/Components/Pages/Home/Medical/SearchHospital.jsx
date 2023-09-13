import React from 'react';
import { Select } from 'antd';






const SearchHospital = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const options = [
        {
            value: 'jack',
            label: 'Jack',
        },
        {
            value: 'lucy',
            label: 'Lucy',
        },
        {
            value: 'tom',
            label: 'Tom',
        },
    ]


    return (
        <div>
            <Select
                className='border border-black rounded-md'
                showSearch
                placeholder="Search Hospitals"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={options}
            />
        </div>
    );
};

export default SearchHospital;