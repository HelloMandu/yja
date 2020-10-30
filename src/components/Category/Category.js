import React from "react";

import "./Category.scss";

const Category = ({ genres, category, setCategory }) => {
    return (
        <div className="category-list">
            {genres.map(({ id, genre }) => {
                return (
                    <div key={id} className="category-item">
                        {genre}
                    </div>
                );
            })}
        </div>
    );
};

export default React.memo(Category);
