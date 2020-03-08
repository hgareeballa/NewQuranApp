import React from 'react';

function SuraSearch(props) {
    const HandelSearchChange = (e) => {
        e.preventDefault();
        props.setF(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div className="container text-center p-3" dir="rtl">
            <input type="text"
                onChange={HandelSearchChange}
                placeholder="البحث ... "
                className=".w-25"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm">
            </input>
        </div>
    )
}


export default SuraSearch;