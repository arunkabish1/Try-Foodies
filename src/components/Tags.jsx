import { useState, useEffect } from 'react';

const Tags = () => {
    const [loading, setLoading] = useState(true);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch('https://dummyjson.com/recipes/tags');
                const data = await response.json();
                setTags(data); // Since the data itself is the array of tags
                setLoading(false);
            } catch (error) {
                console.error("Error occurred", error);
                setLoading(false);
            }
        };
        fetchTags();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        
        <div>
            
            <div className="p-2">
            <p>There are variety of receipes upload soon like</p> 
            {tags.map((tag, index) => (
                
                <span className='min-w-full' key={index}>
                      
                    {tag},
                     
                    </span>
                   
                
            ))}
            </div>
        </div>
    );
}

export default Tags;
