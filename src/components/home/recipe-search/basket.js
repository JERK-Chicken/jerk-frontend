import React from "react";

const Basket = () => {
    return (
        <div>
            <h3>This is a Basket component...</h3>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <td>Strawberry</td>
                    </tr>
                    <tr>
                        <td>Blueberry</td>
                    </tr>
                    <tr>
                        <td>Cranberry</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Basket;