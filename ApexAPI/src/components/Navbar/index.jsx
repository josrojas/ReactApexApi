import { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
    }, [search, onSearch]);

    useImperativeHandle(ref, () => ({
        search,
        setSearch,
    }));

    const handleInputChange = (evt) => {
        setSearch(evt.target.value)
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            onSearch(search);
        }
    };
    
    
    return (
        <div ref={ref} style={{
            marginBottom: '14px',
            width: '100%',
            display: 'flex',
        }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <p style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}></p>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <input
                    placeholder="Search"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={search}
                    style={{
                        marginLeft: '14px',
                        fontSize: '16px',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        border: 'none',
                        width: '200px',
                    }}
                />
            </div>
        </div>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;