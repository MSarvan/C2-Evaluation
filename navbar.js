function navbar()
{
    return `<div id="navbar">
    <h3><a href="index.html"></a></h3>

    <div id="options">
        <h3><a href="menu.html">Menu</a></h3>
        <div id="search_tab">
            <input type="text" name="" id="food" placeholder="Enter the food name">
            <span><button id="search_food">Search</button></span>
        </div>
        <h3><a href="#">Sign up</a></h3>
        <h3><a href="#">Login</a></h3>
    </div>
</div>`
}

export default navbar